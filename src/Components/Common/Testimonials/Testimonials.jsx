import { Flex, Heading } from "@chakra-ui/react";
import TestimonialTemplate from "./TestimonialTemplate";
import styled from "@emotion/styled";

export default function Testimonials() {
    return (
        <Wrapper>
            <div className="testimonials-container">
                <div style={{marginBottom: "10px"}}>
                    <Heading fontSize="30px">What my clients are saying</Heading>
                </div>
                <Flex>
                    <TestimonialTemplate />
                </Flex>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
        .testimonials-container{
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .testimonials-container .testimonials{
display:  flex;
        }
`