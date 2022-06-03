import * as react from 'react';
import { FunctionComponent, ButtonHTMLAttributes, InputHTMLAttributes, ReactNode, HTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
}
declare const Button: FunctionComponent<ButtonProps>;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    inputSize?: 'small' | 'medium' | 'large';
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    disabled?: boolean;
}
declare const Checkbox: FunctionComponent<CheckboxProps>;

interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    direction?: 'row' | 'column';
}
declare const ButtonGroup: FunctionComponent<ButtonGroupProps>;

interface LabelProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    detail?: string;
    image?: string;
    backgroundColor?: string;
}
declare const Label: FunctionComponent<LabelProps>;

export { Button, ButtonGroup, Checkbox, Input, Label };
