const Title = () => {
    return (
        <h1 id="title" key="title">Food Villa</h1>
    );
};

const Header = () => {
    return (
        <div className="header">
            <Title />
            <ul className="nav">
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    );
};

export default Header;