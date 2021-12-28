import { createContext, useContext, useEffect, useState } from 'react';
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
      },
      python: {
        type: 'Python',
        support: false,
        filename: '.py',
      },
      markdown: {
        type: 'Markdown',
        support: false,
        filename: '.md',
      },
      typescript: {
        type: 'TypeScript',
        support: true,
        filename: '.ts',
      },
      'c++': {
        type: 'C++',
        support: false,
        filename: '.cpp',
      },
      html: {
        type: 'HTML',
        support: true,
        filename: '.html',
      },
      css: {
        type: 'CSS',
        support: true,
        filename: '.css'
      },
      less: {
        type:'LESS',
        support: true,
        filename: '.less'
      },
      scss: {
        type:'SCSS',
        support: true,
        filename: '.scss'
      },
      json: {
        type:'JSON',
        support: true,
        filename: '.json'
      },
      xml: {
        type: 'XML',
        support:false,
        filename: '.xml'
      },
      php: {
        type:'PHP',
        support: false,
        filename: '.php'
      },
      'c#': {
        type:'C#',
        support: false,
        filename: '.cs'
      },
      razor: {
        type: 'RAZOR',
        support: false,
        filename: '.razor'
      },
      diff: {
        type: "DIFF",
        support: false,
        filename: '.diff'
      },
      java: {
        type: 'Java',
        support: false,
        filename: '.java'
      },
      vb: {
        type: 'VB',
        support: false,
        filename: '.vb'
      },
      coffeescript: {
        type: 'CoffeeScript',
        support: false,
        filename: '.coffee'
      },
      handlebars: {
        type: 'Handlebars',
        support: false,
        filename: '.hbs'
      },
      batch: {
        type: 'Batch',
        support: false,
        filename: '.sh'
      },
      pug: {
        type:'Pug',
        support: false,
        filename: '.pug'
      },
      'f#': {
        type: 'F#',
        support: false,
        filename: '.fs'
      },
      lua: {
        type: 'Lua',
        support: false,
        filename: '.lua'
      },
      powershell: {
        type: 'PowerShell',
        support: false,
        filename: '.ps1'
      },
      ruby: {
        type: 'Ruby',
        support: false,
        filename: '.rb'
      },
      sass: {
        type:'SASS',
        support: false,
        filename: '.sass'
      },
      r: {
        type: 'R',
        support: false,
        filename: '.r'
      },

    };

    const fileExtension = map[language]?.filename;
    const [ lang, setLang ] = useState(language);
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



    useEffect(() => {
      if(map[lang]) {
        setLanguage(lang);
      }
    },[lang]);



    return (
      <>
        <h3> {fileType} </h3>
        <p> {tabtitle} </p>
        <p> {support ? 'IntelliSense support: on'  : 'IntelliSense support: off'} </p>

        <div>
          <label>Select Language: </label>

          <input
            type='text'
            value={lang}
            onChange={event => setLang(event.target.value.toLowerCase())}
          />

        </div>


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
