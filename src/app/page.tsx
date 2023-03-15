"use client"

import Carousel from '@/components/Carousel'
import MovieCard from '@/components/MovieCard'
import Poster from '@/components/Poster'
import { fetchMovie } from '@/utils/fetchMovies'
import { useEffect } from 'react'
import { useQuery } from 'react-query'

export default function Home() {
  const { data } = useQuery('movie', () => fetchMovie(11216))

  useEffect(() => console.log(data), [data])
  return (
    <>
      <div className='bg-white h-[200vh] w-screen'>
        <Poster />
        <Carousel>
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </Carousel>
      </div>
    </>
  )
}
