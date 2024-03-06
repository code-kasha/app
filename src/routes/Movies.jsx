import { useContext } from "react"
import { AppContext } from "../providers/anime"

import Heading from "../components/page/Heading"
import Navigation from "../components/page/Navigation"

import Grid from "../components/page/Grid"

export default function Movies() {
	const { movieData, moviePage, updateDataAndPage } = useContext(AppContext)

	const handlePrevious = () => {
		if (moviePage > 1) {
			updateDataAndPage("movie", null, moviePage - 1)
		}
	}

	const handleNext = () => {
		if (movieData.hasNextPage) {
			updateDataAndPage("movie", null, moviePage + 1)
		}
	}

	return (
		<>
			<div className="space-y-2">
				<Heading content="Movies" />
				<Navigation
					page={moviePage}
					hasNext={movieData.hasNextPage || false}
					prev={handlePrevious}
					next={handleNext}
				/>
				<Grid />
			</div>
			<p>{movieData ? "no data" : "got data"}</p>
		</>
	)
}
