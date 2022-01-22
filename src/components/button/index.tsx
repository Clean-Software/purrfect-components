import { ButtonHTMLAttributes, FunctionComponent } from 'react';

import { Button as ButtonComponent } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
}

export const Button: FunctionComponent<ButtonProps> = ({ ...props }) => {
    return <ButtonComponent type="button" {...props}></ButtonComponent>;
};
