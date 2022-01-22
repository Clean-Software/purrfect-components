import { FunctionComponent, ReactNode } from 'react';
import { ButtonGroup as ButtonGroupComponent } from './styles';

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    direction?: 'row' | 'column';
}

export const ButtonGroup: FunctionComponent<ButtonGroupProps> = ({ children, ...props }: ButtonGroupProps) => {
    return <ButtonGroupComponent {...props}>{children}</ButtonGroupComponent>;
};
