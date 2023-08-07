import './blog.css'
import '../../index.css'
import photo from '../img/photo.png'
import photo2 from '../img/photo2.png'
import photo3 from '../img/photo3.png'
import row from '../img/row.svg'

export const Blog = () => {
    return (
        <>
            <div className='section-blog__wrapper '>
                <div className='container'>
                    <button className='section-blog__button'>FROM OUR BLOG</button>
                    <h1 className='section-blog__h1'>OUR NEWS & ARTICLES</h1>


                    <div className='flex'>
                        <div className='section-blog__card-wrap'>
                            <img className='imgs1' src={photo} />
                            <ul className='wrap-card__info'>
                                <li className='midle-text flex'> <section className='gold'>BY:</section> Cafena / Burger / Apr 30, 2022</li>
                                <strong>Build A Cool Morning With </strong>
                                <strong>Cafena Coffee</strong>
                                <section className='gold'>READ MORE <img src={row} /> </section>
                            </ul>
                        </div>
                        <div className='section-blog__card-wrap'>
                            <img className='imgs1' src={photo2} />
                            <ul className='wrap-card__info'>
                                <li className='midle-text flex'> <section className='gold'>BY:</section> Cafena / Burger / Apr 30, 2022</li>
                                <strong>Build A Cool Morning With </strong>
                                <strong>Cafena Coffee</strong>
                                <section className='gold'>READ MORE <img src={row} /> </section>

                            </ul>
                        </div>
                        <div className='section-blog__card-wrap'>
                            <img className='imgs1' src={photo3} />
                            <ul className='wrap-card__info'>
                                <li className='midle-text flex'> <section className='gold'>BY:</section> Cafena / Burger / Apr 30, 2022</li>
                                <strong>Build A Cool Morning With </strong>
                                <strong>Cafena Coffee</strong>
                                <section className='gold'>READ MORE <img src={row} /> </section>

                            </ul>
                        </div>
                    </div>


                </div>
            </div>


        </>
    );



}
export default Blog