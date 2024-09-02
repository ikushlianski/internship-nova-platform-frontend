import { z } from "zod"

const CourseTimeEnum = z.enum(["Утренний", "Дневной", "Вечерний"])

const CourseSchema = z.object({
	courseId: z.number(),
	courseName: z.string(),
	courseLevel: z.string(),
	courseTime: CourseTimeEnum
})

export type Course = z.infer<typeof CourseSchema>
