const newsArea = document.getElementById("news-area");
const searchBtn = document.getElementById("btn");
const searchInput = document.getElementById("search-box");

async function getNews() {
    return await fetch("https://saurav.tech/NewsAPI/everything/cnn.json").then(res => res.json());
}

(async () => {
    var { articles, status } = await getNews();
    if (status == "ok") {
        document.querySelector(".loader").style.display= "none";
        articles.forEach(({ urlToImage, source, title, description, publishedAt }) => {
            newsArea.innerHTML += `
                <div class="news-card">
                    <img src="${urlToImage}" alt="${source.name}">
                    <div class="news-content">
                        <h2>${title}</h2>
                        <p class="description">${description.substring(0, 100) + "..."}</p>
                        <a href="../pages/bigcard.html?id=${publishedAt}" class="read-more">Read more</a>
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