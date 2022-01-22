import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    children: 'Button',
};
