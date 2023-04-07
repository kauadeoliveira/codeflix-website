import { LoadingCards, Slider, VideoCard } from "@/components";
import { Movie } from "@/types/utils";


// Função que retorna um Slider já pronto baseado nas informações passadas.
export function renderMovieSlider(title: Capitalize<string>, movieArray: Movie[], isLoading: boolean) {
    const moviesWithPoster = movieArray.filter(movie => movie.poster_path);
  
    if(isLoading){
      return <LoadingCards />
    }else{
      return(
        <Slider title={title}>
          {moviesWithPoster.map(movie => (
            <div className="mx-2" key={movie.id}>
              <VideoCard
               img={movie.poster_path}
               route="#"
               title={movie.title}
              />
            </div>
          ))}
        </Slider>
      )
    }
  }