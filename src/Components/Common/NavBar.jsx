import { HStack, Spacer, useMediaQuery } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import "./index.css"
import Donations from "./Donations/Donation";

export default function NavBar() {
    const [isMobileDevice] = useMediaQuery('(max-width: 700px)')

    return (
        <Wrapper>
            <div style={{ display: isMobileDevice ? "none" : "" }} className="navbar-container">
                <HStack className="nav-links" p="20px" spacing="5">
                    <NavLink to="/">Longsaar Francis</NavLink>
                    <Spacer />
                    <a href="#about">About me</a>
                    <a href="#projects">My works</a>
                    <a href="#contact">Contact</a>
                    <Donations />
                </HStack>
            </div>
            <Outlet />
        </Wrapper>
    )
}



const Wrapper = styled.section`
    .navbar-container{
            font-size: 0.875rem;
            font-family: Rubik;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            text-transform: uppercase;
            box-shadow: 5px 5px 5px #010222;
    }
    .navbar-container .nav-links
    .donate-btn{
        border-radius: 20px;
        padding: 10px;
        border: 2px solid rgba(255, 255, 255, 0.30);
        background: rgba(3, 3, 4, 0.50);
    }
`