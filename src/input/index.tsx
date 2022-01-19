import React from 'react';
import './input.css';

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    error?: boolean;
}

export const Input: React.FunctionComponent<InputProps> = ({ ...props }) => {
    const mode = props.error ? 'storybook-input--error' : 'storybook-input--normal';

    return <input type="text" className={['storybook-input', mode].join(' ')} {...props} />;
};
