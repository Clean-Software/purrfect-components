import { DetailedHTMLProps, InputHTMLAttributes, FunctionComponent } from 'react';
import { mergeClassNames } from '../../utils/classes';
import './styles.scss';

export interface InputProps
    extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'size'> {
    error?: boolean;
    size?: 'small' | 'medium' | 'large';
}

/**
 * Primary UI component for user interaction
 */
export const Input: FunctionComponent<InputProps> = ({ size = 'medium', error, ...props }) => {
    const currentMode = error ? 'storybook-input--error' : 'storybook-input--normal';
    const currentSize = size ? `storybook-input--${size}` : '';

    return <input type="text" className={mergeClassNames(['storybook-input', currentMode, currentSize])} {...props} />;
};
