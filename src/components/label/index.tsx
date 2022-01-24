import { FunctionComponent, HTMLAttributes } from 'react';

import { Container, Detail, Image } from './styles';

export interface LabelProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    detail?: string;
    image?: string;
    backgroundColor?: string;
}

export const Label: FunctionComponent<LabelProps> = ({ detail, image, ...props }) => {
    return (
        <Container {...props}>
            {image && <Image src={image} alt="Avatar" />}
            {props.label}
            {detail && <Detail backgroundColor={props.backgroundColor}>{detail}</Detail>}
        </Container>
    );
};
