import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { ClientList } from "./ClientList";

export default function TestimonialTemplate() {
    return (
        <div className="testimonial-template-container">
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
    )
}