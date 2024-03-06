import { Routes, Route } from "react-router-dom"

import Navbar from "./components/core/Navbar"
import Footer from "./components/core/Footer"

import Details from "./routes/Details"
import Genre from "./routes/Genre"
import Genres from "./routes/Genres"
import Index from "./routes/Index"
import Movies from "./routes/Movies"
import Popular from "./routes/Popular"
import Recent from "./routes/Recent"
import Search from "./routes/Search"
import Top from "./routes/Top"
import Watch from "./routes/Watch"

function App() {
	return (
		<>
			<div className="flex flex-col h-screen justify-between">
				<Navbar />
				<div className="flex-1">
					<Routes>
						<Route index element={<Index />} />
						<Route path="/details/:id/" element={<Details />} />
						<Route path="/genre/:genre" element={<Genre />} />
						<Route path="/genres" element={<Genres />} />
						<Route path="/movies" element={<Movies />} />
						<Route path="/popular" element={<Popular />} />
						<Route path="/recent" element={<Recent />} />
						<Route path="/search/:query" element={<Search />} />
						<Route path="/top" element={<Top />} />
						<Route path="/watch/:id" element={<Watch />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</>
	)
}

export default App
