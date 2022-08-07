import React from "react";

export default function Header( { data } ) {

	function toggleTheme() {
		const html = document.documentElement

		if (html.getAttribute('data-dark-theme') !== null) {
			html.removeAttribute('data-dark-theme')
			localStorage.setItem('theme', 'light')
		}
		else {
			html.setAttribute('data-dark-theme', '')
			localStorage.setItem('theme', 'dark')
		}
	}

	return (
		<header className="header">
			<div className="header__wrap">
				<div className="header__title">
					<div className="logo header__logo"><img src={ data?.company?.logo } alt="" /></div>
					{ data?.company?.logo !== '' && <span className="header__company-title">{ data?.company?.title }</span> }
				</div>
				<button className="change-theme" onClick={ () => toggleTheme() }></button>
			</div>
		</header>
	)
}