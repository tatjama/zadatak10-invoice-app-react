import styled  from 'styled-components';

export const LinkStyle = styled.p`     
        font-weight: 700;
        color: ${props => props.theme.titleColor};
        img{
            margin-right: 24px;
        }
        &:hover{
            color: ${props => props.theme.paragraphColor};
        }    
`
