"use client"

import { LoadingSlider, Poster, ProductionCard, Slider } from "@/components";
import { useMovies, useSeries } from "@/hooks";




// Homepage
export default function Home() {
  const { topMovies, popularMovies, latestMovies } = useMovies();
  const { topSeries, popularSeries } = useSeries();


  return (
    <main className="flex flex-col gap-3">
      {latestMovies.data 
        && <Poster
         images={{lg: latestMovies.data[0].backdrop_path, sm: latestMovies.data[0].poster_path}}
         overview={latestMovies.data[0].overview}
         route='#'
         title={latestMovies.data[0].title ?? ''}
        />
      }

      {popularMovies.data
        ? <Slider title="Filmes em Alta">
            {popularMovies.data.map(movie => (
              <div className="mx-2" key={movie.id}>
                  <ProductionCard img={movie.poster_path} route={`/movie/${movie.id}`} title={movie.title} />
              </div>
            ))}
          </Slider>
        : <LoadingSlider numCards={11} title={true} />
      }

      {popularSeries.data
        ? <Slider title="Series em Alta">
            {popularSeries.data.map(serie => (
              <div className="mx-2" key={serie.id}>
                <ProductionCard img={serie.poster_path} route={`/tvserie/${serie.id}`} title={serie.name} />
              </div>
            ))}
          </Slider>
        : <LoadingSlider numCards={11} title={true} />
      }

      {latestMovies.data
        ? <Slider title="Filmes Lançamento">
            {latestMovies.data.map(movie => (
              <div className="mx-2" key={movie.id}>
                <ProductionCard img={movie.poster_path} route={`/movie/${movie.id}`} title={movie.title} />
              </div>
            ))}
          </Slider>
        : <LoadingSlider numCards={11} title={true} />
      }

      {topMovies.data 
        ? <Slider title="Filmes com as Melhores Notas">
            {topMovies.data.map(movie => (
              <div className="mx-2" key={movie.id}>
                <ProductionCard img={movie.poster_path} route={`/movie/${movie.id}`} title={movie.title} />
              </div>
            ))}
          </Slider>
        : <LoadingSlider numCards={11} title={true} />
      }

      {topSeries.data
        ? <Slider title="Series com as Melhores Notas">
            {topSeries.data.map(serie => (
              <div className="mx-2" key={serie.id}>
                <ProductionCard img={serie.poster_path} route={`/tvserie/${serie.id}`} title={serie.name} />
              </div>
            ))}
          </Slider>
        : <LoadingSlider numCards={11} title={true} />
      }
    </main>
  )
}
