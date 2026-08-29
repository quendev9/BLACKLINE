// ========================================
// ELEMENTS
// ========================================

const backButton =
    document.getElementById("backButton");

const caseButton =
    document.getElementById("caseButton");

const countdownElement =
    document.getElementById("countdown");


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
// VIEW CASE
// ========================================

if (caseButton) {

    caseButton.addEventListener(
        "click",
        function () {

            alert(
                "OPERATION BLACKOUT\n\n" +
                "CASE FILE ACCESS\n\n" +
                "This event is currently under development."
            );

        }
    );
}


// ========================================
// COUNTDOWN
// ========================================

let remainingTime =
    (18 * 60 * 60) +
    (42 * 60) +
    13;


function updateCountdown() {

    if (!countdownElement) {
        return;
    }


    if (remainingTime <= 0) {

        countdownElement.textContent =
            "EVENT ENDED";

        return;
    }


    const hours =
        Math.floor(
            remainingTime / 3600
        );


    const minutes =
        Math.floor(
            (remainingTime % 3600) / 60
        );


    const seconds =
        remainingTime % 60;


    countdownElement.textContent =

        String(hours).padStart(2, "0") +
        ":" +

        String(minutes).padStart(2, "0") +
        ":" +

        String(seconds).padStart(2, "0");


    remainingTime--;
}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);

