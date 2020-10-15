import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import styled from "styled-components";

const Header = () => {
    return (
        <Container>
            <ContainerStart>
                <Logo src="https://scontent-hkt1-1.xx.fbcdn.net/v/t1.0-9/120715882_840330706771480_596008705433697125_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=rENrQVKG44oAX8bVhZd&_nc_ht=scontent-hkt1-1.xx&oh=6fe729caf76d55576a047ae067d5bc04&oe=5FAB9312" />
            </ContainerStart>
            <ContainerCenter>
                <form action="">
                    <WrapperInput>
                        <Input type="text" placeholder="Tìm kiếm ..." /><Button><FiSearch size={18} /></Button>
                    </WrapperInput>
                </form>
            </ContainerCenter>
            <ContainerEnd>
                <WrapperNavbar>
                    <NavbarMenu>
                        <NavbarItem><Link to="" style={{ textDecoration: 'none', paddingRight: '20px' }}>Trang chủ</Link></NavbarItem>
                        <NavbarItem><Link to="" style={{ textDecoration: 'none', paddingRight: '20px' }}>Trang chủ</Link></NavbarItem>
                        <NavbarItem><Link to="" style={{ textDecoration: 'none', paddingRight: '20px' }}>Trang chủ</Link></NavbarItem>
                        <NavbarItem><Link to="" style={{ textDecoration: 'none', paddingRight: '20px' }}>Trang chủ</Link></NavbarItem>
                    </NavbarMenu>
                </WrapperNavbar>
            </ContainerEnd>
        </Container>
    )
};


const Container = styled.div`
    background-color: white;   
    display: flex;
    width: 100vw;
    height: 10vh;
    
`;
const ContainerStart = styled.div`
display: flex;
    width: 10vw;
    padding-left: 80px;
`;
const Logo = styled.img`
    display: flex;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    padding-top: 3px;
    /* max-width: 30px; */
`

const ContainerCenter = styled.div`
    display: flex;
    width:30vw;
`;

const WrapperInput = styled.div`
    display: flex;
    padding-left: 20px;
`

const Input = styled.input`
    width: 40vh;
    height: 3vh;
    margin-top: 20px;
`;
const Button = styled.button`
    width: 10vh;
    height: 4vh;
    margin-top: 20px;
`
const ContainerEnd = styled.div`
    width:40vw;
    padding-left: 80px;
    /* background-color: yellowgreen; */
`;
const WrapperNavbar = styled.div`
    display: flex;
    padding-top: 5px;
    
`
const NavbarMenu = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: row;
    padding-right: 20px;
`;

const NavbarItem = styled.li`
    text-decoration:none;
`

export default Header;