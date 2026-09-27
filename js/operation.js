// ========================================
// BLACKLINE OPERATION SYSTEM
// ========================================


// ========================================
// OPERATION DATABASE
// ========================================

const operations = {

    "CN-001": {

        id: "CN-001",

        title:
            "THE SILENT WITNESS",

        classification:
            "ELIMINATION CONTRACT",

        target:
            "MARCUS VALE",

        location:
            "MANILA",

        difficulty:
            "LOW",

        reward:
            3500,

        xp:
            250,


        scenes: {


            // ====================================
            // BRIEFING
            // ====================================

            briefing: {

                eyebrow:
                    "BLACKLINE // SECURE CHANNEL",

                title:
                    "THE SILENT WITNESS",

                text:
                    "CONTRACTOR 00417.\n\nYour first assignment has been authorized.\n\nMarcus Vale is a former BLACKLINE informant believed to possess information capable of compromising network operations.\n\nThe contract has remained unclaimed for approximately seventy-two hours. Senior contractors declined the assignment.\n\nYou are being given the contract because you are the newest eligible operative.\n\nLocate Marcus Vale. Confirm identity. Resolve the threat.",

                choices: [

                    {
                        text:
                            "ACCEPT THE ASSIGNMENT",

                        next:
                            "arrival"

                    }

                ]

            },


            // ====================================
            // ARRIVAL
            // ====================================

            arrival: {

                eyebrow:
                    "MANILA // 22:14",

                title:
                    "ARRIVAL",

                text:
                    "Rain has turned the street into a sheet of reflected light.\n\nThe target district is quieter than the briefing suggested.\n\nYour target is believed to occupy the third floor of a residential building approximately two blocks ahead.\n\nNo support team is assigned.\n\nNo extraction vehicle is waiting.\n\nBLACKLINE has given you one instruction:\n\nResolve the target.",

                choices: [

                    {
                        text:
                            "APPROACH THE TARGET AREA",

                        next:
                            "surveillance"

                    }

                ]

            },


            // ====================================
            // SURVEILLANCE
            // ====================================

            surveillance: {

                eyebrow:
                    "TARGET AREA // 22:19",

                title:
                    "SURVEILLANCE",

                text:
                    "You establish a position across the street.\n\nThird floor.\nApartment 3B.\n\nOne light is active.\n\nMovement behind the curtains confirms at least one occupant.\n\nYour briefing identifies Marcus as the sole occupant.\n\nSomething doesn't match.",

                choices: [

                    {
                        text:
                            "OBSERVE LONGER",

                        next:
                            "secondFigure",

                        choice:
                            "observed_target_area"

                    },

                    {
                        text:
                            "APPROACH THE BUILDING",

                        next:
                            "frontEntrance",

                        choice:
                            "approached_immediately"

                    }

                ]

            },


            // ====================================
            // SECOND FIGURE
            // ====================================

            secondFigure: {

                eyebrow:
                    "SURVEILLANCE // 22:27",

                title:
                    "SECOND FIGURE",

                text:
                    "You wait.\n\nEight minutes.\n\nA second silhouette crosses the apartment.\n\nThen another.\n\nThe first figure appears to be Marcus.\nThe second cannot be identified from this distance.\n\nBLACKLINE intelligence reported no associates.\n\nA vehicle stops outside.\n\nThe unidentified individual leaves the building carrying a narrow black case.\n\nYou have a decision to make.",

                choices: [

                    {
                        text:
                            "FOLLOW THE VEHICLE",

                        next:
                            "followVehicle",

                        choice:
                            "followed_unknown_visitor"

                    },

                    {
                        text:
                            "STAY WITH MARCUS",

                        next:
                            "frontEntrance",

                        choice:
                            "stayed_on_target"

                    }

                ]

            },


            // ====================================
            // FOLLOW VEHICLE
            // ====================================

            followVehicle: {

                eyebrow:
                    "UNIDENTIFIED CONTACT // 22:31",

                title:
                    "THE BLACK CASE",

                text:
                    "You follow the vehicle for three blocks before losing it in traffic.\n\nYou return to the target building.\n\nThe detour cost you four minutes.\n\nWhen you reach the entrance, the building is still quiet.\n\nMarcus has not left.\n\nBut something has changed.\n\nThe third-floor window is now dark.",

                choices: [

                    {
                        text:
                            "ENTER THE BUILDING",

                        next:
                            "frontEntrance"

                    }

                ]

            },


            // ====================================
            // FRONT ENTRANCE
            // ====================================

            frontEntrance: {

                eyebrow:
                    "TARGET BUILDING // 22:36",

                title:
                    "ENTRY",

                text:
                    "The front entrance is unlocked.\n\nNo security desk.\nNo cameras visible from the lobby.\n\nYou climb the stairs.\n\nThird floor.\n\nApartment 3B.\n\nThe door is closed.\n\nYou hear movement inside.",

                choices: [

                    {
                        text:
                            "ENTER QUIETLY",

                        next:
                            "apartment",

                        choice:
                            "entered_quietly"

                    },

                    {
                        text:
                            "KNOCK",

                        next:
                            "knock",

                        choice:
                            "knocked_on_door"

                    }

                ]

            },


            // ====================================
            // KNOCK
            // ====================================

            knock: {

                eyebrow:
                    "APARTMENT 3B",

                title:
                    "NO ANSWER",

                text:
                    "You knock twice.\n\nSilence.\n\nThen a voice from inside:\n\n\"You're late.\"\n\nThe voice belongs to Marcus.\n\nHe already knows someone is here.",

                choices: [

                    {
                        text:
                            "ENTER",

                        next:
                            "apartment"

                    }

                ]

            },


            // ====================================
            // APARTMENT
            // ====================================

            apartment: {

                eyebrow:
                    "TARGET LOCATION // 22:39",

                title:
                    "APARTMENT 3B",

                text:
                    "The apartment is almost completely dark.\n\nMarcus is nowhere in the main room.\n\nA laptop is open on a desk.\n\nSeveral documents have been spread across the floor.\n\nOne chair has been overturned.\n\nThere are two cups on the table.\n\nSomeone else was here recently.",

                choices: [

                    {
                        text:
                            "SEARCH THE ROOM",

                        next:
                            "documents",

                        choice:
                            "searched_apartment"

                    },

                    {
                        text:
                            "ACCESS THE LAPTOP",

                        next:
                            "laptop",

                        choice:
                            "accessed_laptop"

                    },

                    {
                        text:
                            "CALL FOR MARCUS",

                        next:
                            "marcus",

                        choice:
                            "called_for_marcus"

                    }

                ]

            },


            // ====================================
            // DOCUMENTS
            // ====================================

            documents: {

                eyebrow:
                    "PHYSICAL EVIDENCE",

                title:
                    "THE DOCUMENTS",

                text:
                    "Most of the papers are meaningless.\n\nOld invoices. Addresses. Names.\n\nThen you find one page that isn't supposed to be here.\n\nAt the top is a BLACKLINE contractor number.\n\n00417.\n\nBelow it is a name.\n\nALEX MERCER.\n\nThe document is dated seven years ago.",

                choices: [

                    {
                        text:
                            "TAKE THE DOCUMENT",

                        next:
                            "alexFile",

                        choice:
                            "took_alex_document"

                    },

                    {
                        text:
                            "LEAVE IT AND CHECK THE LAPTOP",

                        next:
                            "laptop"

                    }

                ]

            },


            // ====================================
            // LAPTOP
            // ====================================

            laptop: {

                eyebrow:
                    "UNAUTHORIZED TERMINAL ACCESS",

                title:
                    "THE LAPTOP",

                text:
                    "The laptop is still unlocked.\n\nA directory containing encrypted BLACKLINE records is open.\n\nYou recognize the network architecture immediately.\n\nThen you see the folder name:\n\n00417.\n\nThe system contains no current record for that contractor number.\n\nOnly an archived file.",

                choices: [

                    {
                        text:
                            "OPEN 00417",

                        next:
                            "alexFile",

                        choice:
                            "opened_00417_file"

                    },

                    {
                        text:
                            "SEARCH FOR MARCUS",

                        next:
                            "marcus"

                    }

                ]

            },


            // ====================================
            // ALEX FILE
            // ====================================

            alexFile: {

                eyebrow:
                    "ARCHIVED BLACKLINE RECORD",

                title:
                    "ALEX MERCER",

                text:
                    "CONTRACTOR: ALEX MERCER\nID: 00417\nSTATUS: MISSING\n\nLast confirmed activity: seven years ago.\n\nThe rest of the record has been manually removed.\n\nNot corrupted.\n\nRemoved.\n\nSomeone deliberately erased it.",

                choices: [

                    {
                        text:
                            "READ THE FINAL ENTRY",

                        next:
                            "finalEntry",

                        choice:
                            "read_alex_record"

                    },

                    {
                        text:
                            "CLOSE THE FILE",

                        next:
                            "marcus"

                    }

                ]

            },


            // ====================================
            // FINAL ENTRY
            // ====================================

            finalEntry: {

                eyebrow:
                    "ARCHIVED RECORD // RESTRICTED",

                title:
                    "FINAL ENTRY",

                text:
                    "The final surviving line contains only three words:\n\nPROJECT BLACK VEIL.\n\nNo explanation.\n\nNo project description.\n\nNo authorization record.\n\nThe file terminates immediately afterward.",

                choices: [

                    {
                        text:
                            "SEARCH FOR BLACK VEIL",

                        next:
                            "blackVeil",

                        choice:
                            "searched_black_veil"

                    },

                    {
                        text:
                            "FIND MARCUS",

                        next:
                            "marcus"

                    }

                ]

            },


            // ====================================
            // BLACK VEIL
            // ====================================

            blackVeil: {

                eyebrow:
                    "SYSTEM SEARCH",

                title:
                    "NOT FOUND",

                text:
                    "You search the local database.\n\nNothing.\n\nYou search archived records.\n\nNothing.\n\nYou search the contractor network.\n\nACCESS DENIED.\n\nFor the first time tonight, the BLACKLINE system is refusing information that your authorization should allow you to access.\n\nA notification appears.\n\nREMOTE SESSION TERMINATED.",

                choices: [

                    {
                        text:
                            "FIND MARCUS",

                        next:
                            "marcus"

                    }

                ]

            },


            // ====================================
            // MARCUS
            // ====================================

            marcus: {

                eyebrow:
                    "TARGET CONTACT",

                title:
                    "MARCUS VALE",

                text:
                    "Marcus is standing in the doorway behind you.\n\nHe isn't holding a weapon.\n\nHe looks at your contractor identification.\n\nHis expression changes.\n\n\"00417.\"\n\nHe says the number quietly.\n\nThen:\n\n\"They really gave you that number again.\"\n\nMarcus knows exactly what it means.",

                choices: [

                    {
                        text:
                            "ASK ABOUT 00417",

                        next:
                            "question00417",

                        choice:
                            "questioned_00417"

                    },

                    {
                        text:
                            "ORDER HIM TO SURRENDER",

                        next:
                            "surrender"

                    },

                    {
                        text:
                            "RAISE YOUR WEAPON",

                        next:
                            "weapon"

                    }

                ]

            },


            // ====================================
            // 00417
            // ====================================

            question00417: {

                eyebrow:
                    "TARGET INTERROGATION",

                title:
                    "THE NUMBER",

                text:
                    "Marcus doesn't answer immediately.\n\n\"You really don't know.\"\n\nHe looks toward the laptop.\n\n\"That's probably the point.\"\n\nHe tells you that Alex Mercer carried the same number before disappearing.\n\nSeven years ago.\n\nMarcus says Alex wasn't killed during an operation.\n\nHe was investigating something inside BLACKLINE.\n\nSomething called Project Black Veil.",

                choices: [

                    {
                        text:
                            "ASK WHAT BLACK VEIL IS",

                        next:
                            "blackVeilReveal",

                        choice:
                            "asked_about_black_veil"

                    },

                    {
                        text:
                            "ASK WHAT HAPPENED TO ALEX",

                        next:
                            "alexFate",

                        choice:
                            "asked_about_alex"

                    },

                    {
                        text:
                            "END THE INTERROGATION",

                        next:
                            "finalDecision"

                    }

                ]

            },


            // ====================================
            // BLACK VEIL REVEAL
            // ====================================

            blackVeilReveal: {

                eyebrow:
                    "MARCUS VALE // UNKNOWN INTELLIGENCE",

                title:
                    "BLACK VEIL",

                text:
                    "Marcus shakes his head.\n\n\"I don't know everything.\"\n\nHe tells you Alex discovered that BLACKLINE had been evaluating contractors through assignments that were never what they appeared to be.\n\nSome contractors passed.\n\nSome disappeared.\n\nThen Alex started asking questions.\n\nAfter that, his records vanished.\n\nMarcus looks directly at you.\n\n\"And now you're here.\"\n\nA pause.\n\n\"With his number.\"",


                choices: [

                    {
                        text:
                            "ASK WHY YOU WERE SENT",

                        next:
                            "evaluationHint",

                        choice:
                            "asked_about_assignment"

                    },

                    {
                        text:
                            "RETURN TO THE CONTRACT",

                        next:
                            "finalDecision"

                    }

                ]

            },


            // ====================================
            // ALEX FATE
            // ====================================

            alexFate: {

                eyebrow:
                    "CLASSIFIED HISTORY",

                title:
                    "WHAT HAPPENED TO ALEX?",

                text:
                    "Marcus says Alex was investigating internal BLACKLINE records when contact suddenly stopped.\n\nNo body was recovered.\n\nNo extraction record exists.\n\nNo termination order exists.\n\nYet his contractor profile was deleted.\n\nMarcus never found out why.\n\n\"BLACKLINE didn't lose Alex,\" he says.\n\n\"BLACKLINE removed Alex.\"",


                choices: [

                    {
                        text:
                            "ASK WHY YOU HAVE HIS NUMBER",

                        next:
                            "evaluationHint",

                        choice:
                            "questioned_number_assignment"

                    },

                    {
                        text:
                            "RETURN TO THE CONTRACT",

                        next:
                            "finalDecision"

                    }

                ]

            },


            // ====================================
            // EVALUATION HINT
            // ====================================

            evaluationHint: {

                eyebrow:
                    "MARCUS VALE",

                title:
                    "THE REAL QUESTION",

                text:
                    "Marcus looks at you for several seconds.\n\n\"You're asking the wrong question.\"\n\nHe points toward the door.\n\n\"The question isn't why they gave you 00417.\"\n\nHe points toward the laptop.\n\n\"The question is why they sent you here.\"\n\nYou hear movement somewhere in the hallway.\n\nSomeone else may have arrived.",

                choices: [

                    {
                        text:
                            "CHECK THE HALLWAY",

                        next:
                            "hallway"

                    },

                    {
                        text:
                            "FOCUS ON MARCUS",

                        next:
                            "finalDecision"

                    }

                ]

            },


            // ====================================
            // SURRENDER
            // ====================================

            surrender: {

                eyebrow:
                    "TARGET CONTACT",

                title:
                    "SURRENDER",

                text:
                    "Marcus slowly raises his hands.\n\n\"You can complete the contract.\"\n\nHe pauses.\n\n\"But before you do, understand something.\"\n\nHe looks at your identification.\n\n\"If they gave you 00417, they already know what you're going to do.\"\n\nThe hallway outside goes silent.",

                choices: [

                    {
                        text:
                            "QUESTION HIM",

                        next:
                            "question00417"

                    },

                    {
                        text:
                            "COMPLETE THE OBJECTIVE",

                        next:
                            "finalDecision"

                    }

                ]

            },


            // ====================================
            // WEAPON
            // ====================================

            weapon: {

                eyebrow:
                    "TARGET CONTACT",

                title:
                    "THE WEAPON",

                text:
                    "You raise your weapon.\n\nMarcus doesn't move.\n\nHe looks almost disappointed.\n\n\"There it is.\"\n\nHe lowers his eyes toward your contractor ID.\n\n\"Exactly what they wanted to see.\"\n\nFor a moment, neither of you moves.",

                choices: [

                    {
                        text:
                            "ASK WHAT HE MEANS",

                        next:
                            "evaluationHint"

                    },

                    {
                        text:
                            "CONTINUE",

                        next:
                            "finalDecision"

                    }

                ]

            },


            // ====================================
            // HALLWAY
            // ====================================

            hallway: {

                eyebrow:
                    "UNIDENTIFIED MOVEMENT",

                title:
                    "THE HALLWAY",

                text:
                    "You check the hallway.\n\nEmpty.\n\nNo footsteps.\nNo doors opening.\n\nYou return to the apartment.\n\nMarcus is still there.\n\nBut the laptop screen has changed.\n\nA single message is displayed:\n\nOPERATION STATUS: OBSERVED.",

                choices: [

                    {
                        text:
                            "RETURN TO MARCUS",

                        next:
                            "finalDecision"

                    }

                ]

            },


            // ====================================
            // FINAL DECISION
            // ====================================

            finalDecision: {

                eyebrow:
                    "MISSION OBJECTIVE",

                title:
                    "THE DECISION",

                text:
                    "The original order remains unchanged.\n\nMarcus Vale is the target.\n\nElimination is authorized.\n\nBut tonight you discovered information that wasn't included in your briefing.\n\nA deleted contractor.\nA duplicated identification number.\nA project that officially doesn't exist.\n\nAnd the growing possibility that someone has been watching this operation from the beginning.",

                choices: [

                    {
                        text:
                            "ELIMINATE MARCUS",

                        next:
                            "complete",

                        choice:
                            "eliminate_marcus"

                    },

                    {
                        text:
                            "LET MARCUS GO",

                        next:
                            "escape",

                        choice:
                            "let_marcus_escape"

                    }

                ]

            },


            // ====================================
            // SUCCESS
            // ====================================

            complete: {

                eyebrow:
                    "CONTRACT RESOLVED",

                title:
                    "TARGET ELIMINATED",

                text:
                    "Marcus Vale is dead.\n\nThe immediate objective is complete.\n\nYou secure the area and prepare to leave.\n\nThen the BLACKLINE terminal activates.\n\nCONTRACT CN-001: RESOLVED.\n\nREWARD AUTHORIZED.\n\n250 XP AUTHORIZED.\n\nA final line appears beneath the standard confirmation:\n\nEVALUATION DATA RECEIVED.",

                ending:
                    "complete",

                outcome:
                    "marcus_eliminated",

                choice:
                    "eliminate_marcus"

            },


            // ====================================
            // FAILURE
            // ====================================

            escape: {

                eyebrow:
                    "CONTRACT FAILED",

                title:
                    "TARGET ESCAPED",

                text:
                    "Marcus disappears into the night.\n\nThe objective has not been completed.\n\nYour BLACKLINE terminal remains silent.\n\nNo reward.\n\nNo XP.\n\nNo congratulations.\n\nThen a final message appears:\n\nCN-001: FAILED.\n\nEVALUATION RESULT: INSUFFICIENT.\n\nThe message disappears before you can read anything else.",

                ending:
                    "failed",

                outcome:
                    "marcus_escaped",

                choice:
                    "let_marcus_escape"

            }

        }

    }

};


// ========================================
// PLAYER
// ========================================

let player =
    getPlayer();


// ========================================
// ACTIVE CONTRACT
// ========================================

const activeContract =
    player.activeContract;


// ========================================
// OPERATION
// ========================================

const operation =
    operations[
        activeContract
    ];


// ========================================
// CURRENT SCENE
// ========================================

let currentScene =
    player.activeScene ||
    "briefing";


// ========================================
// ELEMENTS
// ========================================

const operationTitle =
    document.getElementById(
        "operationTitle"
    );

const operationId =
    document.getElementById(
        "operationId"
    );

const operationClassification =
    document.getElementById(
        "operationClassification"
    );

const sceneNumber =
    document.getElementById(
        "sceneNumber"
    );

const sceneEyebrow =
    document.getElementById(
        "sceneEyebrow"
    );

const sceneTitle =
    document.getElementById(
        "sceneTitle"
    );

const sceneText =
    document.getElementById(
        "sceneText"
    );

const choicesContainer =
    document.getElementById(
        "choices"
    );

const actionButton =
    document.getElementById(
        "actionButton"
    );

const targetElement =
    document.getElementById(
        "target"
    );

const locationElement =
    document.getElementById(
        "location"
    );

const difficultyElement =
    document.getElementById(
        "difficulty"
    );

const rewardElement =
    document.getElementById(
        "reward"
    );


// ========================================
// NO ACTIVE CONTRACT
// ========================================

if (!operation) {

    if (sceneTitle) {

        sceneTitle.textContent =
            "NO OPERATION ASSIGNED";

    }


    if (sceneText) {

        sceneText.textContent =
            "There is currently no active operation assigned to this contractor.";

    }


    if (actionButton) {

        actionButton.style.display =
            "block";


        actionButton.textContent =
            "RETURN TO CONTRACTS";


        actionButton.onclick =
            function () {

                window.location.href =
                    "./contracts.html";

            };

    }

}


// ========================================
// INITIALIZE OPERATION
// ========================================

if (
    operation &&
    sceneTitle
) {

    operationTitle.textContent =
        operation.title;


    operationId.textContent =
        operation.id;


    operationClassification.textContent =
        operation.classification;


    targetElement.textContent =
        operation.target;


    locationElement.textContent =
        operation.location;


    difficultyElement.textContent =
        operation.difficulty;


    rewardElement.textContent =
        "$" +
        operation.reward.toLocaleString();


    renderScene();

}


// ========================================
// RENDER SCENE
// ========================================

function renderScene() {

    if (!operation) {

        return;

    }


    const scene =
        operation.scenes[
            currentScene
        ];


    if (!scene) {

        console.error(
            "BLACKLINE SCENE NOT FOUND:",
            currentScene
        );

        return;

    }


    // ------------------------------------
    // SAVE CURRENT SCENE
    // ------------------------------------

    updatePlayer({

        activeScene:
            currentScene

    });


    // ------------------------------------
    // SCENE NUMBER
    // ------------------------------------

    const sceneKeys =
        Object.keys(
            operation.scenes
        );


    const index =
        sceneKeys.indexOf(
            currentScene
        );


    sceneNumber.textContent =
        String(
            index + 1
        ).padStart(
            2,
            "0"
        );


    // ------------------------------------
    // SCENE CONTENT
    // ------------------------------------

    sceneEyebrow.textContent =
        scene.eyebrow;


    sceneTitle.textContent =
        scene.title;


    sceneText.textContent =
        scene.text;


    // ------------------------------------
    // CLEAR CHOICES
    // ------------------------------------

    choicesContainer.innerHTML =
        "";


    // ------------------------------------
    // ENDING
    // ------------------------------------

    if (
        scene.ending
    ) {

        actionButton.style.display =
            "block";


        if (
            scene.ending ===
            "complete"
        ) {

            actionButton.textContent =
                "RESOLVE CONTRACT";

        }

        else {

            actionButton.textContent =
                "RETURN TO CONTRACTS";

        }


        return;

    }


    actionButton.style.display =
        "none";


    // ------------------------------------
    // CHOICES
    // ------------------------------------

    scene.choices.forEach(
        function (choice, index) {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "choice-button";


            button.innerHTML = `

                <span class="choice-number">
                    ${String(
                        index + 1
                    ).padStart(2, "0")}
                </span>

                <span class="choice-text">
                    ${choice.text}
                </span>

            `;


            button.addEventListener(
                "click",
                function () {

                    // --------------------
                    // RECORD CHOICE
                    // --------------------

                    if (
                        choice.choice
                    ) {

                        recordChoice(
                            operation.id,
                            choice.choice
                        );

                    }


                    // --------------------
                    // MOVE SCENE
                    // --------------------

                    currentScene =
                        choice.next;


                    // --------------------
                    // SAVE SCENE
                    // --------------------

                    updatePlayer({

                        activeScene:
                            currentScene

                    });


                    renderScene();

                }
            );


            choicesContainer.appendChild(
                button
            );

        }
    );

}


// ========================================
// SUCCESSFUL RESOLUTION
// ========================================

function resolveSuccessfulContract() {

    const scene =
        operation.scenes[
            currentScene
        ];


    if (
        !scene ||
        scene.ending !==
        "complete"
    ) {

        return;

    }


    recordContractOutcome(
        operation.id,
        scene.outcome,
        "resolved"
    );


    if (
        scene.outcome ===
        "marcus_eliminated"
    ) {

        setWorldFlag(
            "marcusEliminated",
            true
        );

    }


    completeContract(
        operation.id,
        operation.reward,
        operation.xp
    );


    window.location.href =
        "./dashboard.html";

}


// ========================================
// FAILED RESOLUTION
// ========================================

function resolveFailedContract() {

    const scene =
        operation.scenes[
            currentScene
        ];


    if (
        !scene ||
        scene.ending !==
        "failed"
    ) {

        return;

    }


    recordContractOutcome(
        operation.id,
        scene.outcome,
        "failed"
    );


    if (
        scene.choice
    ) {

        recordChoice(
            operation.id,
            scene.choice
        );

    }


    if (
        scene.outcome ===
        "marcus_escaped"
    ) {

        setWorldFlag(
            "marcusEscaped",
            true
        );

    }


    failContract(
        operation.id
    );


    window.location.href =
        "./dashboard.html";

}


// ========================================
// ACTION BUTTON
// ========================================

if (actionButton) {

    actionButton.addEventListener(
        "click",
        function () {

            if (!operation) {

                window.location.href =
                    "./contracts.html";

                return;

            }


            const scene =
                operation.scenes[
                    currentScene
                ];


            if (!scene) {

                return;

            }


            if (
                scene.ending ===
                "complete"
            ) {

                resolveSuccessfulContract();

                return;

            }


            if (
                scene.ending ===
                "failed"
            ) {

                resolveFailedContract();

            }

        }
    );

}