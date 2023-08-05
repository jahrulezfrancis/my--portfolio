import { Image, Text, Heading, } from '@chakra-ui/react'
import "./index.css"

const ProjectCard = (props) => {
    const { projectImage, title, client, work, className } = props;
    return (
        <>
            <div className={`project-card-container ${className}`}>
                <Image width="320px" height="" src={projectImage} alt="project image" />
                <Heading fontSize="1.3rem">{title}</Heading>
                <Text color="#A8A8A8">Client:{client}</Text>
                <Text color="#A8A8A8">Work: {work}</Text>
            </div>
        </>
    )
}

export default ProjectCard;