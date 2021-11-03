import React, { useState, useContext , useEffect} from 'react';
import { progress , reporting , projectSetting , emailSubscription } from '../Data/dummyData';

const AppContext = React.createContext(null);

type ContextProps = {
  children : React.ReactNode
}

const AppProvider = ({ children }:ContextProps) => {
  const [menuValue , setMenuValue] = useState<string>("Project Setting");
  const [sidebarValue , setSidebarValue] = useState<string>("Email Subscription");
  const [isBrowser , setIsBrowser] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);  

  const openSidebar = () => {
    setIsSidebarOpen(true);
    // console.log("hello")
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const updateMenuValue = (value) => {
    setMenuValue(value);
    setShowModal(false);
    setSidebarValue(menuValue);
  }

  useEffect(() => {
  }, [menuValue])

  const showMenuModal = () =>{
    setShowModal(!showModal);
}

  const onClose = () => {
    setShowModal(!showModal)
  }

  return (
    <AppContext.Provider
      value={{
        menuValue , isBrowser ,showModal, emailSubscription, sidebarValue ,isSidebarOpen, progress , reporting , projectSetting,
        openSidebar, closeSidebar, setSidebarValue ,onClose , showMenuModal,setShowModal,setIsBrowser, setMenuValue , updateMenuValue ,
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };