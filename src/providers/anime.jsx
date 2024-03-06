import PropTypes from "prop-types"
import { createContext, useState, useEffect } from "react"

import {
	getStoredData,
	setStoredData,
	getStoredPage,
	setStoredPage,
	getStoredText,
	setStoredText,
} from "../utils/helpers"

const AppContext = createContext()

const AnimeProvider = ({ children }) => {
	const [searchQuery, setSearchQuery] = useState(null)
	const [searchResults, setSearchResults] = useState([])
	const [searchPage, setSearchPage] = useState(1)

	const [popularData, setPopularData] = useState([])
	const [popularPage, setPopularPage] = useState(1)

	const [topData, setTopData] = useState([])
	const [topPage, setTopPage] = useState(1)

	const [recentData, setRecentData] = useState([])
	const [recentPage, setRecentPage] = useState(1)

	const [movieData, setMovieData] = useState([])
	const [moviePage, setMoviePage] = useState(1)

	const [animeID, setAnimeID] = useState("")
	const [animeData, setAnimeData] = useState({})

	const [nowPlaying, setNowPlaying] = useState("")
	const [episodeLinks, setEpisodeLinks] = useState({})

	const [genreData, setGenreData] = useState([])
	const [genrePage, setGenrePage] = useState(1)

	// Search Anime
	useEffect(() => {
		const savedSearchPage = getStoredPage("searchPage")
		const savedSearchQuery = getStoredText("searchQuery")
		const savedSearchData = getStoredData("searchData")

		if (savedSearchQuery) {
			setSearchQuery(savedSearchQuery)
		}
		if (savedSearchData) {
			setSearchResults(savedSearchData)
		}
		if (savedSearchPage) {
			setSearchPage(parseInt(savedSearchPage))
		}
	}, [])

	// Popular Anime
	useEffect(() => {
		const savedPopularData = getStoredData("popularData")
		const savedPopularPage = getStoredPage("popularPage")

		if (savedPopularData) {
			setPopularData(savedPopularData)
		}
		if (savedPopularPage) {
			setPopularPage(parseInt(savedPopularPage))
		}
	}, [])

	// Top Airing
	useEffect(() => {
		const savedTopData = getStoredData("topData")
		const savedTopPage = getStoredPage("topPage")

		if (savedTopData) {
			setTopData(savedTopData)
		}
		if (savedTopPage) {
			setTopPage(parseInt(savedTopPage))
		}
	}, [])

	// Recent Episodes
	useEffect(() => {
		const savedRecentData = getStoredData("recentData")
		const savedRecentPage = getStoredPage("recentPage")

		if (savedRecentData) {
			setRecentData(savedRecentData)
		}
		if (savedRecentPage) {
			setRecentPage(parseInt(savedRecentPage))
		}
	}, [])

	// Anime Movies
	useEffect(() => {
		const savedMovieData = getStoredData("movieData")
		const savedMoviePage = getStoredPage("moviePage")

		if (savedMovieData) {
			setMovieData(savedMovieData)
		}
		if (savedMoviePage) {
			setMoviePage(parseInt(savedMoviePage))
		}
	}, [])

	// Anime Details
	useEffect(() => {
		const savedAnimeData = getStoredData("animeData")
		const savedAnimeID = getStoredData("animeID")
		if (savedAnimeID) {
			setAnimeID(savedAnimeID)
		}

		if (savedAnimeData) {
			setAnimeData(savedAnimeData)
		}
	}, [])

	// Episode Links
	useEffect(() => {
		const savedEpisodeLinks = getStoredData("episodeLinks")
		const savedEpisodeID = getStoredData("nowPlaying")

		if (savedEpisodeID) {
			setNowPlaying(savedEpisodeID)
		}

		if (savedEpisodeLinks) {
			setEpisodeLinks(savedEpisodeLinks)
		}
	}, [])

	// Genre
	useEffect(() => {
		const savedGenreData = getStoredData("genreData")
		const savedGenrePage = getStoredPage("genrePage")

		if (savedGenreData) {
			setGenreData(savedGenreData)
		}
		if (savedGenrePage) {
			setGenrePage(parseInt(savedGenrePage))
		}
	}, [])

	const updateDataAndPage = (
		route,
		data,
		page,
		query = null,
		animeID = null,
		nowPlaying = null
	) => {
		switch (route) {
			case "search":
				setSearchQuery(query)
				setSearchResults(data)
				setSearchPage(page)

				setStoredText("searchQuery", query)
				setStoredData("searchData", data)
				setStoredPage("searchPage", page)
				break

			case "popular":
				setPopularData(data)
				setPopularPage(page)

				setStoredData("popularData", data)
				setStoredPage("popularPage", page)
				break

			case "top":
				setTopData(data)
				setTopPage(page)

				setStoredData("topData", data)
				setStoredPage("topPage", page)
				break

			case "recent":
				setRecentData(data)
				setRecentPage(page)

				setStoredData("recentData", data)
				setStoredPage("recentPage", page)
				break

			case "movie":
				setMovieData(data)
				setMoviePage(page)

				setStoredData("movieData", data)
				setStoredPage("moviePage", page)
				break

			case "genre":
				setGenreData(data)
				setGenrePage(page)

				setStoredData("genreData", data)
				setStoredPage("genrePage", page)
				break

			case "details":
				setAnimeData(data)
				setAnimeID(animeID)

				setStoredData("animeData", data)
				setStoredText("animeID", animeID)
				break

			case "watch":
				setEpisodeLinks(data)
				setNowPlaying(nowPlaying)

				setStoredData("episodeLinks", data)
				setStoredText("nowPlaying", nowPlaying)
				break

			default:
				break
		}
	}

	return (
		<AppContext.Provider
			value={{
				searchQuery,
				searchResults,
				searchPage,
				animeID,
				nowPlaying,
				popularData,
				popularPage,
				topData,
				topPage,
				recentData,
				recentPage,
				movieData,
				moviePage,
				animeData,
				genreData,
				genrePage,
				episodeLinks,
				updateDataAndPage,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

AnimeProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

export { AnimeProvider, AppContext }
