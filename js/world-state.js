const DEFAULT_WORLD_STATE = {
    contracts: {},

    choices: {},

    flags: {},

    progression: {
        route: "normal"
    }
};


function createDefaultWorldState() {

    return {
        contracts: {},

        choices: {},

        flags: {},

        progression: {
            route: "normal"
        }
    };
}


/*
 * ========================================
 * GET WORLD STATE
 * ========================================
 */

function getWorldState() {

    const savedWorldState =
        localStorage.getItem(
            "blackline_world"
        );


    if (!savedWorldState) {

        const newWorldState =
            createDefaultWorldState();

        saveWorldState(newWorldState);

        return newWorldState;
    }


    try {

        const worldState =
            JSON.parse(savedWorldState);


        /*
         * --------------------------------
         * DATA REPAIR
         * --------------------------------
         */

        if (!worldState.contracts) {

            worldState.contracts = {};
        }


        if (!worldState.choices) {

            worldState.choices = {};
        }


        if (!worldState.flags) {

            worldState.flags = {};
        }


        if (!worldState.progression) {

            worldState.progression = {
                route: "normal"
            };
        }


        if (!worldState.progression.route) {

            worldState.progression.route =
                "normal";
        }


        return worldState;

    }
    catch (error) {

        console.error(
            "BLACKLINE WORLD DATA CORRUPTED.",
            error
        );


        const newWorldState =
            createDefaultWorldState();

        saveWorldState(newWorldState);

        return newWorldState;
    }
}


/*
 * ========================================
 * SAVE WORLD STATE
 * ========================================
 */

function saveWorldState(worldState) {

    localStorage.setItem(
        "blackline_world",
        JSON.stringify(worldState)
    );
}


/*
 * ========================================
 * CONTRACT OUTCOMES
 * ========================================
 */

function recordContractOutcome(
    contractId,
    outcome,
    status = "resolved"
) {

    const worldState =
        getWorldState();


    if (
        status !== "resolved" &&
        status !== "failed"
    ) {

        console.error(
            "BLACKLINE: INVALID CONTRACT STATUS.",
            status
        );

        return null;
    }


    /*
     * --------------------------------
     * TERMINAL STATE PROTECTION
     * --------------------------------
     */

    const existingRecord =
        worldState.contracts[contractId];


    if (existingRecord) {

        console.warn(
            "BLACKLINE: CONTRACT RECORD IS SEALED.",
            contractId
        );

        return existingRecord;
    }


    const contractRecord = {

        status: status,

        outcome: outcome,

        timestamp:
            new Date().toISOString()
    };


    worldState.contracts[contractId] =
        contractRecord;


    saveWorldState(worldState);

    return contractRecord;
}


/*
 * ========================================
 * CHOICES
 * ========================================
 */

function recordChoice(
    contractId,
    choice
) {

    const worldState =
        getWorldState();


    if (!worldState.choices[contractId]) {

        worldState.choices[contractId] = [];
    }


    worldState.choices[contractId].push(
        {
            choice: choice,

            timestamp:
                new Date().toISOString()
        }
    );


    saveWorldState(worldState);
}


/*
 * ========================================
 * FLAGS
 * ========================================
 */

function setWorldFlag(
    flag,
    value
) {

    const worldState =
        getWorldState();


    worldState.flags[flag] =
        value;


    saveWorldState(worldState);

    return worldState;
}


function getWorldFlag(flag) {

    const worldState =
        getWorldState();

    return worldState.flags[flag];
}


/*
 * ========================================
 * PROGRESSION ROUTE
 * ========================================
 */

function getProgressionRoute() {

    const worldState =
        getWorldState();

    return worldState.progression.route;
}


function setProgressionRoute(route) {

    const worldState =
        getWorldState();


    worldState.progression.route =
        route;


    saveWorldState(worldState);

    return worldState.progression.route;
}


/*
 * ========================================
 * CONTRACT LOOKUPS
 * ========================================
 */

function getContractRecord(
    contractId
) {

    const worldState =
        getWorldState();

    return worldState.contracts[
        contractId
    ] || null;
}


function getContractOutcome(
    contractId
) {

    const record =
        getContractRecord(
            contractId
        );


    if (!record) {

        return null;
    }


    return record.outcome;
}


function getChoice(
    contractId
) {

    const worldState =
        getWorldState();

    return worldState.choices[
        contractId
    ] || [];
}


/*
 * ========================================
 * CONTRACT STATE
 * ========================================
 */

function isContractResolved(
    contractId
) {

    const record =
        getContractRecord(
            contractId
        );


    return (
        record &&
        record.status === "resolved"
    );
}


function isContractFailed(
    contractId
) {

    const record =
        getContractRecord(
            contractId
        );


    return (
        record &&
        record.status === "failed"
    );
}


function isContractSealed(
    contractId
) {

    const record =
        getContractRecord(
            contractId
        );


    if (!record) {

        return false;
    }


    return (
        record.status === "resolved" ||
        record.status === "failed"
    );
}

