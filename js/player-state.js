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

    inventory: {},

    activeContract: null,

    activeScene: null,

    completedContracts: []

};


// ========================================
// CREATE DEFAULT PLAYER
// ========================================

function createDefaultPlayer() {

    return {

        ...DEFAULT_PLAYER,

        inventory: {},

        completedContracts: []

    };

}


// ========================================
// LOAD PLAYER
// ========================================

function getPlayer() {

    const savedPlayer =
        localStorage.getItem(
            "blackline_player"
        );


    if (!savedPlayer) {

        const newPlayer =
            createDefaultPlayer();

        savePlayer(
            newPlayer
        );

        return newPlayer;

    }


    try {

        const player =
            JSON.parse(
                savedPlayer
            );


        if (!player.inventory) {

            player.inventory = {};

        }


        if (
            !Array.isArray(
                player.completedContracts
            )
        ) {

            player.completedContracts = [];

        }


        if (
            !Object.prototype.hasOwnProperty.call(
                player,
                "activeContract"
            )
        ) {

            player.activeContract = null;

        }


        if (
            !Object.prototype.hasOwnProperty.call(
                player,
                "activeScene"
            )
        ) {

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

        savePlayer(
            newPlayer
        );

        return newPlayer;

    }

}


// ========================================
// SAVE PLAYER
// ========================================

function savePlayer(
    player
) {

    localStorage.setItem(
        "blackline_player",
        JSON.stringify(
            player
        )
    );

}


// ========================================
// UPDATE PLAYER
// ========================================

function updatePlayer(
    changes
) {

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

function addMoney(
    amount
) {

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

function removeMoney(
    amount
) {

    const player =
        getPlayer();


    if (
        player.money <
        amount
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

function addXP(
    amount
) {

    const player =
        getPlayer();


    player.xp +=
        amount;


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
    contractId,
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


    if (
        !Array.isArray(
            player.completedContracts
        )
    ) {

        player.completedContracts = [];

    }


    if (
        !player.completedContracts.includes(
            contractId
        )
    ) {

        player.completedContracts.push(
            contractId
        );

    }


    player.activeContract =
        null;


    player.activeScene =
        null;


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
// FAIL CONTRACT
// ========================================

function failContract(
    contractId
) {

    const player =
        getPlayer();


    if (
        !Array.isArray(
            player.completedContracts
        )
    ) {

        player.completedContracts = [];

    }


    if (
        !player.completedContracts.includes(
            contractId
        )
    ) {

        player.completedContracts.push(
            contractId
        );

    }


    player.activeContract =
        null;


    player.activeScene =
        null;


    savePlayer(
        player
    );


    return player;

}