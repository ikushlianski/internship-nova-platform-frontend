import { z } from 'zod';

export const schema = z.object({
  username: z.string().trim().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  country: z.string().trim(),
  occupation: z.string(),
  schedule: z.string(),
});
