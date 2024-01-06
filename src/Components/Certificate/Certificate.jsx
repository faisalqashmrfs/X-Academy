/* eslint-disable react/no-unescaped-entities */
import './Certificate.css'
import search from './Search.png'
import Lisance from './Lisance.png'
// import { useState } from 'react'

export default function Certificate() {
    // const [IDValue , setIDValue ] = useState("")

    // console.log(IDValue)

    return (
        <section className='CertificateSec'>
            <div className='CE-backg'></div>
            <h2>Certificate</h2>
            <div className='CSides'>
                <div className='CSide1'>
                    <div className='MIdwidthCertifi'>
                        <p>Here you can find huge information about our trainees</p>
                        <span>Just enter the trainee's ID to get the access</span>
                        <div className='CSearch'>
                            <input id='CertificatINput' type="search" placeholder='Search By name Or Certificate ID Number' />
                            <img src={search} alt="" />
                        </div>
                    </div>
                </div>
                <div className='CSide2'>
                    <img src={Lisance} alt="" />
                </div>
            </div>
        </section>
    )
}
