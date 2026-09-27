// ========================================
// BLACKLINE PLAYER STATE
// ========================================


// ========================================
// DEFAULT PLAYER
// ========================================

const DEFAULT_PLAYER = {

    codename: "NIGHTFALL",

    contractorId: "00417",

    level: 0,

    xp: 0,

    xpRequired: 500,

    money: 0,

    contractsCompleted: 0,

    activeContract: null,

    inventory: {}

};


// ========================================
// LOAD PLAYER
// ========================================

function getPlayer() {

    const savedPlayer =
        localStorage.getItem(
            "blackline_player"
        );


    // ------------------------------------
    // NO SAVED PLAYER
    // ------------------------------------

    if (!savedPlayer) {

        localStorage.setItem(
            "blackline_player",
            JSON.stringify(DEFAULT_PLAYER)
        );


        return {
            ...DEFAULT_PLAYER
        };

    }


    // ------------------------------------
    // LOAD SAVED PLAYER
    // ------------------------------------

    try {

        const player =
            JSON.parse(savedPlayer);


        // --------------------------------
        // DATA COMPATIBILITY
        // --------------------------------
        //
        // If an older BLACKLINE save
        // doesn't have activeContract,
        // add it automatically.
        //

        if (
            !Object.prototype.hasOwnProperty.call(
                player,
                "activeContract"
            )
        ) {

            player.activeContract =
                null;

        }


        // --------------------------------
        // INVENTORY COMPATIBILITY
        // --------------------------------

        if (
            !player.inventory
        ) {

            player.inventory = {};

        }


        return player;

    }

    catch (error) {

        console.error(
            "BLACKLINE PLAYER DATA CORRUPTED.",
            error
        );


        localStorage.setItem(
            "blackline_player",
            JSON.stringify(DEFAULT_PLAYER)
        );


        return {
            ...DEFAULT_PLAYER
        };

    }

}


// ========================================
// SAVE PLAYER
// ========================================

function savePlayer(player) {

    localStorage.setItem(
        "blackline_player",
        JSON.stringify(player)
    );

}


// ========================================
// UPDATE PLAYER
// ========================================

function updatePlayer(changes) {

    const player =
        getPlayer();


    Object.assign(
        player,
        changes
    );


    savePlayer(
        player
    );


    return player;

}


// ========================================
// START CONTRACT
// ========================================

function startContract(contractId) {

    const player =
        getPlayer();


    // ------------------------------------
    // CHECK FOR ACTIVE CONTRACT
    // ------------------------------------

    if (
        player.activeContract !== null
    ) {

        return false;

    }


    // ------------------------------------
    // SET ACTIVE CONTRACT
    // ------------------------------------

    player.activeContract =
        contractId;


    savePlayer(
        player
    );


    return true;

}


// ========================================
// ABANDON CONTRACT
// ========================================

function abandonContract() {

    const player =
        getPlayer();


    player.activeContract =
        null;


    savePlayer(
        player
    );


    return player;

}


// ========================================
// ADD MONEY
// ========================================

function addMoney(amount) {

    const player =
        getPlayer();


    player.money +=
        amount;


    savePlayer(
        player
    );


    return player;

}


// ========================================
// REMOVE MONEY
// ========================================

function removeMoney(amount) {

    const player =
        getPlayer();


    if (
        player.money < amount
    ) {

        return false;

    }


    player.money -=
        amount;


    savePlayer(
        player
    );


    return true;

}


// ========================================
// ADD XP
// ========================================

function addXP(amount) {

    const player =
        getPlayer();


    player.xp +=
        amount;


    // ------------------------------------
    // LEVEL UP
    // ------------------------------------

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


    savePlayer(
        player
    );


    return player;

}


// ========================================
// COMPLETE CONTRACT
// ========================================

function completeContract(
    reward,
    xp
) {

    const player =
        getPlayer();


    // ------------------------------------
    // REWARD
    // ------------------------------------

    player.money +=
        reward;


    // ------------------------------------
    // XP
    // ------------------------------------

    player.xp +=
        xp;


    // ------------------------------------
    // CONTRACT COUNT
    // ------------------------------------

    player.contractsCompleted++;


    // ------------------------------------
    // CLEAR ACTIVE CONTRACT
    // ------------------------------------

    player.activeContract =
        null;


    // ------------------------------------
    // LEVEL UP
    // ------------------------------------

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


    savePlayer(
        player
    );


    return player;

}