import '../App.css'
import Grid from "../images/grid.png"

export default function Hero(){
    return(
        <>
            <section className='hero--div'>
                <img src={Grid} className='grid'/>
                <h1 className='title'>Online Experiences</h1>
                <p className='para'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
            </section>
        </>
    )

}