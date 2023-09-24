document.addEventListener("DOMContentLoaded", function () {
    let currentTheme = "{{ data.theme }}"; 

    const themeToggle = document.getElementById("theme-toggle");
    const themeLink = document.querySelector("link[rel='stylesheet']");

    // Toggle between light and dark themes
    themeToggle.addEventListener("click", () => {
        const newTheme = currentTheme === "light" ? "dark" : "light";
        
        themeLink.href = `/assets/css/${newTheme}-theme.css`;
        currentTheme = newTheme; // Reassign currentTheme

        // Save the user's preference in localStorage (could also use cookies)
        localStorage.setItem("theme", currentTheme);
    });
});
