"use client";

import { ChildrenType } from "@/types/children";
import { createContext, useState } from "react"


type ContextProviderProps = {
    children: ChildrenType;
}

type MyContextType = {
    openMenu: boolean;
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
    openSearch: boolean;
    setOpenSearch: React.Dispatch<React.SetStateAction<boolean>>; 
}


export const MyContext = createContext<Partial<MyContextType>>({});

export default function ContextProvider({ children }: ContextProviderProps) {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [openSearch, setOpenSearch] = useState<boolean>(false);

    return(
        <MyContext.Provider value={{
            openMenu,
            setOpenMenu,
            openSearch,
            setOpenSearch,
        }}
        >
            {children}
        </MyContext.Provider>
    )
}