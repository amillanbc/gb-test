import type { Meta, StoryObj } from '@storybook/angular';

import { GbInputComponent } from '../app/components/global/gb-input/gb-input.component';

const meta: Meta<GbInputComponent> = {
  title: 'Global Bank/Input',
  component: GbInputComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<GbInputComponent>;

export const Default: Story = {
  args: {
    placeholder: 'Type here',
  },
};

export const TypePassword: Story = {
  args: {
    placeholder: 'Type here',
    type: 'password',
    passwordToggle: true,
  },
};

export const Icon: Story = {
  args: {
    placeholder: 'Type here',
    icon: 'people-outline',
  },
};

export const Validation: Story = {
  args: {
    placeholder: 'Type here',
    regex: '^[A-Za-z0-9]{6,}$',
  },
};
