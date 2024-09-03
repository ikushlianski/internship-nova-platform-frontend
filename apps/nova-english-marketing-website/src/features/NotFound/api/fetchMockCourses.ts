import { Class } from "@repo/shared-types/class"

export const fetchCourses = async (): Promise<Class[]> => {
	await new Promise((resolve) => setTimeout(resolve, 1000))

	const mockCourses: Class[] = [
		{
			classId: 1,
			className: "Frontend Development",
			classLevel: "B1-B2",
			classTime: "Вечерний"
		},
		{
			classId: 2,
			className: "Backend Development",
			classLevel: "B2-C1",
			classTime: "Дневной"
		},
		{
			classId: 3,
			className: "Fullstack Development",
			classLevel: "C1-C2",
			classTime: "Вечерний"
		},
		{
			classId: 4,
			className: "Frontend Development",
			classLevel: "B1-B2",
			classTime: "Вечерний"
		},
		{
			classId: 5,
			className: "Backend Development",
			classLevel: "B2-C1",
			classTime: "Утренний"
		},
		{
			classId: 6,
			className: "Fullstack Development",
			classLevel: "C1-C2",
			classTime: "Дневной"
		}
	]

	return mockCourses
}
