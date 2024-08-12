import { useEffect, useState } from "react"
import NewsItem from "./NewsItem"



function NewsBoard() {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_HERE`;
                let response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                let data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error("Error fetching news:", error);
                setArticles([]); // Hata durumunda articles'ı boş bir dizi olarak ayarla
            }
        };

        fetchNews();
    }, []);

    return (
        <div>
            <h2 className="text-center">LATEST <span className="badge bg-danger">NEWS</span></h2>
            {articles.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />;
            })}

        </div>


    );
}

export default NewsBoard