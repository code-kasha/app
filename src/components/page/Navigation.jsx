import PropTypes from "prop-types"

import PreviousPage from "../icons/PreviousPage"
import NextPage from "../icons/NextPage"

export default function Navigation({ page, hasNext, prev, next }) {
	return (
		<>
			<div className="flex p-2 justify-around w-11/12 mx-auto">
				<button onClick={prev} className={page === 1 ? "invisible" : ""}>
					<PreviousPage />
				</button>
				<p>Page: {page}</p>
				<button onClick={next} className={!hasNext ? "invisible" : ""}>
					<NextPage />
				</button>
			</div>
			<br />
		</>
	)
}

Navigation.propTypes = {
	page: PropTypes.number.isRequired,
	hasNext: PropTypes.bool.isRequired,
	prev: PropTypes.func.isRequired,
	next: PropTypes.func.isRequired,
}
