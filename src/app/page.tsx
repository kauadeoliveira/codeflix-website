"use client"

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
        <div className='flex gap-1 bg-red-500'>
        </div>
      </div>
    </>
  )
}
