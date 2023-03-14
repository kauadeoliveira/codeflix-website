"use client"

import Header from '@/components/Header'
import Poster from '@/components/Poster'
import { fetchTopRatedMovies } from '@/utils/fetchMovies'
import { useEffect } from 'react'
import { useQuery } from 'react-query'


export default function Home() {
  const { data } = useQuery('topRated', fetchTopRatedMovies)

  useEffect(() => console.log(data), [data])
  return (
    <>
      <div className='bg-white h-[200vh] w-screen'>
        <Poster />
      </div>
    </>
  )
}
