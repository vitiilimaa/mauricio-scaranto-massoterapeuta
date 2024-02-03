"use client";
import React, { createContext, useState } from "react";

type ModalContextProps = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalContext = createContext<ModalContextProps>({
  visible: false,
  setVisible: () => {},
});

type ModalContextProviderProps = {
  children: React.ReactNode;
};

const ModalContextProvider = ({ children }: ModalContextProviderProps) => {
  const [visible, setVisible] = useState(false);


  return (
    <ModalContext.Provider value={{ visible, setVisible }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalContextProvider };
export type { ModalContextProps };
