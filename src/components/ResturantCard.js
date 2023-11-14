import { CDN_URL } from "../Utils/constants"

const ResturantCard= (props) =>{
    const {resData} = props
    const {cloudinaryImageId , name, avgRating,cuisines, costForTwo, deliveryTime } = resData?.info

    return(
        <div className="res-card">
              <img src={CDN_URL
              +cloudinaryImageId }
            alt="" className="res-logo"></img>
            <h3>{name}</h3>
            <h4>{avgRating.join(", ")}</h4>
            <h4>{costForTwo/100} for two</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

export default ResturantCard;
