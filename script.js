const themeToggle = document.querySelector(".theme-toggle");

themeToggle.addEventListener("click", () => {
    const isLightMode = document.documentElement.dataset.theme !== "light";
    document.documentElement.dataset.theme = isLightMode ? "light" : "dark";
    themeToggle.setAttribute("aria-pressed", String(isLightMode));
    themeToggle.setAttribute(
        "aria-label",
        isLightMode ? "Ganti ke tema gelap" : "Ganti ke tema terang"
    );
    themeToggle.textContent = isLightMode ? "🌙" : "☀️";
});
