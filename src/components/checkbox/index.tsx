import { FunctionComponent, InputHTMLAttributes } from 'react';

import { Container } from './styles';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    disabled?: boolean;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({ label, ...props }) => {
    return (
        <Container>
            <input type="checkbox" {...props} />
            <label>{label}</label>
        </Container>
    );
};
