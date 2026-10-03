const DEFAULT_PLAYER = {
    codename: "NIGHTFALL",
    contractorId: "00417",

    level: 0,

    xp: 0,
    xpRequired: 500,

    money: 0,

    contractsCompleted: 0,

    inventory: {},

    activeContract: null,
    activeScene: null,

    completedContracts: []
};


function createDefaultPlayer() {

    return {
        ...DEFAULT_PLAYER,

        inventory: {},

        completedContracts: []
    };
}


function getPlayer() {

    const savedPlayer =
        localStorage.getItem(
            "blackline_player"
        );


    if (!savedPlayer) {

        const newPlayer =
            createDefaultPlayer();

        savePlayer(newPlayer);

        return newPlayer;
    }


    try {

        const player =
            JSON.parse(savedPlayer);


        /*
         * ----------------------------------------
         * DATA REPAIR
         * ----------------------------------------
         */

        if (!player.inventory) {

            player.inventory = {};
        }


        if (!Array.isArray(
            player.completedContracts
        )) {

            player.completedContracts = [];
        }


        if (!Object.prototype.hasOwnProperty.call(
            player,
            "activeContract"
        )) {

            player.activeContract = null;
        }


        if (!Object.prototype.hasOwnProperty.call(
            player,
            "activeScene"
        )) {

            player.activeScene = null;
        }


        return player;

    }
    catch (error) {

        console.error(
            "BLACKLINE PLAYER DATA CORRUPTED.",
            error
        );


        const newPlayer =
            createDefaultPlayer();

        savePlayer(newPlayer);

        return newPlayer;
    }
}


function savePlayer(player) {

    localStorage.setItem(
        "blackline_player",
        JSON.stringify(player)
    );
}


function updatePlayer(changes) {

    const player =
        getPlayer();

    Object.assign(
        player,
        changes
    );

    savePlayer(player);

    return player;
}


function addMoney(amount) {

    const player =
        getPlayer();

    player.money += amount;

    savePlayer(player);

    return player;
}


function removeMoney(amount) {

    const player =
        getPlayer();


    if (player.money < amount) {

        return false;
    }


    player.money -= amount;

    savePlayer(player);

    return true;
}


function addXP(amount) {

    const player =
        getPlayer();


    player.xp += amount;


    while (
        player.xp >=
        player.xpRequired
    ) {

        player.xp -=
            player.xpRequired;

        player.level++;


        player.xpRequired =
            Math.floor(
                player.xpRequired * 1.5
            );
    }


    savePlayer(player);

    return player;
}


/*
 * ========================================
 * CONTRACT COMPLETION
 * ========================================
 *
 * A contract can only reward the player
 * once.
 *
 * Once a contract exists inside
 * completedContracts, another completion
 * attempt is rejected.
 */

function completeContract(
    contractId,
    reward,
    xp
) {

    const player =
        getPlayer();


    /*
     * ----------------------------------------
     * DUPLICATE COMPLETION PROTECTION
     * ----------------------------------------
     */

    if (
        !Array.isArray(
            player.completedContracts
        )
    ) {

        player.completedContracts = [];
    }


    if (
        player.completedContracts.includes(
            contractId
        )
    ) {

        console.warn(
            "BLACKLINE: CONTRACT ALREADY RESOLVED.",
            contractId
        );

        return player;
    }


    /*
     * ----------------------------------------
     * APPLY REWARD
     * ----------------------------------------
     */

    player.money += reward;

    player.xp += xp;

    player.contractsCompleted++;


    /*
     * ----------------------------------------
     * RECORD COMPLETION
     * ----------------------------------------
     */

    player.completedContracts.push(
        contractId
    );


    /*
     * ----------------------------------------
     * CLEAR ACTIVE OPERATION
     * ----------------------------------------
     */

    player.activeContract = null;

    player.activeScene = null;


    /*
     * ----------------------------------------
     * LEVEL UP
     * ----------------------------------------
     */

    while (
        player.xp >=
        player.xpRequired
    ) {

        player.xp -=
            player.xpRequired;

        player.level++;


        player.xpRequired =
            Math.floor(
                player.xpRequired * 1.5
            );
    }


    savePlayer(player);

    return player;
}


/*
 * ========================================
 * CONTRACT FAILURE
 * ========================================
 *
 * A failed contract is also permanently
 * resolved.
 *
 * Failure does NOT provide XP or money.
 */

function failContract(contractId) {

    const player =
        getPlayer();


    /*
     * ----------------------------------------
     * DUPLICATE FAILURE PROTECTION
     * ----------------------------------------
     */

    if (
        !Array.isArray(
            player.completedContracts
        )
    ) {

        player.completedContracts = [];
    }


    if (
        player.completedContracts.includes(
            contractId
        )
    ) {

        console.warn(
            "BLACKLINE: CONTRACT ALREADY RESOLVED.",
            contractId
        );

        return player;
    }


    /*
     * ----------------------------------------
     * RECORD FAILURE
     * ----------------------------------------
     *
     * We still place the contract inside
     * completedContracts because this array
     * represents contracts that can no longer
     * be replayed.
     */

    player.completedContracts.push(
        contractId
    );


    /*
     * ----------------------------------------
     * CLEAR ACTIVE OPERATION
     * ----------------------------------------
     */

    player.activeContract = null;

    player.activeScene = null;


    savePlayer(player);

    return player;
}
