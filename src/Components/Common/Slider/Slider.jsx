import { useState, } from "react";
import { Button, Stack, Heading, Icon, Text, useMediaQuery, Divider, Avatar, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Slide1 from "../../../Assets/Images/Img(1).svg"
import Slide2 from "../../../Assets/Images/Img(2).svg"
import Slide3 from "../../../Assets/Images/Img(3).svg"
import styled from "@emotion/styled";
import { FaQuoteRight } from "react-icons/fa";


function TestimonialSlider(id) {
    const [isMobileDevice] = useMediaQuery('(max-width: 700px)');

    const [slide, setSlide] = useState(1)

    const Slides = [
        {
            index: 1,
            client: "Crac World",
            message: "I really enjoy your services and will definitely recommend you for any type of web dev related jobs",
            imgURL: Slide1,
        },
        {
            index: 2,
            client: "DeleBalogun",
            message: "This is where the client message will go. Cheers to better and honest testimonials",
            imgURL: Slide2,
        },
        {
            index: 3,
            client: "Elite Sherrif Corps",
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
            <div className="slide-container">
                <div className="carousel-container">
                    {!isMobileDevice && <Button mr={5} onClick={prevSlide}>{"<<"}</Button>}
                    {
                        Slides.map((carousel) => {
                            return (
                                (carousel.index === slide) &&
                                <motion.div
                                    className=""
                                    layoutId={id}
                                    // layout
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 2, x: 0 }}
                                    exit={{ opacity: 0, x: 200 }}
                                    transition={{ duration: 0.5 }}
                                    key={carousel.index}
                                >

                                    <VStack padding={8} justify="center" align="center" gap={2} width="18.75em" borderRadius={10} boxShadow="0 2px 4px rgba(255, 255, 255, 0.2)">
                                        <Icon as={FaQuoteRight} />
                                        <Text textAlign="center">{carousel.message}</Text>
                                        <Divider color="white" width="10%" />
                                        <Avatar name={carousel.client} src={carousel.imgURL} />
                                        <Text>{carousel.client}</Text>
                                    </VStack>
                                </motion.div>
                            )
                        })
                    }
                    {!isMobileDevice && <Button ml={5} onClick={nextSlide}>{">>"}</Button>}
                </div>
                {
                    isMobileDevice && <Stack direction="row" spacing={10} width="100%" justify="space-between">
                        <Button onClick={prevSlide}>prev</Button>
                        <Button onClick={nextSlide}>next</Button>
                    </Stack>
                }
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
            align-items: center;
            align-contents: center;
            // padding: 20px;
        }
        .carousel-container{
            display: flex;
            align-items: center;
            padding: 15px 0px;
        }
`