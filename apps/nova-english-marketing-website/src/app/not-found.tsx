import NotFound from "@/features/NotFound/ui/NotFound.component"

const NotFoundPage = () => {
	return (
		<html>
			<body>
				<div className="pt-16 flex flex-col justify-center items-center gap-16">
					<h1 className="text-xl font-bold">
						Unfortunately, the page you are looking for does not exist or has
						been moved.
					</h1>
					<NotFound />
				</div>
			</body>
		</html>
	)
}

export default NotFoundPage
