"use client"

import { LoadingCards, Poster, Slider, VideoCard } from '@/components'
import { getCategory, getGenres } from '@/services/http'
import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { Movie } from '@/types/movie'
import { getDetails } from '@/services/http/getDetails'

export default function Home() {
  const top_movies = useQuery('top_movies', () => getCategory('movie', 'top_rated'));
  const popular_movies = useQuery('popular_movies', () => getCategory('movie', 'popular'));
  const latest_movies = useQuery('latest_movies', () => getCategory('movie', 'now_playing'));

  const top_series = useQuery('top_series', () => getCategory('tv', 'top_rated'));
  const popular_series = useQuery('popular_series', () => getCategory('tv', 'popular'));

  const latest = useQuery('latest', () => getCategory('tv', 'latest'));

  useEffect(() => console.log(latest.data), [latest.isLoading])

  return (
    <>
      <div className="bg-main-color w-screen flex flex-col gap-3">
        <Poster 
         images={{
          lg: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/a2tys4sD7xzVaogPntGsT1ypVoT.jpg',
          md: 'https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/a2tys4sD7xzVaogPntGsT1ypVoT.jpg',
          sm: 'https://image.tmdb.org/t/p/original/kCULfWcKxjzYD2NweXkBdEzeLFC.jpg',
         }}
         route="#"
         title="Cocaine Bear"
         overview={latest_movies.data?.results[0].overview}
        />

        {latest_movies.isLoading ? <LoadingCards /> : (
          <Slider title="Filmes Lançados Recentemente">
            {latest_movies.data.results.map((video: Movie) => (
              <VideoCard img={video.poster_path} route="#" title={video.title} key={video.id}/>
            ))}
          </Slider>
        )}

        {top_movies.isLoading ? <LoadingCards /> : (
          <Slider title="Filmes Com as Melhores Avaliações">
            {top_movies.data.results.map((video: Movie) => (
              <VideoCard img={video.poster_path} route="#" title={video.title} key={video.id}/>
            ))}
          </Slider>
        )}

        {top_series.isLoading ? <LoadingCards /> : (
          <Slider title="Series Com as Melhores Avaliações">
            {top_series.data.results.map((video: Movie) => (
              <VideoCard img={video.poster_path} route="#" title={video.title} key={video.id}/>
            ))}
          </Slider>
        )}

        {popular_movies.isLoading ? <LoadingCards /> : (
          <Slider title="Filmes Tendência">
            {popular_movies.data.results.map((video: Movie) => (
              <VideoCard img={video.poster_path} route="#" title={video.title} key={video.id}/>
            ))}
          </Slider>
        )}

        {popular_series.isLoading ? <LoadingCards /> : (
          <Slider title="Series Tendência">
            {popular_series.data.results.map((video: Movie) => (
              <VideoCard img={video.poster_path} route="#" title={video.title} key={video.id}/>
            ))}
          </Slider>
        )}
      </div>
    </>
  )
}
