# Technical Documentation – Assignment 3

## 1. Project Overview

This project is an improved personal portfolio website developed using HTML, CSS, and JavaScript. Assignment 3 adds advanced features such as GitHub API integration, project sorting, state management, and improved error handling.

## 2. Technologies Used

- **HTML:** Structures the website and its sections.
- **CSS:** Handles styling, animations, and responsive design.
- **JavaScript:** Implements dynamic features, sorting, filtering, and form validation.
- **GitHub REST API:** Retrieves public repositories.
- **localStorage:** Saves the user's dark/light mode preference.

## 3. Main Features

### GitHub API Integration

The website uses JavaScript `fetch()` and `async/await` to retrieve public repositories from my GitHub account. It displays up to six repositories with their names, descriptions, programming languages, and links.

### Project Filtering and Sorting

Users can filter projects by category and sort them alphabetically (A–Z or Z–A). JavaScript updates the displayed projects based on user selections.

### State Management

The website uses `localStorage` to remember the selected theme after refreshing. JavaScript also tracks the current project filter and sorting option.

### Form Validation

The contact form checks for empty fields, validates the email format, and requires a message of at least 10 characters. It displays appropriate success or error messages without sending data to a server.

### Error Handling

The GitHub API uses `try`, `catch`, and `finally` to handle requests. The website displays loading messages and helpful error messages if the API fails.

## 4. Performance and Responsive Design

The website uses lightweight HTML, CSS, and JavaScript without external frameworks. Only six GitHub repositories are displayed to keep the interface simple.

CSS Grid, Flexbox, and media queries make the website responsive across desktop, tablet, and mobile devices.

## 5. Testing and Verification

The website should be tested by checking:

- GitHub repositories load correctly.
- Project filtering and sorting work together.
- Dark mode remains active after refreshing.
- Contact form validation displays correct messages.
- The layout adapts to different screen sizes.

## 6. Conclusion

Assignment 3 improved my portfolio website by adding external API integration, advanced JavaScript functionality, state management, and error handling. These improvements helped me develop a more interactive and efficient web application.
