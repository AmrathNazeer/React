import { CircularProgress, TextField, Typography,Card, CardMedia, CardContent } from "@mui/material";
import Grid from '@mui/material/Grid2';
import React, { useEffect } from "react";
function SearchUser() {
    const [news, setNews] = React.useState([]);
    let [searchText, setSearchText] = React.useState("");
    let [loading, setLoading] = React.useState(false);
    const [filteredNews, setFilteredNews] = React.useState([]);
    useEffect(() => {

        const fetchNews = async () => {
            try {
            const NEWS_API = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=93d4c33f0b364829a309f5513f740363"
            const res = await fetch(NEWS_API);
            const data = await res.json();
            setNews(data.articles);
            setFilteredNews(data.articles);
            setLoading(false);
            }catch(error){
                console.log("No News Found, Error message: " , error);
            }finally{
                setLoading(false);

            }
            
        }
        fetchNews()
    }, []);


    const handleChange = (event) => {
        const term = event.target.value;
        setSearchText(term);

        if (term.trim() === '') {
            filteredNews(news)
        } else {
            const filtered = news.filter((item) => item.title.toLowerCase().includes(term.toLowerCase()));
            console.log(filtered);
            setFilteredNews(filtered);
        }
    }



    return (
        <div>
            <h3>SearchUser</h3>
            <TextField fullwidth label="Search News By Title"
                value={searchText}
                onChange={handleChange}
                margin='normal' />


            {
                loading ? (
                    <div>
                        <CircularProgress />
                    </div>
                ) : (
                    <div>
                        <Grid container rowSpacing={1} columnSpacing={{xs: 1, sm:3, md:4}}>
                            {
                                filteredNews.map((value, index) => {
                                    return (
                                        <Grid item Key={index}  size={{md:4,xs:4}}>
                                            <Card>
                                                <CardMedia sx={{height:'200px'}} image= {value.urlToImage}/>
                                                <CardContent></CardContent>
                                                <Typography variant='h4'>{value.title}</Typography>
                                                <Typography variant='body2'>{value.description}</Typography>
                                            </Card>
                                        </Grid>
                                    );
                                })
                            }
                        </Grid>
                    </div>
                )
            }
        </div>
    )

}


export default SearchUser


