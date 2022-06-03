import { InputHTMLAttributes } from 'react';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    inputSize?: 'small' | 'medium' | 'large';
}
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
