import React, {Component} from 'react';
import HotelCard from './HotelCard';
import Search from './Search';
import "../css/style.css"

const HOTELS = [
    {
        id: 3993887,
        name: "Romantic Cabana with view",
        description: "Located in the coffee region, a charming cabana made from bamboo, with a great view and " +
        "a sendero or pathway through the bamboo forest which criss-crosses our 5 acre organic farm, leading down" +
        "to a stream. A place to relax and commune with nature.",
        price: 2347,
        image: "https://a0.muscache.com/im/pictures/65441227/bb1eb2dd_original.jpg?aki_policy=large&quot",
        url: "https://www.airbnb.ru/rooms/3993887"
    }, {
        id: 8357,
        name: "Mushroom Dome Cabin",
        description: "With a geodesic dome loft & a large deck in the trees, you'll feel like you're in a tree house " +
        "in the woods. (As we book up months in advance, if you would like a nature retreat here, reserve our sweet " +
        "Hummingbird Haven: https://www.airbnb.com/rooms/6562632) We are in a quiet yet convenient location. " +
        "Shaded by Oak and Madrone trees and next to a Redwood grove, you can enjoy the outdoors from the deck. " +
        "In the summer, it is cool and in the winter you might get to hear the creek running below.",
        price: 3274,
        image: "https://a0.muscache.com/im/pictures/140333/3ab8f121_original.jpg?aki_policy=large",
        url: "https://ru.airbnb.com/rooms/8357"
    }, {
        id: 8794484,
        name: "Underground Hygge",
        description: "This inspired dwelling nestled right into the breathtaking Columbia River Gorge mountainside. " +
        "Reverently framed by the iconic round doorway, the wondrous views will entrance your imagination and inspire" +
        " an unforgettable journey. Every nook of this little habitation will warm your sole, " +
        "every cranny will charm your expedition of repose. Up the pathway, tucked into the earth, " +
        "an unbelievable adventure awaits!",
        price: 5239,
        image: "https://a0.muscache.com/im/pictures/56bff280-aba3-42f3-af42-adc2814a72f4.jpg?aki_policy=large",
        url: "https://ru.airbnb.com/rooms/8794484"
    }, {
        id: 1083329,
        name: "Amazing view - Moderne apartment",
        description: " Three apartments, architectural house in north Iceland. " +
        "This is one of the apartments in Villa Lola, located in Vaðlaheiði near Akureyri, the capital of north Iceland.",
        price: 4991,
        image: "https://a0.muscache.com/im/pictures/25624825/6ef8e934_original.jpg?aki_policy=large",
        url: "https://ru.airbnb.com/rooms/1083329"
    }
];

class HotelApp extends Component {
    constructor(props) {
        super(props);
        //задаем дефолтное значение для search.
        this.state = {
            displayedHotels: HOTELS,
            search: ''
        };
        this.handleSearch = this.handleSearch.bind(this);
    };

    handleSearch(e) {
        const searchQuery = e.target.value.toLowerCase();
        
        const displayedHotels = HOTELS.filter(hotel=> {
            const searchString = hotel.name.toLowerCase() + hotel.description.toLocaleLowerCase();
            return searchString.indexOf(searchQuery) !== -1;
        });

        this.setState({displayedHotels});
    };

    render() {

        let hotelCard = this.state.displayedHotels.map(hotel=>
            <HotelCard
                key={hotel.id}
                name={hotel.name}
                id={hotel.id}
                description={hotel.description}
                price={hotel.price}
                image={hotel.image}
                url={hotel.url}
            />
        );
        return (
            <div className="app">
                <div className="header">Hotel Look</div>
                <Search
                    onSearch={this.handleSearch}

                />
                <div className="hotels-list">
                    {hotelCard}
                </div>
            </div>
        )
    }
}
;
export default HotelApp;