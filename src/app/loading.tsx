"use client"

import { LoadingCard, LoadingTitle } from "@/components";

export default function Loading(){
    const loadingCards = []
    for(let cards = 0; cards < 20; cards++){
        loadingCards.push(<LoadingCard key={cards}/>)
    }
    return(
        <div className="px-4 mb-32">
            <div className="my-2">
                <LoadingTitle />
            </div>
            <div className="grid gap-3 2xs:grid-cols-2 xs:grid-cols-3 ms:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 2xl:grid-cols-13">
                {loadingCards}
            </div>
        </div>
    )
}