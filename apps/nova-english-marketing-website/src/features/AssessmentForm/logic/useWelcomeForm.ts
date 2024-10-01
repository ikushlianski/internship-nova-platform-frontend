import { zodResolver } from '@hookform/resolvers/zod';
import { useRef } from 'react';
import { useFormState } from 'react-dom';
import { useForm, UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { onSubmitAction } from '../api/formSubmit';
import { schema } from './formSchema';

export function useWelcomeForm() {
  const [state, formAction] = useFormState(onSubmitAction, {
    message: '',
  });

  const form: UseFormReturn<z.infer<typeof schema>> = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      country: '',
      occupation: '',
      schedule: '',
      ...(state?.fields ?? {}),
    },
  });

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    form.handleSubmit(() => {
      formAction(new FormData(formRef.current!));
    })(event);
  };

  return {
    form,
    formRef,
    handleSubmit,
    formAction,
  };
}
