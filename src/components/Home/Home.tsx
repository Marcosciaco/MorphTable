import "./Home.css"

const Home = () => {
    return (
        <div className="home">
            <div className="home__title">Weather App</div>
            <div className="home__subtitle">Choose a view</div>
            <div className="home__button__container">
                <a href="/table" className="home__button">Table</a>
                <a href="/list" className="home__button">List</a>
            </div>
        </div>
    );
}

export default Home;