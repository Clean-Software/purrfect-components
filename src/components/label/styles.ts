import styled from 'styled-components';
import color from 'color';

interface LabelProps {
    backgroundColor: string;
}

const Container = styled.div<LabelProps>`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1em;
    width: fit-content;
    background-color: ${({ backgroundColor }) => backgroundColor};
    border-radius: 5px;
    font-weight: 700;
    font-size: 0.85em;
    line-height: 2em;
    padding: 0em 1em;
    overflow: hidden;
    color: ${({ backgroundColor }) => (color(backgroundColor).isDark() ? '#fff' : '#000')};
`;

const Detail = styled.span<LabelProps>`
    background-color: ${({ backgroundColor }) => color(backgroundColor).darken(0.2).hex()};
    padding: 0 0.5em;
    margin: 0 -1em 0 0;
`;

const Image = styled.img`
    width: 2em;
    height: 2em;
    object-fit: contain;
    margin: 0 0 0 -1em;
`;

export { Container, Detail, Image };
