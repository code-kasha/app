import { useState, useEffect } from "react"

import axios from "axios"

import Heading from "../components/page/Heading"
import Navigation from "../components/page/Navigation"
import Grid from "../components/page/Grid"

export default function RecentAnime() {
	const [data, setData] = useState({})
	const [page, setPage] = useState(() => {
		return parseInt(localStorage.getItem("recentPage"))
	})

	useEffect(() => {
		const recentData = JSON.parse(localStorage.getItem("recentData")) || {}
		const currentPage = parseInt(recentData.currentPage) || 0

		const fetchData = async () => {
			if (recentData && page === currentPage) {
				setData(recentData)
				setPage(currentPage)
			} else {
				const url = `http://localhost:3000/anime/top-airing?page=${page}`
				const response = await axios.get(url)
				const data = response.data
				const newPage = parseInt(data.currentPage) || 0
				if (newPage > 0) {
					setData(data)
					setPage(newPage)
					localStorage.setItem("recentData", JSON.stringify(data))
					localStorage.setItem("recentPage", newPage)
				}
			}
		}
		fetchData()
	}, [page])

	function handlePrevious() {
		if (page > 1) {
			const newPage = page - 1
			setPage(newPage)
			localStorage.setItem("recentPage", newPage)
		}
	}

	function handleNext() {
		if (data.hasNextPage) {
			const newPage = parseInt(page) + 1
			setPage(newPage)
			localStorage.setItem("recentPage", newPage)
		}
	}

	return (
		<>
			<Heading title={"Recent Anime"} />

			<Navigation
				page={page}
				hasNext={data.hasNextPage || false}
				prev={handlePrevious}
				next={handleNext}
			/>

			<Grid />
		</>
	)
}
