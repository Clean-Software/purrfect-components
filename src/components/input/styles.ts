import styled from 'styled-components';
import { InputProps } from '.';

const handleInputSize = (size?: string): string => {
    switch (size) {
        case 'small':
            return '12px';
        case 'large':
            return '15px';
        default:
            return '14px';
    }
};

const Input = styled.input<InputProps>`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding: 1em;
    border-radius: 0.5em;
    outline: none;
    border: 1px solid ${(props) => (props.error ? '#ff8b82' : '#e6e6e6')};
    color: ${(props) => (props.error ? '#ff6c62' : '#000')};
    font-size: ${(props) => handleInputSize(props.inputSize)};

    &:focus {
        border: 1px solid ${(props) => (props.error ? '#ff8b82' : '#1ea7fd')};
    }

    &::placeholder {
        color: ${(props) => (props.error ? '#ff6c62' : '#b6b6b6')};
    }

    &:focus::placeholder {
        color: ${(props) => (props.error ? '#ff6c62' : '##999')};
    }
`;

export { Input };
