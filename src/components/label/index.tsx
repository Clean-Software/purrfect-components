import { FunctionComponent, HTMLAttributes } from 'react';

import { Container, Detail, Image } from './styles';

export interface LabelProps extends HTMLAttributes<HTMLDivElement> {
    label: string;
    detail?: string;
    image?: string;
    backgroundColor?: string;
}

export const Label: FunctionComponent<LabelProps> = ({ detail, image, backgroundColor = '#e8e8e8', ...props }) => {
    return (
        <Container backgroundColor={backgroundColor}>
            {image && <Image src={image} alt="Avatar" />}
            {props.label}
            {detail && <Detail backgroundColor={backgroundColor}>{detail}</Detail>}
        </Container>
    );
};
