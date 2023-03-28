import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs"
import { HiArrowCircleUp, HiChevronUp } from "react-icons/hi"
import { Button } from "../Button"
export const Footer = () => {
    return(
        <footer>
            <div className="flex w-10/12 border-t m-auto p-4 justify-between">
                <div className="flex gap-4">
                    <p>© 2023 Codeflix, Inc.</p>
                    <ul className="flex gap-2">
                        <li>
                            <a href="#">Linkedin</a>
                        </li>
                        <li>
                            <a href="#">Github</a>
                        </li>
                        <li>
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