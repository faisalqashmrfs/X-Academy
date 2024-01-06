import './OneHero.css';
import Heros from './../../const/Heros.jsx';

export default function OneHero() {
    return (
        <div className='Heros-Cards'>
            {Heros.map(({ HeroImg, TopNumber, HeroName, HeroSpecialization }, index) => (
                <div className='OneHeroCard' key={index}>
                    <img className='Heroimg' src={HeroImg} alt="Hero image" />
                    {TopNumber || <span>{TopNumber}</span>}
                    <div className='Hero-imfo'>
                        <h2>{HeroName}</h2>
                        <p>{HeroSpecialization}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
