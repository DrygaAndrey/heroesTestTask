import HeroesListItem from '../heroesListItem/heroesListItem';
import './heroesList.scss'


function HeroesList() {
    return (
        <div className='heroesList'>
            <HeroesListItem />
            <HeroesListItem />
            <HeroesListItem />
            <HeroesListItem />
            <HeroesListItem />
        </div>
    );
}

export default HeroesList;
