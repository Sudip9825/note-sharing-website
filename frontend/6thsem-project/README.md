# Note Sharing Platform

## Description

This is a web application built with React designed to facilitate the sharing of notes. It provides functionalities for contributors to upload and organize their notes into folders, and for users to browse and view these notes.

## Features

-   **User Authentication:** Basic Login and Signup forms.
-   **Note Upload:** Contributors can upload notes, providing details like title, subject, and tags. Notes are now organized into folders.
-   **Note Listing:** Browse a list of all available notes, grouped by folders.
-   **Single Note View:** View detailed content of individual notes.
-   **Contributor Dashboard:**
    -   Manage uploaded notes.
    -   Create and manage folders to organize notes.
-   **Admin Dashboard:** (Currently frontend-only with dummy data)
    -   Overview of all notes.
    -   User management (dummy).
    -   Pending requests (dummy).

## Technologies Used

-   **React.js:** Frontend JavaScript library for building user interfaces.
-   **React Router DOM:** For declarative routing in the application.
-   **CSS:** For styling the application.

## Installation

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd 6thsem-project
    ```
2.  **Install NPM packages:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm start
    ```
    The application will open in your browser at `http://localhost:3000`.

## Usage

-   Navigate through the application using the Navbar.
-   **Login/Signup:** Create an account or log in to access contributor features.
-   **Upload Notes:** Go to the "Upload" page to add new notes and assign them to folders.
-   **View Notes:** Browse all notes on the "Notes" page, organized by folders.
-   **Dashboard:** Access your Contributor Dashboard to manage your notes and folders.

## Future Enhancements

-   **Backend Integration:** Implement a robust backend for persistent data storage, user authentication, and authorization.
-   **Search and Filtering:** Add full-text search and advanced filtering options for notes.
-   **Note Editing/Deletion:** Implement full functionality for editing and deleting notes.
-   **User Profile Management:** Allow users to manage their profile information.
-   **Review Workflow:** Implement a system for note review and approval by administrators.

## License

Distributed under the MIT License. See `LICENSE` for more information. (Note: A `LICENSE` file is not currently present in the repository. Consider adding one.)