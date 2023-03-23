import { LoadingCard } from "./components/LoadingCard"
import { LoadingTitle } from "./components/LoadingTitle"

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