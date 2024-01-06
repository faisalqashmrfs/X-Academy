import './Hero.css';
import trainingFile from './../../assets/Training-file/Tr.pdf';


export const Hero = () => {
  return (
    <section className='XA-Hero'>
      <div className='XA-Hero1'>
        <div className='Herotitle'>
          <h2>Redefine Your Success Story</h2>
          <p>In focal X agency We believe that every human need second chance, Every trainee is our partner, and hand in hand we are here to build something different and special.</p>
          <div className='HeroLogin'>
            <button>Login</button>
            <a href={trainingFile} download="Tr.pdf">Download training file</a>
          </div>
        </div>
        <div className='Hero-numberAnimat'>
          <div className='CHAIELD'>
            <p>300+</p>
            <p>Interns</p>
          </div>
          <div className='CHAIELD'>
            <p>24+</p>
            <p>Trainers</p>
          </div>
          <div className='CHAIELD'>
            <p>5+</p>
            <p>Camps</p>
          </div>
        </div>
      </div>
      <div className='XA-Hero2'>
        <div className='XA-Heroback3-orang'></div>
        <div className='XA-Heroback2-orang'></div>
        <div className='XA-Herobackground'></div>
      </div>
      
    </section>
  )
}
