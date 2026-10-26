const cardsContainer = document.getElementById("news");

const apiUrl = "https://technews-pg2q.onrender.com/news";

async function getNews() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok || response.length === 0) {
            alert("Probably Out of credits rn, Sorry! Come back next day :(");
            return;
        }

        const result = await response.json();

        const newsLen = result["results"].length;

        for (let i = 0; i < newsLen; i++) {
            const newData = result["results"][i];
            
            const url = newData.href;
            const author = newData.author.name;
            const title = newData.title;
            const img = newData.image;

            addNewsToUI(url, author, title, img)
        }
    }
    catch (error) {
        alert("Probably Out of credits rn, Sorry! Come back next day :(")
    }
}

function addNewsToUI(url, author, title, img) {
    cardsContainer.innerHTML += `
        <div class="news-card">
            <img src="${img}" alt="News Image">
            <h3 class="news-title">${title}</h3>
            <div class="details">
                <p>Author: ${author !== '' ? author : "Unknown"}</p>
            </div>

            <a href="${url}" target="_blank" class="visit-button">Visit</a>
        </div>
    `
}

getNews();