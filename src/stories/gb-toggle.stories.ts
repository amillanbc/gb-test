import type { Meta, StoryObj } from '@storybook/angular';

import { GbToggleComponent } from '../app/components/global/gb-toggle/gb-toggle.component';

const meta: Meta<GbToggleComponent> = {
  title: 'Global Bank/Toggle',
  component: GbToggleComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<GbToggleComponent>;

export const Default: Story = {
  args: {
    name: 'toggle_1',
    value: false,
  },
};

export const Label: Story = {
  args: {
    name: 'toggle_2',
    value: false,
    label: 'Label',
  },
};

export const LabelPosition: Story = {
  args: {
    name: 'toggle_3',
    value: false,
    label: 'Label',
    labelPosition: 'right',
  },
};

export const Color: Story = {
  args: {
    name: 'toggle_4',
    value: false,
    color: 'success',
  },
};

export const Disabled: Story = {
  args: {
    name: 'toggle_5',
    value: false,
    disabled: true,
  },
};
