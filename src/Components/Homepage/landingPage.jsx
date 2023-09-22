import { Box, Heading, Stack, Text, Image, Center, Icon, List, ListItem, useMediaQuery, HStack, VStack, Button, Flex, ListIcon, Grid, GridItem, } from "@chakra-ui/react";
import ProfilePicture from "../../Assets/Images/Portcover.jpg"
import PinkElements from "../../Assets/Images/header-element.svg"
import Background from "../../Assets/Images/background-image.svg"
import MobileDevice from "../../Assets/Images/iPhone-X.svg"
import StartUpLogo from "../../Assets/Images/web-startup.svg"
import styled from "@emotion/styled";
import Developer from "../../Assets/Images/developer-set-up.svg"
import ProjectCard from "../Common/ProjectCard";
import Project1 from "../../Assets/Images/Img.svg";
import project2 from "../../Assets/Images/Img(1).svg";
import { FaLinkedin, FaTwitter, FaReact, FaCss3Alt, FaHtml5, FaWordpressSimple } from "react-icons/fa";
import TestimonialSlider from "../Common/Slider/Slider";
import { BsFillFileMedicalFill, BsGithub, BsPatchCheckFill } from "react-icons/bs";
import { SiDart, SiJavascript, SiRedux } from "react-icons/si"
import { ProjectList } from "../Common/project-list";
import { Link } from "react-router-dom";
import BounceAnimation from "../Common/AnimationContainers/BounceAnimation";
import HoverAnimate from "../Common/AnimationContainers/HoverAnimate";
import SlideInAnimate from "../Common/AnimationContainers/SlideInAnimation";
import BasicSlideAnimation from "../Common/AnimationContainers/SlideNormAnimation";





function LandingPage() {
    function TextIcon({ icon, label }) {
        return (
            <HStack>
                <Icon as={icon} />
                <Text>{label}</Text>
            </HStack>
        )
    }
    const [isMobileDevice] = useMediaQuery('(max-width: 700px)')
    const [isMediumDevice] = useMediaQuery('(max-width: 1005px) and (min-width: 600px)')
    const [isTabletDevice] = useMediaQuery('(max-width: 1000px) and (min-width: 600px)')
    return (
        <Wrapper>
            <Box position='relative'>
                <Heading textAlign='center' mt={10}>Bring your ideas into life with a perfect web signature</Heading>
                <Image src={PinkElements} position='absolute' />
                <BounceAnimation child={<>
                    <Stack wrap={"wrap"} justify='center' mt="100px" gap={10} direction={isMobileDevice ? 'column' : "row"}>
                        <VStack spacing={10} align='start' width={isMobileDevice ? '90%' : 540}>
                            <Heading >Have you heard about me?</Heading>
                            <Text>I am a front-end engineer with a solid focus on building smart web systems with over 2 years of industrial experience building stunning web solutions. I have a strong foundation in front-end engineering and a gracious passion for web development, which has enabled me to build dynamic, responsive and powerful web applications for multiple industries. I spend quality time on reading user-experience reports to enhance my development process for a better experience. I am solemn with deadlines and don’t take projects of any type or size for granted. My development process is basically user-driven with an adoptable Software Development Life Circle(SDLC). I am actively seeking to learn and apply new technologies to advance my career and the establishments of my client. </Text>
                            <Button color='white' borderRadius='6px' background='var(--Pink_ninja, #DD226D)'>Download resume</Button>
                        </VStack>"
                        <Image borderRadius='15px' width={486} objectFit='contain' height="500px" src={ProfilePicture} />
                    </Stack>
                </>} />
                <Image src={PinkElements} right='10' top={'600'} position='absolute' />
            </Box>

            <Stack spacing={5} justify='center' align='center' textAlign='center' mt="50px" background='var(--Blur_ninja, #121632)' position={"relative"} height={'auto'} padding={8}>
                <Image position='absolute' src={Background} left={10} />
                <Image width={100} src={StartUpLogo} />
                <Heading fontSize='25px' color='#DD226D'>Are you looking for skilled developer to work with?</Heading>
                <Heading color='white'>You are in the right place!</Heading>
                <Text width={!isMobileDevice ? "600px" : '300px'} color='white'>With a drive for continuous learning and a deep interest in emerging web technologies, I'm well-prepared bring your vision to life.Let's work together to create exceptional web experiences.</Text>
            </Stack>

            <Flex minH='808px' wrap='wrap' alignItems='center' justify='space-around' overflow='hidden'>
                <BasicSlideAnimation child={
                    <>
                        <Box display='flex' justifyContent='center' alignItems='center'
                            borderColor="#8C4CF5"
                            position="relative"
                            height={527} width={500} >
                            <Box width='50px' borderRadius={"500%"} zIndex='1' height='65px' position='absolute' background='white' left='80%' top={10} right='0' />
                            <Box borderWidth="20px"
                                borderColor="#8C4CF5"
                                position="absolute" borderRadius="50%"
                                height={527} width={500} />
                            <Box borderWidth="35px"
                                borderColor="#DD226D"
                                position="absolute" left='100px' top='20%' borderRadius="50%"
                                height={330} width={330} />
                            <Image position='absolute' zIndex={2} src={MobileDevice} />
                        </Box>
                    </>
                } />

                <SlideInAnimate child={
                    <>
                        <Stack>
                            <Heading>Building a new product?</Heading>
                            <Text>I can help you launch your product with greater value. I am specialised in</Text>
                            <List spacing='20px'>
                                <ListItem>
                                    <ListIcon color='#8C4CF5' as={BsPatchCheckFill} />
                                    Front End development
                                </ListItem>
                                <ListItem>
                                    <ListIcon color='#8C4CF5' as={BsPatchCheckFill} />
                                    Mobile App Development
                                </ListItem>
                                <ListItem>
                                    <ListIcon color='#8C4CF5' as={BsPatchCheckFill} />
                                    Fullstack dev(React-Js+Firebase)
                                </ListItem>
                                <ListItem>
                                    <ListIcon color='#8C4CF5' as={BsPatchCheckFill} />
                                    Wordpress Development
                                </ListItem>
                                <ListItem>
                                    <ListIcon color='#8C4CF5' as={BsPatchCheckFill} />
                                    Progressive web app
                                </ListItem>
                                <ListItem>
                                    <ListIcon color='#8C4CF5' as={BsPatchCheckFill} />
                                    Third party integrations(payment gateways, firewalls etc)
                                </ListItem>
                                <ListItem>
                                    <ListIcon color='#8C4CF5' as={BsPatchCheckFill} />
                                    Search Engine Optimization
                                </ListItem>
                            </List>
                        </Stack>
                    </>
                } />

            </Flex>

            <SlideInAnimate child={
                <>
                    <HStack wrap='wrap' gap={30} justify='center' background='var(--Pale_ninja, #F4F5F7)' minH={813}>
                        <Stack justify='flex-start' align='flex-start' width={400}>
                            <Heading fontSize={48} color="#121632">Technical Skills</Heading>
                            <Text>I have strong knowledge and experience using these technologies to build quality web systems.</Text>
                            <Flex width='100%' justify='space-between'>
                                <VStack align='start' gap={5} fontSize={18}>
                                    <TextIcon icon={SiJavascript} label='JavaScript' />
                                    <TextIcon icon={FaReact} label='React JS' />
                                    <TextIcon icon={SiDart} label='Dart' />
                                </VStack>
                                <VStack align="start" gap={5} fontSize={18}>
                                    <TextIcon icon={FaWordpressSimple} label='Wordpress' />
                                    <TextIcon icon={FaHtml5} label='HTMl' />
                                    <TextIcon icon={FaCss3Alt} label='CSS' />
                                </VStack>
                            </Flex>
                        </Stack>
                        <Image width={500} src={Developer} alt="developer" />
                    </HStack>
                </>
            } />

            <Box padding='25px 0px' textAlign='center' minH="150px" background="linear-gradient(235deg, #DD226D 33.97%, #8C4CF5 103.21%)">
                <Heading fontWeight={700} fontSize={40}>Still Skeptical?</Heading>
                <Text>You can checkout my recently completed projects</Text>
            </Box>
            <Center m={'30px 0px'}>
                <Grid gap={10} width={!isMobileDevice && !isTabletDevice ? '1000px' : '90%'}
                    gridTemplateColumns={isMobileDevice ? 'repeat(1, 1fr)' : isMediumDevice ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'}>
                    {ProjectList.map((item) => {
                        return (
                            <GridItem id={item.id}>
                                <HoverAnimate child={
                                    <ProjectCard projectImage={item.projectImage} client={item.clientName} projectType={item.projectType} />} />
                            </GridItem>
                        )
                    })}
                </Grid>
            </Center>
            <section>
                <Stack justify='center' align='center' textAlign='center' minH={'500px'} background='var(--Pale_ninja, #F4F5F7)'>
                    <Center width={isMobileDevice ? '300px' : '600px'}>
                        <BounceAnimation child={
                            <>
                                <Heading>Testimonials</Heading>
                                {/* <Heading>See what my clients are saying about me.</Heading> */}
                                <Text fontSize='18px'>Take a look at what my clients have to say about their experience working with me and feel free to reach out if you have any questions or would like to learn more.</Text>
                            </>
                        } />

                    </Center>
                    <TestimonialSlider />
                </Stack>
            </section>
            <Stack p='20px 0px' align='center' justify='center' minH='100px' background='var(--Blur_ninja, #121632)'>
                <HStack align='center' spacing={5} color='white' fontSize={35}>

                    <Link target="blank" to='https://github.com/jahrulezfrancis'>
                        <Icon as={BsGithub} />
                    </Link>

                    <Link target="blank" to="https://www.linkedin.com/in/francis-longsaar-1443b91b3/">
                        <Icon as={FaLinkedin} />
                    </Link>

                    <Link target="blank" to="https://twitter.com/Jahrulezfrancis">
                        <Icon as={FaTwitter} />
                    </Link>
                </HStack>
                <Text textTransform='capitalize' textAlign='start' color='white'>© 2021 Longsaar Francis. All Right reserved</Text>
            </Stack>
        </Wrapper>
    )
}

export default LandingPage;

const Wrapper = styled.section`
    h1, h2, h3, h4{
        font-feature-settings: 'salt' on, 'liga' of
        font-style: normal;
        font-weight: 800;
    }   
`