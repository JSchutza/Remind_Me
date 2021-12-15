import { createContext, useContext, useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';


const EditorContext = createContext();


const useEditor = () => useContext(EditorContext);



const EditorProvider = ({ children }) => {
  const [ language, setLanguage ] = useState('javascript');
  const [ langType, setLangType ] = useState("// javascript code here");
  const [ theme, setTheme ] = useState('vs-dark');

  const EachEditor = ({ content, handleEditorChange,  }) => {
    return (
      <Editor
        height='90vh'
        defaultLanguage={language}
        defaultValue={langType}
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
        langType,
        setLangType,
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