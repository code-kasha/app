export default function Card() {
	return (
		<div className="flex flex-col space-y-0.5 mx-auto py-1">
			<img
				src="/images/placeholder.jpg"
				className="h-[240px] w-[200px] mx-auto p-0.5 rounded-lg"
				alt=""
			/>
			<p className="line-clamp-1">Title</p>
		</div>
	)
}
