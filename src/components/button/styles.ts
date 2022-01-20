import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

const handleButtonSize = (size?: string): string => {
    switch (size) {
        case 'small':
            return '12px';
        case 'large':
            return '16px';
        default:
            return '14px';
    }
};

const handleButtonPadding = (size?: string): string => {
    switch (size) {
        case 'small':
            return '10px 16px';
        case 'large':
            return '12px 24px';
        default:
            return '11px 20px';
    }
};

const Button = styled.button<Omit<ButtonProps, 'label'>>`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;

    color: #333;
    background-color: ${({ backgroundColor }) => backgroundColor ?? 'transparent'};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    padding: 10px 16px;

    font-size: ${(props) => handleButtonSize(props.size)};
    padding: ${(props) => handleButtonPadding(props.size)};

    ${(props) =>
        props.primary &&
        css`
            color: #fff;
            background-color: #1ea7fd;
            box-shadow: none;
        `};
`;

export { Button };
