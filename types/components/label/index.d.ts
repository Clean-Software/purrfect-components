import { FunctionComponent, HTMLAttributes } from 'react';
export interface LabelProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    detail?: string;
    image?: string;
    backgroundColor?: string;
}
export declare const Label: FunctionComponent<LabelProps>;
