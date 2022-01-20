import React from 'react';
import { mergeClassNames } from '../../services/classes';
import './styles.scss';

export interface ButtonProps
    extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: React.FunctionComponent<ButtonProps> = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    ...props
}) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <button
            type="button"
            className={mergeClassNames(['storybook-button', `storybook-button--${size}`, mode])}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};
