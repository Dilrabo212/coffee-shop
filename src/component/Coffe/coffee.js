import coffee from '../img/coffeemachine.png'
import './coffe.css'
import '../../index.css'

export const Coffee = () => {
    return (
        <>
            <div className='section-coffee__wpapper'>
                <div className='container'>
                    <div className='flex'>

                        <div className='coffee-section__info-text'>
                            <h1 className='section-coffe__h1'>COFFEE MACHINE,BUY FOR HOME</h1>
                            <p className='section-coffee__p'>Donec et nibh maximus, congue est eu, mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis. Aliquam erat volutpat.</p>
                            <p className='section-coffee__pp'>mattis nunc. Praesent ut quam quis quam venenatis fringilla. Morbi vestibulum id tellus mmodo mattis.</p>

                            <button className='section-coffee__button'>Discover Now</button>
                        </div>
                        <div className='coffee-section__info-image'>
                            <div className='beck-image__elipse'>
                                <img className="image__cofemachine" src={coffee} /></div>
                        </div>

                    </div>
                </div>


            </div>


        </>


    );
}
export default Coffee