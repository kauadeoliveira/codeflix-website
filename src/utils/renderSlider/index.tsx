import { LoadingCards, Slider, VideoCard } from "@/components";
import { Movie, Serie } from "@/types/utils";


// Função que retorna um Slider já pronto baseado nas informações passadas.
export function renderSlider(title: Capitalize<string>, videoArray: Movie[] | Serie[], isLoading: boolean) {
    const videosWithPoster = videoArray.filter(video => video.poster_path);
  
    if(isLoading){
      return <LoadingCards />
    }else{
      return(
        <Slider title={title}>
          {videosWithPoster.map(video => (
            <div className="mx-2" key={video.id}>
              <VideoCard
               img={video.poster_path}
               route="#"
               title={video.title}
              />
            </div>
          ))}
        </Slider>
      )
    }
  }