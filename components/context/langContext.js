import React, { createContext, useState } from "react";
import { text as rootText} from '../../public/text';


export const LangContext = createContext({
  setLangContext: (lang) => null,
  translations: {}
});

const LangContextWrapper = ({children}) => {
const [langState, setLangState] = useState('ru');

  return (
    <LangContext.Provider value={{
        translations: rootText[langState],
        setLangContext: setLangState,
        langState, 
        }}>{children}
    </LangContext.Provider>
  );
}

export default LangContextWrapper;
