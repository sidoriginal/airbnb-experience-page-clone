import '../App.css'
// import Zaf from '../images/zaf.png'
import star from '../images/star.png'

// eslint-disable-next-line react/prop-types
export default function Card({img,rating,reviewCount,location,title,price,openSpots}) {
    let badgeText;
    if(!openSpots) {
        badgeText="SOLD OUT"
    }
    else if(location=="Online"){
        badgeText="ONLINE"
    }
    return(
        <div className='card'>
            {!openSpots && <div className='card--badge'>{badgeText}</div>}
            {badgeText=="ONLINE" && <div className='card--badge'>{badgeText}</div>}
            <img src={img} className='card--img'/>
            <div className='card--stats'>
            <img src= {star} className='card--star'/>
            <span>{rating}</span>
            <span className='gray'>({reviewCount}) • </span>
            <span className='gray'>{location}</span>
            </div>
            <p>{title}</p>
            <p><span className='bold'>From ${price}</span> / person</p>
        </div>
    )
}