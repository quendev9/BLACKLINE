// ========================================
// BLACKLINE
// CONTRACT TERMINAL
// BUILD 8.5
// ========================================


// ========================================
// CONTRACT DATABASE
// ========================================

const CONTRACTS = [

    {
        id: "CN-001",

        title: "THE SILENT WITNESS",

        classification: "ELIMINATION CONTRACT",

        target: "MARCUS VALE",

        location: "MANILA",

        difficulty: "LOW",

        requiredLevel: 0,

        reward: 3500,

        xp: 250,

        description:
            "Marcus Vale has been identified as a potential security threat to BLACKLINE interests. Locate the target, confirm identity, and resolve the assignment according to operational protocol."
    },


    {
        id: "CN-002",

        title: "DEAD DROP",

        classification: "RECOVERY CONTRACT",

        target: "UNKNOWN",

        location: "QUEZON CITY",

        difficulty: "MEDIUM",

        requiredLevel: 2,

        reward: 5500,

        xp: 400,

        description:
            "A BLACKLINE asset has gone dark. Recover the package before it can be compromised. Operational details will be provided upon authorization."
    },


    {
        id: "CN-003",

        title: "GHOST PROTOCOL",

        classification: "ELIMINATION CONTRACT",

        target: "ADRIAN CROSS",

        location: "CEBU",

        difficulty: "HIGH",

        requiredLevel: 5,

        reward: 12000,

        xp: 800,

        description:
            "Adrian Cross has breached multiple BLACKLINE security layers and disappeared from the network. Locate the target and terminate the threat."
    }

];


// ========================================
// PLAYER
// ========================================

const player =
    getPlayer();


// ========================================
// DOM REFERENCES
// ========================================

const contractsGrid =
    document.getElementById(
        "contractsGrid"
    );

const contractCount =
    document.getElementById(
        "contractCount"
    );

const contractDetails =
    document.getElementById(
        "contractDetails"
    );

const detailsEmpty =
    contractDetails.querySelector(
        ".details-empty"
    );

const detailsContent =
    document.getElementById(
        "detailsContent"
    );

const detailsClassification =
    document.getElementById(
        "detailsClassification"
    );

const detailsTitle =
    document.getElementById(
        "detailsTitle"
    );

const detailsId =
    document.getElementById(
        "detailsId"
    );

const detailsDifficulty =
    document.getElementById(
        "detailsDifficulty"
    );

const detailsTarget =
    document.getElementById(
        "detailsTarget"
    );

const detailsLocation =
    document.getElementById(
        "detailsLocation"
    );

const detailsLevel =
    document.getElementById(
        "detailsLevel"
    );

const detailsReward =
    document.getElementById(
        "detailsReward"
    );

const detailsXP =
    document.getElementById(
        "detailsXP"
    );

const detailsDescription =
    document.getElementById(
        "detailsDescription"
    );

const acceptContract =
    document.getElementById(
        "acceptContract"
    );

const contractMessage =
    document.getElementById(
        "contractMessage"
    );

const backButton =
    document.getElementById(
        "backButton"
    );

const operativeCodename =
    document.getElementById(
        "operativeCodename"
    );

const operativeId =
    document.getElementById(
        "operativeId"
    );


// ========================================
// SELECTED CONTRACT
// ========================================

let selectedContract = null;


// ========================================
// WORLD STATE
// ========================================

function getContractWorldState(
    contractId
) {

    const worldState =
        getWorldState();

    return (
        worldState.contracts[
            contractId
        ] || null
    );

}


// ========================================
// CONTRACT STATUS
// ========================================

function getContractStatus(
    contract
) {

    const worldRecord =
        getContractWorldState(
            contract.id
        );


    // ------------------------------------
    // WORLD STATE TAKES PRIORITY
    // ------------------------------------

    if (worldRecord) {

        if (
            worldRecord.status ===
            "failed"
        ) {

            return "failed";

        }


        if (
            worldRecord.status ===
            "resolved"
        ) {

            return "completed";

        }

    }


    // ------------------------------------
    // PLAYER ACTIVE CONTRACT
    // ------------------------------------

    if (
        player.activeContract ===
        contract.id
    ) {

        return "active";

    }


    // ------------------------------------
    // OLD PLAYER STATE
    // BACKUP COMPATIBILITY
    // ------------------------------------

    if (
        Array.isArray(
            player.completedContracts
        ) &&
        player.completedContracts.includes(
            contract.id
        )
    ) {

        return "completed";

    }


    // ------------------------------------
    // LEVEL LOCK
    // ------------------------------------

    if (
        player.level <
        contract.requiredLevel
    ) {

        return "locked";

    }


    return "available";

}


// ========================================
// STATUS TEXT
// ========================================

function getStatusText(
    contract,
    status
) {

    switch (status) {

        case "available":

            return "AVAILABLE";


        case "active":

            return "IN PROGRESS";


        case "completed":

            return "RESOLVED";


        case "failed":

            return "FAILED";


        case "locked":

            return (
                `LVL ${contract.requiredLevel} REQUIRED`
            );


        default:

            return "UNKNOWN";

    }

}


// ========================================
// CREATE CONTRACT RECORD
// ========================================

function createContractRecord(
    contract
) {

    const status =
        getContractStatus(
            contract
        );


    const record =
        document.createElement(
            "div"
        );


    record.className =
        "contract-record";


    record.dataset.contractId =
        contract.id;


    if (
        status === "locked"
    ) {

        record.classList.add(
            "locked"
        );

    }


    if (
        status === "completed"
    ) {

        record.classList.add(
            "completed"
        );

    }


    if (
        status === "failed"
    ) {

        record.classList.add(
            "failed"
        );

    }


    if (
        status === "active"
    ) {

        record.classList.add(
            "active"
        );

    }


    // ====================================
    // RECORD ID
    // ====================================

    const recordId =
        document.createElement(
            "div"
        );

    recordId.className =
        "record-id";

    recordId.textContent =
        contract.id;


    // ====================================
    // RECORD INFORMATION
    // ====================================

    const recordInfo =
        document.createElement(
            "div"
        );

    recordInfo.className =
        "record-info";


    const recordTitle =
        document.createElement(
            "div"
        );

    recordTitle.className =
        "record-title";

    recordTitle.textContent =
        contract.title;


    const recordMeta =
        document.createElement(
            "div"
        );

    recordMeta.className =
        "record-meta";


    const recordDifficulty =
        document.createElement(
            "span"
        );

    recordDifficulty.textContent =
        contract.difficulty;


    const recordStatus =
        document.createElement(
            "span"
        );

    recordStatus.className =
        "record-status";

    recordStatus.textContent =
        getStatusText(
            contract,
            status
        );


    recordMeta.appendChild(
        recordDifficulty
    );

    recordMeta.appendChild(
        recordStatus
    );


    recordInfo.appendChild(
        recordTitle
    );

    recordInfo.appendChild(
        recordMeta
    );


    record.appendChild(
        recordId
    );

    record.appendChild(
        recordInfo
    );


    // ====================================
    // RECORD INTERACTION
    // ====================================

    if (
        status !== "locked" &&
        status !== "completed" &&
        status !== "failed"
    ) {

        record.addEventListener(
            "click",
            () => {

                selectContract(
                    contract
                );

            }
        );

    }


    return record;

}


// ========================================
// RENDER CONTRACT DATABASE
// ========================================

function renderContracts() {

    contractsGrid.innerHTML = "";


    let availableCount = 0;


    CONTRACTS.forEach(
        (contract) => {

            const status =
                getContractStatus(
                    contract
                );


            if (
                status === "available" ||
                status === "active"
            ) {

                availableCount++;

            }


            const record =
                createContractRecord(
                    contract
                );


            contractsGrid.appendChild(
                record
            );

        }
    );


    contractCount.textContent =
        availableCount;


    updateOperativeInfo();

}


// ========================================
// UPDATE OPERATIVE INFO
// ========================================

function updateOperativeInfo() {

    if (
        operativeCodename
    ) {

        operativeCodename.textContent =
            player.codename;

    }


    if (
        operativeId
    ) {

        operativeId.textContent =
            player.contractorId;

    }

}


// ========================================
// SELECT CONTRACT
// ========================================

function selectContract(
    contract
) {

    selectedContract =
        contract;


    // ------------------------------------
    // UPDATE SELECTED VISUAL
    // ------------------------------------

    const records =
        document.querySelectorAll(
            ".contract-record"
        );


    records.forEach(
        (record) => {

            record.classList.remove(
                "selected"
            );

        }
    );


    const selectedRecord =
        document.querySelector(
            `.contract-record[data-contract-id="${contract.id}"]`
        );


    if (
        selectedRecord
    ) {

        selectedRecord.classList.add(
            "selected"
        );

    }


    // ------------------------------------
    // SHOW DETAILS
    // ------------------------------------

    detailsEmpty.classList.add(
        "hidden"
    );

    detailsContent.classList.remove(
        "hidden"
    );


    // ------------------------------------
    // POPULATE DETAILS
    // ------------------------------------

    detailsClassification.textContent =
        contract.classification;


    detailsTitle.textContent =
        contract.title;


    detailsId.textContent =
        contract.id +
        " // OPERATIONAL RECORD";


    detailsDifficulty.textContent =
        "DIFFICULTY // " +
        contract.difficulty;


    detailsTarget.textContent =
        contract.target;


    detailsLocation.textContent =
        contract.location;


    detailsLevel.textContent =
        "LEVEL " +
        contract.requiredLevel;


    detailsReward.textContent =
        "$" +
        contract.reward.toLocaleString();


    detailsXP.textContent =
        "+" +
        contract.xp +
        " XP";


    detailsDescription.textContent =
        contract.description;


    updateActionButton(
        contract
    );


    contractMessage.textContent =
        "";

}


// ========================================
// UPDATE ACTION BUTTON
// ========================================

function updateActionButton(
    contract
) {

    const status =
        getContractStatus(
            contract
        );


    acceptContract.disabled =
        false;


    acceptContract.textContent =
        "ACCEPT CONTRACT";


    contractMessage.textContent =
        "";


    switch (status) {


        // ================================
        // AVAILABLE
        // ================================

        case "available":

            acceptContract.disabled =
                false;

            acceptContract.textContent =
                "ACCEPT CONTRACT";

            contractMessage.textContent =
                "ASSIGNMENT AVAILABLE // AUTHORIZATION REQUIRED.";

            break;


        // ================================
        // ACTIVE
        // ================================

        case "active":

            acceptContract.disabled =
                false;

            acceptContract.textContent =
                "RESUME CONTRACT";

            contractMessage.textContent =
                "ASSIGNMENT IN PROGRESS // RETURN TO OPERATION.";

            break;


        // ================================
        // COMPLETED
        // ================================

        case "completed":

            acceptContract.disabled =
                true;

            acceptContract.textContent =
                "CONTRACT RESOLVED";

            contractMessage.textContent =
                "RECORD SEALED // ASSIGNMENT COMPLETE.";

            break;


        // ================================
        // FAILED
        // ================================

        case "failed":

            acceptContract.disabled =
                true;

            acceptContract.textContent =
                "CONTRACT FAILED";

            contractMessage.textContent =
                "RECORD SEALED // OPERATIONAL FAILURE.";

            break;


        // ================================
        // LOCKED
        // ================================

        case "locked":

            acceptContract.disabled =
                true;

            acceptContract.textContent =
                "ACCESS DENIED";

            contractMessage.textContent =
                "CLEARANCE INSUFFICIENT // REQUIRED LEVEL: " +
                contract.requiredLevel;

            break;

    }

}


// ========================================
// ACCEPT / RESUME CONTRACT
// ========================================

function handleContractAction() {

    if (
        !selectedContract
    ) {

        return;

    }


    const status =
        getContractStatus(
            selectedContract
        );


    // ------------------------------------
    // RESOLVED / FAILED
    // ------------------------------------

    if (
        status === "completed" ||
        status === "failed"
    ) {

        return;

    }


    // ------------------------------------
    // RESUME ACTIVE
    // ------------------------------------

    if (
        status === "active"
    ) {

        window.location.href =
            "./operation.html";

        return;

    }


    // ------------------------------------
    // CHECK LEVEL
    // ------------------------------------

    if (
        player.level <
        selectedContract.requiredLevel
    ) {

        contractMessage.textContent =
            "ACCESS DENIED // INSUFFICIENT CLEARANCE.";

        return;

    }


    // ------------------------------------
    // ACCEPT CONTRACT
    // ------------------------------------

    updatePlayer({

        activeContract:
            selectedContract.id,

        activeScene:
            null

    });


    window.location.href =
        "./operation.html";

}


// ========================================
// BUTTON EVENTS
// ========================================

acceptContract.addEventListener(
    "click",
    handleContractAction
);


backButton.addEventListener(
    "click",
    () => {

        window.location.href =
            "./dashboard.html";

    }
);


// ========================================
// INITIALIZE
// ========================================

renderContracts();