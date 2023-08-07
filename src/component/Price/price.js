import './price.css'
import '../../index.css'
import price1 from '../img/price1.png'
import price2 from '../img/price2.png'
import price3 from '../img/price3.png'
export const Price = () => {
    return <>
        <div className='price-section__wrap'>
            <div className='container'>
                <button className='Popular-Product'>Popular Product</button>
                <h1 className='price-section__h1'>Cafena Popular Product</h1>
                <div className='price-section__container'>

                    <div className='left'>
                        <ul className='price-section__container-wrp'>
                            <li ><img className='img' src={price1} /></li>
                            <li className='coffee-name'>Vicaragua Coffee Beans
                                <li className='coffee-mony'>$29</li>
                            </li>
                        </ul>
                        <ul className='price-section__container-wrp'>
                            <li ><img className='img' src={price2} /></li>
                            <li className='coffee-name'>Vicaragua Coffee Beans
                                <li className='coffee-mony'>$29</li>
                            </li>
                        </ul>
                        <ul className='price-section__container-wrp'>
                            <li ><img className='img' src={price3} /></li>
                            <li className='coffee-name'>Vicaragua Coffee Beans
                                <li className='coffee-mony'>$29</li>
                            </li>
                        </ul>
                    </div>


                    <div className='rite'>
                        <ul className='price-section__container-wrp'>
                            <li ><img className='img' src={price1} /></li>
                            <li className='coffee-name'>Vicaragua Coffee Beans
                                <li className='coffee-mony'>$29</li>
                            </li>
                        </ul>
                        <ul className='price-section__container-wrp'>
                            <li ><img className='img' src={price2} /></li>
                            <li className='coffee-name'>Vicaragua Coffee Beans
                                <li className='coffee-mony'>$29</li>
                            </li>
                        </ul>
                        <ul className='price-section__container-wrp'>
                            <li ><img className='img' src={price3} /></li>
                            <li className='coffee-name'>Vicaragua Coffee Beans
                                <li className='coffee-mony'>$29</li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </>
}
export default Price;