import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"
import { HiArrowCircleUp, HiChevronUp } from "react-icons/hi"
import { Button } from "../Button"
export const Footer = () => {
    return(
        <footer>
            <div className="flex w-10/12 border-t border-text-disabled m-auto p-4 justify-between">
                <div className="flex gap-4 text-text-disabled">
                    <p>© 2023 Codeflix, Inc.</p>
                    <ul className="flex gap-2">
                        <li className="hover:text-white hover:underline">
                            <a href="#">Linkedin</a>
                        </li>
                        <li className="hover:text-white hover:underline">
                            <a href="#">Github</a>
                        </li>
                        <li className="hover:text-white hover:underline">
                            <a href="#">Email</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="bg-white text-black rounded-full text-xl">
                        <HiChevronUp />
                    </button>
                </div>
            </div>
        </footer>
    )
}