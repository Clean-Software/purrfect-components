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
    backgroundColor: 'green',
};
export const Secundary = Template.bind({});
Secundary.args = {
    backgroundColor: 'gray',
    progressColor: 'green',
    now: 35,
};
