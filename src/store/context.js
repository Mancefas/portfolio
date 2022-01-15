import React, { useState } from "react";

const Context = React.createContext({});

export const ContextProvider = (props) => {
  return <Context.Provider value={{}}>{props.children}</Context.Provider>;
};

export default Context;
