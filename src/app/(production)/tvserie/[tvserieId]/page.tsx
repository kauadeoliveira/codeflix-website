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

type TvSerieDetailsProps = {
    params: {
        tvserieId: string;
    }
}

type GenreType = {
    name: string;
    id: number;
}

export default function TvSerieDetails({ params }: TvSerieDetailsProps) {
    const { tvserieId } = params
    const tvSerieDetails = useQuery('tvSerieDetails', () => getDetails('tv', tvserieId))
    const tvSerieCredits = useQuery('tvSerieCredits', () => getCredits('tv', tvserieId));
    const creators = tvSerieDetails.data?.created_by

    useEffect(() => console.log(tvSerieDetails.data), [tvSerieDetails.data])
    useEffect(() => console.log(tvSerieCredits.data), [tvSerieCredits.data])

    return(
    <main>
        <section>
            <div
                style={{backgroundImage: 
                `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${tvSerieDetails.data?.backdrop_path})`}} 
                className='bg-cover bg-center bg-no-repeat'
            >
                <div className='bg-black/80 min-h-screen flex items-center'>
                    <div className='flex flex-col items-center p-5 lg:flex-row lg:items-start lg:px-10 lg:gap-x-5'>
                        {/* Poster */}
                        <img
                            src={`https://image.tmdb.org/t/p/original${tvSerieDetails.data?.poster_path}`}
                            alt=""
                            className='w-[150px] h-[225px] lg:w-[300px] lg:h-[450px] rounded-lg'
                        />
                        {/* Description */}
                        <div className='mt-1 lg:mt-0'>
                                <div>
                                    <h1 className='flex items-center text-3xl max-w-max mx-auto lg:mx-0 lg:text-4xl mb-2'>
                                        <span className='font-bold max-w-max block'>
                                            {tvSerieDetails.data?.name}
                                        </span>
                                        <span className='text-text-disabled'>
                                            ({tvSerieDetails.data?.first_air_date.split('-')[0]})
                                        </span>
                                    </h1>
                                    <div className='flex gap-x-2 max-w-max mx-auto text-xs lg:mx-0 lg:text-sm'>
                                        <ul className='flex gap-x-1 after:content-["•"] after:ml-1'>
                                            {tvSerieDetails.data?.genres.map((genre: GenreType) => (
                                                <li
                                                    key={genre.id}
                                                    className='after:content-[","] last:after:content-[""] hover:underline'
                                                >
                                                    <a href="#">{genre.name}</a>
                                                </li>
                                            ))}
                                        </ul>
                                        <span className='after:content-["•"] after:ml-2 inline-flex items-center'>
                                            {minutesToHours(tvSerieDetails.data?.episode_run_time[0])}
                                            <HiOutlineClock className='ml-1'/>
                                        </span>
                                        <span className='inline-flex items-center'>
                                            {tvSerieDetails.data?.vote_average.toFixed(1)}
                                            <HiStar className="text-yellow-400 ml-1"/>
                                        </span>
                                    </div>
                                    <p className='text-sm mt-3 lg:text-base'>{tvSerieDetails.data?.overview}</p>
                                    <span className='hidden lg:inline-block text-text-disabled italic mt-2'>
                                        {tvSerieDetails.data?.tagline}
                                    </span>
                                </div>
                                <ul className={`${creators ? 'flex gap-x-2 gap-y-6 mt-5' : 'hidden'}`}>
                                    {creators && creators.map(creator => (
                                        <li className='flex flex-col max-w-max' key={creator.id}>
                                            <span className='font-bold'>Criação</span>
                                            <span>{creator.name}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className='flex gap-x-2 max-w-max mx-auto mt-7 lg:mx-0'>
                                    <Button mode='light' Icon={HiPlay}>Trailer</Button>
                                    <Button mode='dark' Icon={HiPlus}>Minha Lista</Button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Credits */}
        <section>
            {tvSerieCredits.data
                ? <Slider title='Elenco'>
                    {tvSerieCredits.data.cast.map((actor: ActorType) => (
                        <div className='mx-2' key={actor.id}>
                            <ActorCard img={actor.profile_path} name={actor.name} character={actor.character} />
                        </div>
                    ))}
                    </Slider>
                : <LoadingSlider numCards={11} title={true}/>
            }
        </section>
    </main>
)}