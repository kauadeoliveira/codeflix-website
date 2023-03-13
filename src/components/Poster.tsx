export default function Poster() {
    return(
        <div className='relative'>
            <div className='bg-black opacity-50 absolute top-0 left-0 h-full w-full'></div>
            <picture>
                <source srcSet="postermovie_lg.png" media="(min-width: 1024px)"/>
                <source srcSet="postermovie_md.png" media="(min-width: 768px)"/>
                <img src="postermovie_sm.png" alt="" />
            </picture>
            {/* <div className="bg-red-500 absolute bottom-0 left-0 h-14 w-full opacity-50">

            </div> */}
        </div>
    )
}
