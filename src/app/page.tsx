"use client"

import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { LoadingCards, LoadingScreen, Poster, Slider, VideoCard } from '@/components'
import { getCategory } from '@/services/http'
import { Movie } from '@/types/utils/movie'
import { useGenres, useLoading } from '@/hooks'


export default function Home() {
  const topMoviesQuery = useQuery('top_movies', () => getCategory('movie', 'top_rated'));
  const popularMoviesQuery= useQuery('popular_movies', () => getCategory('movie', 'popular'));
  const latestMoviesQuery = useQuery('latest_movies', () => getCategory('movie', 'now_playing'));
  const topSeriesQuery = useQuery('top_series', () => getCategory('tv', 'top_rated'));
  const popularSeriesQuery = useQuery('popular_series', () => getCategory('tv', 'popular'));

  // Array com todas as requests feitas acima, ao passar para "useLoading" ele me retorna se todas estão ou não no processo de Loading
  const requests = [topMoviesQuery, popularMoviesQuery, latestMoviesQuery, topSeriesQuery, popularSeriesQuery];

  const { loading } = useLoading(requests, 3000); 

  useEffect(() => console.log(loading), [loading])
  return (
    <>
      {
        loading ? 
        (
          <LoadingScreen />
        ) 
        :
        (
          <main className="w-screen flex flex-col gap-3 mb-32">
          {!latestMoviesQuery.isLoading && (
            <Poster 
            images={{
              lg: latestMoviesQuery.data.results[0].backdrop_path,
              sm: latestMoviesQuery.data.results[0].poster_path
            }}
            route="#"
            title={latestMoviesQuery.data.results[0].title}
            overview={latestMoviesQuery.data.results[0].overview}
            />
          )}

          {latestMoviesQuery.isLoading ? <LoadingCards /> : (
            <Slider title="Filmes Lançados Recentemente">
              {latestMoviesQuery.data.results.filter((video: Movie) => video.poster_path).map((video: Movie) => (
                <VideoCard img={video.poster_path} route="#" title={video.title} key={video.id}/>
              ))}
            </Slider>
          )}

          {topMoviesQuery.isLoading ? <LoadingCards /> : (
            <Slider title="Filmes Com as Melhores Avaliações">
              {topMoviesQuery.data.results.filter((video: Movie) => video.poster_path).map((video: Movie) => (
                <VideoCard img={video.poster_path} route="#" title={video.title} key={video.id}/>
              ))}
            </Slider>
          )}

          {topSeriesQuery.isLoading ? <LoadingCards /> : (
            <Slider title="Series Com as Melhores Avaliações">
              {topSeriesQuery.data.results.filter((video: Movie) => video.poster_path).map((video: Movie) => (
                <VideoCard img={video.poster_path} route="#" title={video.title} key={video.id}/>
              ))}
            </Slider>
          )}

          {popularMoviesQuery.isLoading ? <LoadingCards /> : (
            <Slider title="Filmes Tendência">
              {popularMoviesQuery.data.results.filter((video: Movie) => video.poster_path).map((video: Movie) => (
                <VideoCard img={video.poster_path} route="#" title={video.title} key={video.id}/>
              ))}
            </Slider>
          )}

          {popularSeriesQuery.isLoading ? <LoadingCards /> : (
            <Slider title="Series Tendência">
              {popularSeriesQuery.data.results.filter((video: Movie) => video.poster_path).map((video: Movie) => (
                <VideoCard img={video.poster_path} route="#" title={video.title} key={video.id}/>
              ))}
            </Slider>
          )}
        </main>
      )
      }
    </>
  )
}
