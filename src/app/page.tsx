"use client"

import MovieCard from '@/components/MovieCard'
import Poster from '@/components/Poster'
import { fetchMovie } from '@/utils/fetchMovies'
import { fetchPopularMovies } from '@/utils/fetchPopular'
import { useEffect } from 'react'
import { useQuery } from 'react-query'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Home() {
  // const { data } = useQuery('movie', () => fetchMovie(11216))
  const { data: popular } = useQuery('popular', fetchPopularMovies)

  useEffect(() => console.log(popular), [popular])
  return (
    <>
      <div className='bg-black h-[200vh] w-screen'>
        <Poster />
      </div>
    </>
  )
}
