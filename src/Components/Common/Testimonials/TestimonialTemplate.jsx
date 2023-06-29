import { Heading, Text } from "@chakra-ui/react";
import { ClientList } from "./ClientList";

export default function TestimmonialTemplate(props) {
    const { clientName, clientMessage } = props;
    return (
        <div className="testimonial-template-container">
            <div className="clients-container">
                <Heading>{clientName}</Heading>
                <Text>{clientMessage}</Text>
            </div>
        </div>
    )
}