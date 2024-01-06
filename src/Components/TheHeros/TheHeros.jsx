import { useState } from 'react';
import './TheHeros.css';
import OneHero from './OneHero/OneHero.jsx';

export default function TheHeros() {

    const [ActivHero, setActivHero] = useState(1)

    function VHeroActivait(IDHero) {
        setActivHero(IDHero)
    }

    return (
        <section className='TheHeros'>
            <div className='TH-title'>
                <h2>The Heros</h2>
                <nav>
                    <ul>
                        <li
                            onClick={() => VHeroActivait(1)}
                            className={ActivHero == 1 ? 'VHeroActiv' : 'VHeroDisActiv'}
                        >V.5</li>
                        <li
                            onClick={() => VHeroActivait(2)}
                            className={ActivHero == 2 ? 'VHeroActiv' : 'VHeroDisActiv'}
                        >V.4</li>
                        <li
                            onClick={() => VHeroActivait(3)}
                            className={ActivHero == 3 ? 'VHeroActiv' : 'VHeroDisActiv'}
                        >V.3</li>
                    </ul>
                </nav>
            </div>
            <div className='Heros-v'>
                <div className={`Heros-v${ActivHero}`}>
                    <div className='v5'>
                        <div className='THscrol'>
                            <div className='Heros-photos'>
                                <OneHero />
                            </div>
                        </div>
                        <div className='Hero-cover'></div>
                        <div className='Hero-coverr'></div>
                    </div>
                    <div className='v4'>
                        <div className='THscrol'>
                            <div className='Heros-photos'>

                            </div>
                        </div>
                        <div className='Hero-cover'></div>
                        <div className='Hero-coverr'></div>
                    </div>
                    <div className='v3'>
                        <div className='THscrol'>
                            <div className='Heros-photos'>

                            </div>
                        </div>
                        <div className='Hero-cover'></div>
                        <div className='Hero-coverr'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
