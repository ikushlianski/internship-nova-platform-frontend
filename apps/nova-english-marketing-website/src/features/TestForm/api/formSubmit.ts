'use server';

import { schema } from '../logic/formSchema';

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function onSubmitAction(prevState: FormState, data: FormData): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = schema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};

    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }

    return {
      message: 'Invalid form data',
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  try {
    const response = await fetch('https://example.com/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit data');
    }

    return {
      message: 'User registered successfully',
      fields: formData as Record<string, string>,
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      message: 'Error submitting data to external API',
      fields: formData as Record<string, string>,
    };
  }
}
