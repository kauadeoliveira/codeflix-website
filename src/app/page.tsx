"use client"

import { useEffect, useState } from 'react'
import { LoadingScreen, Poster } from '@/components'
import { useMovies } from '@/hooks' // Hook que retorna dados de filmes recebidos da Api The Movie DB 
import { renderSlider } from '@/utils' // Função utilitaria que renderia um Slider de acordo com as informações passadas.


// Homepage
export default function Home() {
  // Estado que define se LoadingScreen vai ser renderizada ou não
  const [renderLoadingScreen, setRenderLoadingScreen] = useState<boolean>(true);

  // Acessar dados de filmes
  const { allMovies, popularMovies, latestMovies, topMovies } = useMovies();

  // Adiciona um tempo de 3s para LoadingScreen continuar sendo renderizada depois que os dados dos filmes já foram recebidos.
  useEffect(() => {
    if(!allMovies.isLoading){
      const timeoutId = setTimeout(() => setRenderLoadingScreen(false), 3000)

      return () => clearTimeout(timeoutId)
    } 
  }, [allMovies.isLoading])

  return (
    <>
    {renderLoadingScreen ? <LoadingScreen /> : (
      <main className="w-screen flex flex-col gap-3 mb-32">
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

        {popularMovies.data && renderSlider('Filmes Tendência', popularMovies.data, popularMovies.isLoading)}
     </main>
    )}
    </>
  )
}
