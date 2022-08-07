import React from "react";
import Social from "./Social";

export default function Footer( { data } ) {

	return (
		<footer className="footer">
			<div className="footer__wrap">
				{
					data?.author?.name !== "" &&
					<div className="footer-signa">
						<div className="footer-signa__title">Верстка сайта</div>
						<div className="footer-signa__author">{ data?.author?.name }</div>
					</div>
				}
				<div className="footer__contacts">
					{
						data?.author?.quote !== "" &&
						<p className="footer-quote">{ data?.author?.quote }</p>
					}
					<div className="socials">
						<div className="socials__list">
							{
								Object.entries( data?.author?.socials ? data?.author?.socials : {} ).filter( social => social[1] !== '' ).map( ( social, index ) => {
									return <Social data={ social } key={ index }></Social>
								} )
							}
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}