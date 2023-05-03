"use client"
import { notFound } from 'next/navigation';
import { getCredits, getDetails } from "@/services/http";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Image from 'next/image';
import { Button, LoadingSlider, Slider } from '@/components';
import { minutesToHours } from '@/utils';
import { HiPlay } from 'react-icons/hi';
import { ActorCard } from '@/components/ActorCard';
import { ActorType } from '@/types/utils';

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
    const { movieId } = params;
    const movieDetails = useQuery('movieDetails', () => getDetails("movie", movieId));
    const movieCredits = useQuery('movieCredits', () => getCredits('movie', movieId));

    useEffect(() => console.log(movieDetails.data), [movieDetails.data]);
    useEffect(() => console.log(movieCredits.data), [movieCredits.data])
    
    return(
        <main>
            <section className='relative w-full h-screen'>
                <div
                 className='w-full h-full bg-cover bg-center bg-no-repeat'
                 style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movieDetails.data?.backdrop_path})`}} 
                />
                <div className='absolute top-0 bg-black/80 w-full h-full'>
                    <div className='flex items-center flex-col p-5 gap-3'>
                        <img
                        src={`https://image.tmdb.org/t/p/original${movieDetails.data?.poster_path}`}
                        className='w-[150px] h-[225px] rounded-lg shadow-md'
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
                            <span className="text-xl font-bold mb-2 ml-1 capitalize font-poppins">Sinopse</span>
                            <p className='break-all text-sm'>{movieDetails.data?.overview}</p>
                        </div>
                        <div className='flex gap-2 mt-4'>
                            <Button mode='light' Icon={HiPlay}>Trailer</Button>
                            <Button mode='dark'>Minha Lista</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                {movieCredits.data
                    ? <Slider title='Elenco'>
                        {movieCredits.data.cast.map((actor: ActorType) => (
                            <div className='mx-2' key={actor.id}>
                                <ActorCard img={actor.profile_path} name={actor.name} character={actor.character} />
                            </div>
                        ))}
                        </Slider>
                    : <LoadingSlider numCards={11} title={true}/>
                }
            </section>
        </main>
    )
}