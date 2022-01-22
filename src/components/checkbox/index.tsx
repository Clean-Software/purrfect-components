import { FunctionComponent, InputHTMLAttributes, useRef } from 'react';

import { Container } from './styles';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({ label, ...props }) => {
    const checkboxRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (!checkboxRef.current || props.disabled) return;
        checkboxRef.current.checked = !checkboxRef.current.checked;
    };

    return (
        <Container>
            <input type="checkbox" ref={checkboxRef} {...props} />
            <label onClick={handleClick}>{label}</label>
        </Container>
    );
};
