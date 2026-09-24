// ========================================
// BLACKLINE PLAYER STATE
// ========================================

const DEFAULT_PLAYER = {

    codename: "NIGHTFALL",

    contractorId: "00417",

    level: 0,

    xp: 0,

    xpRequired: 500,

    money: 0,

    contractsCompleted: 0,

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


    if (!savedPlayer) {

        localStorage.setItem(
            "blackline_player",
            JSON.stringify(DEFAULT_PLAYER)
        );


        return {
            ...DEFAULT_PLAYER
        };

    }


    try {

        return JSON.parse(savedPlayer);

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
// ADD MONEY
// ========================================

function addMoney(amount) {

    const player =
        getPlayer();


    player.money += amount;


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


    if (player.money < amount) {

        return false;

    }


    player.money -= amount;


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


    player.xp += amount;


    // ====================================
    // LEVEL UP
    // ====================================

    while (
        player.xp >=
        player.xpRequired
    ) {

        player.xp -=
            player.xpRequired;


        player.level++;


        // Increase the amount of XP
        // required for the next level.

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


    player.money +=
        reward;


    player.xp +=
        xp;


    player.contractsCompleted++;


    // ====================================
    // LEVEL UP
    // ====================================

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