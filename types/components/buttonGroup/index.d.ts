import { FunctionComponent, ReactNode } from 'react';
interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    direction?: 'row' | 'column';
}
export declare const ButtonGroup: FunctionComponent<ButtonGroupProps>;
export {};
