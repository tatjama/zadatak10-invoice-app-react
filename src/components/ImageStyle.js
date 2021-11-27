import styled  from 'styled-components';

const ImageContainer = styled.div`
    width: 103px;
    height: 103px;
    border-radius: 0px 20px 20px 0px;
    background-color: ${props => props.primary? "#7C5DFA": "transparent"};
    position: relative;

    @media screen and (max-width: 1000px) {
        width: 80px;
        height: 80px;
    }
    @media screen and (max-width: 600px) {
        width: 72px;
        height: 72px;
    }
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
    @media screen and (max-width: 1000px) {
        width: ${props => props.secondary? "32px": "20px" } ;
        height: ${props => props.secondary? "32px": "20px" } ;
    }
`
export { ImageContainer, Img }