import { getDetails } from "@/services/http";
import { useQuery } from "react-query";

type TvSerieDetailsProps = {
    params: {
        tvserieId: string;
    }
}

export default function TvSerieDetails({ params }: TvSerieDetailsProps) {
    const { tvserieId } = params
    const tvSerieDetails = useQuery('tvSerieDetails', () => getDetails('tv', tvserieId))
    
    return(
        <h1>{tvserieId}</h1>
    )
}