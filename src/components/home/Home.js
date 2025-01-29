import Counter from "../counter/Counter";
import FetchApi from "../pages/FetchApi";
import React from "react";
import SearchUser from "../pages/SearchUser";

function Home(){
    return (
        <div>
        Home
            <Counter/>
             <FetchApi/>
             <SearchUser/>
        </div>

    )
}

export default Home;