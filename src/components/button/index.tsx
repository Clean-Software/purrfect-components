import { ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent } from 'react';
import { mergeClassNames } from '../../utils/classes';
import './styles.scss';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button: FunctionComponent<ButtonProps> = ({
    primary = false,
    size = 'medium',
    backgroundColor,
    label,
    ...props
}) => {
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
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
