"use client"

import { MovieCard, Poster, Slider } from '@/components'
import { getCategory, getGenres } from '@/services/http'
import { useEffect } from 'react'
import { useQuery } from 'react-query'

export default function Home() {
  const top_movies = useQuery('top_movies', () => getCategory('movie', 'top_rated'));
  const top_series = useQuery('top_series', () => getCategory('tv', 'top_rated'));

  useEffect(() => console.log(top_movies.data?.results), [top_movies.isLoading])
  
  return (
    <>
      <div className="bg-[#121212] h-[200vh] w-screen">
        <Poster />
      </div>
    </>
  )
}
