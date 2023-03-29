import { motion } from "framer-motion"
import { ClipLoader } from "react-spinners"


export const LoadingScreen = () => {
    return(
        <div className="fixed top-0 bottom-0 bg-main-color w-full h-screen flex flex-col justify-center items-center gap-10">
            <motion.h1
             className='font-berkshire text-5xl text-rose-500'
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1.5 }}
             transition={{
                duration: 0.5,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
                Codeflix
            </motion.h1>
            <motion.div
             className=""
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{
                delay: 1.5,
                duration: 0.3
             }}
             >
                <ClipLoader color="#F43F5E" />
            </motion.div>
        </div>
    )
}