import React from "react";
import Card from "./Card";

export default function CatalogBlock( { data } ) {

	const title = data[0]
	const pageArr = Object.entries( data[1] )
	// console.log( data )

	if ( pageArr.length === 0 ) return

	return (
		<div className="b-catalog">
			<div className="b-catalog__header">
				<div className="b-catalog__header-content">
					<h3 className="b-catalog__title">{ title }</h3>
				</div>
			</div>
			<div className="b-catalog__body">
				{
					pageArr.map( ( page, index ) => <Card data={ page } key={ index }></Card> )
				}
			</div>
		</div>
	)
}