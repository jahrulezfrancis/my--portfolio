import { Image, Text, Heading, Link, } from '@chakra-ui/react'
import SolidButton from './SolidButton';
import { motion } from 'framer-motion';
import "./index.css"

const ProjectCard = ({ projectImage, title, client, projectType, className, id }) => {
    return (
        <>
            <motion.div
                className=""
                // layoutId={id}
                // layout
                initial={{ opacity: 0, y: -100 }} // Initial state
                animate={{ opacity: 1, y: 0 }} // Animation state
                exit={{ opacity: 0, y: -100 }} // Exit state
                transition={{ duration: 1 }} // Animation duration
            >
                <div className={`project-card-container ${className}`}>
                    <Image width="320px" height="" src={projectImage} alt="project image" />
                    <Heading fontSize="1.3rem">{title}</Heading>
                    <Text color="#A8A8A8">Client:{client}</Text>
                    <Text color="#A8A8A8">Project Type: {projectType}</Text>
                    <a className='link' href='#'>Visit site</a>
                </div>
            </motion.div>
        </>
    )
}

export default ProjectCard;