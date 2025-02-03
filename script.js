function generateQR() {
    let qrText = document.getElementById("qrText").value;
    let qrCodeDiv = document.getElementById("qrCode");

    // Clear previous QR code
    qrCodeDiv.innerHTML = "";

    if (qrText.trim() !== "") {
        new QRCode(qrCodeDiv, {
            text: qrText,
            width: 200,
            height: 200
        });
    } else {
        alert("Please enter a valid text or URL.");
    }
}

// Dark Mode Toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Check saved theme preference
if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️ Light Mode";
}

// Toggle Dark Mode
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("darkMode", "disabled");
        themeToggle.textContent = "🌙 Dark Mode";
    }
});
