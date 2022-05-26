import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Loading } from '../';

export default {
    title: 'Example/Loading',
    component: Loading,
    argTypes: {},
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = (args) => <Loading {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
export const Secundary = Template.bind({});
Secundary.args = {
    color: 'rgba(234, 166, 255, 1)',
    borderColor: '#fff',
};
