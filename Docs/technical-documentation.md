# Technical Documentation

1. Project Overview

This project is a personal portfolio website developed using HTML, CSS, and JavaScript. It is an improved version of my Assignment 1 website, with additional interactive features to make it more useful and user-friendly.

The website includes three main sections: About Me, Projects, and Contact. In Assignment 2, I added features such as project filtering, persistent dark mode, dynamic greetings, and improved form validation.

2. Technologies Used

The following technologies were used to develop the website:

HTML: Used to create the structure and content of the website, including the navigation bar, project cards, and contact form.

CSS: Used to style the website, create responsive layouts, and add animations and hover effects.

JavaScript: Used to add interactive features such as project filtering, dark mode, dynamic greetings, and form validation.

localStorage: Used to save the user's selected theme so that it remains active after refreshing the page.

3. Website Structure

The website consists of three main sections:

About Me: This section introduces me and provides basic information about my interests in technology and programming. It also displays a greeting based on the time of day.

Projects: This section displays my projects, including the Personal Portfolio Website and BrainBites Puzzle Platform. Users can filter the projects by category.

Contact: This section contains a contact form where visitors can enter their name, email address, and message. The form validates the inputs and provides feedback.

4. Interactive Features

4.1 Project Filtering

I implemented project filtering using JavaScript. Users can select between All Projects, Web Development, and Games.

JavaScript detects which filter button is clicked and displays only the projects that match the selected category. This is done by checking the data-category attribute of each project card and adding or removing the hidden CSS class.

4.2 Dark and Light Mode

The website allows users to switch between dark and light themes.

JavaScript adds or removes the dark-mode class from the page when the theme button is clicked. The selected theme is saved using localStorage, allowing the website to remember the user's preference after refreshing.

4.3 Dynamic Greeting

The website displays a greeting message based on the current time.

JavaScript uses the Date object to determine the hour and displays Good Morning, Good Afternoon, or Good Evening depending on the time of day.

4.4 Animations and Transitions

CSS transitions and animations were added to improve the user experience.

Buttons change appearance when hovered over, and project cards move slightly upward when the mouse is placed over them. A fade-in animation is also used for project cards.

5. Form Validation and Error Handling

The contact form uses JavaScript to validate user inputs before displaying a confirmation message.

The form checks whether the name, email, and message fields are filled. It also checks whether the email address follows a valid format.

If the user enters invalid information, an error message appears. If all fields are valid, a confirmation message is displayed and the form fields are cleared.

The form is a front-end demonstration and does not send messages to a server.

The website also includes basic error handling for localStorage. If the browser cannot save or load the selected theme, the website continues to function without saving the preference.

6. Responsive Design

The website uses CSS Grid and Flexbox to create a responsive layout.

Media queries adjust the design for different screen sizes. On larger screens, the project cards appear in two columns. On smaller screens, they appear in one column, and the navigation bar adjusts to fit the available space.

This helps make the website accessible on desktop, tablet, and mobile devices.

7. Testing and Verification

The following checks can be used to verify the website's functionality:

Project Filtering: Click each filter button and confirm that the correct projects appear.

Dark Mode: Switch to dark mode, refresh the page, and check whether the selected theme remains active.

Dynamic Greeting: Check that the greeting matches the current time of day.

Contact Form: Submit empty fields, invalid email addresses, and valid information to check the feedback messages.

Responsive Design: Resize the browser window and check whether the layout adjusts correctly.

Animations: Hover over buttons and project cards to check their transitions.

These tests help verify that the interactive features work as intended and that the website provides a good user experience.