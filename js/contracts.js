// ========================================
// BLACKLINE CONTRACT DATABASE
// ========================================
// BUILD 8.75
//
// Contract states:
//
// LOCKED
// AVAILABLE
// ACTIVE
// COMPLETED
// FAILED
//
// Completed and failed contracts remain
// viewable for historical inspection.
//
// They cannot be replayed.
// ========================================


// ========================================
// CONTRACT DATABASE
// ========================================

const CONTRACTS = [

    {
        id: "CN-001",

        title: "THE SILENT WITNESS",

        classification:
            "ELIMINATION CONTRACT",

        target:
            "MARCUS VALE",

        location:
            "MANILA",

        difficulty:
            "LOW",

        requiredLevel:
            0,

        reward:
            3500,

        xp:
            250,

        description:
            "Marcus Vale has been identified as a potential security threat to BLACKLINE interests. Locate the target, confirm identity, and resolve the assignment according to operational protocol."
    },


    {
        id: "CN-002",

        title: "DEAD DROP",

        classification:
            "RECOVERY CONTRACT",

        target:
            "UNKNOWN",

        location:
            "QUEZON CITY",

        difficulty:
            "MEDIUM",

        requiredLevel:
            2,

        reward:
            5500,

        xp:
            400,

        description:
            "A BLACKLINE asset has gone dark. Recover the package before it can be compromised. Operational details will be provided upon authorization."
    },


    {
        id: "CN-003",

        title: "GHOST PROTOCOL",

        classification:
            "ELIMINATION CONTRACT",

        target:
            "ADRIAN CROSS",

        location:
            "CEBU",

        difficulty:
            "HIGH",

        requiredLevel:
            5,

        reward:
            12000,

        xp:
            800,

        description:
            "Adrian Cross has breached multiple BLACKLINE security layers and disappeared from the network. Locate the target and terminate the threat."
    }

];


// ========================================
// PLAYER
// ========================================

let player =
    getPlayer();


// ========================================
// DOM ELEMENTS
// ========================================

const operativeCodename =
    document.getElementById(
        "operativeCodename"
    );

const operativeId =
    document.getElementById(
        "operativeId"
    );

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


// IMPORTANT:
// The HTML uses:
//
// class="details-empty"
//
// NOT:
//
// id="detailsEmpty"
//
// Therefore we use querySelector().

const detailsEmpty =
    document.querySelector(
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

const contractMessage =
    document.getElementById(
        "contractMessage"
    );

const acceptContract =
    document.getElementById(
        "acceptContract"
    );

const backButton =
    document.getElementById(
        "backButton"
    );


// ========================================
// SELECTED CONTRACT
// ========================================

let selectedContract = null;


// ========================================
// GET WORLD STATE FOR CONTRACT
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
// GET CONTRACT STATUS
// ========================================

function getContractStatus(
    contract
) {

    const worldRecord =
        getContractWorldState(
            contract.id
        );


    // ------------------------------------
    // FAILED
    // ------------------------------------

    if (
        worldRecord &&
        worldRecord.status ===
        "failed"
    ) {

        return "failed";

    }


    // ------------------------------------
    // COMPLETED
    // ------------------------------------

    if (
        worldRecord &&
        worldRecord.status ===
        "resolved"
    ) {

        return "completed";

    }


    // ------------------------------------
    // ACTIVE
    // ------------------------------------

    if (
        player.activeContract ===
        contract.id
    ) {

        return "active";

    }


    // ------------------------------------
    // PLAYER HISTORY
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


    // ------------------------------------
    // AVAILABLE
    // ------------------------------------

    return "available";

}


// ========================================
// GET STATUS TEXT
// ========================================

function getStatusText(
    status
) {

    switch (
        status
    ) {

        case "completed":

            return "RESOLVED";


        case "failed":

            return "FAILED";


        case "active":

            return "ACTIVE";


        case "locked":

            return "LOCKED";


        case "available":

            return "AVAILABLE";


        default:

            return "UNKNOWN";

    }

}


// ========================================
// CREATE CONTRACT RECORD
// ========================================

function createContractRecord(
    contract,
    status
) {

    const record =
        document.createElement(
            "div"
        );


    record.className =
        "contract-record";


    record.dataset.contractId =
        contract.id;


    // ------------------------------------
    // STATUS CLASS
    // ------------------------------------

    record.classList.add(
        `status-${status}`
    );


    // ------------------------------------
    // RECORD CONTENT
    // ------------------------------------

    record.innerHTML = `

        <div class="record-main">

            <div class="record-id">
                ${contract.id}
            </div>

            <div class="record-title">
                ${contract.title}
            </div>

        </div>


        <div class="record-meta">

            <span>
                ${contract.difficulty}
            </span>

            <span>
                ${getStatusText(status)}
            </span>

        </div>

    `;


    return record;

}


// ========================================
// UPDATE OPERATIVE INFO
// ========================================

function updateOperativeInfo() {

    player =
        getPlayer();


    if (operativeCodename) {

        operativeCodename.textContent =
            player.codename;

    }


    if (operativeId) {

        operativeId.textContent =
            player.contractorId;

    }

}


// ========================================
// RENDER CONTRACTS
// ========================================

function renderContracts() {

    player =
        getPlayer();


    contractsGrid.innerHTML =
        "";


    contractCount.textContent =
        `${CONTRACTS.length} RECORDS`;


    CONTRACTS.forEach(
        function (contract) {

            const status =
                getContractStatus(
                    contract
                );


            const record =
                createContractRecord(
                    contract,
                    status
                );


            contractsGrid.appendChild(
                record
            );

        }
    );


    updateOperativeInfo();

}


// ========================================
// FIND CONTRACT
// ========================================

function findContract(
    contractId
) {

    return CONTRACTS.find(
        function (contract) {

            return (
                contract.id ===
                contractId
            );

        }
    ) || null;

}


// ========================================
// CONTRACT GRID CLICK HANDLER
// ========================================
// The entire contract grid listens for
// clicks.
//
// This means clicking:
//
// - the contract ID
// - the contract title
// - the difficulty
// - the status
//
// will select the record.
// ========================================

contractsGrid.addEventListener(
    "click",
    function (event) {

        const record =
            event.target.closest(
                ".contract-record"
            );


        if (!record) {

            return;

        }


        const contractId =
            record.dataset.contractId;


        if (!contractId) {

            return;

        }


        const contract =
            findContract(
                contractId
            );


        if (!contract) {

            return;

        }


        selectContract(
            contract
        );

    }
);


// ========================================
// SELECT CONTRACT
// ========================================

function selectContract(
    contract
) {

    selectedContract =
        contract;


    // ------------------------------------
    // SHOW DETAILS
    // ------------------------------------

    if (detailsEmpty) {

        detailsEmpty.style.display =
            "none";

    }


    if (detailsContent) {

        detailsContent.classList.remove(
            "hidden"
        );

        detailsContent.style.display =
            "block";

    }


    // ------------------------------------
    // BASIC INFORMATION
    // ------------------------------------

    detailsClassification.textContent =
        contract.classification;


    detailsTitle.textContent =
        contract.title;


    detailsId.textContent =
        contract.id;


    detailsDifficulty.textContent =
        contract.difficulty;


    detailsTarget.textContent =
        contract.target;


    detailsLocation.textContent =
        contract.location;


    detailsLevel.textContent =
        contract.requiredLevel;


    detailsReward.textContent =
        `$${contract.reward.toLocaleString()}`;


    detailsXP.textContent =
        `${contract.xp} XP`;


    detailsDescription.textContent =
        contract.description;


    // ------------------------------------
    // CURRENT STATE
    // ------------------------------------

    const status =
        getContractStatus(
            contract
        );


    const worldRecord =
        getContractWorldState(
            contract.id
        );


    // ------------------------------------
    // UPDATE ACTION
    // ------------------------------------

    updateActionButton(
        contract,
        status,
        worldRecord
    );

}


// ========================================
// UPDATE ACTION BUTTON
// ========================================

function updateActionButton(
    contract,
    status,
    worldRecord
) {

    // ------------------------------------
    // COMPLETED
    // ------------------------------------

    if (
        status === "completed"
    ) {

        acceptContract.disabled =
            true;


        acceptContract.textContent =
            "CONTRACT RESOLVED";


        contractMessage.textContent =
            getOutcomeMessage(
                worldRecord
            );


        contractMessage.style.display =
            "block";


        return;

    }


    // ------------------------------------
    // FAILED
    // ------------------------------------

    if (
        status === "failed"
    ) {

        acceptContract.disabled =
            true;


        acceptContract.textContent =
            "CONTRACT FAILED";


        contractMessage.textContent =
            getOutcomeMessage(
                worldRecord
            );


        contractMessage.style.display =
            "block";


        return;

    }


    // ------------------------------------
    // ACTIVE
    // ------------------------------------

    if (
        status === "active"
    ) {

        acceptContract.disabled =
            false;


        acceptContract.textContent =
            "RESUME CONTRACT";


        contractMessage.textContent =
            "ACTIVE OPERATION DETECTED. RESUME FROM LAST KNOWN POSITION.";


        contractMessage.style.display =
            "block";


        return;

    }


    // ------------------------------------
    // LOCKED
    // ------------------------------------

    if (
        status === "locked"
    ) {

        acceptContract.disabled =
            true;


        acceptContract.textContent =
            "ACCESS LOCKED";


        contractMessage.textContent =
            `REQUIRES LEVEL ${contract.requiredLevel}.`;


        contractMessage.style.display =
            "block";


        return;

    }


    // ------------------------------------
    // AVAILABLE
    // ------------------------------------

    if (
        status === "available"
    ) {

        acceptContract.disabled =
            false;


        acceptContract.textContent =
            "ACCEPT CONTRACT";


        contractMessage.textContent =
            "CONTRACT AVAILABLE FOR AUTHORIZATION.";


        contractMessage.style.display =
            "block";


        return;

    }

}


// ========================================
// GET OUTCOME MESSAGE
// ========================================

function getOutcomeMessage(
    worldRecord
) {

    if (!worldRecord) {

        return "CONTRACT HISTORY UNAVAILABLE.";

    }


    switch (
        worldRecord.outcome
    ) {

        case "marcus_eliminated":

            return "OUTCOME RECORDED: TARGET ELIMINATED. CONTRACT PERMANENTLY RESOLVED.";


        case "marcus_escaped":

            return "OUTCOME RECORDED: TARGET ESCAPED. CONTRACT PERMANENTLY CLOSED.";


        default:

            return `OUTCOME RECORDED: ${String(
                worldRecord.outcome
            )
                .replaceAll(
                    "_",
                    " "
                )
                .toUpperCase()}.`;

    }

}


// ========================================
// HANDLE CONTRACT ACTION
// ========================================

function handleContractAction() {

    if (!selectedContract) {

        return;

    }


    // ------------------------------------
    // REFRESH PLAYER STATE
    // ------------------------------------

    player =
        getPlayer();


    // ------------------------------------
    // REFRESH WORLD STATE
    // ------------------------------------

    const worldRecord =
        getContractWorldState(
            selectedContract.id
        );


    // ------------------------------------
    // SEALED CONTRACT
    // ------------------------------------
    //
    // Viewing is allowed.
    //
    // Starting is NOT allowed.
    // ------------------------------------

    if (
        worldRecord &&
        (
            worldRecord.status ===
            "resolved" ||

            worldRecord.status ===
            "failed"
        )
    ) {

        updateActionButton(
            selectedContract,

            worldRecord.status ===
                "resolved"
                ? "completed"
                : "failed",

            worldRecord
        );


        return;

    }


    // ------------------------------------
    // PLAYER HISTORY FALLBACK
    // ------------------------------------

    if (
        Array.isArray(
            player.completedContracts
        ) &&
        player.completedContracts.includes(
            selectedContract.id
        )
    ) {

        return;

    }


    // ------------------------------------
    // LEVEL CHECK
    // ------------------------------------

    if (
        player.level <
        selectedContract.requiredLevel
    ) {

        return;

    }


    // ------------------------------------
    // START / RESUME CONTRACT
    // ------------------------------------

    updatePlayer({

        activeContract:
            selectedContract.id,

        activeScene:
            player.activeContract ===
                selectedContract.id
                ? player.activeScene
                : null

    });


    window.location.href =
        "./operation.html";

}


// ========================================
// ACTION BUTTON
// ========================================

acceptContract.addEventListener(
    "click",
    handleContractAction
);


// ========================================
// BACK BUTTON
// ========================================

backButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "./dashboard.html";

    }
);


// ========================================
// INITIAL RENDER
// ========================================

renderContracts();