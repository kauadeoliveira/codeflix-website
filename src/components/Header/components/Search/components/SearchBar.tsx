import { HiSearch } from "react-icons/hi";


export const SearchBar = () => {
    return(
        <div className="flex bg-bg-disabled rounded-md py-2 px-2 items-center text-2xl gap-2">
            <button>
                <HiSearch />
            </button>
            <input type="text" className="bg-transparent outline-none w-full" placeholder="Busque por serie ou filme"/>
        </div>
    )
}