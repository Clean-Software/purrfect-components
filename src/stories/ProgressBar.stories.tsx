import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProgressBar } from '../';

export default {
    title: 'Example/ProgressBar',
    component: ProgressBar,
    argTypes: {},
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    now: 35,
};
export const Secundary = Template.bind({});
Secundary.args = {
    progressColor: 'rgba(234, 166, 255, 1)',
    now: 50,
};
