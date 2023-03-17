"use client";

import { useState, useEffect } from "react";

type WindowSizeType = {
    width: number | undefined,
    height: number | undefined,
}

export function useWindowSize() {
    // Estado que vai armazenar o valor da largura atual e altura atual da janela.
    const [windowSize, setWindowSize] = useState<WindowSizeType>({width: undefined, height: undefined});

    useEffect(() => {
        // Função que vai ficar responsavel pela a atualização do nosso estado.
        const handleResize = () => setWindowSize({width: window.innerWidth, height: window.innerHeight})
        
        // Aqui chamamos handleResize para assim que o componente for renderizado já armazenar a largura e altura inicial da janela em nosso estado.
        // Se ela não fosse chamada aqui nosso estado de width e height seriam undefined até que o evento de "resize" acontecesse e chamasse handleResize.
        handleResize();

        // Sempre que a janela for redimensionada nossa função que cuida dos estados será chamada para definir a largura e altura atual da janela.
        window.addEventListener("resize", handleResize)

        // Essa é a Função de limpeza, quando nosso componente for desmontado ela será executada. Essa função vai remover o evento de resize da aplicação
        // Uma Clean up function é importante para limpar comportamentos indesejados e otimizar o desempenho da aplicação. Nesse caso o comportamento indesejado seria o "resize" event, pois não precisariamos dele depois que nosso component for desmontado.
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return windowSize
}