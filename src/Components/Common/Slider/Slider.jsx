import { useState } from "react";
import { Button, Flex, Image, Stack, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Slide1 from "../../../Assets/Images/Img(1).svg"
import Slide2 from "../../../Assets/Images/Img(2).svg"
import Slide3 from "../../../Assets/Images/Img(3).svg"
import styled from "@emotion/styled";


function TestimonialSlider() {
    const [isMobileDevice] = useMediaQuery('(max-width: 700px)');

    const [slide, setSlide] = useState(1)

    const Slides = [
        {
            index: 1,
            client: "Client 1",
            message: "I really enjoy your services and will definitely recommend you for any type of web dev related jobs",
            imgURL: Slide1,
        },
        {
            index: 2,
            client: "Client 2",
            message: "This is where the client message will go. Cheers to better and honest testimonials",
            imgURL: Slide2,
        },
        {
            index: 3,
            client: "Client 3",
            message: "Somewhat different, This is where the client message will go. Cheers to better and honest testimonials",
            imgURL: Slide3,
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
        } else if (slide < 3) {
            setSlide(1);
        }
    }

    return (
        <Wrapper>
            <div slide-container>
                <Heading fontSize="2rem">What my clients are saying about me!</Heading>
                {
                    Slides.map((carousel) => {
                        return (
                            (carousel.index === slide) &&
                            <>
                                <Flex gap={2}>
                                    <Image width={"auto"} height={200} src={carousel.imgURL} />
                                    <Stack spacing={10} width={isMobileDevice ? "320px" : "400px"}>
                                        <Text>{carousel.client}</Text>
                                        <Text>{carousel.message}</Text>
                                    </Stack>
                                </Flex>

                            </>
                        )
                    })
                }
                <Stack direction="row" spacing={10}>
                    <Button onClick={prevSlide}>prev</Button>
                    <Button onClick={nextSlide}>next</Button>
                </Stack>
            </div>
        </Wrapper>
    )
}
export default TestimonialSlider;


const Wrapper = styled.section`
        .slide-container{
            display: flex;
            flex-direction: column;
            justify-contents: center;
            align-contents: center;
        }
`