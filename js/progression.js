/*
 * ========================================
 * BLACKLINE PROGRESSION ENGINE
 * ========================================
 *
 * This system determines which contracts
 * are available based on player progression
 * and world state.
 */


/*
 * ========================================
 * CONTRACT DEFINITIONS
 * ========================================
 */

const PROGRESSION_CONTRACTS = {

    "CN-001": {
        route: "normal",

        requiredContracts: []
    },


    /*
     * ------------------------------------
     * NORMAL ROUTE
     * ------------------------------------
     */

    "CN-002": {

        route: "normal",

        requiredContracts: [
            "CN-001"
        ],

        requiredOutcome: {
            contract: "CN-001",

            outcome: "marcus_eliminated"
        }
    },


    /*
     * ------------------------------------
     * PROBATION ROUTE
     * ------------------------------------
     */

    "PR-001": {

        route: "probation",

        requiredContracts: [
            "CN-001"
        ],

        requiredOutcome: {
            contract: "CN-001",

            outcome: "marcus_escaped"
        }
    }
};


/*
 * ========================================
 * CHECK CONTRACT REQUIREMENTS
 * ========================================
 */

function meetsContractRequirements(
    contractId
) {

    const definition =
        PROGRESSION_CONTRACTS[
            contractId
        ];


    if (!definition) {

        return false;
    }


    const worldState =
        getWorldState();


    /*
     * --------------------------------
     * CHECK REQUIRED CONTRACTS
     * --------------------------------
     */

    if (
        definition.requiredContracts
    ) {

        for (
            const requiredContract
            of definition.requiredContracts
        ) {

            if (
                !isContractSealed(
                    requiredContract
                )
            ) {

                return false;
            }
        }
    }


    /*
     * --------------------------------
     * CHECK REQUIRED OUTCOME
     * --------------------------------
     */

    if (
        definition.requiredOutcome
    ) {

        const required =
            definition.requiredOutcome;


        const record =
            worldState.contracts[
                required.contract
            ];


        if (!record) {

            return false;
        }


        if (
            record.outcome !==
            required.outcome
        ) {

            return false;
        }
    }


    /*
     * --------------------------------
     * CHECK ROUTE
     * --------------------------------
     */

    if (
        definition.route !==
        worldState.progression.route
    ) {

        return false;
    }


    return true;
}


/*
 * ========================================
 * GET AVAILABLE CONTRACTS
 * ========================================
 */

function getAvailableContracts() {

    const available = [];


    for (
        const contractId
        in PROGRESSION_CONTRACTS
    ) {

        if (
            meetsContractRequirements(
                contractId
            )
        ) {

            available.push(
                contractId
            );
        }
    }


    return available;
}


/*
 * ========================================
 * CHECK SINGLE CONTRACT
 * ========================================
 */

function isContractUnlocked(
    contractId
) {

    return meetsContractRequirements(
        contractId
    );
}


/*
 * ========================================
 * ADVANCE STORY
 * ========================================
 */

function advanceProgression() {

    const worldState =
        getWorldState();


    const cn001 =
        worldState.contracts[
            "CN-001"
        ];


    if (!cn001) {

        return worldState.progression.route;
    }


    /*
     * --------------------------------
     * MARCUS ESCAPED
     * --------------------------------
     */

    if (
        cn001.outcome ===
        "marcus_escaped"
    ) {

        setProgressionRoute(
            "probation"
        );

        return "probation";
    }


    /*
     * --------------------------------
     * MARCUS ELIMINATED
     * --------------------------------
     */

    if (
        cn001.outcome ===
        "marcus_eliminated"
    ) {

        setProgressionRoute(
            "normal"
        );

        return "normal";
    }


    return worldState.progression.route;
}
