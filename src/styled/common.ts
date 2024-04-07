import styled from 'styled-components';

export const FlexContainer = styled.div<
{
    $alignBlock?: 'right' | 'center' | 'left', 
    $gap?: string,
    $direction?: 'row' | 'column'
}>`
    display: flex;
    justify-content: ${({ $alignBlock }) => ($alignBlock === 'right' ? 'flex-end' : $alignBlock === 'left' ? 'flex-start' : 'center' )};
    padding-top: ${({ $gap }) => $gap}px;
    padding-bottom: ${({ $gap }) => $gap}px;
    flex-direction: ${({ $direction }) => $direction};
    text-align: ${({ $alignBlock }) => $alignBlock};
`
export const Button = styled.button`
    display: block;
    font-size: 1.5em;
    font-weight: 400;
    padding: 10px 30px;
    background-color: #f5f5f5;
    width: 30%;
    border-radius: 3px;
    border: none;
    margin: 0 auto;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;
`
