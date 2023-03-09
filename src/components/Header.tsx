import { HiOutlineMenu, HiOutlineSearch } from "react-icons/hi";

export default function Header() {
    return(
        <header className="flex justify-between items-center text-white text-2xl py-1 px-4">
            <button>
                <HiOutlineMenu />
            </button>

            <a href="/" className="font-caveat">
                Codeflix
            </a>

            <button>
                <HiOutlineSearch />
            </button>
        </header>
    )
}