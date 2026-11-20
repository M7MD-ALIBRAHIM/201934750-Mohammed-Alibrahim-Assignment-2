
"use strict";

// =====================================
// 1. Dynamic Greeting
// =====================================

const greeting = document.getElementById("greeting");
const currentHour = new Date().getHours();

if (currentHour < 12) {
    greeting.textContent = "Good Morning! Welcome to my portfolio.";
} else if (currentHour < 18) {
    greeting.textContent = "Good Afternoon! Welcome to my portfolio.";
} else {
    greeting.textContent = "Good Evening! Welcome to my portfolio.";
}


// =====================================
// 2. Dark Mode with Local Storage
// =====================================

const themeToggle = document.getElementById("theme-toggle");

try {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
} catch (error) {
    console.warn("Theme preference could not be loaded.");
}

function updateThemeButton() {
    const isDark = document.body.classList.contains("dark-mode");

    themeToggle.textContent = isDark ? "Light Mode" : "Dark Mode";
    themeToggle.setAttribute("aria-pressed", String(isDark));
}

updateThemeButton();

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    try {
        localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (error) {
        console.warn("Theme preference could not be saved.");
    }

    updateThemeButton();
});


// =====================================
// 3. Project Filtering and Sorting
// =====================================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectsGrid = document.getElementById("projects-grid");
const projectCards = Array.from(
    document.querySelectorAll(".project-card")
);
const sortProjects = document.getElementById("sort-projects");
const noProjects = document.getElementById("no-projects");

// Store the current filter and sorting preferences
let selectedCategory = "all";
let selectedSort = "default";

// Save the original order of project cards
const originalOrder = new Map();

projectCards.forEach(function (card, index) {
    originalOrder.set(card, index);
});

function updateProjects() {

    // Sort the cards
    const sortedCards = [...projectCards];

    sortedCards.sort(function (a, b) {

        const nameA = a.querySelector("h3").textContent.trim();
        const nameB = b.querySelector("h3").textContent.trim();

        if (selectedSort === "az") {
            return nameA.localeCompare(nameB);
        }

        if (selectedSort === "za") {
            return nameB.localeCompare(nameA);
        }

        return originalOrder.get(a) - originalOrder.get(b);
    });

    // Reorder the cards in the page
    sortedCards.forEach(function (card) {
        projectsGrid.appendChild(card);
    });

    // Filter the cards
    let visibleProjects = 0;

    sortedCards.forEach(function (card) {

        const category = card.dataset.category;

        const matches =
            selectedCategory === "all" ||
            selectedCategory === category;

        card.classList.toggle("hidden", !matches);

        if (matches) {
            visibleProjects++;
        }
    });

    noProjects.classList.toggle("hidden", visibleProjects > 0);
}

// Handle category button clicks
filterButtons.forEach(function (button) {

    button.setAttribute(
        "aria-pressed",
        String(button.classList.contains("active"))
    );

    button.addEventListener("click", function () {

        selectedCategory = button.dataset.filter;

        filterButtons.forEach(function (btn) {
            const isActive = btn === button;

            btn.classList.toggle("active", isActive);
            btn.setAttribute("aria-pressed", String(isActive));
        });

        updateProjects();
    });
});

// Handle sorting changes
sortProjects.addEventListener("change", function () {
    selectedSort = sortProjects.value;
    updateProjects();
});

updateProjects();


// =====================================
// 4. GitHub API Integration
// =====================================

const githubUsername = "M7MD-ALIBRAHIM";
const githubRepos = document.getElementById("github-repos");
const githubLoading = document.getElementById("github-loading");
const githubError = document.getElementById("github-error");

async function loadGitHubRepositories() {

    githubLoading.classList.remove("hidden");
    githubError.classList.add("hidden");
    githubRepos.replaceChildren();

    try {
        const response = await fetch(
            `https://api.github.com/users/${githubUsername}/repos?per_page=100&sort=updated`
        );

        if (!response.ok) {
            throw new Error("GitHub API returned an error.");
        }

        const repositories = await response.json();

        if (!Array.isArray(repositories)) {
            throw new Error("Unexpected GitHub API response.");
        }

        // Show the 6 most recently updated public repositories
        const latestRepos = repositories
            .filter(function (repo) {
                return !repo.fork;
            })
            .sort(function (a, b) {
                return new Date(b.updated_at) - new Date(a.updated_at);
            })
            .slice(0, 6);

        if (latestRepos.length === 0) {
            githubError.textContent =
                "No public repositories are available to display.";
            githubError.classList.remove("hidden");
            return;
        }

        latestRepos.forEach(function (repo) {

            // Create repository card
            const card = document.createElement("div");
            card.className = "github-card";

            const title = document.createElement("h3");
            title.textContent = repo.name;

            const description = document.createElement("p");
            description.textContent =
                repo.description || "No description available.";

            const language = document.createElement("span");
            language.className = "github-language";
            language.textContent =
                repo.language || "Language not specified";

            const linkContainer = document.createElement("p");

            const link = document.createElement("a");
            link.href = repo.html_url;
            link.target = "_blank";
            link.rel = "noopener noreferrer";
            link.textContent = "View Repository";

            linkContainer.appendChild(link);

            card.appendChild(title);
            card.appendChild(description);
            card.appendChild(language);
            card.appendChild(linkContainer);

            githubRepos.appendChild(card);
        });

    } catch (error) {
        console.error("GitHub API error:", error);

        githubError.textContent =
            "Unable to load GitHub repositories. " +
            "Please check your internet connection and try again.";

        githubError.classList.remove("hidden");

    } finally {
        githubLoading.classList.add("hidden");
    }
}

// Load repositories when the page opens
loadGitHubRepositories();


// =====================================
// 5. Contact Form Validation
// =====================================

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    formMessage.classList.remove("success", "error");

    // Check required fields
    if (!name || !email || !message) {

        formMessage.textContent =
            "Please complete all fields before submitting.";

        formMessage.classList.add("error");
        return;
    }

    // Check email format
    if (!emailInput.checkValidity()) {

        formMessage.textContent =
            "Please enter a valid email address.";

        formMessage.classList.add("error");
        return;
    }

    // Check message length
    if (message.length < 10) {

        formMessage.textContent =
            "Your message must contain at least 10 characters.";

        formMessage.classList.add("error");
        return;
    }

    // Display success feedback
    formMessage.textContent =
        "Thank you, " + name +
        "! Your form was completed successfully. " +
        "This demo does not send messages.";

    formMessage.classList.add("success");

    contactForm.reset();
});
