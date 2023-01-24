import { restaurantList, img_URL } from "./constants";


//functional Component for restaurant cards
const RestaurantCard = ({restaurant}) => {

    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwoString} = restaurant.data;

    console.log(restaurant);
    return (
        <div className="restaurant-card">
            <img src={img_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p><span>&#9733;{avgRating}</span>&bull;
            <span>{deliveryTime} Mins</span>&bull;
            <span>{costForTwoString}</span></p>
            {/* <p>{restaurantList[0].data.aggregatedDiscountInfo.shortDescriptionList.values("meta")}</p> */}
        </div>
       
    );
};

export const Body = () => {
    return (
        <div className="restaurant-list">
            <RestaurantCard restaurant = {restaurantList[0]}/>
            <RestaurantCard restaurant = {restaurantList[1]}/>
            <RestaurantCard restaurant = {restaurantList[2]}/>
            
        </div>
        );
};

