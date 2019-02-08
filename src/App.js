import React from "react";
import styled from "styled-components";
import "./app.css";


const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
`

const DetailsWrapper = styled.div`
  text-align: center;
  margin-top: 15%;
`
const AnimatedSpacer = styled.div`
 border-bottom: solid 2px #019fb6;
  animation: createBox 1s;
  width: 100%;

  @keyframes createBox {
    from {
      transform: scale(0);      
    }
    to {
      transform: scale(1);
    }
  }
`

const Name = styled.h1`
  font-weight: 500;
  font-size: 40px;
  padding: 0;
  margin:0;
  text-transform: uppercase;
`

const JobTitle = styled.h2`
  font-weight: 400;
  font-size: 28px;
  padding: 5px;;
  margin:0;
`
const App = props => {
  return (
    <MainContainer>
      <DetailsWrapper>
        <Name>Gurmukh Singh Sahota</Name>
        <AnimatedSpacer></AnimatedSpacer>
        <JobTitle>Full Stack Developer</JobTitle>
      </DetailsWrapper>
    </MainContainer>
  )
}

export default App;