import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {
	const [query, setQuery] = useState("")
	const [searchStatus, setSearchStatus] = useState(false)
	const [hamburgerStatus, setHamburgerStatus] = useState(false)

	const navigator = useNavigate()

	const handleSubmit = (event) => {
		event.preventDefault()
		navigator(`/search/${encodeURIComponent(query)}`)
	}

	const toggleSearchBar = () => {
		setSearchStatus(!searchStatus)
	}

	const toggleHamburgerMenu = () => {
		setHamburgerStatus(!hamburgerStatus)
	}

	return (
		<>
			<nav className="flex flex-col items-center md:flex-row md:justify-between p-2 bg-gray-300 mx-auto w-full space-y-2 md:space-y-0">
				<div className="flex justify-between w-full md:w-auto p-2 px-5">
					{/* Main Logo */}
					<Link to="/" className="text-lg font-bold text-gray-800">
						XO Anime
					</Link>

					{/*  Buttons */}
					<div className="md:hidden flex space-x-2">
						<button className="p-0.5" onClick={toggleSearchBar}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="w-5 h-5"
							>
								<path
									fillRule="evenodd"
									d="M9 3.5a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
									clipRule="evenodd"
								/>
							</svg>
						</button>

						<button className="md:hidden p-0.5" onClick={toggleHamburgerMenu}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d={
										hamburgerStatus
											? "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
											: "M4 6h16M4 12h16M4 18h16"
									}
								/>
							</svg>
						</button>
					</div>
				</div>

				{/*  Search Bar */}
				<form onSubmit={handleSubmit}>
					<div
						className={`flex items-center space-x-2 p-1 md:p-0 ${
							searchStatus ? "block" : "hidden"
						} md:flex`}
					>
						<input
							type="text"
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							className="p-1 rounded-xl"
							placeholder="Search..."
						/>
						<button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
								/>
							</svg>
						</button>
					</div>
				</form>
				{/* Navbar Links */}
				<div
					className={`flex flex-col md:flex-row justify-center md:space-x-6  space-y-2 p-2 md:p-0  w-11/12 sm:w-3/4 md:w-auto md:space-y-0 ${
						hamburgerStatus ? "flex" : "hidden"
					} md:flex`}
				>
					<Link to="/genres" className="btn-nav" onClick={toggleHamburgerMenu}>
						Genres
					</Link>
					<Link to="/movies" className="btn-nav" onClick={toggleHamburgerMenu}>
						Movies
					</Link>
					<Link to="/popular" className="btn-nav" onClick={toggleHamburgerMenu}>
						Popular
					</Link>
					<Link to="/recent" className="btn-nav" onClick={toggleHamburgerMenu}>
						Recent
					</Link>
					<Link to="/top" className="btn-nav" onClick={toggleHamburgerMenu}>
						Top
					</Link>
				</div>
			</nav>
		</>
	)
}
