import { InputHTMLAttributes, forwardRef } from 'react';

import { Input as InputComponent } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    inputSize?: 'small' | 'medium' | 'large';
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
    return <InputComponent type="text" {...props} ref={ref} />;
});

Input.displayName = 'Input';
