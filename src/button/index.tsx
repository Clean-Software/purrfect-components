import React from 'react';
import './styles.scss';

interface ButtonProps
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
            className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};
