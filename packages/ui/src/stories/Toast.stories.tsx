import { Meta, StoryFn } from '@storybook/react';
import { useToast } from '@/Toast/ToastContext';
import Toast, { ToastProps, ToastProvider } from './../Toast/Toast.component';

export default {
  title: 'Components/Toast',
  component: Toast,
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
} as Meta<typeof Toast>;

const Template: StoryFn<ToastProps> = () => {
  const { create } = useToast();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-4">
      <button
        className="p-2 bg-green-500 text-white rounded"
        onClick={() => create('This is a success message!', 'success')}
      >
        Show Success Toast
      </button>
      <button
        className="p-2 bg-yellow-500 text-white rounded"
        onClick={() => create('This is a warning message!', 'warning')}
      >
        Show Warning Toast
      </button>
      <button
        className="p-2 bg-red-500 text-white rounded"
        onClick={() => create('This is an error message!', 'error')}
      >
        Show Error Toast
      </button>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  type: 'success',
  children: 'This is a default success toast!',
  close: () => alert('Toast closed!'),
};
