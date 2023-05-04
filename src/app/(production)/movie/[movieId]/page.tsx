"use client"
import { notFound } from 'next/navigation';
import { getCredits, getDetails } from "@/services/http";
import { useEffect } from "react";
import { useQuery } from "react-query";
import Image from 'next/image';
import { Button, LoadingSlider, Slider } from '@/components';
import { minutesToHours } from '@/utils';
import { HiPlay, HiPlus, HiOutlineClock, HiStar } from 'react-icons/hi';
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
            <section className='relative w-full h-[110vh]'>
                {/* Background */}
                <div
                 className='w-full h-full bg-cover bg-center bg-no-repeat'
                 style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movieDetails.data?.backdrop_path})`}} 
                />
                {/* Backdrop */}
                <div className='absolute top-0 bg-black/80 w-full h-full flex items-center'>
                    <div className='flex flex-col items-center px-5 lg:flex-row lg:items-start lg:px-10 lg:gap-x-5'>
                        {/* Poster */}
                        <img
                            src={`https://image.tmdb.org/t/p/original${movieDetails.data?.poster_path}`}
                            alt=""
                            className='w-[150px] h-[225px] lg:w-[300px] lg:h-[450px] rounded-lg'
                        />
                        {/* Description */}
                        <div className='mt-1 lg:mt-0'>
                            <div>
                                <h1 className='text-3xl font-bold max-w-max mx-auto lg:mx-0 lg:text-4xl'>
                                    {movieDetails.data?.title}
                                </h1>
                                <div className='flex gap-x-2 max-w-max mx-auto text-xs lg:mx-0 lg:text-sm'>
                                    <span className='after:content-["•"] after:ml-2'>
                                        {movieDetails.data?.release_date.split('-')[0]}
                                    </span>
                                    <ul className='flex gap-x-1 after:content-["•"] after:ml-1'>
                                        {movieDetails.data?.genres.map((genre: GenreType) => (
                                            <li
                                             key={genre.id}
                                             className='after:content-[","] last:after:content-[""] hover:underline'>
                                                <a href="#">{genre.name}</a>
                                            </li>
                                        ))}
                                    </ul>
                                    <span className='after:content-["•"] after:ml-2 inline-flex items-center'>
                                        {minutesToHours(movieDetails.data?.runtime)}
                                        <HiOutlineClock className='ml-1'/>
                                    </span>
                                    <span className='inline-flex items-center'>
                                        {movieDetails.data?.vote_average.toFixed(1)}
                                        <HiStar className="text-yellow-400 ml-1"/>
                                    </span>
                                </div>
                                <p className='text-sm mt-3 lg:text-base'>{movieDetails.data?.overview}</p>
                                <span className='hidden lg:inline-block text-text-disabled italic mt-2'>
                                    {movieDetails.data?.tagline}
                                </span>
                            </div>
                            {/* Buttons */}
                            <div className='flex gap-2 max-w-max mx-auto mt-4 lg:mx-0'>
                                <Button mode='light' Icon={HiPlay}>Trailer</Button>
                                <Button mode='dark' Icon={HiPlus}>Minha Lista</Button>
                            </div>
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