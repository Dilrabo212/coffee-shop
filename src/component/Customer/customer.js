import './customer.css'
import '../../index.css'
import person from '../img/person.png'
import left from '../img/left.svg'
import right from '../img/right.svg'



export const Customer = () => {

    return (
        <>
            <div className='section-customer__wrapper'>
                <div className='container'>
                    <div className='wrap__content'>
                        <button className='customer-feedback'>CUSTOMER FEEDBACK</button>
                        <h1 className='section-customer__h1'>OUR CUSTOMER REVIEW</h1>
                        <div className='p__wrapper'>
                            <button className='icon-left'><img src={left} /></button>
                            <p className='section-custemor__info-p'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem opposed to using 'Content here, content here..</p>
                            <button className='icon-left'><img src={right} /></button>
                        </div>
                        <div className='section-custemor__person'>
                            <img className='img-person' src={person} />
                            <strong className='name'>Rasalida Williamson</strong>
                        </div>
                    </div>
                </div>
            </div>




        </>




    );


}
export default Customer