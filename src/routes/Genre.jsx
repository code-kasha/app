import { useParams } from "react-router-dom"

import { useContext } from "react"
import { AppContext } from "../providers/anime"

import Heading from "../components/page/Heading"
import Navigation from "../components/page/Navigation"

import Grid from "../components/page/Grid"

export default function Genre() {
	const { genre } = useParams()
	const { genreData, genrePage, updateDataAndPage } = useContext(AppContext)

	const handlePrevious = () => {
		if (genrePage > 1) {
			updateDataAndPage("genre", null, genrePage - 1)
		}
	}

	const handleNext = () => {
		if (genreData.hasNextPage) {
			updateDataAndPage("genre", null, genrePage + 1)
		}
	}

	return (
		<>
			<div className="space-y-2">
				<Heading content={genre} />
				<Navigation
					page={genrePage}
					hasNext={genreData.hasNextPage || false}
					prev={handlePrevious}
					next={handleNext}
				/>
				<Grid />
			</div>
			<p>{genreData ? "no data" : "got data"}</p>
		</>
	)
}
