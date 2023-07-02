import { Box, Heading, Stack, Text, Image, Spacer, Divider, IconButton, Button } from "@chakra-ui/react";
import NavBar from "../Common/NavBar";
import ProfilePicture from "../Assets/Images/Portcover.jpg"
import styled from "@emotion/styled";
import ProjectCard from "../Common/ProjectCard";
import Project1 from "../Assets/Images/Img.svg";
import project2 from "../Assets/Images/Img(1).svg";
import Testimmonials from "../Common/Testimonials/Testimonials";
import Donations from "../Common/Donations/Donation";
import SolidButton from "../Common/SolidButton";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";



function LandingPage() {
    return (
        <Wrapper>
            <Box>
                <NavBar />
                <Box>
                    <Stack>
                        <Heading mt={8} fontSize="4xl" textAlign="center">Robustful Website Development for Your Brand</Heading>
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
                            <div className="learn-more-btn">
                                <SolidButton title="Learn More About Me" />
                            </div>
                        </Stack>
                        <Image borderRadius="10px" width="350px" src={ProfilePicture} alt="Longsaar Francis" />
                    </Box>

                    <div className="project-highlight-container" id="projects">

                        <div className="expertise-container">
                            <Heading>What I Can Do For you</Heading>
                            <Text>I can transform what you picture as a website into existence</Text>
                        </div>

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
                    <div className="divider-container">
                        <hr />
                    </div>
                    <Divider color='white' />
                    <div className="testimonial">
                        <Testimmonials />
                    </div>
                    <div>
                        <footer className="footer-container">
                            <Heading color="#FF9142">Get In Touch With Me</Heading>
                            <address>Mai Adiko, Rayfield Jos</address>
                            <address>Email: owner@longsaarfrancis.com</address>
                            <Stack direction="row">
                                <IconButton as={FaLinkedin}></IconButton>
                                <IconButton as={FaTwitter}></IconButton>
                                <IconButton as={FaFacebook}></IconButton>
                            </Stack>
                            <hr />
                            <Text>Copyright 2023, deigned by Jahrulez</Text>
                        </footer>
                    </div>
                </Box>
            </Box>
        </Wrapper>
    )
}

export default LandingPage;

const Wrapper = styled.section`
    .project-highlight-container{
        display: flex;
        flex-direction: column;
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
        justify-content: center;
        align-items: center;
        grid-template-columns: 1fr;
        }
    }
    @media(min-width: 700px)and (max-width: 1000px){
        .project-highlight-container .project-list{
        width: auto;
        grid-template-columns: 1fr 1fr;
        }
    }
    .divider-container > hr{
        display: flex;
        width: 90%;
        margin: 20px auto;
    }
    .footer-container{
        padding: 15px;
        background: #020220;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    .footer-container > hr{
        display: flex;
        clear: both;
        width: 90%;
    }
`