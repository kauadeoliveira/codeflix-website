import { ActorCardProps } from "./type"

export const ActorCard = ({ img, name, character }: ActorCardProps) => {
    return(
        <div className="w-[120px]">
            <img 
             src={img ? `https://image.tmdb.org/t/p/original${img}` : '/user.svg'}
             alt=""
             className={`w-[120px] h-[180px] ${img ? 'border-none' : 'border'}`}/>
            <div className="p-1 rounded-b-lg overflow-hidden">
                <p className="text-sm font-bold">{name}</p>
                <p className="text-xs">{character}</p>
            </div>
        </div>
    )
}