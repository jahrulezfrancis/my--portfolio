import { Image, Text, Heading } from "@chakra-ui/react";

const ProjectCard = (props) => {
    const { projectImage, title, client, work } = props;
    return (
        <div className="project-card-container">
            <Image width="500px" height="" src={projectImage} alt="project image" />
            <Heading>{title}</Heading>
            <Text>Client:{client}</Text>
            <Text>Work: {work}</Text>
        </div>
    )
}

export default ProjectCard;