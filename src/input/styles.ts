import styled from 'styled-components';

const container = styled.input`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    padding: 1em;
    border-radius: 0.5em;
    border: 1px solid #e6e6e6;
    outline: none;

    &.small {
        font-size: 12px;
    }
    &.medium {
        font-size: 14px;
    }
    &.large {
        font-size: 15px;
    }
    &.normal:focus {
        border: 1px solid #1ea7fd;
    }
    &.normal:focus::placeholder {
        color: #999;
    }
    &.normal::placeholder {
        color: #b6b6b6;
    }
    &.input--error {
        color: #ff6c62;
        border: 1px solid #ff8b82;
    }
    &.input--error::placeholder {
        color: #ff9c95b1;
    }
`;

export default container;