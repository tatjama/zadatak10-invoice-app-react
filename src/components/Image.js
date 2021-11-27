import React from 'react';
import  { ImageContainer, Img } from './ImageStyle';

const Image = ({primary, secondary, src, logo}) => {
    return (        
            <ImageContainer primary = {primary} secondary = {secondary} >                
                <Img secondary = {secondary} src = { src } alt = { logo } />
            </ImageContainer>            
    )
}

export default Image;

