import Button from "./Button";
import { BsPlayFill } from "react-icons/bs";
import { HiOutlinePlusSm, HiOutlineDotsCircleHorizontal } from "react-icons/hi";

import IconButton from "./IconButton";

export default function Poster() {
    return(
        <div className='relative'>
            <div className='bg-black opacity-50 absolute top-0 left-0 h-full w-full'></div>
            <picture>
                <source srcSet="postermovie_lg.png" media="(min-width: 1024px)"/>
                <source srcSet="postermovie_md.png" media="(min-width: 768px)"/>
                <img src="postermovie_sm.png" alt="" />
            </picture>
            <div className="absolute bottom-0 left-0 h-14 w-full">
                <div className="m-auto flex md:w-1/3 justify-around">
                    <IconButton mode="light" Icon={HiOutlinePlusSm}> 
                        Add to list
                    </IconButton>
                    <Button mode="light" Icon={BsPlayFill}>
                        Trailer
                    </Button>
                    <IconButton mode="light" Icon={HiOutlineDotsCircleHorizontal}> 
                        Details
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
