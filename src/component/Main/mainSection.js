
import img1 from '../img/img1.png'
import './main.css'
export function MainSection() {
    return (

        <div className="mein-section__wrap flex">
            <div className="container">
                <div className='flex'>
                    <div className="main-section__text">
                        <h1 className='main-section__h1'>ONE OF THE BEST COFFEE HOUSE IN YOUR HOME TOWN</h1>
                        <p className='main-section__p'> Lorem ipsum dolor sit amet, consectetur adipiscing elit do eiusmod veniam, quis nostrud exercitation laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className='buttons'>
                            <button className="mein-section__button-black">Explore More</button>
                            <button className="mein-section__button-wight">Read More </button>
                        </div>
                    </div>
                    <div className="main-section__text-img">
                        <img src={img1} />
                    </div>
                </div>

            </div>


        </div>
    );
}
export default MainSection;