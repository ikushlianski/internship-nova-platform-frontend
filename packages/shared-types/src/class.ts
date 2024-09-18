import { z } from 'zod';

const ClassTimeEnum = z.enum(['Утренний', 'Дневной', 'Вечерний']);

const ClassSchema = z.object({
  classId: z.number(),
  className: z.string(),
  classLevel: z.string(),
  classTime: ClassTimeEnum,
});

export type Class = z.infer<typeof ClassSchema>;
