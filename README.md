
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
# Splash Page
- When a logged out user first lands on our app this is the first page they will see.  
- Here they can either login or signup to gain access to the sites features and test out our awsome editor!
<img src="https://i.ibb.co/X2500XJ/splash-page.jpg" alt="splash-page" border="0">

-----------
# Signup Page
- Where unauthenticated users can create an account.
<img src="https://i.ibb.co/hF6PdCM/signup-page.jpg" alt="signup-page" border="0">

-----------
# Login Page
- Where unauthenticated users can access a previously created account.
<img src="https://i.ibb.co/HHmFy9R/login-page.jpg" alt="login-page" border="0">

-----------
# Profile Page
- A authenticated users profile page where they can view their personal information.
<img src="https://i.ibb.co/yWjXtcR/profile-page.jpg" alt="profile-page" border="0">
-----------

-----------
# Notebooks Page
- Where a authenticated user can view all of their created notebooks. 
<img src="https://i.ibb.co/5B10D4V/notebooks-page.jpg" alt="notebooks-page" border="0">
-----------

-----------
# About the Developer Page
- Where unauthenticated users can view information about me. 
<img src="https://i.ibb.co/ZJWpJ9C/about-me-page.jpg" alt="about-me-page" border="0">
-----------

-----------
# Create New Note Modal
- A modal that allows authenticated users to create new notes for a notebook.
<img src="https://i.ibb.co/xCD5KgZ/create-note-modal.jpg" alt="create-note-modal" border="0">
-----------

-----------
# Each Notebook Page
- Where authenticated users can view individually created notebooks and these notebooks notes. 
<img src="https://i.ibb.co/jVXTrxg/each-notebook-page.jpg" alt="each-notebook-page" border="0">
-----------

-----------
# Markdown Preview
- Example of how users can view markdown support for the editor. 
<img src="https://i.ibb.co/8cCTCdb/markdown-preview.jpg" alt="markdown-preview" border="0">
-----------

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
- Will hold an authenticated users personal information.

- ## notebooksReducer 
- Allows a authenticated user full crud on their notebooks.

- ## notebookPageReducer (rewritten - remove)
- Displays all of the users notebooks. 

- ## notesReducer
- Allows a authenticated user full crud on their notes.

- ## recentNoteReducer (rewritten - remove)
- Displays a users recently created notes.

- ## newNotebookReducer
- Displays a users last created notebook. 

- ## tagsReducer (in development)
- Allows a authenticated user full crud on their notes.

- ## recentlyCreatedNoteReducer
- Displays a users last created note.

- ## deleteNotebookReducer
- Displays a users last deleted notebook.

- ## recentlyDeletedNoteReducer
- Displays a users last deleted note.

- ## errorReducer
- Displays generic backend errors to be displayed in the Error component.

- ## noteErrorReducer
- Displays generic backend errors to be displayed when creating a note.

-----------
# Challenges
- One of the more challenging aspects of this application was being able to find a way to render markdown syntax on the webpage. I only had a week to complete this project and did not have time to write an entire markdown parser so I utilized my research skills and found an awesome package that helped me speed up my development. The package I decided to use for parsing markdown into HTML is called `react-markdown`. Along with markdown support I also wanted to allow the user to get a taste of syntax highlighting and I used a package that integrated with `react-markdown` called `react-syntax-highlighter` that added the syntax highlighting support that I needed. Below is a snippet of something that I am proud of and found particularly challenging at the time. 
```js
const ReadMe = () => {
  //state
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [markdown, setMarkdown] = useState('');



  let renderers;
  renderers = {
    code: ({ language, value }) => {
      return (
        <SyntaxHighlighter
          customStyle={ { border: `none`, outline: `none`, background: `black`, resize: `none`, lineBreak: `anywhere` } }
          style={materialDark}
          showLineNumbers={true}
          language={language}
          children={value}
        />
      );
    }
    }







  useEffect(() => {

    fetch(`${readme_text}`)
      .then(response => response.body)
      .then(rb => {
        const reader = rb.getReader();

        return new ReadableStream({
          start(controller) {
            // The following function handles each data chunk
            function push() {
              // "done" is a Boolean and value a "Uint8Array"
              reader.read().then(({ done, value }) => {
                // If there is no more data to read
                if (done) {
                  controller.close();
                  return;
                }
                // Get the data and send it to the browser via the controller
                controller.enqueue(value);
                // Check chunks by logging to the console
                // console.log(done, value);
                push();
              })
            }

            push();
          }
        });
      })
      .then(stream => {
        // Respond with our stream
        return new Response(stream, { headers: { "Content-Type": "text/html" } }).text();
      })
      .then(result => {
          setIsLoaded(true);
          setMarkdown(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        });

  }, []);





  if (error) {
    return(
      <>
        <div>Error: {error.message}</div>
      </>
    );

  } else if (!isLoaded) {
    return (
      <>
        <div>Loading...</div>
      </>
    );

  } else {
    return (
      <>
        <div className={styles.readme_logo}>
          <img src={`${logo}`} />
        </div>

        <div className={styles.markdown_container}>
          <ReactMarkdown renderers={renderers} plugins={[gfm]} children={markdown} />
        </div>
      </>
    );
  }


};



export default ReadMe;
```
- The `ReadMe` component looks complicated but is simple. This component will read from a static file located in the same directory and set the markdown string as state for the component. The state called `markdown` holds a string of markdown which is passed to the `ReactMarkdown` component which parses the markdown text into viewable HTML. 
- I am particularly proud of this code because it was an idea that would allow me to keep my sites readme page upto date with the repository's readme file. I am also proud that the code is dynamic which allows me to avoid hard coding a readme HTML file. 
- This code was particularly challenging because I had no idea how I was going to read from a file and how this asynchronous action was going to work within a react application. I was able to solve this issue through research and testing portions of the code to see how things were working. 
- I would like to update this code to use the more modern `async` and `await` syntax that JavaScript offers and I plan to do so in the future. 
- I would also like to make this fetch request into its own reusable function so I can reuse it within other pages of my application.


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
