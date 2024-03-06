import { useEffect, useContext } from "react"
import { useParams } from "react-router-dom"

import axios from "axios"

import { AppContext } from "../providers/anime"

import Heading from "../components/page/Heading"
import Navigation from "../components/page/Navigation"

import Grid from "../components/page/Grid"

export default function Search() {
	const { query } = useParams()
	const { searchQuery, searchResults, searchPage, updateDataAndPage } =
		useContext(AppContext)

	const handlePrevious = () => {
		if (searchPage > 1) {
			updateDataAndPage("search", null, searchPage - 1)
		}
	}

	const handleNext = () => {
		if (searchResults.hasNextPage) {
			updateDataAndPage("search", null, searchPage + 1)
		}
	}

	return (
		<>
			<div className="space-y-2">
				<Heading content={`Search Results - ${query}`} />
				<Navigation
					page={searchPage}
					hasNext={searchResults.hasNextPage || false}
					prev={handlePrevious}
					next={handleNext}
				/>
				<Grid />
			</div>
			<p>{searchResults ? "no data" : "got data"}</p>
		</>
	)
}
