import { useState } from "react";
import { Button, Image, Stack } from "@chakra-ui/react";
import Slide1 from "../../../Assets/Images/Img(1).svg"
import Slide2 from "../../../Assets/Images/Img(2).svg"
import Slide3 from "../../../Assets/Images/Img(3).svg"

function Slider() {
    const [slide, setSlide] = useState(1)

    const Slides = [
        {
            index: 1,
            Source: Slide1,
        },
        {
            index: 2,
            Source: Slide2,
        },
        {
            index: 3,
            Source: Slide3,
        }
    ]


    const nextSlide = () => {
        if (slide < 3) {
            setSlide(slide + 1)
        } else if (slide > 3) {
            setSlide(1);
        }
    }

    const prevSlide = () => {
        if (slide > 1) {
            setSlide(slide - 1)
        } else if (slide < 1) {
            setSlide(1);
        }
    }

    return (
        <div slide-container>
            {
                Slides.map((carousel) => {
                    return (
                        (carousel.index === slide) && <Image src={carousel.Source} />
                    )
                })
            }
            <Stack direction="row" spacing={10}>
                <Button onClick={prevSlide}>prev</Button>
                <Button onClick={nextSlide}>next</Button>
            </Stack>
        </div>
    )
}
export default Slider;