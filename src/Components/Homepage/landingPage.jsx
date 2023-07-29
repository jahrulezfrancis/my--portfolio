import { Box, Heading, Stack, Text, Image, Spacer, Icon, List, ListItem, useMediaQuery } from "@chakra-ui/react";
import NavBar from "../Common/NavBar";
import ProfilePicture from "../../Assets/Images/Portcover.jpg"
import styled from "@emotion/styled";
import ProjectCard from "../Common/ProjectCard";
import Project1 from "../../Assets/Images/Img.svg";
import project2 from "../../Assets/Images/Img(1).svg";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import TestimonialSlider from "../Common/Slider/Slider";



function LandingPage() {
    const [isMobileDevice] = useMediaQuery('(max-width: 700px)')
    const [isTabletDevice] = useMediaQuery('(min-width: 600px and max-width: 1000px)')
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
                            <Heading fontSize="1.75rem">Have you heard about me? </Heading>
                            <Text className="about" width={isMobileDevice ? "320px" : isTabletDevice ? "500px" : "600px"} color="#A8A8A8">
                                I am a front-end engineer with a special focus on building React JS and WordPress web systems, with over 3 years
                                of experience building scalable, fast, and visually stunning web solutions that elevate user experiences.
                                I have a strong foundation in front-end engineering and a gracious passion for web development, which has enabled
                                me to build dynamic and responsive websites that are precisely suited to the specific needs of each client.
                                I am solemn with deadlines and don't take projects of any type or size for granted because I believe people's ideas are as important.
                                I am also interested in Cyber Security and open to any growth opportunity.
                            </Text>
                        </Stack>
                        <Image borderRadius="10px" width="350px" src={ProfilePicture} alt="Longsaar Francis" />
                    </Box>

                    <div className="expertise-container">
                        <Stack className="expertise">
                            <Heading fontSize="1.75rem">Things I Can Do For you</Heading>
                            <List>
                                <ListItem>I can build you a professional website for your brand or bussiness</ListItem>
                                <ListItem>I can optimize existing websites performance </ListItem>
                                <ListItem>I can create a personal / commercial fullstack responsive website using wordpress</ListItem>
                                <ListItem>I can update your existing website and give it a mobile app speed with instant rendering</ListItem>
                                <ListItem>I can integrate third party tools to an existing website such as payment gateways, woocommerce, auto mail responders, etc.</ListItem>
                            </List>
                        </Stack>
                    </div>

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
                    <div className="divider-container">
                        <hr />
                    </div>
                    <div className="testimonial-container">
                        <TestimonialSlider />
                    </div>
                    <div>
                        <footer className="footer-container">
                            <hr />
                            <Heading fontSize="28px" color="#FF9142">Get In Touch With Me</Heading>
                            <address>Mai Adiko, Rayfield Jos</address>
                            <address>Email: owner@longsaarfrancis.com</address>
                            <Stack fontSize="25px" direction="row">
                                <a href="https://www.linkedin.com/in/francis-longsaar-1443b91b3" target="_">
                                    <Icon as={FaLinkedin} />
                                </a>
                                <a href="https://twitter.com/Jahrulezfrancis" target="_">
                                    <Icon as={FaTwitter} />
                                </a>
                                <a href="https://www.facebook.com/jahrulezfrancis" target="_">
                                    <Icon as={FaFacebook} />
                                </a>
                            </Stack>
                            <Text>Copyright 2023, deigned by Jahrulez</Text>
                        </footer>
                    </div>
                </Box>
            </Box>
        </Wrapper >
    )
}

export default LandingPage;

const Wrapper = styled.section`
    .project-highlight-container{
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        margin-top: 100px;
    }
    .expertise-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
    }
    .expertise-container .expertise > ul{
        list-style-type: square;
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
    @media(max-width: 900px){
        .about{
            text-align: center;
        }
    }
    .divider-container > hr{
        display: flex;
        width: 60%;
        margin: 20px auto;
    }
    .footer-container{
        margin-top: 100px;
        padding: 15px;
        // background: #020220;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
    .footer-container > hr{
        display: flex;
        clear: both;
        width: 100%;
    }
    .footer-container > p, .footer-container > address{
        font-size: 13px;
    }
    .testimonial-container{
        display: flex;
        justify-content: center;
    }
`