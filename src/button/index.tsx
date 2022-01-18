import React from 'react';

interface ButtonProps
    extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    background?: string;
    color?: string;
}

const Button: React.FunctionComponent<ButtonProps> = (props) => {
    const { children, background, color, style } = props;
    const _style: React.CSSProperties = style || {};
    if (background) _style.background = background;
    if (color) _style.color = color;
    return (
        <button style={_style} {...props}>
            {children}
        </button>
    );
};

export default Button;
