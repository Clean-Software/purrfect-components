import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonGroup, Button } from '..';

const config = {
    buttonList: [
        {
            label: 'Purrfect',
            color: '#e9c46a',
            backgroundColor: '#264653',
        },
        {
            label: 'Xurumin',
            color: '#e9c46a',
            backgroundColor: '#264653',
        },
        {
            label: 'Clean Software',
            color: '#e9c46a',
            backgroundColor: '#264653',
        },
    ],
    props: {
        style: { width: '350px' },
    },
};

export default {
    title: 'Example/ButtonGroup',
    component: ButtonGroup,

    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => <ButtonGroup {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            {config.buttonList.map((button, index) => (
                <button
                    key={`${index.toString()} key`}
                    style={{
                        color: button.color,
                        backgroundColor: button.backgroundColor,
                    }}
                >
                    {button.label}
                </button>
            ))}
        </>
    ),
    direction: 'row',
    ...config.props,
};
export const Column = Template.bind({});
Column.args = {
    children: (
        <>
            {config.buttonList.map((button, index) => (
                <button
                    key={`${index.toString()} key`}
                    style={{
                        color: button.color,
                        backgroundColor: button.backgroundColor,
                    }}
                >
                    {button.label}
                </button>
            ))}
        </>
    ),
    ...config.props,
    direction: 'column',
};
export const WithLibButton = Template.bind({});
WithLibButton.args = {
    children: (
        <>
            {config.buttonList.map((button, index) => (
                <Button
                    key={`${index.toString()} key`}
                    style={{
                        color: button.color,
                        backgroundColor: button.backgroundColor,
                    }}
                >
                    {button.label}
                </Button>
            ))}
        </>
    ),
    ...config.props,
    direction: 'column',
};
