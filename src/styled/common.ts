import styled, { css } from 'styled-components';
import { colorInput, mainFontColor, hoveredButton } from '../helpers/colors';

const formElement = css`
    font-family: 'Quicksand', sans-serif;
    height: 3rem;
`

export const Form = styled.div`
    position: relative;
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

export const ToogleButton = styled.span`
    position: relative;
    display: block;
    margin-left: 0.6em;
    width: 38px;
    height: 22px;
    background: white;
    border-radius: 999px;
    cursor: pointer;

    &:before {
        content: '';
        position: absolute;
        top: 2px;
        left: 2px;
        display: block;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #FF6666;
        opacity: 0.7;
        transition: all .2s ease-in-out;
    }
    &.checked:before {
        left: calc(100% - 4px - 16px);
        opacity: 1;
    }
`;

export const FlexContainer = styled.div<
{
    $alignBlock?: 'right' | 'center' | 'left', 
    $gap?: string,
    $direction?: 'row' | 'column',
    $marginTop?: string,
}>`
    display: flex;
    flex-direction: ${({ $direction }) => $direction};
    justify-content: ${({ $alignBlock }) => ($alignBlock === 'right' ? 'flex-end' : $alignBlock === 'left' ? 'flex-start' : 'center' )};
    padding-top: ${({ $gap }) => $gap};
    padding-bottom: ${({ $gap }) => $gap};
    margin-top: ${({ $marginTop }) => $marginTop ? $marginTop : 0};
    text-align: ${({ $alignBlock }) => $alignBlock};
`

export const EmojiPickerWrapper = styled.div`
    position: absolute;
`;
