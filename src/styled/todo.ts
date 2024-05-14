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

export const Grid = styled.div`
    margin-top: 2.6rem;
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

export const TabsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
`;

export const Tab = styled.div`
    padding: 0.5em 2em;
    background: rgba(100,100,100,.1);
    cursor: pointer;

    &.active {
        border-bottom:4px solid rgba(255, 255, 255, .3);
        background: rgb(155 254 247 / 10%);
    }
`;

export const Empty = styled.div`
    margin: 0 -3rem;
    padding: 1.0em 0;
    background: rgba(255, 255, 255, 0.1);
    text-align: center;
    letter-spacing: .05em;
    font-style: italic;
    opacity: 0.8;
`;
