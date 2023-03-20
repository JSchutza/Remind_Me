import { createContext, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Editor from '@monaco-editor/react';

import React from 'react';
import styles from './editor.module.css';
import {map} from "./editorConfig";
import {
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle, IonChip,
    IonItem,
    IonList,
    IonSelect,
    IonSelectOption, IonTitle, IonToolbar
} from "@ionic/react";

const EditorContext = createContext();


const useEditor = () => useContext(EditorContext);



const EditorProvider = ({ children }) => {
  const [ language, setLanguage ] = useState('javascript');
  const [ theme, setTheme ] = useState('vs-dark');
  const [ script, setScript ] = useState('');




  const EachEditor = ({ title='scratch.js',  content, handleEditorChange }) => {

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




    return (
      <>
        <div className={styles.editor_tab} >
            <IonToolbar>
                <IonTitle slot="start"> <p> {tabtitle} </p> </IonTitle>
                <IonButtons slot="end">
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle> <IonChip outline={true}> {fileType} </IonChip> </IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <IonList>
                                <IonSelect
                                    onIonChange={(e) => setLanguage(e.detail.value)}
                                    interface="popover"
                                    placeholder="Set your language">
                                    {selectList.map((eachOption) => (
                                        <IonSelectOption value={eachOption.option}>{eachOption.type}</IonSelectOption>
                                    ))}
                                </IonSelect>
                            </IonList>
                        </IonCardContent>
                    </IonCard>
                </IonButtons>
            </IonToolbar>
        </div>

          <Editor
              height='90vh'
              defaultLanguage={language}
          value={content}
          onChange={handleEditorChange}
          theme={theme}
        />

        <div className={support ? 'on' : 'off'}>
          {support ? 'IntelliSense support: on' : 'IntelliSense support: off'}
        </div>
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
