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

      {latestMovies.data ? <Slider title="Filmes Recentes" productions={latestMovies.data}/> 
      : <LoadingCards numCards={11} title/>}

      {topSeries.data ? <Slider title="Series Com as Melhores Avaliações" productions={topSeries.data}/> 
      : <LoadingCards numCards={5} />}

      {topMovies.data ? <Slider title="Filmes Com as Melhores Avaliações" productions={topMovies.data}/> 
      : <LoadingCards numCards={5} />}

      {popularSeries.data ? <Slider title="Series Em Alta" productions={popularSeries.data}/> 
      : <LoadingCards numCards={5} />}
      
      {popularMovies.data ? <Slider title="Filmes Em Alta" productions={popularMovies.data}/> 
      : <LoadingCards numCards={5} />}
    </main>
  )
}
