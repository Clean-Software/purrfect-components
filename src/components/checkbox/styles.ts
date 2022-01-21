import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    display: inline-block;
    vertical-align: baseline;
    outline: 0;

    & input {
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        outline: 0;
        z-index: 3;
        width: 17px;
        height: 17px;
    }

    & label {
        font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
        padding-left: 1.85714em;
        padding-top: 1px;
        cursor: pointer;

        &:before {
            position: absolute;
            top: 0;
            left: 0;
            width: 17px;
            height: 17px;
            content: '';
            border: 1px solid #d4d4d5;
            border-radius: 3px;
            transition: all 0.1s ease-in-out;
        }

        &:after {
            content: '\\2713';
            position: absolute;
            font-size: 14px;
            top: 0;
            left: 0;
            width: 17px;
            height: 17px;
            text-align: center;
            color: #fff;
        }
    }

    & input:checked + label:before {
        background-color: #1ea7fd;
        z-index: -1;
        border: 1px solid transparent;
    }
`;

export { Container };
