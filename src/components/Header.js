import React from 'react';

const Header = (props) => {
    { /* stateless function
             console.log(this); this.prop will made available
            $r in React Development tools - current component
        */ }
    return (
        <header className="top">
            <h1>
                Fresh Cut Now
            </h1>
            <h3 className="tagline"><span>{props.tagline}</span></h3>
        </header>
    )
}

export default Header;