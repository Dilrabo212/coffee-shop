import '../../index.css'
import './futter.css'
import vektor from '../img/vektor.svg'
import phone from '../img/phone.svg'
import gps from '../img/gps.svg'
import tg from '../img/tg.svg'
import logo from '../img/logo.svg'
import sotcial from '../img/sotcial.svg'



export const Futter = () => {

    return (
        <>
            <div className='section-futter__futter-wrapper'>
                <div className='container'>
                    <img className='vektor' src={vektor} />
                    <h1 className='section-futter__h1' >GO TO TOP</h1>
                    <div className='section-futter__contact flex'>
                        <section className='flex' >
                            <img className='img-icon' src={phone} />
                            <div className='strong-text'>Phone:
                                <a className='text-midle'>+88019 339 702 520</a>
                            </div>
                        </section>
                        <section className='flex' >
                            <img className='img-icon' src={gps} />
                            <div className='strong-text'>Address:
                                <a className='text-midle'> 30 North Wes New</a>
                            </div>
                        </section>
                        <section className='flex' >
                            <div className='mail_post'>
                                <input className='mail__post' type='text' placeholder='Enter your email' />
                                <img className='tg' src={tg} />
                            </div>
                        </section>
                    </div>
                    <div className='futter-logo__contact-sitcial flex'>
                        <div className='left-container'>
                            <img className='left-container__logo' src={logo} />
                            <div className='logo__name'>CAFENA</div>
                            <p className='p'>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum</p>
                        </div>
                        <div className='right-container'>
                            <img className='right-container__logo' src={sotcial} />
                        </div>
                    </div>
                    <div className='line-bottum'>
                    </div>
                    <div className='wrapper-futter'>
                        <h3 className='h3'>ALL RIGHT RESERVED © 2022</h3>
                    </div>
                </div>
            </div>



        </>
    );

}
export default Futter