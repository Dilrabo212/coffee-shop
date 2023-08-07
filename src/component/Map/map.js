import '../../index.css'
import './map.css'
import map from '../img/map.png'
import user from '../img/user.svg'
import data from '../img/data.svg'
import mail from '../img/mail.svg'


export const Map = () => {
    return (
        <>
            <div className='section-map__wrapper' >
                <div className='container flex'>
                    <div className='section-map__map-img'>
                        <img src={map} />
                    </div>
                    <div className='form-map__text-inform'>
                        <h3 className='text-inform__h3'>RESERVATION</h3>
                        <h1 className='text-inform__h1'>BOOKING A TABLE</h1>
                        <form >
                            <div className=''>
                                <input className='input__input' type='text' placeholder='4 Person' />
                                <img className='icons' src={user} />
                            </div>
                            <div className=''>
                                <input className='input__input' type='text' placeholder='12/06/2022' />
                                <img className='icons' src={data} />
                            </div>
                            <div className=''>
                                <input className='input__input' type='text' placeholder='Email' />
                                <img className='icons' src={mail} />
                            </div>
                        </form>
                        <button className='button'>BOOK A TABLE</button>

                    </div>
                </div>


            </div>


        </>


    );



}
export default Map