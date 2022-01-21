import { ButtonHTMLAttributes, FunctionComponent } from 'react';

import { Button as ButtonComponent } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button: FunctionComponent<ButtonProps> = ({ label, ...props }) => {
    return (
        <ButtonComponent type="button" {...props}>
            {label}
        </ButtonComponent>
    );
};
