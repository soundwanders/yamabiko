document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const currentTheme = document.querySelector("link[rel='stylesheet']").getAttribute("href").includes("dark") ? "dark" : "light";

    // Toggle between light and dark themes
    themeToggle.addEventListener("click", () => {
        const newTheme = currentTheme === "light" ? "dark" : "light";
        const themeLink = document.querySelector("link[rel='stylesheet']");
        
        themeLink.href = `/path/to/${newTheme}-theme.css`;
        currentTheme = newTheme;
        
        // Save the user's preference in a cookie or localStorage
        // Example with localStorage:
        localStorage.setItem("theme", currentTheme);
    });
});