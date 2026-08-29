// ========================================
// DAILY MISSION DATA
// ========================================

const missions = {

    1: {
        progress: 0,
        required: 1,
        completed: false,
        claimed: false
    },

    2: {
        progress: 0,
        required: 1,
        completed: false,
        claimed: false
    },

    3: {
        progress: 0,
        required: 2,
        completed: false,
        claimed: false
    }

};


// ========================================
// ELEMENTS
// ========================================

const backButton =
    document.getElementById("backButton");

const missionProgress =
    document.getElementById("missionProgress");

const resetTimer =
    document.getElementById("resetTimer");

const claimButtons =
    document.querySelectorAll(".claim-button");


// ========================================
// BACK TO DASHBOARD
// ========================================

if (backButton) {

    backButton.addEventListener(
        "click",
        function () {

            window.location.href =
                "./dashboard.html";

        }
    );

}


// ========================================
// UPDATE MISSION DISPLAY
// ========================================

function updateMissionDisplay() {

    let completedCount = 0;


    Object.keys(missions).forEach(
        function (id) {

            const mission =
                missions[id];

            const progressElement =
                document.getElementById(
                    "progress" + id
                );

            const barElement =
                document.getElementById(
                    "bar" + id
                );

            const button =
                document.querySelector(
                    `[data-claim="${id}"]`
                );


            if (progressElement) {

                progressElement.textContent =
                    mission.progress;

            }


            if (barElement) {

                const percentage =
                    Math.min(
                        (mission.progress /
                        mission.required) * 100,
                        100
                    );

                barElement.style.width =
                    percentage + "%";

            }


            if (
                mission.progress >=
                mission.required
            ) {

                mission.completed = true;

            }


            if (mission.completed) {

                completedCount++;

            }


            if (button) {

                if (
                    mission.completed &&
                    !mission.claimed
                ) {

                    button.disabled = false;

                    button.textContent =
                        "CLAIM";

                }
                else if (mission.claimed) {

                    button.disabled = true;

                    button.textContent =
                        "CLAIMED";

                }
                else {

                    button.disabled = true;

                    button.textContent =
                        "INCOMPLETE";

                }

            }

        }
    );


    if (missionProgress) {

        missionProgress.textContent =
            completedCount + " / 3";

    }

}


// ========================================
// CLAIM REWARDS
// ========================================

claimButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const missionId =
                    button.dataset.claim;

                const mission =
                    missions[missionId];


                if (
                    !mission ||
                    !mission.completed ||
                    mission.claimed
                ) {

                    return;

                }


                mission.claimed = true;


                button.disabled = true;

                button.textContent =
                    "CLAIMED";


                alert(
                    "MISSION COMPLETE\n\n" +
                    "Your reward has been registered."
                );


                updateMissionDisplay();

            }
        );

    }
);


// ========================================
// DAILY RESET COUNTDOWN
// ========================================

let resetSeconds =
    (23 * 60 * 60) +
    (59 * 60) +
    59;


function updateResetTimer() {

    if (!resetTimer) {
        return;
    }


    if (resetSeconds <= 0) {

        resetTimer.textContent =
            "RESETTING...";

        return;

    }


    const hours =
        Math.floor(
            resetSeconds / 3600
        );

    const minutes =
        Math.floor(
            (resetSeconds % 3600) / 60
        );

    const seconds =
        resetSeconds % 60;


    resetTimer.textContent =

        String(hours).padStart(2, "0") +
        ":" +

        String(minutes).padStart(2, "0") +
        ":" +

        String(seconds).padStart(2, "0");


    resetSeconds--;

}


updateResetTimer();

setInterval(
    updateResetTimer,
    1000
);


// ========================================
// INITIAL DISPLAY
// ========================================

updateMissionDisplay();

