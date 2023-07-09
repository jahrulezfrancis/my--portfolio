import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { ClientList } from "./ClientList";
import styled from "@emotion/styled";

export default function Testimonials() {
    return (
        <Wrapper>
            <Heading fontSize="2rem">What my clients are saying about me!</Heading>
            <div className="testimonials-container">
                <Flex justify="center" flex="2" gap={10} flexWrap="wrap">
                    {ClientList.map((testimonial) => {
                        return (
                            <Stack width={300}>
                                <Heading>{testimonial.client}</Heading>
                                <Text>{testimonial.Message}</Text>
                            </Stack>
                        )
                    })}
                </Flex>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
        .testimonials-container{
            margin: 50px auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
        @media(max-width: 700px){
            .testimonials-container{
                grid-template-columns: 1fr;
            }
        }
`