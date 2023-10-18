document.addEventListener("DOMContentLoaded", function () {
  let currentTheme = "dark" || "{{ data.theme }}";
  
  const themeToggle = document.getElementById("theme-toggle");
  const themeLink = document.querySelector("link[rel='stylesheet']");
  const root = document.documentElement; // Get the root element to access CSS variables

  // Function to toggle the theme
  function toggleTheme(newTheme) {
      themeLink.href = `/assets/css/${newTheme}-theme.css`;
      root.style.setProperty('--bg', `var(--${newTheme}-bg)`); // Update background color
      root.style.setProperty('--text', `var(--${newTheme}-text)`); // Update text color
      currentTheme = newTheme; // Reassign currentTheme

      // Save the user's preference in localStorage (could also use cookies)
      localStorage.setItem("theme", currentTheme);
  }

  // Check the user's preference from localStorage
  if (currentTheme === "dark") {
      toggleTheme("dark");
  } else {
      toggleTheme("light");
  }

  // Toggle between light and dark themes
  themeToggle.addEventListener("click", () => {
      const newTheme = currentTheme === "light" ? "dark" : "light";
      toggleTheme(newTheme);
  });
});
