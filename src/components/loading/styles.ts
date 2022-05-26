import styled, { keyframes } from 'styled-components';
import type { LoadingProps } from './';

const animationCircle = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
export const CircularLoadingComponent = styled.div<LoadingProps>`
    display: inline-block;
    position: relative;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border-radius: 50%;
    border: ${(props) => props.borderWidth}px solid ${(props) => props.borderColor};
    border-top-color: ${(props) => props.color};
    animation: ${animationCircle} 1.2s linear infinite;
`;
