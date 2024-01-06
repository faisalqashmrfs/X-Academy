import { useState } from 'react';
import './EmpowerJourney.css';
import bacKkGround from './EmpowerJ/Group120.png';
import Logo from './EmpowerJ/Logo.png';

export default function EmpowerJourney() {

  const [activeButtonEJ, setActiveButtonEJ] = useState(1);
  const [activeSectionEJ, setactiveSectionEJ] = useState(1);
  let [ShowMoreEJ, setShowMoreEJ] = useState(true);


  const handleButtonClick = (buttonId) => {
    setActiveButtonEJ(buttonId);
    setactiveSectionEJ(buttonId)
    // Perform any other actions you want when a button is clicked
  };

  const handleShowClick = () => {
    setShowMoreEJ( ShowMoreEJ =!ShowMoreEJ )
  };

  return (
    <section className='EJSection'>
      <h2 className='EJTitle'>Empower Your Journey</h2>
      <nav className='EJNavbar'>
        <ul>
          <li
            onClick={() => handleButtonClick(1)}
            className={activeButtonEJ === 1 ? 'EJactiv' : ''}
          >
            Graphic Design
          </li>
          <li
            onClick={() => handleButtonClick(2)}
            className={activeButtonEJ === 2 ? 'EJactiv' : ''}
          >
            Marketing
          </li>
          <li
            onClick={() => handleButtonClick(3)}
            className={activeButtonEJ === 3 ? 'EJactiv' : ''}
          >
            Branding
          </li>
          <li
            onClick={() => handleButtonClick(4)}
            className={activeButtonEJ === 4 ? 'EJactiv' : ''}
          >
            Ui/Ux
          </li>
          <li
            onClick={() => handleButtonClick(5)}
            className={activeButtonEJ === 5 ? 'EJactiv' : ''}
          >
            Flutter
          </li>
          <li
            onClick={() => handleButtonClick(6)}
            className={activeButtonEJ === 6 ? 'EJactiv' : ''}
          >
            Web Development
          </li>
        </ul>
      </nav>
      <div
        className={`EJSlider${activeSectionEJ}`}
      >
        <section className='GraphicDesign'>
          <div className='GR-MainCard'>
            <div className='row-1'>
              <div className='Training-Topics'>
                <h2>Training Topics</h2>
                <ul>
                  <li>Academic design rules, Color theory and dealing with it.</li>
                  <li>Learn about all areas of design, and Dealing with programs and tools such as:
                    Photoshop, Illustrator...</li>
                  <li>The psychology of colors, advertising and their impact.</li>
                  <li>Principles of art and visual perception.</li>
                  <li>Training on producing creative ideas.</li>
                  <li>Introduction to product and publication design.</li>
                  <li>Lessons to learn how to engage in the labor market and deal with Teams, clients and companies.</li>
                  <li>Lessons in ethnography, design, and studying the mentality of the market, the customer, and the user</li>
                </ul>
              </div>
              <div className='just-img'>
                <img src={bacKkGround} alt="" />
              </div>
            </div>
            <div className='row-2'>
              <div className='Training-Oblectives'>
                <h2>Training Oblectives</h2>
                <ul>
                  <li>Develop a solid foundation in graphic design principles and techniques.</li>
                  <li>Cultivate a deep understanding of visual communication and its impact.</li>
                  <li>Gain proficiency in industry-standard design software and tools and trending styles</li>
                  <li>Master the art of typography, layout composition, and color theory, and sychological method.</li>
                  <li>Acquire skills in logo design, branding, and printing</li>
                </ul>
              </div>
              <div className='Training-Outputs'>
                <h2>Training Outputs</h2>
                <ul>
                  <li>Proficiency in graphic design principles and industry-standard software.</li>
                  <li>Ability to create visually appealing designs with strong composition and typography.</li>
                  <li>Skills in branding, logo design, and digital illustration.</li>
                  <li>Knowledge of UI/UX design principles and the ability to create user-friendly interfaces.</li>
                  <li>Understanding of print design and production processes.</li>
                </ul>
                <div 
                  className='SHow-more'
                  onClick={() => handleShowClick()}
                  >Know more</div>
              </div>
            </div>
          </div>
          <div className={ ShowMoreEJ ? "GR-SideCard" : "GR-SideCardDisAct"}>
            <div className='row-1'>
              <div className='Training-Topics'>
                <h2>Training Topics</h2>
                <ul>
                  <li>Academic design rules, Color theory and dealing with it.</li>
                  <li>Learn about all areas of design, and Dealing with programs and tools such as:
                    Photoshop, Illustrator...</li>
                  <li>The psychology of colors, advertising and their impact.</li>
                  <li>Principles of art and visual perception.</li>
                  <li>Training on producing creative ideas.</li>
                  <li>Introduction to product and publication design.</li>
                  <li>Lessons to learn how to engage in the labor market and deal with Teams, clients and companies.</li>
                  <li>Lessons in ethnography, design, and studying the mentality of the market, the customer, and the user</li>
                </ul>
              </div>
              <div className='just-img'>
                <div className='Training-Oblectives'>
                  <h2>Training Oblectives</h2>
                  <ul>
                    <li>Develop a solid foundation in graphic design principles and techniques.</li>
                    <li>Cultivate a deep understanding of visual communication and its impact.</li>
                    <li>Gain proficiency in industry-standard design software and tools and trending styles</li>
                    <li>Master the art of typography, layout composition, and color theory, and sychological method.</li>
                    <li>Acquire skills in logo design, branding, and printing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='row-2'>
              <div className='Training-Outputs'>
                <h2>Training Outputs</h2>
                <ul>
                  <li>Proficiency in graphic design principles and industry-standard software.</li>
                  <li>Ability to create visually appealing designs with strong composition and typography.</li>
                  <li>Skills in branding, logo design, and digital illustration.</li>
                  <li>Knowledge of UI/UX design principles and the ability to create user-friendly interfaces.</li>
                  <li>Understanding of print design and production processes.</li>
                </ul>
              </div>
              <div className='Training-Requirements'>
                <div className='sid1'>
                  <h2>Training Requirements</h2>
                  <ul>
                    <li>Strong internet connection</li>
                    <li>Free time for four hours a day</li>
                    <li>Commitment and efficiency</li>
                    <li>Respect company rules and trainees</li>
                  </ul>
                </div>
                <div className='sid2'>
                  <img src={Logo} alt="" />
                  <div
                  className='ClossHandelClick'
                  onClick={() => handleShowClick()}
                  >X</div>
                </div>
              </div>
            </div>
          </div>
          
        </section>
        <section className='Marketing'></section>
        <section className='Branding'></section>
        <section className='UiUx'></section>
        <section className='Flutter'></section>
        <section className='WebDevelopment'></section>
      </div>
    </section>
  )
}
