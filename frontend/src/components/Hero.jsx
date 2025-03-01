import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden; 

`

const Wrapper = styled.div`
height:100%;
display:flex;

`



const Slide = styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:rgb(138, 3, 205);
background-image: url("https://www.transparenttextures.com/patterns/black-mamba.png");
`



const ImgContainer = styled.div`
height:100%;
flex:1;
`

const Image = styled.img`
height:80%;
`



const Title = styled.h1`
font-size:70px;
color:#EEEEEE;
margin-left:5%;
`

const InfoContainer = styled.div`
flex:1;
padding:50px;
`;

const Description = styled.p`
    margin:30px 0px;
    font-size:32px;
    font-weight:600;
    letter-spacing:3px;
    color:#EEEEEE;
    margin-left:5%;
`
const Button = styled.button`
    padding:15px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
    color:#EEEEEE;
    background-color:#5cb85c;
    border:none;
    border-radius:15px;
    margin-left:5%;
    &:hover {
        background-color:rgb(67, 54, 247);
      }
`

const Hero = () => {
    return (
        <Container>
            <Wrapper>
                <Slide>
                    <InfoContainer>
                        <Title>
                        Quiz Master
                        </Title>
                        <Description>
                        QuizMaster is a fun and interactive quiz game website where users can test their knowledge across various categories.
                        </Description>
                        <Button>
                            <Link to="/dashboard" style={{ textDecoration: "none", color:"#EEEEEE"}}>
                            Start playing now 🎮 &gt;&gt;
                            </Link>
                        </Button>
                    </InfoContainer>
                    <ImgContainer>
                        <Image src="https://i.ibb.co/9sCCj2b/exam.png" />
                    </ImgContainer>
                </Slide>
            </Wrapper>
        </Container>
    )
}

export default Hero