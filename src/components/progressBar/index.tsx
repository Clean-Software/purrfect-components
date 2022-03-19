import { ProgressBarComponent } from './styles';
import { FunctionComponent, ReactHTMLElement } from 'react';

export interface ProgressBarProps extends ReactHTMLElement<HTMLDivElement> {
    now: number;
    backgroundColor: string;
    progressColor: string;
}

export const ProgressBar: FunctionComponent<ProgressBarProps> = ({
    now = 0,
    backgroundColor = '#000',
    progressColor = 'green',
}: ProgressBarProps) => {
    return (
        <ProgressBarComponent now={now} backgroundColor={backgroundColor} progressColor={progressColor}>
            <div>
                <div />
            </div>
        </ProgressBarComponent>
    );
};
