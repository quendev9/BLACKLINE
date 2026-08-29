// ========================================
// PLAYER DATA
// ========================================

const player = {
    codename: "NIGHTFALL",
    contractorId: "00417",

    level: 1,

    xp: 250,
    xpRequired: 500,

    money: 2500,

    contractsCompleted: 0
};


// ========================================
// PLAYER ELEMENTS
// ========================================

const codenameElement =
    document.getElementById("codename");

const contractorIdElement =
    document.getElementById("contractorId");

const levelElement =
    document.getElementById("level");

const xpTextElement =
    document.getElementById("xpText");

const xpProgressElement =
    document.getElementById("xpProgress");

const moneyElement =
    document.getElementById("money");

const contractsCompletedElement =
    document.getElementById("contractsCompleted");


// ========================================
// DISPLAY PLAYER DATA
// ========================================

if (codenameElement) {

    codenameElement.textContent =
        player.codename;

}


if (contractorIdElement) {

    contractorIdElement.textContent =
        player.contractorId;

}


if (levelElement) {

    levelElement.textContent =
        String(player.level).padStart(2, "0");

}


if (xpTextElement) {

    xpTextElement.textContent =
        player.xp +
        " / " +
        player.xpRequired +
        " XP";

}


if (moneyElement) {

    moneyElement.textContent =
        "$" +
        player.money.toLocaleString();

}


if (contractsCompletedElement) {

    contractsCompletedElement.textContent =
        player.contractsCompleted;

}


// ========================================
// XP BAR
// ========================================

if (xpProgressElement) {

    const xpPercentage =
        (player.xp / player.xpRequired) * 100;

    xpProgressElement.style.width =
        xpPercentage + "%";

}


// ========================================
// CONTRACTS BUTTON
// ========================================

const contractsButton =
    document.getElementById("contractsButton");

if (contractsButton) {

    contractsButton.addEventListener(
        "click",
        function () {

            alert(
                "CONTRACT DATABASE\n\n" +
                "Contract system coming soon."
            );

        }
    );

}


// ========================================
// DAILY MISSIONS BUTTON
// ========================================

const dailyButton =
    document.getElementById("dailyButton");

if (dailyButton) {

    dailyButton.addEventListener(
        "click",
        function () {

            window.location.href =
                "./missions.html";

        }
    );

}


// ========================================
// EVENTS BUTTON
// ========================================

const eventsButton =
    document.getElementById("eventsButton");

if (eventsButton) {

    eventsButton.addEventListener(
        "click",
        function () {

            window.location.href =
                "./events.html";

        }
    );

}

