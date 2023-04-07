"use client"

import { LoadingCards, LoadingScreen, Poster, Slider, VideoCard } from '@/components'
import { useLoading, useMovies, useSeries } from '@/hooks'
import { renderMovieSlider, renderSerieSlider } from '@/utils' // Função utilitaria que renderia um Slider de acordo com as informações passadas.


// Homepage
export default function Home() {
  const { allMovies, popularMovies, latestMovies, topMovies } = useMovies(); // Acessar dados de filmes
  const { allSeries, popularSeries, topSeries } = useSeries();  // Acessar dados de filmes

  const { loading } = useLoading([allSeries, allMovies], 3000); // Verifica se allSeries e allMovies já sairam do estado de Loading.

  return (
    <>
    {loading ? <LoadingScreen /> : (
      <main className="flex flex-col gap-3 mb-32">
        {latestMovies.data && (
          <Poster 
           images={{
             lg: latestMovies.data[0].backdrop_path,
             sm: latestMovies.data[0].poster_path
           }}
           route="#"
           title={latestMovies.data[0].title}
           overview={latestMovies.data[0].overview}
          />
        )}

        { latestMovies.data && renderMovieSlider('Filmes Lançamentos', latestMovies.data, latestMovies.isLoading) }

        { popularSeries.data && renderSerieSlider('Series em Alta', popularSeries.data, popularSeries.isLoading) }
        
        { popularMovies.data && renderMovieSlider('Filmes Em alta', popularMovies.data, popularMovies.isLoading) }

        { topSeries.data && renderSerieSlider('Series com as melhores avaliações', topSeries.data, topSeries.isLoading) }

        { topMovies.data && renderMovieSlider('Filmes com as melhores avaliações', topMovies.data, topMovies.isLoading) }


     </main>
    )}
    </>
  )
}
