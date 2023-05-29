import { useState, useEffect } from 'react';
import axios from 'axios';
import HeroesListItem from '../heroesListItem/heroesListItem';
import './heroesList.scss'


function HeroesList({ heroes }) {

    useEffect(() => {
        
    }, [heroes]);

    

    return (
        <div className='heroesList'>
            {heroes.map(hero => (
                <HeroesListItem
                key={hero._id}
                    nickname={hero.nickname}
                    realName={hero.realName}
                    originDescr={hero.originDescr}
                    superPowers={hero.superPowers}
                    catchPhrases={hero.catchPhrases}
                    imageFiles={hero.imageFiles}
                />
            ))}
        </div>
    );
}
export default HeroesList;
