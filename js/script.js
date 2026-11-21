
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

// Load the previously saved theme
try {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }
} catch (error) {
    console.warn("Theme preference could not be loaded.");
}

// Update button text
function updateThemeButton() {
    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Light Mode";
    } else {
        themeToggle.textContent = "Dark Mode";
    }
}

updateThemeButton();

// Change theme when clicked
themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    const isDarkMode =
        document.body.classList.contains("dark-mode");

    try {
        localStorage.setItem(
            "theme",
            isDarkMode ? "dark" : "light"
        );
    } catch (error) {
        console.warn("Theme preference could not be saved.");
    }

    updateThemeButton();
});


// =====================================
// 3. Project Filtering
// =====================================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const noProjects = document.getElementById("no-projects");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedCategory = button.dataset.filter;

        // Update active button
        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
            btn.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        let visibleProjects = 0;

        // Show matching projects
        projectCards.forEach(function (card) {

            const projectCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === projectCategory
            ) {
                card.classList.remove("hidden");
                visibleProjects++;
            } else {
                card.classList.add("hidden");
            }

        });

        // Display empty state if no projects match
        if (visibleProjects === 0) {
            noProjects.classList.remove("hidden");
        } else {
            noProjects.classList.add("hidden");
        }

    });

});

// Set initial accessibility state
filterButtons.forEach(function (button) {
    button.setAttribute(
        "aria-pressed",
        button.classList.contains("active") ? "true" : "false"
    );
});


// =====================================
// 4. Contact Form Validation
// =====================================

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Reset previous feedback
    formMessage.classList.remove("success", "error");

    // Check for empty fields
    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please complete all fields before submitting.";

        formMessage.classList.add("error");
        return;
    }

    // Validate email using browser validation
    if (!emailInput.checkValidity()) {

        formMessage.textContent =
            "Please enter a valid email address.";

        formMessage.classList.add("error");
        return;
    }

    // Show confirmation message
    formMessage.textContent =
        "Thank you, " + name +
        "! Your form was completed successfully. " +
        "This demo does not send messages.";

    formMessage.classList.add("success");

    // Clear input fields
    contactForm.reset();

});
