import React, { createContext, useContext, useState } from 'react';


const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [number, setNumber] = useState(10);
  const [strang, setStrang] = useState('Box Hill');
  const [GlobalFont, setGlobalFont] = useState('roboto');
  const [PrimaryColour, setPrimaryColour] = useState("hsla(200, 86%, 40%, 1)");
  const [SecondaryColour, setSecondaryColour] = useState("hsla(226, 97%, 30%, 1)");
  const [TertiaryColour, setTertiaryColour] = useState("hsla(150, 86%, 40%, 1)");


 
  


  return (
    <GlobalContext.Provider value={{ number, setNumber, strang, setStrang, GlobalFont, setGlobalFont,
      PrimaryColour, setPrimaryColour, SecondaryColour, setSecondaryColour, TertiaryColour, 
      setTertiaryColour,
     }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobals = () => useContext(GlobalContext);


