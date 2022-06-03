import { FunctionComponent, InputHTMLAttributes } from 'react';
export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    disabled?: boolean;
}
export declare const Checkbox: FunctionComponent<CheckboxProps>;
