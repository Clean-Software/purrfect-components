import { FunctionComponent, HTMLAttributes } from 'react';

import { CircularLoadingComponent } from './styles';

export interface LoadingProps extends HTMLAttributes<HTMLDivElement> {
    color?: string;
    size?: number;
    borderWidth?: number;
    borderColor?: string;
}

export const Loading: FunctionComponent<LoadingProps> = ({
    size = 10,
    color = '#fff',
    borderColor = '#3F53EB',
    borderWidth = 8,
    ...props
}) => (
    <CircularLoadingComponent
        size={size}
        color={color}
        borderWidth={borderWidth}
        borderColor={borderColor}
        {...props}
    ></CircularLoadingComponent>
);

export default Loading;
