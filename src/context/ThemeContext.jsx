"use client"
import { createContext,useState,useEffect } from "react";


export const ThemeContext=createContext();



const getFromLocalStorage = () => {
    //Next js is using server side rendering by default so even if we write use client the first time it will be server side where there will be no access of browerstorage. 
    if (typeof window !== "undefined") {
      const value = localStorage.getItem("theme");
      return value || "light";
    }
};

export const ThemeContextProvider=({children})=>{
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage();
    });
    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);
    
    return <ThemeContext.Provider value={{theme,toggle}}>{children}</ThemeContext.Provider>
}