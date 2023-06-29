import { Card, Image, Text, Heading, Stack, Divider, ButtonGroup, Button, CardBody, CardFooter } from '@chakra-ui/react'

const ProjectCard = (props) => {
    const { projectImage, title, client, work } = props;
    return (
        <>
            <div className="project-card-container">
                <Image width="320px" height="" src={projectImage} alt="project image" />
                <Heading fontSize="2xl">{title}</Heading>
                <Text color="#A8A8A8">Client:{client}</Text>
                <Text color="#A8A8A8">Work: {work}</Text>
            </div>
        </>
    )
}

export default ProjectCard;