import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from '../';

export default {
    title: 'Example/Label',
    component: Label,
    argTypes: {
        label: { type: 'string' },
        detail: { type: 'string' },
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Label',
};

export const Detailed = Template.bind({});
Detailed.args = {
    label: 'Label',
    detail: 'Friend',
    backgroundColor: '#0f84b6',
};

export const WithImage = Template.bind({});
WithImage.args = {
    label: 'Joseff',
    image: 'https://cdn.discordapp.com/attachments/887121684904149022/935147683360956436/person.jpg',
};

export const WithDetailedImage = Template.bind({});
WithDetailedImage.args = {
    label: 'Joseff',
    detail: 'Friend',
    image: 'https://cdn.discordapp.com/attachments/887121684904149022/935147683360956436/person.jpg',
    backgroundColor: '#0f84b6',
};
