import React from 'react'
import styled from "styled-components";
import Section from "./Section";

function Home() {
    return (
        <Container>
            <Section
                title="TinEnt"
                description="Startup for Startups"
                backgroundImg="image11.png"
                leftBtnText="Sign Up"
                rightBtnText="Log In"
            />
            <Section
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg="image22.png"
                
            
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg="image33.png"
                
            
            
            />
            <Section
            title="Model X"
            description="Order Online for Touchless Delivery"
            backgroundImg="image44.png"
            /> 


            
        </Container>
    )
}

export default Home

const Container=styled.div`
    height:100vh;
    
`