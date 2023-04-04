"use client"

import { useQuery } from 'react-query'
import { LoadingScreen, Poster } from '@/components'
import { getCategory } from '@/services/http'
import { useLoading } from '@/hooks'
import { renderSlider } from '@/utils'

// Homepage
export default function Home() {
  const topMoviesQuery = useQuery('top_movies', () => getCategory('movie', 'top_rated'));
  const popularMoviesQuery= useQuery('popular_movies', () => getCategory('movie', 'popular'));
  const latestMoviesQuery = useQuery('latest_movies', () => getCategory('movie', 'now_playing'));
  const topSeriesQuery = useQuery('top_series', () => getCategory('tv', 'top_rated'));
  const popularSeriesQuery = useQuery('popular_series', () => getCategory('tv', 'popular'));

  // Array com todas as requests feitas acima, ao passar para "useLoading" ele me retorna se todas estão ou não no processo de Loading
  const requests = [topMoviesQuery, popularMoviesQuery, latestMoviesQuery, topSeriesQuery, popularSeriesQuery];

  const { loading } = useLoading(requests, 3000); 

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

          {renderSlider('Filmes Lançados Recentemente', latestMoviesQuery.data.results, latestMoviesQuery.isLoading)}

          {renderSlider('Filmes Com as Melhores Avaliações', topMoviesQuery.data.results, topMoviesQuery.isLoading)}

          {renderSlider('Series Com as Melhores Avaliações', topSeriesQuery.data.results, topSeriesQuery.isLoading)}

          {renderSlider('Filmes Tendência', popularMoviesQuery.data.results, popularMoviesQuery.isLoading)}

          {renderSlider('Series Tendência', popularSeriesQuery.data.results, popularSeriesQuery.isLoading)}
        </main>
      )
      }
    </>
  )
}
