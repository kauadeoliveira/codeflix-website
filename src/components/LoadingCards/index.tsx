import { LoadingCard } from "./components/LoadingCard"
import { LoadingTitle } from "./components/LoadingTitle"

/* 
    - Um componente que une varios componentes de Card com Skeleton Effect.
    - Usado para momentos em que os dados da api ainda não foram retornados.
*/

export const LoadingCards = () => {
    return(
        <div className="p-2">
            <div className="mb-2 ml-1">
                <LoadingTitle />
            </div>
            <div className="flex gap-2">
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
                <LoadingCard />
            </div>
        </div>
    )
}