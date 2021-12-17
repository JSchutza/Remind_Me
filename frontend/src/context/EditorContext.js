import { createContext, useContext, useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';


const EditorContext = createContext();


const useEditor = () => useContext(EditorContext);



const EditorProvider = ({ children }) => {
  const [ language, setLanguage ] = useState('javascript');
  const [ theme, setTheme ] = useState('vs-dark');
  const [ script, setScript ] = useState('');



  const EachEditor = ({ content, handleEditorChange }) => {

    useEffect(() => {
      setScript(content);
    },[]);


    return (
      <Editor
        height='90vh'
        defaultLanguage={language}
        value={content}
        onChange={handleEditorChange}
        theme={theme}
      />
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
