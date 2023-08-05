import img2 from '../img/img2.png'
import './card.css'

export function CardSection() {
    return (
        <>
            <div className='card-section__wrap '>
                <div className="container flex">
                    <div className='card-section__wrap-img1'>
                        <img src={img2} />
                    </div>
                    <div className='card-section__wrap-img1'>
                        <img src={img2} />
                    </div>
                    <div className='card-section__wrap-img1'>
                        <img src={img2} />
                    </div>

                </div>
            </div>



        </>
    );

}
