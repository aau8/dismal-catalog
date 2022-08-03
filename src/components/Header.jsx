import React from "react";

export default function Header( { data } ) {

	return (
		<header className="header">
			<div className="header__wrap">
				<div className="header__title">
					<div className="logo header__logo"><img src={ data?.company?.logo } alt="" /></div>
					{ data?.company?.logo !== '' && <span className="header__company-title">{ data?.company?.title }</span> }
				</div>
			</div>
		</header>
	)
}