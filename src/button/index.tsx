import { DetailedHTMLProps, ButtonHTMLAttributes, FunctionComponent, CSSProperties } from 'react';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    background?: string;
    color?: string;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
    const { children, background, color, style } = props;
    const _style: CSSProperties = style || {};
    if (background) _style.background = background;
    if (color) _style.color = color;
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <button style={_style} {...props}>
            {children}
        </button>
    );
};

export default Button;
