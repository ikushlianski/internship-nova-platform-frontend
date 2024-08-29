import { Course } from "../types/courses.types"

export const fetchCourses = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000))

	const mockCourses: Course[] = [
		{
			courseId: 1,
			courseName: "Frontend Development",
			courseLevel: "B1-B2",
			courseTime: "Утренний"
		},
		{
			courseId: 2,
			courseName: "Backend Development",
			courseLevel: "B2-C1",
			courseTime: "Дневной"
		},
		{
			courseId: 3,
			courseName: "Fullstack Development",
			courseLevel: "C1-C2",
			courseTime: "Вечерний"
		},
		{
			courseId: 4,
			courseName: "Frontend Development",
			courseLevel: "B1-B2",
			courseTime: "Вечерний"
		},
		{
			courseId: 5,
			courseName: "Backend Development",
			courseLevel: "B2-C1",
			courseTime: "Утренний"
		},
		{
			courseId: 6,
			courseName: "Fullstack Development",
			courseLevel: "C1-C2",
			courseTime: "Дневной"
		}
	]

	return mockCourses
}
