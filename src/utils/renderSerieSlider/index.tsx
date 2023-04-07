import { LoadingCards, Slider, VideoCard } from "@/components";
import { Serie } from "@/types/utils";


// Função que retorna um Slider já pronto baseado nas informações passadas.
export function renderSerieSlider(title: Capitalize<string>, serieArray: Serie[], isLoading: boolean) {
    const seriesWithPoster = serieArray.filter(serie => serie.poster_path);
  
    if(isLoading){
      return <LoadingCards />
    }else{
      return(
        <Slider title={title}>
          {seriesWithPoster.map(serie => (
            <div className="mx-2" key={serie.id}>
              <VideoCard
               img={serie.poster_path}
               route="#"
               title={serie.name}
              />
            </div>
          ))}
        </Slider>
      )
    }
  }