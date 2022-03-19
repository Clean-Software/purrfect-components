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
    & > div {
        height: 100%;
        border-radius: 0.4rem;
        background-color: ${({ progressColor }) => progressColor};
        transition: width 0.4s ease;
        width: ${({ now }) => `${now}%`};
        & > div {
            height: 100%;
            width: 10px;
            border-radius: 0.4rem;
            background: ${({ backgroundColor }) => backgroundColor};
            position: relative;
            animation: mymove 2.5s infinite;
            @keyframes mymove {
                from {
                    left: 0px;
                }
                to {
                    left: 99%;
                }
            }
        }
    }
`;

export { ProgressBarComponent };
