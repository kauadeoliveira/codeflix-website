import { LoadingCards, Slider, VideoCard } from "@/components";
import { Movie } from "@/types/utils";


// Função que retorna um Slider já pronto baseado nas informações passadas.
export function renderSlider(title: Capitalize<string>, videoArray: Movie[], isLoading: boolean) {
    const videosWithPoster = videoArray.filter(video => video.poster_path);
  
    if(isLoading){
      return <LoadingCards />
    }else{
      return(
        <Slider title={title}>
          {videosWithPoster.map(video => (
            <VideoCard
             img={video.poster_path}
             route="#"
             title={video.title}
             key={video.id}
            />
          ))}
        </Slider>
      )
    }
  }