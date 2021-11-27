import styled  from 'styled-components';

export const EmptySection = styled.section` 
margin: 140px auto;
width: 242px;
text-align: center;
span{
    font-weight: 700;
}
h2{
     color: ${props => props.theme.titleColor};// #0C0E16;//#FFFFFF;
     margin-bottom: 24px;
}
p{
    color: ${props => props.theme.paragraphColor};// #888EB0;//#DFE3FA
}
@media screen and (max-width:600px){
    margin: 102px auto;
    img{
        width: 193px;
    }
    span span{
            display: none;            
    }
}
`
