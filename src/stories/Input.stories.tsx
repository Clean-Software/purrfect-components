import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '../';

export default {
    title: 'Example/Input',
    component: Input,
    argTypes: {
        placeholder: { type: 'string' },
        error: { type: 'boolean', defaultValue: false },
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
