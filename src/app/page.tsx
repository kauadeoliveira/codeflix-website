"use client"

import { LoadingCards, Poster, Slider } from "@/components";
import { useMovies, useSeries } from "@/hooks";




// Homepage
export default function Home() {
  const { topMovies, popularMovies, latestMovies } = useMovies();
  const { topSeries, popularSeries } = useSeries();


  return (
    <main className="flex flex-col gap-3 mb-32">
      {latestMovies.data && 
      <Poster
       images={{lg: latestMovies.data[0].backdrop_path, sm: latestMovies.data[0].poster_path}}
       overview={latestMovies.data[0].overview}
       route='#'
       title={latestMovies.data[0].title ?? ''}
      />}

      {latestMovies.data ? <Slider title="Filmes Recentes" productions={latestMovies.data}/> : <LoadingCards />}
      {topSeries.data ? <Slider title="Series Com as Melhores Avaliações" productions={topSeries.data}/> : <LoadingCards />}
      {topMovies.data ? <Slider title="Filmes Com as Melhores Avaliações" productions={topMovies.data}/> : <LoadingCards />}
      {popularSeries.data ? <Slider title="Series Em Alta" productions={popularSeries.data}/> : <LoadingCards />}
      {popularMovies.data ? <Slider title="Filmes Em Alta" productions={popularMovies.data}/> : <LoadingCards />}
    </main>
  )
}
