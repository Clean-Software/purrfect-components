import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from '../';

export default {
    title: 'Example/Checkbox',
    component: Checkbox,
    argTypes: {
        label: {
            description: 'Label for the checkbox',
            type: { name: 'string' },
        },
    },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: "I'm a checkbox",
};

export const Disabled = Template.bind({});
Disabled.args = {
    label: "I'm a checkbox",
    disabled: true,
};
