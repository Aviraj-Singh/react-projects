import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    return (
        <div className="res-card">
            <img className="card-image" src={props.img} alt="card-image"/>
            <h3>{props.name}</h3>
            <h6>Biryani, North Indian, Cuisines</h6>
            <p>4.5 Stars</p>
            <em>38 minutes</em>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard name="Megana Foods" img="https://b.zmtcdn.com/data/pictures/chains/1/50691/9f5024f289d3ea5c80fa3259972a2371.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"/>
                <RestaurantCard name="Megana Foods" img="https://b.zmtcdn.com/data/pictures/chains/1/50691/9f5024f289d3ea5c80fa3259972a2371.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"/>
                <RestaurantCard name="Megana Foods" img="https://b.zmtcdn.com/data/pictures/chains/1/50691/9f5024f289d3ea5c80fa3259972a2371.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"/>
                <RestaurantCard name="Megana Foods" img="https://b.zmtcdn.com/data/pictures/chains/1/50691/9f5024f289d3ea5c80fa3259972a2371.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"/>

            </div>
        </div>
    )
}

const AppLayout = () => {
    return <div className="app">
        <Header/>
        <Body/>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>)