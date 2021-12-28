import { createContext, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Editor from '@monaco-editor/react';


const EditorContext = createContext();


const useEditor = () => useContext(EditorContext);



const EditorProvider = ({ children }) => {
  const [ language, setLanguage ] = useState('javascript');
  const [ theme, setTheme ] = useState('vs-dark');
  const [ script, setScript ] = useState('');




  const EachEditor = ({ title='scratch.js',  content, handleEditorChange }) => {
    const map = {
      javascript: {
        type: 'JavaScript',
        support: true,
        filename: '.js',
        option: 'javascript',
      },
      python: {
        type: 'Python',
        support: false,
        filename: '.py',
        option: 'python',
      },
      markdown: {
        type: 'Markdown',
        support: false,
        filename: '.md',
        option: 'markdown',
      },
      typescript: {
        type: 'TypeScript',
        support: true,
        filename: '.ts',
        option: 'typescript',
      },
      'c++': {
        type: 'C++',
        support: false,
        filename: '.cpp',
        option: 'c++',
      },
      html: {
        type: 'HTML',
        support: true,
        filename: '.html',
        option: 'html',
      },
      css: {
        type: 'CSS',
        support: true,
        filename: '.css',
        option: 'css',
      },
      less: {
        type: 'LESS',
        support: true,
        filename: '.less',
        option: 'less',
      },
      scss: {
        type: 'SCSS',
        support: true,
        filename: '.scss',
        option: 'scss',
      },
      json: {
        type: 'JSON',
        support: true,
        filename: '.json',
        option: 'json',
      },
      xml: {
        type: 'XML',
        support: false,
        filename: '.xml',
        option: 'xml',
      },
      php: {
        type: 'PHP',
        support: false,
        filename: '.php',
        option: 'php',
      },
      'c#': {
        type: 'C#',
        support: false,
        filename: '.cs',
        option: 'c#',
      },
      razor: {
        type: 'RAZOR',
        support: false,
        filename: '.razor',
        option: 'razor',
      },
      diff: {
        type: 'DIFF',
        support: false,
        filename: '.diff',
        option: 'diff',
      },
      java: {
        type: 'Java',
        support: false,
        filename: '.java',
        option: 'java',
      },
      vb: {
        type: 'VB',
        support: false,
        filename: '.vb',
        option: 'vb',
      },
      coffeescript: {
        type: 'CoffeeScript',
        support: false,
        filename: '.coffee',
        option: 'coffeescript',
      },
      handlebars: {
        type: 'Handlebars',
        support: false,
        filename: '.hbs',
        option: 'handlebars',
      },
      batch: {
        type: 'Batch',
        support: false,
        filename: '.sh',
        option: 'batch',
      },
      pug: {
        type: 'Pug',
        support: false,
        filename: '.pug',
        option: 'pug',
      },
      'f#': {
        type: 'F#',
        support: false,
        filename: '.fs',
        option: 'f#',
      },
      lua: {
        type: 'Lua',
        support: false,
        filename: '.lua',
        option: 'lua',
      },
      powershell: {
        type: 'PowerShell',
        support: false,
        filename: '.ps1',
        option: 'powershell',
      },
      ruby: {
        type: 'Ruby',
        support: false,
        filename: '.rb',
        option: 'ruby',
      },
      sass: {
        type: 'SASS',
        support: false,
        filename: '.sass',
        option: 'sass',
      },
      r: {
        type: 'R',
        support: false,
        filename: '.r',
        option: 'r',
      },
    };

    const fileExtension = map[language]?.filename;
    const selectList = Object.values(map);
    const [ lang, setLang ] = useState(language);
    const [ options, setOptions ] = useState(false);
    const [ tabtitle, setTabTitle ] = useState(title);
    const [ fileType, setFileType ] = useState(map[language] ? map[language].type : 'Text');
    const [ support, setSupport ] = useState(map[language] ? map[language].support : false);



    useEffect(() => {
      const toArr = title.split(' ');

      if (!title.length || !tabtitle.length) {
        setTabTitle('scratch' + fileExtension);
        return;
      }

      setTabTitle(toArr.join('_') + fileExtension);
    },[title]);



    const handleSubmit = event => {
      event.preventDefault();
      if (map[lang]) {
        setLanguage(lang);
        return;
      } else {
        // set state to show error message?
      }
    };



    const handleChange = event => {
      setOptions(true);
      setLang(event.target.value.toLowerCase());
    }


    const selectOption = (event, opInstance) => {
      event.preventDefault();
      setLanguage(opInstance.option);
    }


    return (
      <>
        <div>
          <form onSubmit={handleSubmit} >
          <input
            type='text'
            value={lang}
            onChange={handleChange}
            />
            <button> Select Language </button>
          </form>
        </div>


        {options ?
          <div>
            {selectList.map(eachOption => (
              <div>
                <Link to='/' onClick={event => selectOption(event, eachOption)} >
                  <li> {eachOption.type} </li>
                </Link>
              </div>
            ))}
          </div>
        : null }


        <h5> {fileType} </h5>
        <p> {tabtitle} </p>
        <p> {support ? 'IntelliSense support: on'  : 'IntelliSense support: off'} </p>

        <Editor
          height='90vh'
          defaultLanguage={language}
          value={content}
          onChange={handleEditorChange}
          theme={theme}
        />
      </>
    );
  };






  return (
    <EditorContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        setTheme,
        script,
        setScript,
        EachEditor,
      }}
    >
      {children}
    </EditorContext.Provider>
  );



};



// exports here:
export { useEditor, EditorProvider };
