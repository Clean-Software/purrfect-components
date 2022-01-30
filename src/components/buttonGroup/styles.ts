import styled from 'styled-components';

const ButtonGroup = styled.div<{
    direction?: 'row' | 'column';
}>`
    display: flex;
    flex-direction: ${(props) => props.direction || 'row'};
    button {
        padding: 10px 24px;
        cursor: pointer;
        float: left;

        width: 100%;
        margin: 0;
        border-radius: 0;
    }
`;

export { ButtonGroup };
