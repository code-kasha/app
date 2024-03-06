import PropTypes from "prop-types"

export default function Heading({ content }) {
	return (
		<>
			<p className="text-lg font-bold text-center pt-4">{content}</p>
			<br />
		</>
	)
}

Heading.propTypes = {
	content: PropTypes.string,
}
