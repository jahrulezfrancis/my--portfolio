import { Box, Heading, Stack, VStack, Text, useMediaQuery, Image, Button, Grid, Spacer } from "@chakra-ui/react";
import NavBar from "../Common/NavBar";
import ProfilePicture from "../Assets/Images/Portcover.jpg"
import styled from "@emotion/styled";
import ProjectCard from "../Common/ProjectCard";
import Project1 from "../Assets/Images/Img.svg";
import project2 from "../Assets/Images/Img(1).svg";
import Project3 from "../Assets/Images/Img(2).svg";
import project4 from "../Assets/Images/Img(3).svg";
import Testimmonials from "../Common/Testimonials/Testimonials";



function LandingPage() {
    const [isMobileDevice] = useMediaQuery('(max-width: 700px)')
    return (
        <Wrapper>
            <Box color="white">
                <NavBar />
                <Box>
                    <Stack>
                        <Heading fontSize="4xl" textAlign="center">Robustful Website Development for Your Brand</Heading>
                    </Stack>

                    <Spacer boxSize="100px" />
                    <Box id="about" display="flex" flexWrap="wrap" justifyContent={"space-around"}>
                        <Stack spacing={2} align="start" justify="center">
                            <Heading fontSize="25px">have you heard about me? </Heading>
                            <Text style={{ width: "350px" }} color="#A8A8A8">
                                I am a front-end developer with a special focus on building Javascript web systems. I have years of
                                experience building scalable, fast, responsive, and lightweight websites. I am steadfast in completing tasks
                                and projects within designated periods.
                            </Text>
                            <Button mt={10} borderRadius={15} w="200px" p="15px 30px" bgColor={"#FF9142"}>Learn more about me</Button>
                        </Stack>
                        <Image borderRadius="10px" width="350px" src={ProfilePicture} alt="Longsaar Francis" />
                    </Box>

                    <div className="project-highlight-container" id="projects">
                        <Heading mb="50px" textAlign="center" fontSize="30px">My projects highlight</Heading>
                        <div className="project-list">
                            <ProjectCard title="wed design" client="Dele balogun" work="Book library" projectImage={Project1} />
                            <ProjectCard title="Web development" client="Crac World" work="Real Esate website" projectImage={project2} />
                            <ProjectCard title="wed design" client="Dele balogun" work="Book library" projectImage={Project1} />
                            <ProjectCard title="Web development" client="Crac World" work="Real Esate website" projectImage={project2} />
                            <ProjectCard title="wed design" client="Dele balogun" work="Book library" projectImage={Project1} />
                            <ProjectCard title="Web development" client="Crac World" work="Real Esate website" projectImage={project2} />
                        </div>
                    </div>
                    <div className="testimonial">
                        <Testimmonials />
                    </div>
                </Box>
            </Box>
        </Wrapper>
    )
}

export default LandingPage;

const Wrapper = styled.section`
    .project-highlight-container{
        margin-top: 100px;
    }
    .project-highlight-container .project-list{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        margin: auto;
        gap: 1em;
        width: 750px;
    }
    @media(max-width: 700px){
        .project-highlight-container .project-list{
        width: auto;
        grid-template-columns: 1fr;
        }
    }
    @media(min-width: 700px)and (max-width: 1000px){
        .project-highlight-container .project-list{
        width: auto;
        grid-template-columns: 1fr 1fr;
        }
    }
`