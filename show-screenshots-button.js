function showScreenshots() {
    var screenshots = document.getElementById("screenshots");
    var showButton = document.getElementById("showButton");
    if (screenshots.style.display === "none") {
        screenshots.style.display = "block";
        showButton.innerHTML = "hide app screenshots";
    } else {
        screenshots.style.display = "none";
        showButton.innerHTML = "show app screenshots";
    }
}