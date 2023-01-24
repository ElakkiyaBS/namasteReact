import { useState } from "react";

const SearchArea = () => {

    const [searchText, setSearchText] = useState("KFC")
    return (
        <div className="search">
        <input type ="text" placeholder="Search Restaurants" value={searchText}/>
        <button>Search</button>
        </div>
    )
}

export default SearchArea;