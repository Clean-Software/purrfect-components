import { DetailedHTMLProps, InputHTMLAttributes, FunctionComponent } from 'react';
import './styles.scss';

interface InputProps extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size'> {
    error?: boolean;
    size?: 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for user interaction
 */
export const Input: FunctionComponent<InputProps> = ({ size = 'medium', error, ...props }) => {
    const currentMode = error ? 'storybook-input--error' : 'storybook-input--normal';
    const currentSize = size ? `storybook-input--${size}` : '';

    // eslint-disable-next-line react/react-in-jsx-scope
    return <input type="text" className={['storybook-input', currentMode, currentSize].join(' ')} {...props} />;
};
