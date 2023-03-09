"use client"


import { ChildrenType } from "@/types/children";
import { createContext, useState } from "react"


type ContextProviderProps = {
    children: ChildrenType;
}

type MyContextType = {
    openMenu: boolean;
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const MyContext = createContext<Partial<MyContextType>>({});

export default function ContextProvider({ children }: ContextProviderProps) {
    const [openMenu, setOpenMenu] = useState(false);

    return(
        <MyContext.Provider 
        value={{
            openMenu,
            setOpenMenu,
        }}
        >
            {children}
        </MyContext.Provider>
    )
}