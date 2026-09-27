// ========================================
// BLACKLINE OPERATION ENGINE
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


        // ====================================
        // STORY
        // ====================================

        scenes: {


            // =================================
            // ACT I
            // =================================

            briefing: {

                status:
                    "AWAITING DEPLOYMENT",

                eyebrow:
                    "MISSION BRIEFING",

                title:
                    "THE SILENT WITNESS",

                text:
`CONTRACT ASSIGNMENT

Contract CN-001 has remained unclaimed
for approximately 72 hours.

Three senior contractors declined the
assignment.

BLACKLINE has automatically transferred
the contract to the newest eligible
contractor.

CONTRACTOR:

00417 — NIGHTFALL

TARGET:

Marcus Vale

LOCATION:

Manila

PRIMARY OBJECTIVE:

Locate Marcus Vale.

Terminate the threat.

Recover any BLACKLINE-sensitive
information in his possession.

NETWORK NOTE:

The target is considered low priority.

Proceed with discretion.`,

                choices:
                    null,

                next:
                    "arrival"

            },


            arrival: {

                status:
                    "OPERATIVE DEPLOYED",

                eyebrow:
                    "ACT I — ARRIVAL",

                title:
                    "23:41 — MANILA",

                text:
`Rain moves across the city as you reach
the target's last known location.

A three-story building stands across
the street.

According to BLACKLINE intelligence,
Marcus Vale entered approximately
forty minutes ago.

No visual confirmation.

No known associates.

No backup.

You check the contractor ID attached
to your BLACKLINE profile.

00417.

Your first assignment.

And somehow, nobody else wanted it.`,

                choices: [

                    {
                        text:
                            "Observe the building.",

                        next:
                            "observation"

                    },

                    {
                        text:
                            "Enter through the front.",

                        next:
                            "frontEntry"

                    },

                    {
                        text:
                            "Search for another entrance.",

                        next:
                            "alternateEntry"

                    }

                ]

            },


            // =================================
            // SURVEILLANCE PATH
            // =================================

            observation: {

                status:
                    "SURVEILLANCE",

                eyebrow:
                    "ACT I — OBSERVATION",

                title:
                    "WATCHING THE BUILDING",

                text:
`You remain across the street.

Five minutes pass.

Then ten.

The building appears completely quiet.

Too quiet.

A light turns on in a second-floor
window.

A silhouette crosses the room.

Then you notice something strange.

The curtains were closed when you arrived.

Someone inside knew they were being watched.`,

                choices: [

                    {
                        text:
                            "Continue observing.",

                        next:
                            "continuedObservation"

                    },

                    {
                        text:
                            "Approach the building.",

                        next:
                            "approach"

                    }

                ]

            },


            continuedObservation: {

                status:
                    "INTELLIGENCE UPDATE",

                eyebrow:
                    "ACT I — SURVEILLANCE",

                title:
                    "THE SECOND FIGURE",

                text:
`Another silhouette appears.

This one is completely still.

It stands beside the window.

Watching the street.

Watching you.

Your intelligence file listed only
one occupant.

Marcus Vale.

Something is wrong.

Your BLACKLINE terminal remains silent.`,

                choices: [

                    {
                        text:
                            "Move closer.",

                        next:
                            "approach"

                    },

                    {
                        text:
                            "Continue watching.",

                        next:
                            "window"

                    }

                ]

            },


            window: {

                status:
                    "UNIDENTIFIED ACTIVITY",

                eyebrow:
                    "ACT I — SURVEILLANCE",

                title:
                    "THE WINDOW",

                text:
`The second figure disappears.

A few seconds later, the light goes out.

You wait.

Nothing.

Then your encrypted terminal
briefly activates.

One message appears.

NO SENDER:

"YOU ARE BEING WATCHED TOO."`,

                choices: [

                    {
                        text:
                            "Approach the building.",

                        next:
                            "approach"

                    },

                    {
                        text:
                            "Attempt to identify the sender.",

                        next:
                            "terminal"

                    }

                ]

            },


            terminal: {

                status:
                    "NETWORK ANOMALY",

                eyebrow:
                    "ACT I — SIGNAL",

                title:
                    "UNKNOWN CHANNEL",

                text:
`You attempt to trace the message.

The signal disappears immediately.

No network record remains.

Whoever sent it knew how to bypass
BLACKLINE's communication system.

That shouldn't be possible.`,

                choices: [

                    {
                        text:
                            "Enter the building.",

                        next:
                            "inside"

                    }

                ]

            },


            // =================================
            // FRONT ENTRY PATH
            // =================================

            frontEntry: {

                status:
                    "DIRECT APPROACH",

                eyebrow:
                    "ACT I — ENTRY",

                title:
                    "THE FRONT DOOR",

                text:
`You cross the street.

The front entrance is unlocked.

That immediately concerns you.

BLACKLINE's file describes Marcus Vale
as cautious and security-conscious.

Someone unlocked this door.

Whether they expected you or wanted
someone to enter is unclear.`,

                choices: [

                    {
                        text:
                            "Enter.",

                        next:
                            "inside"

                    },

                    {
                        text:
                            "Step back and observe.",

                        next:
                            "observation"

                    }

                ]

            },


            // =================================
            // ALTERNATE ENTRY PATH
            // =================================

            alternateEntry: {

                status:
                    "ALTERNATE ROUTE",

                eyebrow:
                    "ACT I — ACCESS",

                title:
                    "SERVICE ENTRANCE",

                text:
`Behind the building you discover
a narrow service entrance.

The lock has already been damaged.

Someone entered this way recently.

Fresh marks surround the frame.

But there are two separate sets
of damage.

One appears to be from outside.

The other appears to be from inside.`,

                choices: [

                    {
                        text:
                            "Inspect the damage.",

                        next:
                            "evidence"

                    },

                    {
                        text:
                            "Enter the building.",

                        next:
                            "inside"

                    }

                ]

            },


            evidence: {

                status:
                    "EVIDENCE DISCOVERED",

                eyebrow:
                    "ACT I — INVESTIGATION",

                title:
                    "SOMEONE ELSE WAS HERE",

                text:
`The damage is recent.

But the second set of marks is stranger.

Someone inside tried to force
the door open.

That means someone may have been
trying to escape.

Or trying to let someone in.`,

                choices: [

                    {
                        text:
                            "Enter.",

                        next:
                            "inside"

                    },

                    {
                        text:
                            "Search the exterior.",

                        next:
                            "exterior"

                    }

                ]

            },


            exterior: {

                status:
                    "EXTERIOR SEARCH",

                eyebrow:
                    "ACT I — INVESTIGATION",

                title:
                    "THE MARKINGS",

                text:
`Behind the building you find a small
piece of paper caught beneath a drain.

Most of it is unreadable.

One line remains:

00417 — DO NOT TRUST BLACKLINE.`,

                choices: [

                    {
                        text:
                            "Keep the evidence.",

                        next:
                            "inside"

                    }

                ]

            },


            // =================================
            // ACT II
            // =================================

            approach: {

                status:
                    "TARGET AREA",

                eyebrow:
                    "ACT II — APPROACH",

                title:
                    "CLOSING DISTANCE",

                text:
`You approach the building.

The street is almost empty.

As you reach the entrance,
your terminal vibrates.

A new BLACKLINE message appears.

NO SENDER.

"DO NOT TRUST HIM."

You stare at the message.

The target hasn't even seen you yet.

Someone already knows you're here.`,

                choices: [

                    {
                        text:
                            "Continue inside.",

                        next:
                            "inside"

                    },

                    {
                        text:
                            "Attempt to contact BLACKLINE.",

                        next:
                            "contact"

                    }

                ]

            },


            contact: {

                status:
                    "COMMUNICATION FAILURE",

                eyebrow:
                    "ACT II — NETWORK",

                title:
                    "NO RESPONSE",

                text:
`You establish a secure channel.

Nothing.

You try again.

Still nothing.

The network has gone silent.

You check your connection.

Everything is working.

BLACKLINE simply isn't answering.`,

                choices: [

                    {
                        text:
                            "Continue the operation.",

                        next:
                            "inside"

                    },

                    {
                        text:
                            "Withdraw from the area.",

                        next:
                            "withdraw"

                    }

                ]

            },


            inside: {

                status:
                    "INTERIOR",

                eyebrow:
                    "ACT II — BUILDING",

                title:
                    "SOMEONE WAS HERE",

                text:
`The building is almost completely dark.

You move through the first floor.

A chair has been overturned.

A glass lies broken on the floor.

A laptop remains open.

There is no sign of Marcus Vale.

Then you hear footsteps above you.

One person.

Slow.

Deliberate.

Waiting.`,

                choices: [

                    {
                        text:
                            "Search the laptop.",

                        next:
                            "laptop"

                    },

                    {
                        text:
                            "Move upstairs.",

                        next:
                            "upstairs"

                    },

                    {
                        text:
                            "Search the room.",

                        next:
                            "roomSearch"

                    }

                ]

            },


            roomSearch: {

                status:
                    "INVESTIGATION",

                eyebrow:
                    "ACT II — EVIDENCE",

                title:
                    "THE EMPTY ROOM",

                text:
`You search the room.

Nothing useful.

Then you notice a photograph
half-hidden beneath the desk.

It shows several people standing
outside a BLACKLINE facility.

One face has been marked out.

On the back:

"Before 00417."`,

                choices: [

                    {
                        text:
                            "Take the photograph.",

                        next:
                            "laptop"

                    },

                    {
                        text:
                            "Move upstairs.",

                        next:
                            "upstairs"

                    }

                ]

            },


            laptop: {

                status:
                    "DATA RECOVERY",

                eyebrow:
                    "ACT II — INTELLIGENCE",

                title:
                    "THE FILE",

                text:
`The laptop contains almost nothing.

One file remains open.

BLACKLINE_00417

You freeze.

00417.

Your contractor ID.

The file contains no text.

Only one sentence:

"YOU WERE NOT SUPPOSED TO RECEIVE THIS CONTRACT."`,

                choices: [

                    {
                        text:
                            "Open the file.",

                        next:
                            "file"

                    },

                    {
                        text:
                            "Move upstairs.",

                        next:
                            "upstairs"

                    }

                ]

            },


            file: {

                status:
                    "CLASSIFIED DATA",

                eyebrow:
                    "ACT II — DISCOVERY",

                title:
                    "THE PREVIOUS 00417",

                text:
`The file contains an old photograph.

Marcus Vale stands beside another
BLACKLINE contractor.

The contractor's face is partially
obscured.

But the ID is visible.

00417.

The date is seven years ago.

You check your own profile.

Your registration date:

TODAY.`,

                choices: [

                    {
                        text:
                            "Continue upstairs.",

                        next:
                            "upstairs"

                    }

                ]

            },


            // =================================
            // ACT III
            // =================================

            upstairs: {

                status:
                    "TARGET CONTACT",

                eyebrow:
                    "ACT III — CONTACT",

                title:
                    "THE ROOM",

                text:
`The footsteps stop.

A door stands at the end
of the hallway.

You approach.

The door opens before you touch it.

Marcus Vale stands inside.

He doesn't run.

He doesn't fight.

He looks directly at your contractor ID.

00417.

His expression changes.`,

                choices: [

                    {
                        text:
                            "Identify yourself.",

                        next:
                            "marcus"

                    },

                    {
                        text:
                            "Demand answers.",

                        next:
                            "marcus"

                    }

                ]

            },


            marcus: {

                status:
                    "TARGET CONTACT",

                eyebrow:
                    "ACT III — MARCUS VALE",

                title:
                    "THE SILENT WITNESS",

                text:
`Marcus looks at you.

"You were sent here because nobody
else wanted the job."

He pauses.

"That's not why I'm surprised."

His eyes move to your contractor ID.

"00417."

He takes a breath.

"Ask BLACKLINE who had that number
before you."`,

                choices: [

                    {
                        text:
                            "Finish the contract.",

                        next:
                            "finalDecision"

                    },

                    {
                        text:
                            "Ask what he knows.",

                        next:
                            "question"

                    },

                    {
                        text:
                            "Lower your weapon.",

                        next:
                            "lowerWeapon"

                    }

                ]

            },


            question: {

                status:
                    "INTELLIGENCE DISCOVERY",

                eyebrow:
                    "ACT III — REVELATION",

                title:
                    "THE PREVIOUS CONTRACTOR",

                text:
`Marcus tells you that BLACKLINE's
contractor registry is incomplete.

Contractor 00417 existed before you.

The previous operative disappeared.

His records were erased.

Marcus was the last person to speak
with him.

Then Marcus gives you a name.

"Alex Mercer."

The name means nothing to you.

But Marcus seems certain it eventually will.`,

                choices: [

                    {
                        text:
                            "Demand proof.",

                        next:
                            "proof"

                    },

                    {
                        text:
                            "Ask why BLACKLINE wants him dead.",

                        next:
                            "why"

                    }

                ]

            },


            why: {

                status:
                    "CLASSIFIED DISCLOSURE",

                eyebrow:
                    "ACT III — MOTIVE",

                title:
                    "WHY YOU WERE SENT",

                text:
`Marcus looks toward the window.

"Because I know what happened
to the previous 00417."

He pauses.

"And because BLACKLINE thinks
I still have proof."

He points toward the laptop.

"You already found it."

You realize the contract was never
simply about Marcus Vale.`,

                choices: [

                    {
                        text:
                            "Ask about Alex Mercer.",

                        next:
                            "alex"

                    },

                    {
                        text:
                            "End the conversation.",

                        next:
                            "finalDecision"

                    }

                ]

            },


            proof: {

                status:
                    "EVIDENCE",

                eyebrow:
                    "ACT III — PROOF",

                title:
                    "THE FILE",

                text:
`Marcus points toward the laptop.

"The file is already there."

You realize the evidence was never
meant to be hidden.

Someone wanted you to find it.

The question is why.`,

                choices: [

                    {
                        text:
                            "Ask about Alex Mercer.",

                        next:
                            "alex"

                    }

                ]

            },


            alex: {

                status:
                    "UNKNOWN OPERATIVE",

                eyebrow:
                    "ACT III — ALEX MERCER",

                title:
                    "THE NAME",

                text:
`Marcus tells you Alex Mercer was
BLACKLINE contractor 00417.

Seven years ago, Mercer discovered
something inside the organization.

He attempted to report it.

Three days later, he disappeared.

BLACKLINE declared him compromised.

His identity was erased.

His contractor number was eventually
reassigned.

To you.`,

                choices: [

                    {
                        text:
                            "Ask what Mercer discovered.",

                        next:
                            "secret"

                    },

                    {
                        text:
                            "Complete the assignment.",

                        next:
                            "finalDecision"

                    }

                ]

            },


            secret: {

                status:
                    "CLASSIFIED",

                eyebrow:
                    "ACT III — THE SECRET",

                title:
                    "THE BLACKLINE FILE",

                text:
`Marcus doesn't answer immediately.

"I don't know everything."

"But I know Mercer found a project."

"A project BLACKLINE doesn't acknowledge."

He looks directly at you.

"And I think your arrival
was planned long before tonight."

Your terminal suddenly activates.

BLACKLINE CONNECTION RESTORED.

One message appears:

"COMPLETE YOUR OBJECTIVE."`,

                choices: [

                    {
                        text:
                            "Continue listening.",

                        next:
                            "finalDecision"

                    }

                ]

            },


            lowerWeapon: {

                status:
                    "MISSION DEVIATION",

                eyebrow:
                    "ACT III — DECISION",

                title:
                    "A DIFFERENT CHOICE",

                text:
`You lower your weapon.

Marcus doesn't move.

For several seconds neither
of you speaks.

Then he places a small data drive
on the table.

"Take this."

"You'll want to know what BLACKLINE
doesn't want you to know."`,

                choices: [

                    {
                        text:
                            "Take the drive.",

                        next:
                            "drive"

                    },

                    {
                        text:
                            "Refuse it.",

                        next:
                            "finalDecision"

                    }

                ]

            },


            drive: {

                status:
                    "UNAUTHORIZED EVIDENCE",

                eyebrow:
                    "ACT III — DATA ACQUIRED",

                title:
                    "THE DRIVE",

                text:
`You take the drive.

Marcus sits down.

"You have a choice now."

"Do what BLACKLINE sent you here to do."

"Or find out why they sent you."

Before you can answer,
your terminal vibrates again.

OBJECTIVE:

ELIMINATE TARGET.

TIME:

00:04:59`,

                choices: [

                    {
                        text:
                            "Complete the assignment.",

                        next:
                            "finalDecision"

                    }

                ]

            },


            // =================================
            // ACT IV
            // =================================

            finalDecision: {

                status:
                    "FINAL DECISION",

                eyebrow:
                    "ACT IV — CHOICE",

                title:
                    "THE DECISION",

                text:
`Marcus waits.

The contract remains active.

The original objective remains unchanged.

But now you know the assignment
is connected to something larger.

The network wants the target gone.

Marcus claims he knows why.

You have only seconds to decide
what kind of contractor you are.`,

                choices: [

                    {
                        text:
                            "Complete the contract.",

                        next:
                            "complete"

                    },

                    {
                        text:
                            "Refuse the contract.",

                        next:
                            "refuse"

                    },

                    {
                        text:
                            "Let Marcus disappear.",

                        next:
                            "letGo"

                    }

                ]

            },


            // =================================
            // ENDINGS
            // =================================

            complete: {

                status:
                    "OBJECTIVE COMPLETE",

                eyebrow:
                    "ACT V — COMPLETION",

                title:
                    "CONTRACT COMPLETE",

                text:
`The operation reaches its conclusion.

BLACKLINE confirms the objective.

CN-001 has been completed.

Your first contract is officially
closed.

But before leaving, you look once
more at the file containing the
previous 00417.

The photograph is gone.

Someone accessed the laptop
while you were inside.

Your terminal displays one final message:

"GOOD WORK, CONTRACTOR."

You don't remember giving BLACKLINE
permission to watch you.`,

                choices:
                    null,

                ending:
                    "complete"

            },


            refuse: {

                status:
                    "CONTRACT REFUSED",

                eyebrow:
                    "ACT V — REFUSAL",

                title:
                    "YOU REFUSE",

                text:
`You refuse to complete the assignment.

The network records your decision.

No reward is issued.

No XP is awarded.

CN-001 remains unresolved.

Marcus looks at you.

"You just made yourself
very interesting to them."

Your terminal disconnects.

BLACKLINE has ended the session.`,

                choices:
                    null,

                ending:
                    "refused"

            },


            letGo: {

                status:
                    "UNAUTHORIZED OUTCOME",

                eyebrow:
                    "ACT V — DISAPPEARANCE",

                title:
                    "NO WITNESS",

                text:
`You step aside.

Marcus disappears through a
secondary exit.

You remain alone in the room.

BLACKLINE asks for confirmation
of the target's status.

You don't answer.

A minute later, the network
marks the operation as unresolved.

But Marcus is gone.

And so is the evidence.`,

                choices:
                    null,

                ending:
                    "incomplete"

            },


            withdraw: {

                status:
                    "OPERATION ABORTED",

                eyebrow:
                    "ACT V — WITHDRAWAL",

                title:
                    "YOU LEAVE",

                text:
`You leave the area.

The contract remains unresolved.

BLACKLINE records the operation
as incomplete.

Whatever Marcus Vale knows
remains unknown.

But the question of contractor
00417 remains unanswered.`,

                choices:
                    null,

                ending:
                    "incomplete"

            }

        }

    }

};


// ========================================
// PLAYER
// ========================================

const player =
    getPlayer();


// ========================================
// ACTIVE CONTRACT
// ========================================

const activeContract =
    player.activeContract;


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

const sceneStatus =
    document.getElementById(
        "sceneStatus"
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

const choicesElement =
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
// OPERATION STATE
// ========================================

let currentScene =
    "briefing";

let sceneIndex =
    1;


// ========================================
// LOAD OPERATION
// ========================================

function loadOperation() {

    if (!activeContract) {

        showNoOperation();

        return;

    }


    const operation =
        operations[
            activeContract
        ];


    if (!operation) {

        showNoOperation();

        return;

    }


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


    renderScene(
        operation,
        currentScene
    );

}


// ========================================
// NO ACTIVE OPERATION
// ========================================

function showNoOperation() {

    sceneStatus.textContent =
        "NO ACTIVE CONTRACT";

    sceneEyebrow.textContent =
        "NETWORK STATUS";

    sceneTitle.textContent =
        "NO OPERATION ASSIGNED";

    sceneText.textContent =
        "There is currently no active contract assigned to this contractor.";

    choicesElement.classList.add(
        "hidden"
    );

    actionButton.classList.remove(
        "hidden"
    );

    actionButton.textContent =
        "RETURN TO CONTRACTS";

    actionButton.onclick =
        function () {

            window.location.href =
                "./contracts.html";

        };

}


// ========================================
// RENDER SCENE
// ========================================

function renderScene(
    operation,
    sceneId
) {

    const scene =
        operation.scenes[
            sceneId
        ];


    if (!scene) {

        console.error(
            "SCENE NOT FOUND:",
            sceneId
        );

        return;

    }


    sceneStatus.textContent =
        scene.status;

    sceneEyebrow.textContent =
        scene.eyebrow;

    sceneTitle.textContent =
        scene.title;

    sceneText.textContent =
        scene.text;

    sceneNumber.textContent =
        "SCENE " +
        String(sceneIndex).padStart(
            2,
            "0"
        );


    choicesElement.innerHTML =
        "";


    if (
        scene.choices &&
        scene.choices.length > 0
    ) {

        choicesElement.classList.remove(
            "hidden"
        );

        actionButton.classList.add(
            "hidden"
        );


        scene.choices.forEach(
            function (
                choice,
                index
            ) {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";

                button.className =
                    "choice-button";


                button.innerHTML = `

                    <span class="choice-number">

                        ${String(
                            index + 1
                        ).padStart(
                            2,
                            "0"
                        )}

                    </span>

                    <span class="choice-text">

                        ${choice.text}

                    </span>

                `;


                button.addEventListener(
                    "click",
                    function () {

                        selectChoice(
                            operation,
                            choice
                        );

                    }
                );


                choicesElement.appendChild(
                    button
                );

            }
        );

    }

    else {

        choicesElement.classList.add(
            "hidden"
        );

        actionButton.classList.remove(
            "hidden"
        );


        if (
            scene.ending ===
            "complete"
        ) {

            actionButton.textContent =
                "PROCESS CONTRACT";

        }

        else {

            actionButton.textContent =
                "RETURN TO CONTRACTS";

        }

    }

}


// ========================================
// SELECT CHOICE
// ========================================

function selectChoice(
    operation,
    choice
) {

    currentScene =
        choice.next;

    sceneIndex++;


    renderScene(
        operation,
        currentScene
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ========================================
// COMPLETE OPERATION
// ========================================

function processCompletion(
    operation
) {

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


    // ====================================
    // COMPLETE CONTRACT
    // ====================================

    completeContract(
        operation.reward,
        operation.xp
    );


    // ====================================
    // REDIRECT
    // ====================================

    window.location.href =
        "./dashboard.html";

}


// ========================================
// ACTION BUTTON
// ========================================

actionButton.addEventListener(
    "click",
    function () {

        const operation =
            operations[
                activeContract
            ];


        if (!operation) {

            window.location.href =
                "./contracts.html";

            return;

        }


        const scene =
            operation.scenes[
                currentScene
            ];


        // --------------------------------
        // BEGIN OPERATION
        // --------------------------------

        if (
            currentScene ===
            "briefing"
        ) {

            currentScene =
                scene.next;

            sceneIndex++;


            renderScene(
                operation,
                currentScene
            );


            return;

        }


        // --------------------------------
        // COMPLETE
        // --------------------------------

        if (
            scene &&
            scene.ending ===
            "complete"
        ) {

            processCompletion(
                operation
            );

            return;

        }


        // --------------------------------
        // OTHER ENDINGS
        // --------------------------------

        window.location.href =
            "./contracts.html";

    }
);


// ========================================
// INITIALIZE
// ========================================

loadOperation();