import styled from 'styled-components';
import { FlexContainer } from './common';
import { backgroundColor, mainFontColor } from '../helpers/colors';

export const ModalWrapper = styled.div`
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1;
    
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgba(0,0,0,0.4);
`;

export const Modal = styled.div`
    position: relative;
    top: 50%;
    margin: auto;
    transform: translate(0, -65%);

    width: 33%;
    padding: 30px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background: ${ mainFontColor } url(https://ucarecdn.com/4c718ce5-e13e-4a2a-8d84-5b01d9c88e9b/patternerror.png) repeat;

    color: #000;
`;

export const ErrorIcon = styled.div`
    padding: 20px;
    width: 80px;
    height: 80px;
    background-color: ${ backgroundColor };
    border-radius: 50%;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    color: ${ mainFontColor };
`;

export const Title = styled.h2`
    background-color: ${ mainFontColor };
`;

export const ActionIcon = styled(FlexContainer)`
    cursor: pointer;
`;