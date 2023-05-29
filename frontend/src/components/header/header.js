
import './header.scss'


function Header({ setShowAddHeroForm }) {
    const handleFormShow = () => {
        setShowAddHeroForm(true);
    };


    return (
        <header >
            <h1>Superhero database</h1>
            <button onClick={handleFormShow}>Add Hero</button>
        </header>
    );
}

export default Header;
