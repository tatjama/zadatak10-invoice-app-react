import React from 'react';
import Image from './Image';
import { AsideContainer, ImageMask, ToggleThemeButton }  from './AsideStyle';
import logo  from '../assets/logo.svg';
import moon  from "../assets/icon-moon.svg";
import sun from '../assets/icon-sun.svg';
import avatar from '../assets/image-avatar.jpg';

const Aside = ({theme, setTheme}) => {
    const icon = (theme === "light")? moon: sun;

    const onToggleTheme = () =>{
        (theme === "light")? setTheme("dark"): setTheme("light");
    }

    return (
        <AsideContainer>
            <Image  primary = { true } secondary = { true } src = { logo } alt = { "logo" }/>
            <ImageMask></ImageMask>
            <div >
                <ToggleThemeButton onClick = { onToggleTheme}>
                    <Image 
                        primary = { false }                     
                        secondary = { false } 
                        src = { icon }                      
                    />
                </ToggleThemeButton>
                <Image primary = { false } secondary = { true } src = { avatar } alt = { "avatar" }/>                
            </div>
        </AsideContainer>
    )
}

export default Aside;

