const newsArticle = document.getElementById("news-article");
const url = new URLSearchParams(window.location.search);
const searchBtn = document.getElementById("btn");
const searchInput = document.getElementById("search-box");

// set id in the localStorage
if (url.get("id")) {
    window.localStorage.setItem("id", url.get("id"));
}
var id = url.get("id") || window.localStorage.getItem("id");

async function getNews() {
    return await fetch("https://saurav.tech/NewsAPI/everything/cnn.json").then(res => res.json());
}

(async () => {
    var { articles, status } = await getNews();
    if (status == "ok") {
        document.querySelector(".loader").style.display= "none";
        articles.filter(({ publishedAt }) => publishedAt == id).forEach(({ urlToImage, source, title, content, publishedAt, url, author }) => {
            newsArticle.innerHTML = `
            <div class="header">
            <div class="image-container">
                <img src="${urlToImage}" alt="${source.name}">
            </div>
            </div>
            <div class="main">
                <div class="news-content">
                    <h2>${title}</h2>
                    <p class="publish-date">${publishedAt}</p>
                    <p class="content">${content}</p>
                </div>
            </div>
            <div class="footer">
                <div class="author-source-container">
                    <p class="author">Author: ${author}</p>
                    <p class="source">Source: <a class="site" href="${url}" target="_blank">${source.name}</a></p>
                </div>
            </div>
            `;
        })
    }
})();

// search
searchBtn.addEventListener("click", ()=> {
    if(searchInput.value == "" || searchInput == null) {
        alert("Please enter something to search!");
    } else {
        window.location.href = window.location.origin+"/pages/searchresult.html?search="+searchInput.value;
    }
})
