import { TextField } from "@mui/material";
import React from "react";
function SearchUser() {
    const [news,setNews] =React.useState([]);
    let [searchText,setSearchText] = React.useState("");
    let[loading,setLoading] = React.useState(false);
    const searchUser = async ()=> {
        const NEWS_API = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=93d4c33f0b364829a309f5513f740363"
        const res =await fetch(NEWS_API);
        const data = await res.json();
        setNews(data.articles);
    }



    return (
        <div>
            <h3>SearchUser</h3>
            <TextField fullwidth label="Search News By Title"
            value={searchText}
            margin='normal'/>
           
            <button onClick={searchUser}>Search</button>

            {
                news.map((item)=>{
                    return(
                        <div>{item.title}</div>
                );
                })
            }
            </div>
    )
}


export default SearchUser


