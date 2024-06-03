import React, { useState, useEffect } from "react";
import "../style.css"; // Import a CSS file for styling (see explanation below)
import { Marquee } from "../component/Marquee";
export const News = () => {
    const [news, setNews] = useState([]);
    const [searchLanguage, setSearchLanguage] = useState("en");
    // const [sort, setSort] = useState("publishedAt");
    const [searchCountry, setSearchCountry] = useState("us");
    // useEffect(() => {
    //     fetchNews();
    // }, [searchLanguage]);

    const handleLanguageChange = (event) => {
        setSearchLanguage(event.target.value);
    };
    // const handleSort = (event) => {
    //     setSort(event.target.value);
    // };
    const handleCountry = (event) => {
        setSearchCountry(event.target.value);
    };
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch("https://newsapi.org/v2/top-headlines?apiKey=078b4ce02eac4f7c90f14f453f04023a&language=" + searchLanguage +"&country="+searchCountry);
                const data = await response.json();
                setNews(data.articles);
            } catch (error) {
                console.log(error);
            }
        };
        fetchNews();
    }, [searchLanguage,searchCountry]);

    return (
        <div className="News">
            <h1 align="center">News</h1>
            <Marquee/>
            <div className="dropdowns">
                <label htmlFor="languages">Choose a language:</label>
                <select name="languages" id="languages" onChange={handleLanguageChange} value={searchLanguage}>
                    {/* Language options */}
                    <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                </select>

                <label htmlFor="country">Choose a Country:</label>
                <select name="country" id="country" onChange={handleCountry} value={searchCountry}>
                    {/* Country options */}
                    <option value="us">USA</option>
                <option value="in">India</option>
                <option value="fr">France</option>
                </select>
            </div>
            <div className="news-container">
                {news.map((article, index) => (
                    <div className="news-card" key={index}>
                        <h2 className="card-title"><a href={article.url}>{article.title}</a></h2>
                        <p className="card-description">{article.description}</p>
                        <a href="{article.url}"></a>
                        <img className="card-image" src={article.urlToImage} alt="news" />
                        <p className="card-content">{article.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
