"use client"

import { LoadingCards, LoadingScreen, Poster, Slider, VideoCard } from '@/components'
import { getCategory } from '@/services/http'
import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { Movie } from '@/types/movie'


export default function Home() {
  const top_movies = useQuery('top_movies', () => getCategory('movie', 'top_rated'));
  const popular_movies = useQuery('popular_movies', () => getCategory('movie', 'popular'));
  const latest_movies = useQuery('latest_movies', () => getCategory('movie', 'now_playing'));

  const top_series = useQuery('top_series', () => getCategory('tv', 'top_rated'));
  const popular_series = useQuery('popular_series', () => getCategory('tv', 'popular'));

  const [loading, setLoading] = useState<boolean>(true)
  
  return (
    <>
      {
        loading ? 
        (
          <LoadingScreen />
        ):
        (
          <main className="w-screen flex flex-col gap-3 mb-32">
        {!latest_movies.isLoading && (
          <Poster 
          images={{
            lg: latest_movies.data?.results[0].backdrop_path,
            sm: latest_movies.data?.results[0].poster_path
          }}
          route="#"
          title={latest_movies.data?.results[0].title}
          overview={latest_movies.data?.results[0].overview}
          />
        )}

        {latest_movies.isLoading ? <LoadingCards /> : (
          <Slider title="Filmes Lançados Recentemente">
            {latest_movies.data.results.filter((video: Movie) => video.poster_path).map((video: Movie) => (
              <VideoCard img={video.poster_path} route="#" title={video.title} key={video.id}/>
            ))}
          </Slider>
        )}

        {top_movies.isLoading ? <LoadingCards /> : (
          <Slider title="Filmes Com as Melhores Avaliações">
            {top_movies.data.results.filter((video: Movie) => video.poster_path).map((video: Movie) => (
              <VideoCard img={video.poster_path} route="#" title={video.title} key={video.id}/>
            ))}
          </Slider>
        )}

        {top_series.isLoading ? <LoadingCards /> : (
          <Slider title="Series Com as Melhores Avaliações">
            {top_series.data.results.filter((video: Movie) => video.poster_path).map((video: Movie) => (
              <VideoCard img={video.poster_path} route="#" title={video.title} key={video.id}/>
            ))}
          </Slider>
        )}

        {popular_movies.isLoading ? <LoadingCards /> : (
          <Slider title="Filmes Tendência">
            {popular_movies.data.results.filter((video: Movie) => video.poster_path).map((video: Movie) => (
              <VideoCard img={video.poster_path} route="#" title={video.title} key={video.id}/>
            ))}
          </Slider>
        )}

        {popular_series.isLoading ? <LoadingCards /> : (
          <Slider title="Series Tendência">
            {popular_series.data.results.filter((video: Movie) => video.poster_path).map((video: Movie) => (
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
