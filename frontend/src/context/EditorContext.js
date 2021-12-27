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
      c: {
        type: 'C++',
        support: false,
        filename: '.cpp',
      },
      html: {
        type: 'HTML',
        support: true,
        filename: '.html',
      },
    };

    const [ tabtitle, setTabTitle ] = useState(title);
    const [ fileType, setFileType ] = useState(map[language] ? map[language].type : 'Text');
    const [ support, setSupport ] = useState(map[language] ? map[language].support : false);




    useEffect(() => {
      const toArr = title.split(' ');
      const fileExtension = map[language]?.filename;

      if (!title.length || !tabtitle.length) {
        setTabTitle('scratch' + fileExtension);
        return;
      }

      setTabTitle(toArr.join('_') + fileExtension);
    },[title]);



    return (
      <>
        <h3> {fileType} </h3>
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
