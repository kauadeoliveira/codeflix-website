import { ClipLoader } from "react-spinners"
/* 
    - react-spinners é uma biblioteca de componentes com animações de loading já prontas.
    - ClipLoader é um dos componentes de loading de react-spinners.
*/

import { motion } from "framer-motion"
/* 
    - framer-motion é uma biblioteca de animações.
    - motion é um componente otimizado para animações de 60fps.
    - Há um motion para cada elemento HTML, por exemplo <motion.div>, <motion.button>, etc.
    - Eles funcionam exatamente como uma tag HTML comum, mas oferecem props que nos permite fazer animações
*/


/* 
    LoadingScreen é uma Tela de Carregamento:
    Usada no momento em que os dados da api ainda não foram recebidos
*/
export const LoadingScreen = () => {

    return(
        <div 
         className="flex flex-col justify-center items-center gap-10 fixed top-0 bottom-0 bg-main-color w-full h-screen z-[99999]"
        >
        <motion.span
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
        </motion.span>
        <motion.div
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