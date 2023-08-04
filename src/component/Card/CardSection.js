import img2 from './component/img/img2'

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
