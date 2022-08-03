import React from "react";

export default function Card( { data } ) {

	const title = data[0]
	const fileName = data[1]

	// console.log( data )

	return (
		<div className="page-link">
			<a href={ `./${ fileName }` } className="page-link__content">
				<span className="page-link__title">{ title }</span>
				<span className="page-link__filename">{ fileName }</span>
			</a>
		</div>
	)
}