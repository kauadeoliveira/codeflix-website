import { ChangeEvent, ChangeEventHandler } from "react";
import { HiSearch } from "react-icons/hi";

type SearchBarProps = {
    onChange: ChangeEventHandler<HTMLInputElement>
}

export const SearchBar = ({ onChange }: SearchBarProps) => {
    return(
        <div 
         className="flex bg-secondary-color rounded-md py-2 px-2 items-center text-lg gap-2 transition-colors duration-100 hover:bg-bg-disabled"
        >
            <button>
                <HiSearch />
            </button>
            <input
             type="text"
             className="bg-transparent outline-none w-full"
             placeholder="Busque por serie ou filme"
             onChange={onChange}
            />
        </div>
    )
}