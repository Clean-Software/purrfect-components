import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '../';

export default {
    title: 'Example/Input',
    component: Input,
    argTypes: {
        placeholder: { type: 'string' },
        error: { type: 'boolean', defaultValue: false },
        inputSize: {
            options: ['small', 'medium', 'large'],
            defaultValue: 'medium',
            control: { type: 'radio' },
        },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: "I'm a placeholder",
};

export const Error = Template.bind({});
Error.args = {
    placeholder: "I'm a placeholder",
    error: true,
};

export const Small = Template.bind({});
Small.args = {
    placeholder: "I'm a placeholder",
    inputSize: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
    placeholder: "I'm a placeholder",
    inputSize: 'medium',
};

export const Large = Template.bind({});
Large.args = {
    placeholder: "I'm a placeholder",
    inputSize: 'large',
};
