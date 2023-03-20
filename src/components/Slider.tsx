import { useWindowSize } from '@/hooks/useWindowSize';
import { ChildrenType } from '@/types/children';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

type SliderProps = {
    children: ChildrenType;
    title?: Capitalize<string>;
}
export default function Slider({ children, title }: SliderProps) {
    const { width } = useWindowSize();
    const responsive = {
        mobile_sm: {
            breakpoint: {
              max: 425,
              min: 0
            },
            items: 3,
            partialVisibilityGutter: 30
        },
        mobile_lg: {
            breakpoint: {
              max: 550,
              min: 426
            },
            items: 3.5,
            partialVisibilityGutter: 30
        },
        tablet_sm: {
            breakpoint: {
              max: 650,
              min: 551
            },
            items: 4.5,
            partialVisibilityGutter: 30
        },
        tablet_lg: {
            breakpoint: {
              max: 950,
              min: 651
            },
            items: 5.5,
            partialVisibilityGutter: 30
        },
        desktop_sm: {
            breakpoint: {
                max: 1200,
                min: 950
            },
            items: 8.5,
            partialVisibilityGutter: 30
        },
        desktop_lg: {
            breakpoint: {
                max: 3000,
                min: 1201
            },
            items: 9.5,
            partialVisibilityGutter: 30
        }
      }



    return(
        <div className="p-2">
            <h2 className="text-xl font-bold mb-2 ml-1 capitalize">{title}</h2>
            <Carousel
             responsive={responsive}
             infinite
             slidesToSlide={width && width > 950 ? 7 : width && width > 550 ? 3 : 2}
            >
                {children}
            </Carousel>
        </div>
    )
}