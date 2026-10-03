const acknowledgeButton =
document.getElementById("acknowledgeButton");

acknowledgeButton.addEventListener("click", () => {
localStorage.setItem("blacklineBriefingAcknowledged", "true");

window.location.href = "dashboard.html";

});
