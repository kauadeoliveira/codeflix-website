

/* 
    - Um componente que une varios componentes de Card com Skeleton Effect.
    - Usado para momentos em que os dados da api ainda não foram retornados.
*/

import { LoadingCard } from "../LoadingCard";
import { LoadingTitle } from "../LoadingTitle";




type LoadingSliderProps = {
    numCards: number
    title?: boolean
}
export const LoadingSlider = ({ numCards, title }: LoadingSliderProps) => {
    const cards = [];

    for(let card = 0; card < numCards; card++){
        cards.push(<LoadingCard key={card}/>)
    }

    return(
        <div className="p-2">
            {title &&
                <div className="mb-2 ml-1">
                    <LoadingTitle />
                </div>
            }
            <div className="flex gap-2">
                {cards}
            </div>
        </div>
    )
}