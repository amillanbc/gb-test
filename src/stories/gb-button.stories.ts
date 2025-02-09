import type { Meta, StoryObj } from '@storybook/angular';

import { GbBtnComponent } from '../app/components/global/gb-btn/gb-btn.component';

const meta: Meta<GbBtnComponent> = {
  title: 'Global Bank/Button',
  component: GbBtnComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<GbBtnComponent>;

export const Default: Story = {
  args: {
    label: 'Button',
  },
};

export const Outline: Story = {
  args: {
    label: 'Button',
    fill: 'outline',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Button',
    disabled: true,
  },
};

export const Colors: Story = {
  args: {
    label: 'Button',
    color: 'tap-aquamarine',
  },
};

export const ColorLevel: Story = {
  args: {
    label: 'Button',
    level: 800,
  },
};

export const Icon: Story = {
  args: {
    label: 'Button',
    icon: 'home-outline',
  },
};

export const IconPosition: Story = {
  args: {
    label: 'Button',
    icon: 'home-outline',
    iconPosition: 'right',
  },
};

export const Spinner: Story = {
  args: {
    label: 'Button',
    spinner: 'bubbles',
  },
};

export const SpinnerPosition: Story = {
  args: {
    label: 'Button',
    spinner: 'bubbles',
    spinnerPosition: 'right',
  },
};

export const ExtraClasses: Story = {
  args: {
    label: 'Button',
    extraClasses: 'rounded-md gb-pa-4xl',
  },
};
