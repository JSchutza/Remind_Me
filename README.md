
# [Remind_Me](https://github.com/JSchutza/Remind_Me/)
Welcome to the **Remind_Me** README!

# What is Remind_Me?
  - It is a:
    * Evernote clone geared towards programmers.
    * Note taking application for developers who love code.
-----------
# Technology Used
  * Node
  * Express
  * Sequelize
  * Postgress
  * React
  * Redux


-----------
# [Feature List](https://github.com/JSchutza/Remind_Me/wiki/MVP-Feature-List)
-----------
# [Frontend Routes](https://github.com/JSchutza/Remind_Me/wiki/Frontend-Routes)
-----------
# [API Documentation](https://github.com/JSchutza/Remind_Me/wiki/API-Documentation)
-----------
# [Database Schema](https://github.com/JSchutza/Remind_Me/wiki/Database-Schema)
-----------
# React Components
- ## AboutMe
- Displays information about who I am. 

- ## CloseModalButton
- Reusable component that allows users to click on a close button that will close the ReactModal component. 

- ## CreateNotebookForm
- Form component used to create a logged in users notebooks.


- ## DeleteNotebook
- Button component used to delete a notebook by its id.

- ## DropDownArrow
- Reusable component that allows users to view specific note information while on a notebook.

- ## Editor
- Reusable component that gives the user the ability to create and edit notes, as well as markdown parsing support.

- ## EditorNav
- Reusable component that will add markdown tags into the users note when they are editing or creating a note.

- ## Error
- Reusable component that will display backend validation errors when they occur.

- ## Footer
- Component to display personal information drop down.

- ## Home
- Component to display the splash page for the application. Includes the Editor component so that unauthenticated users can play with the editor.

- ## LoginForm
- Form component that allows previous users to login to their account.

- ## MainRouter
- Component that sets up all of the authenticated routes and unauthenticated routes based on if a user is currently logged in or not. 

- ## NavBar
- Component that dynamically changes based on if a user is authenticated or not. 

- ## NotebooksPage
- Component that shows all of a logged in users notebooks, and links to each notebook. 

- ## NotebookViewer
- Component that allows a user to view a specific notbook and its associated data.

- ## Profile
- Component that displays an authenticated user their personal account information.

- ## ReadMe
- Component that takes a markdown file in as a readable stream and parses its markdown into viewable html.

- ## SignupForm
- Component that allows an unauthenticated user to create a new account.

- ## UpdateNotebook
- Reusable component that allows a authenticated user to update a previous notebook.

- ## UpdateNotebookForm
- Specific component for updating a notebook. Used within the UpdateNotebook component.

- ## UpdateUserForm
- Component that allows an authenticated user to update their user account.

-----------
# Redux Store
- ## userReducer
- ## notebooksReducer 
- ## notebookPageReducer
- ## notesReducer
- ## recentNoteReducer
- ## newNotebookReducer
- ## tagsReducer
- ## recentlyCreatedNoteReducer
- ## deleteNotebookReducer
- ## recentlyDeletedNoteReducer
- ## errorReducer
- ## noteErrorReducer
-----------
# Technical Details

-----------
# Challenges
- Snippets to see code for these

-----------
# Future Features
- AWS integration for uploading md files. This will allow users to associate a md file with a note that will be parsed and viewable with the markdown renderer. 
- html tag parsing. This will allow users to write html tags that will be parsed and viewable by the editor component. Only specific tags will be allowed so that users are not able to cause security issues to the site. 
-----------
## Installing / Getting Started / Developing
If you want to contribute to this project all you have to do is:

```shell
git clone https://github.com/JSchutza/Remind_Me.git
cd Remind_Me/
npm install
```

-----------
## Links
- [Live Site](https://remind----me.herokuapp.com/)
- [Repository](https://github.com/JSchutza/Remind_Me)
-----------
