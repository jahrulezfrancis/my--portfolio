import { Image, Text, Heading, } from '@chakra-ui/react'
import { motion } from 'framer-motion';
import "./index.css"

const ProjectCard = (props) => {
    const { projectImage, title, client, work, className, id } = props;
    return (
        <>
            <motion.div
                className=""
                layoutId={id}
                // layout
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 2, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{ duration: 4 }}
            >
                <div className={`project-card-container ${className}`}>
                    <Image width="320px" height="" src={projectImage} alt="project image" />
                    <Heading fontSize="1.3rem">{title}</Heading>
                    <Text color="#A8A8A8">Client:{client}</Text>
                    <Text color="#A8A8A8">Work: {work}</Text>
                </div>
            </motion.div>
        </>
    )
}

export default ProjectCard;