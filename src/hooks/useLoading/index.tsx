import { useEffect, useState } from "react";
import { UseQueryResult } from "react-query";

export function useLoading(requests: any[], delay: number = 0){
    const [loading, setLoading] = useState<boolean>(true);

    const allRequestFinished = () => requests.every(req => !req.isLoading);

    useEffect(() => {
        if(allRequestFinished()){
            const timeoutId = setTimeout(() => setLoading(false), delay);

            // Ao retornar uma função dentro do callback do useEffect, você está definindo uma função de limpeza (cleanup function) que será executada quando o componente que usa o hook é desmontado ou quando as dependências do useEffect mudam e a função do efeito precisa ser executada novamente.

            return () => clearTimeout(timeoutId)
        }
    }, [requests, delay]);

    return { loading }
}