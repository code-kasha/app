import { useContext } from "react"
import { AppContext } from "../providers/anime"

import Heading from "../components/page/Heading"
import Navigation from "../components/page/Navigation"

import Grid from "../components/page/Grid"

export default function Top() {
	const { topData, topPage, updateDataAndPage } = useContext(AppContext)

	const handlePrevious = () => {
		console.log(topPage)
		if (topPage > 1) {
			updateDataAndPage("top", null, topPage - 1)
		}
	}

	const handleNext = () => {
		if (topData.hasNextPage) {
			updateDataAndPage("top", null, topPage + 1)
		}
	}

	return (
		<>
			<div className="space-y-2">
				<Heading content="Top Airing" />
				<Navigation
					page={topPage}
					hasNext={topData.hasNextPage || false}
					prev={handlePrevious}
					next={handleNext}
				/>
				<Grid />
			</div>
			<p>{topData ? "no data" : "got data"}</p>
		</>
	)
}
