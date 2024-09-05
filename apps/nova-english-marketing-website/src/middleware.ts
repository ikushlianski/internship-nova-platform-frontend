import createMiddleware from "next-intl/middleware"
import { NextRequest } from "next/server"
import { routing } from "./i18n/routing"

// Middleware для определения языка по домену
function detectLocale(request: NextRequest): string {
	const hostname = request.headers.get("host")
	if (hostname?.endsWith(".ru") || hostname?.endsWith(".by")) {
		return "ru"
	}
	return "en"
}

// Основной middleware для работы с локалями
const intlMiddleware = createMiddleware({
	routing,
	localeDetection: false // Отключаем автоматическое определение
})

// Объединяем пользовательский middleware с next-intl middleware
export function middleware(request: NextRequest) {
	// Определяем локаль
	const locale = detectLocale(request)

	// Создаем ответ с установленной локалью
	const response = intlMiddleware(request)
	response.headers.set("Content-Language", locale)

	return response
}

export const config = {
	matcher: ["/((?!api|_next|.*\\..*).*)"]
}
