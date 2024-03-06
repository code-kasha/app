import { useState, useEffect } from "react"

import axios from "axios"

import Heading from "../components/page/Heading"
import Navigation from "../components/page/Navigation"
import Grid from "../components/page/Grid"
import { useSearchParams } from 'react-router-dom'

export default function RecentAnime() {
	const [searchParams, setSearchParams] = useSearchParams()
	const page  = parseInt(searchParams.get('page') ?? 1)
	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		let ignore = false
		const url = `https://jsonplaceholder.typicode.com/photos?_start=${page * 5}&_limit=5`
		setLoading(true)
		axios.get(url).then((response) => {
			if(!ignore) {
				setLoading(false)
				setData(response.data)
			}
		})
		return () => {
			ignore = true
		}
	}, [page])

	function handlePrevious() {
		if (page > 1) {
			searchParams.set('page', page - 1)
			setSearchParams(searchParams)
		}
	}

	function handleNext() {
		searchParams.set('page', page + 1)
		setSearchParams(searchParams)
	}

	return (
		<>
			<Heading title={"Recent Anime"} />

			{loading && <div>Is Loading...</div>}

			{data.map((item) => <div key={item.id}>{item.title}</div>)}

			<Navigation
				page={page}
				hasNext={true}
				prev={handlePrevious}
				next={handleNext}
			/>

			<Grid />
		</>
	)
}
