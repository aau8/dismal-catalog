import React from "react";

export default function Social( { data } ) {
	const dataSocial = { "data-social": data[0] }

	return (
		<a href={ data[1] } className="social" { ...dataSocial }></a>
	)
}