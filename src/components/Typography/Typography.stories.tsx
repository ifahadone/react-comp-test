import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Typography from './Typography';

export default {
  title: 'ACRA/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

// eslint-disable-next-line max-len
// eslint-disable-next-line react/function-component-definition, react/jsx-props-no-spreading
const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Headline = Template.bind({});
Headline.args = {
  label: 'Headline',
  type: 'headline-1',
  weight: 'bold',
};

export const Base = Template.bind({});
Base.args = {
  label: 'Base',
  type: 'base',
  weight: 'regular',
};

export const Label = Template.bind({});
Label.args = {
  label: 'Label',
  type: 'label',
  weight: 'regular',
};
