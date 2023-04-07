"use client"

import { LoadingScreen, Poster } from '@/components'
import { useLoading, useMovies, useSeries } from '@/hooks'
import { renderSlider } from '@/utils' // Função utilitaria que renderia um Slider de acordo com as informações passadas.


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

        {latestMovies.data && renderSlider('Filmes Lançados Recentemente', latestMovies.data, latestMovies.isLoading)}

        {topMovies.data && renderSlider('Filmes Com as Melhores Avaliações', topMovies.data, topMovies.isLoading)}

        {topSeries.data && renderSlider('Series Com as Melhores Avaliações', topSeries.data, topSeries.isLoading)}

        {popularMovies.data && renderSlider('Filmes Tendência', popularMovies.data, popularMovies.isLoading)}

        {popularSeries.data && renderSlider('Series Tendência', popularSeries.data, popularSeries.isLoading)}
     </main>
    )}
    </>
  )
}
