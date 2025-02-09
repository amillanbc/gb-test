import type { Meta, StoryObj } from '@storybook/angular';

import { GbCheckboxComponent } from '../app/components/global/gb-checkbox/gb-checkbox.component';

const meta: Meta<GbCheckboxComponent> = {
  title: 'Global Bank/Checkbox',
  component: GbCheckboxComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<GbCheckboxComponent>;

export const Default: Story = {
  args: {
    value: false,
    name: 'checkbox_1',
  },
};

export const Label: Story = {
  args: {
    value: false,
    name: 'checkbox_2',
    label: 'Label',
  },
};

export const Color: Story = {
  args: {
    value: false,
    name: 'checkbox_3',
    color: 'success',
  },
};

export const Disabled: Story = {
  args: {
    value: false,
    name: 'checkbox_4',
    disabled: true,
  },
};
