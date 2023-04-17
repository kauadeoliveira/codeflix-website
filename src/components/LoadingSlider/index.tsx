

/* 
    - Um componente que une varios componentes de Card com Skeleton Effect.
    - Usado para momentos em que os dados da api ainda não foram retornados.
*/

import { LoadingCard } from "../LoadingCard"
import { LoadingTitle } from "../LoadingTitle"


export const LoadingSlider = () => {
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