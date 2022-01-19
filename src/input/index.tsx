import React from 'react';
import Input from './styles';

interface InputProps
    extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size'> {
    error?: boolean;
    size?: 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for user interaction
 */
export const purrInput: React.FunctionComponent<InputProps> = ({ size = 'medium', error, ...props }) => {
    const currentMode = error ? 'storybook-input--error' : 'storybook-input--normal';
    const currentSize = size ? `storybook-input--${size}` : '';

    return <Input type="text" className={['storybook-input', currentMode, currentSize].join(' ')} {...props} />;
};
