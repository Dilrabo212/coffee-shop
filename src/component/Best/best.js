import vest from '../img/best.png'
import vest2 from '../img/best2.png'
import vest3 from '../img/best3.png'
import '../../index.css'
import './best.css'
import star from '../img/Group.svg'

export const Best = () => {
    return (
        <>
            <div className='best-section__wrapper'>
                <div className='container'>
                    <div className='best-sectoin__text flex'>
                        <h1 className='text__h1'>Cafena Best Product</h1>
                        <button className='best-section__button'>Cafena Best Product</button>

                    </div>

                    <div className='flex'>


                        <div className='best-section__card'>
                            <div className='best-section__card-img'>

                                <img className='image' src={vest} alt='' />

                            </div>
                            <div className='flex'>
                                <div className='rating'>Rating: </div>
                                <ul className='stars'>
                                    <img className='star' src={star} />
                                    <img className='star' src={star} />
                                    <img className='star' src={star} />
                                    <img className='star' src={star} />
                                    <img className='star' src={star} />

                                </ul>
                            </div>
                            <h3 className='best-section__h3'>Virgin Coffee Gred</h3>
                            <ul className='price__info flex'>
                                <li>Price:</li>
                                <li className='price__section'>$25</li>
                            </ul>
                        </div>
                        <div className='best-section__card'>
                            <div className='best-section__card-img'>

                                <img className='image' src={vest2} alt='' />

                            </div>
                            <div className='flex'>
                                <div className='rating'>Rating: </div>
                                <ul className='stars'>
                                    <img className='star' src={star} />
                                    <img className='star' src={star} />
                                    <img className='star' src={star} />
                                    <img className='star' src={star} />
                                    <img className='star' src={star} />

                                </ul>
                            </div>
                            <h3 className='best-section__h3'>Virgin Coffee Gred</h3>
                            <ul className='price__info flex'>
                                <li>Price:</li>
                                <li className='price__section'>$25</li>
                            </ul>
                        </div>
                        <div className='best-section__card'>
                            <div className='best-section__card-img'>

                                <img className='image' src={vest3} alt='' />

                            </div>
                            <div className='flex'>
                                <div className='rating'>Rating: </div>
                                <ul className='stars'>
                                    <img className='star' src={star} />
                                    <img className='star' src={star} />
                                    <img className='star' src={star} />
                                    <img className='star' src={star} />
                                    <img className='star' src={star} />

                                </ul>
                            </div>
                            <h3 className='best-section__h3'>Virgin Coffee Gred</h3>
                            <ul className='price__info flex'>
                                <li>Price:</li>
                                <li className='price__section'>$25</li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>


        </>
    );



}
export default Best