import styled, { keyframes } from 'styled-components';
import { mainFontColor } from '../helpers/colors';
import { Input } from './common';

export const RowItem = styled.div`
    display: flex;
    margin: 0 -3rem 4px;
    padding: 0 3rem;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
`;

export const ButtonChecked = styled.input`
    border: none;
    background: none;
    appearance: none;
    cursor: pointer;
    color: ${ mainFontColor };
`;

export const Actions = styled.div`
    display: flex;
    gap: 0 10px;

    svg {
        cursor: pointer;
    }
`;

const strikeitem = keyframes`
	to { width:calc(100% + 1rem); }
`

export const Name = styled.div`
    width: 100%;
    padding: 1.1rem 0;
    transition: opacity .2s linear;

    .done {
        position: relative;
        width: min-content;
        opacity:.6;
    }

    .done:before {
        content: '';
        position: absolute;
        top: 50%;
        left: -.5rem;
        display: block;
        width: 0%;
        height: 1px;
        background: #FFF;
        animation: ${ strikeitem } .3s ease-out 0s forwards;
    }
`;

export const Edit = styled.div`
    width: 85%;

    ${ Input } {
        width: 100%;
        height: auto;
        margin: 0.5rem 0;
        padding-top: 0.6em;
        padding-bottom: 0.6em;
        border-radius: 2px;
    }
`;
