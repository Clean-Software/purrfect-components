import { ButtonHTMLAttributes, FunctionComponent } from 'react';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
}
export declare const Button: FunctionComponent<ButtonProps>;
