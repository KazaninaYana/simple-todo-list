import styled from 'styled-components';
import { backgroundColor, mainFontColor } from '../helpers/colors';

export const Wrapper = styled.div`
    max-width: 600px;
    padding: 2rem 3rem 3rem;
    margin: auto;
    background: ${ backgroundColor };
    color: ${ mainFontColor };
    box-shadow: -20px -20px 0px 0px rgba(100,100,100,.1);  
`;

export const Title = styled.h1`
    font-weight: normal;
    font-size: 2.6rem;
    letter-spacing: 0.05em;
    border-bottom: 1px solid rgba(255,255,255,.3); 
`;

export const Subtitle = styled.div`
    font-size: 0.8rem;
    margin-bottom: 0.7rem;
    margin-left: 3px;
    margin-top: 0.2rem;   
`;


