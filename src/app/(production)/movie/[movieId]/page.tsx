"use client"
import { notFound } from 'next/navigation';
import { getDetails } from "@/services/http";
import { useEffect } from "react";
import { useQuery } from "react-query";

type MovieDetailsProps = {
    params: {
        movieId: string;
    }
}

export default function MovieDetails({ params }: MovieDetailsProps){
    const { movieId } = params
    const movieDetails = useQuery('movieDetails', () => getDetails("movie", movieId))
    
    useEffect(() => {
        if(movieDetails.isError || !parseInt(movieId)){
            notFound()
        }
    }, [movieDetails.isLoading, movieDetails.isError, movieId])

    useEffect(() => console.log(movieDetails.data), [movieDetails.data])
    
    return(
        <h1>{movieId}</h1>
    )
}