const enterButton = document.getElementById("enterNetwork");

enterButton.addEventListener("click", () => {
const briefingAcknowledged =
localStorage.getItem("blacklineBriefingAcknowledged");

if (briefingAcknowledged === "true") {
    window.location.href = "dashboard.html";
} else {
    window.location.href = "briefing.html";
}

});
