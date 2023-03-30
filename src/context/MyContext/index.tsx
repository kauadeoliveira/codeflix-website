"use client";

import { ChildrenType } from "@/types/utils/children";
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
    // Estado que define se o Menu está aberto ou fechado.
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    // Estado que define se Search está aberto ou fechado.
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