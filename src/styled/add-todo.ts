import styled, { css } from 'styled-components';
import { colorInput, mainFontColor, hoveredButton } from '../helpers/colors';

const formElement = css`
    font-family: 'Quicksand', sans-serif;
    height: 3rem;
`

export const Form = styled.div`
    margin-top: 1.5rem;
    display: flex;
`;

export const Input = styled.input`
    flex-grow: 1;
    border: none;
    background: ${ colorInput };
    padding: 0 1.5em;
    font-size: initial;
    outline: none;

    ${ formElement }
`;

export const Button = styled.button`
	padding: 0 1.3rem;
	border: none;
	background: transparent;
	color: ${ mainFontColor };
	text-transform: uppercase;
	font-weight: bold;
	border: 1px solid rgba(255,255,255,.3);
	margin-left: 5px;
	cursor: pointer;
	transition: background .2s ease-out;

    ${ formElement }

    &:hover {
        background: ${ hoveredButton };
    }
`;
