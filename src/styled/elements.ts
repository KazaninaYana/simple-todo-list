import styled from 'styled-components';
import { mainFontColor } from '../helpers/colors';

export const RowItem = styled.div`
    display: flex;
    margin: 0 -3rem 4px;
    padding: 1.1rem 3rem;
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
`;


export const Name = styled.span`
    transition: opacity .2s linear;
`;