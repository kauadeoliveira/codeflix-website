"use client"
import { notFound } from 'next/navigation';
import { getDetails } from "@/services/http";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Image from 'next/image';
import { Button } from '@/components';
import { minutesToHours } from '@/utils';
import { HiPlay } from 'react-icons/hi';

type MovieDetailsProps = {
    params: {
        movieId: string;
    }
}

type GenreType = {
    name: string;
    id: number;
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
        <main>
            <section className='relative w-full h-[90vh]'>
                <div className='w-full h-full bg-cover bg-center bg-no-repeat' style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movieDetails.data?.backdrop_path})`}} />
                <div className='absolute top-0 bg-black/75 w-full h-full'>
                    <div className='flex items-center flex-col p-5 gap-3'>
                        <img
                        src={`https://image.tmdb.org/t/p/original${movieDetails.data?.poster_path}`}
                        className='w-[150px] h-[225px] rounded-md shadow-md'
                        />
                        <div className='text-center'>
                            <h1 className='text-3xl font-bold'>
                                {movieDetails.data?.title}
                            </h1>
                            <div className='flex gap-1 text-xs text-gray-400 justify-center'>
                                <ul className='flex gap-1 after:content-["•"]'>
                                    {movieDetails.data?.genres.map((genre: GenreType) => (
                                        <li key={genre.id} className='after:content-[","] last:after:content-none'>{genre.name}</li>
                                    ))}
                                </ul>
                                <p>{minutesToHours(movieDetails.data?.runtime)}</p>
                            </div>
                        </div>
                        <div>
                            <span className='text-lg font-bold'>Sinopse</span>
                            <p className='break-all text-sm'>{movieDetails.data?.overview}</p>
                        </div>
                        <div className='flex gap-2 mt-4'>
                            <Button mode='light' Icon={HiPlay}>Trailer</Button>
                            <Button mode='dark'>Minha Lista</Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}