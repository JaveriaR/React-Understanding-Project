import ResturantCard from "./ResturantCard";
import resList from "../Utils/mockData";
import { useEffect } from "react";

const Body = () => {

    useEffect(() =>{
        fetchData();
    }, [])

    const fetchData = async() => {
        const data = await axios("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4446394&lng=77.46575469999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
        {
            method: 'GET',    
            crossorigin: true,    
            //mode: 'cors-with-forced-preflight',
            withCredentials: true,  
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Origin': '*',
              'Access-Control-Allow-Headers': '*',
              "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
              'Access-Control-Allow-Origin': 'http://localhost:1234'
          }  
        })
        const json = await data.json();
        console.log(json);
    }

  return (

   

    <div className="body">
      <div className="search"> Search</div>
      <div className="res-container">
        {resList.map((resturant) => {
          <ResturantCard key={resturant.info.id} resData={resturant} />;
        })}
      </div>
    </div>
  );
};

export default Body;