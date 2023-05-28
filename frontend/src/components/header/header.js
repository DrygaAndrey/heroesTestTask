
import './header.scss'
import axios from 'axios';

function Header() {
    const createHero = async () => {
        try {
            const response = await axios.post('http://localhost:3333/heroes/heroAdd', { name: 'Superman', age: 30 });
            console.log(response.data); // Полученные данные от сервера
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
        }
    };

    return (
        <header >
            <h1>Superhero database</h1>
            <button onClick={createHero}>Add Hero</button>
        </header>
    );
}

export default Header;
