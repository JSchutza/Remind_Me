import { createContext, useContext, useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';


const EditorContext = createContext();


const useEditor = () => useContext(EditorContext);



const EditorProvider = ({ children }) => {
  const [ language, setLanguage ] = useState('javascript');

  const [ theme, setTheme ] = useState('vs-dark');



  const EachEditor = ({ content, handleEditorChange }) => {
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
        EachEditor,
      }}
    >
      {children}
    </EditorContext.Provider>
  );

};

// exports here:
export { useEditor, EditorProvider };
