import { useContext } from "react"
import { AppContext } from "../providers/anime"

import Heading from "../components/page/Heading"
import Navigation from "../components/page/Navigation"

import Grid from "../components/page/Grid"

export default function Popular() {
	const { popularData, popularPage, updateDataAndPage } = useContext(AppContext)

	const handlePrevious = () => {
		console.log(popularPage)
		if (popularPage > 1) {
			updateDataAndPage("popular", null, popularPage - 1)
		}
	}

	const handleNext = () => {
		if (popularData.hasNextPage) {
			updateDataAndPage("popular", null, popularPage + 1)
		}
	}

	return (
		<>
			<div className="space-y-2">
				<Heading content="Popular Anime" />
				<Navigation
					page={popularPage}
					hasNext={popularData.hasNextPage || false}
					prev={handlePrevious}
					next={handleNext}
				/>
				<Grid />
			</div>
			<p>{popularData ? "no data" : "got data"}</p>
		</>
	)
}
