// ========================================
// BLACKLINE WORLD STATE
// ========================================
// WORLD STATE remembers what happened
// inside the BLACKLINE universe.
//
// PLAYER STATE:
// XP, money, rank, inventory, etc.
//
// WORLD STATE:
// Choices, outcomes, characters, story flags.
// ========================================


// ========================================
// DEFAULT WORLD STATE
// ========================================

const DEFAULT_WORLD_STATE = {

    // ------------------------------------
    // CONTRACT HISTORY
    // ------------------------------------

    contracts: {},


    // ------------------------------------
    // PLAYER CHOICES
    // ------------------------------------

    choices: {},


    // ------------------------------------
    // STORY FLAGS
    // ------------------------------------

    flags: {

        marcusEscaped: false,

        marcusCaptured: false,

        marcusEliminated: false,

        alexMercerDiscovered: false

    }

};


// ========================================
// CREATE CLEAN DEFAULT STATE
// ========================================

function createDefaultWorldState() {

    return {

        contracts: {},

        choices: {},

        flags: {

            marcusEscaped: false,

            marcusCaptured: false,

            marcusEliminated: false,

            alexMercerDiscovered: false

        }

    };

}


// ========================================
// LOAD WORLD STATE
// ========================================

function getWorldState() {

    const savedWorldState =
        localStorage.getItem(
            "blackline_world_state"
        );


    if (!savedWorldState) {

        const newWorldState =
            createDefaultWorldState();


        saveWorldState(
            newWorldState
        );


        return newWorldState;

    }


    try {

        const worldState =
            JSON.parse(
                savedWorldState
            );


        // --------------------------------
        // SAFETY
        // --------------------------------

        if (
            !worldState.contracts
        ) {

            worldState.contracts = {};

        }


        if (
            !worldState.choices
        ) {

            worldState.choices = {};

        }


        if (
            !worldState.flags
        ) {

            worldState.flags = {};

        }


        return worldState;

    }

    catch (error) {

        console.error(
            "BLACKLINE WORLD STATE CORRUPTED.",
            error
        );


        const newWorldState =
            createDefaultWorldState();


        saveWorldState(
            newWorldState
        );


        return newWorldState;

    }

}


// ========================================
// SAVE WORLD STATE
// ========================================

function saveWorldState(
    worldState
) {

    localStorage.setItem(
        "blackline_world_state",
        JSON.stringify(
            worldState
        )
    );

}


// ========================================
// RECORD CONTRACT OUTCOME
// ========================================

function recordContractOutcome(
    contractId,
    outcome,
    status = "resolved"
) {

    const worldState =
        getWorldState();


    worldState.contracts[
        contractId
    ] = {

        status: status,

        outcome: outcome,

        timestamp:
            new Date().toISOString()

    };


    saveWorldState(
        worldState
    );


    return worldState;

}


// ========================================
// RECORD PLAYER CHOICE
// ========================================

function recordChoice(
    contractId,
    choice
) {

    const worldState =
        getWorldState();


    worldState.choices[
        contractId
    ] = choice;


    saveWorldState(
        worldState
    );


    return worldState;

}


// ========================================
// SET WORLD FLAG
// ========================================

function setWorldFlag(
    flag,
    value = true
) {

    const worldState =
        getWorldState();


    worldState.flags[
        flag
    ] = value;


    saveWorldState(
        worldState
    );


    return worldState;

}


// ========================================
// GET WORLD FLAG
// ========================================

function getWorldFlag(
    flag
) {

    const worldState =
        getWorldState();


    return Boolean(
        worldState.flags[
            flag
        ]
    );

}


// ========================================
// GET CONTRACT OUTCOME
// ========================================

function getContractOutcome(
    contractId
) {

    const worldState =
        getWorldState();


    const contract =
        worldState.contracts[
            contractId
        ];


    if (!contract) {

        return null;

    }


    return contract.outcome;

}


// ========================================
// GET PLAYER CHOICE
// ========================================

function getChoice(
    contractId
) {

    const worldState =
        getWorldState();


    return (
        worldState.choices[
            contractId
        ] || null
    );

}


// ========================================
// CHECK CONTRACT RESOLUTION
// ========================================

function isContractResolved(
    contractId
) {

    const worldState =
        getWorldState();


    return Boolean(
        worldState.contracts[
            contractId
        ]
    );

}