import { FunctionComponent, HTMLAttributes } from 'react';
import { ProgressBarComponent } from './styles';
export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
    now: number;
    backgroundColor?: string;
    progressColor?: string;
}

export const ProgressBar: FunctionComponent<ProgressBarProps> = ({
    backgroundColor = '#e6e6e6',
    progressColor = '#a7ffa7',
    ...rest
}: ProgressBarProps) => {
    return (
        <ProgressBarComponent backgroundColor={backgroundColor} progressColor={progressColor} {...rest}>
            <div className="progress" />
        </ProgressBarComponent>
    );
};
