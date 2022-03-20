import styled from 'styled-components';

interface ProgressProps {
    now: number;
    backgroundColor: string;
    progressColor: string;
}

const ProgressBarComponent = styled.div<ProgressProps>`
    height: 0.8rem;
    width: 100%;
    border-radius: 0.4rem;
    background-color: ${({ backgroundColor }) => backgroundColor};
    overflow: hidden;

    & > div {
        width: ${({ now }) => `${now}%`};
        height: 100%;
        background-color: ${({ progressColor }) => progressColor};
        transition: width 0.4s ease;
        overflow: hidden;

        &::after {
            content: '';
            display: block;
            margin-top: -50px;
            height: 100px;
            width: 10px;
            background: #fff;
            position: relative;
            animation: mymove 2.5s infinite ease-in-out;
            transform: rotate(45deg);
            opacity: 0.5;

            @keyframes mymove {
                from {
                    left: -10%;
                }
                to {
                    left: 120%;
                }
            }
        }
    }
`;

export { ProgressBarComponent };
