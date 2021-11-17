import React from 'react';
import styled  from 'styled-components';

const Image = ({primary, secondary, src, logo}) => {
    return (        
            <ImageContainer primary = {primary} secondary = {secondary} >                
                <Img secondary = {secondary} src = { src } alt = { logo } />
            </ImageContainer>            
    )
}

export default Image;


const ImageContainer = styled.div`
    width: 103px;
    height: 103px;
    border-radius: 0px 20px 20px 0px;
    background-color: ${props => props.primary? "#7C5DFA": "transparent"};
    position: relative;
    cursor: ${props => !props.secondary && "pointer"} ;
    
`;

const Img = styled.img`
    width: ${props => props.secondary? "40px": "20px" } ;
    height: ${props => props.secondary? "40px": "20px" } ;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;
    z-index: 10;
`