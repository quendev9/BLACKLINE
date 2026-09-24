// ========================================
// BLACKLINE CONTRACT SYSTEM
// ========================================


// ========================================
// PLAYER DATA
// ========================================

const player =
    getPlayer();


// ========================================
// CONTRACT DATABASE
// ========================================

const contracts = [

    {

        id: "CN-001",

        classification:
            "ELIMINATION CONTRACT",

        title:
            "THE SILENT WITNESS",

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
            "A former network informant has disappeared with sensitive information concerning BLACKLINE operations. Locate the target and eliminate the threat before the information reaches outside authorities."

    },


    {

        id: "CN-002",

        classification:
            "RECOVERY CONTRACT",

        title:
            "DEAD DROP",

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
            "A compromised contractor failed to deliver a classified package. Recover the package and determine what happened to the operative. Network exposure must be kept to an absolute minimum."

    },


    {

        id: "CN-003",

        classification:
            "ELIMINATION CONTRACT",

        title:
            "GHOST PROTOCOL",

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
            "An unidentified operative has breached multiple BLACKLINE systems. Intelligence suggests the operative is preparing to expose classified network information. Locate and neutralize the threat."

    }

];


// ========================================
// ELEMENTS
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


const closeDetails =
    document.getElementById(
        "closeDetails"
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


// ========================================
// DISPLAY CONTRACT COUNT
// ========================================

contractCount.textContent =
    contracts.length;


// ========================================
// CREATE CONTRACT CARDS
// ========================================

function displayContracts() {

    contractsGrid.innerHTML = "";


    contracts.forEach(
        function (contract) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "contract-card";


            card.innerHTML = `

                <div class="card-classification">

                    ${contract.classification}

                </div>


                <h3>

                    ${contract.title}

                </h3>


                <div class="card-id">

                    ${contract.id}

                </div>


                <div class="card-info">

                    <div>

                        <span class="card-label">
                            LOCATION
                        </span>

                        <span class="card-value">
                            ${contract.location}
                        </span>

                    </div>


                    <div>

                        <span class="card-label">
                            REWARD
                        </span>

                        <span class="card-value card-reward">

                            $${contract.reward.toLocaleString()}

                        </span>

                    </div>


                    <div>

                        <span class="card-label">
                            LEVEL
                        </span>

                        <span class="card-value">

                            ${contract.requiredLevel}

                        </span>

                    </div>

                </div>

            `;


            card.addEventListener(
                "click",
                function () {

                    openContract(
                        contract
                    );

                }
            );


            contractsGrid.appendChild(
                card
            );

        }
    );

}


// ========================================
// OPEN CONTRACT
// ========================================

function openContract(contract) {

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


    contractMessage.textContent =
        "";


    if (
        player.level >=
        contract.requiredLevel
    ) {

        acceptContract.disabled =
            false;

        acceptContract.textContent =
            "ACCEPT CONTRACT";

    }

    else {

        acceptContract.disabled =
            true;

        acceptContract.textContent =
            "LEVEL " +
            contract.requiredLevel +
            " REQUIRED";

    }


    contractDetails.classList.remove(
        "hidden"
    );


    contractDetails.scrollIntoView({
        behavior: "smooth"
    });


    acceptContract.dataset.contractId =
        contract.id;

}


// ========================================
// ACCEPT CONTRACT
// ========================================

acceptContract.addEventListener(
    "click",
    function () {

        const contractId =
            acceptContract.dataset.contractId;


        const contract =
            contracts.find(
                function (item) {

                    return item.id ===
                        contractId;

                }
            );


        if (!contract) {

            return;

        }


        if (
            player.level <
            contract.requiredLevel
        ) {

            contractMessage.textContent =
                "ACCESS DENIED — INSUFFICIENT LEVEL";

            return;

        }


        contractMessage.textContent =
            "CONTRACT ACCEPTED — OPERATION AUTHORIZED";


        acceptContract.disabled =
            true;


        acceptContract.textContent =
            "CONTRACT ACTIVE";


        console.log(
            "Accepted contract:",
            contract
        );

    }
);


// ========================================
// CLOSE CONTRACT DETAILS
// ========================================

closeDetails.addEventListener(
    "click",
    function () {

        contractDetails.classList.add(
            "hidden"
        );

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


// ========================================
// BACK TO DASHBOARD
// ========================================

backButton.addEventListener(
    "click",
    function () {

        window.location.href =
            "./dashboard.html";

    }
);


// ========================================
// INITIALIZE
// ========================================

displayContracts();