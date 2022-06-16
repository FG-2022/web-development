// characters: "https://breakingbadapi.com/api/characters"
// deaths: "https://breakingbadapi.com/api/deaths"
// episodes: "https://breakingbadapi.com/api/episodes"
// quotes: "https://breakingbadapi.com/api/quotes"


const container = document.querySelector(".container");
const charD = document.querySelector(".charD");

const url = "https://www.breakingbadapi.com/api/characters";

const getData = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    data.map((d, id) => {
    element(d);
    
    });
};
getData(url);

function element(d) {

    let card = document.createElement("div");
    card.className = "card";
    card.style.backgroundImage = `url(${d.img})`;

    let title = document.createElement("h1");
    title.className = "char-name";
    title.innerHTML = `${d.name}`;

    let a = document.createElement("a");
    a.className = "more";
    a.innerHTML = "More Details...";
    a.setAttribute("href", "#");
    a.addEventListener("click",()=>{
        console.log("clicked....");
        container.classList.add("hide");
        charD.classList.remove('hide');
        charDetails(d);
    });
    container.appendChild(card);
    card.appendChild(title);
    card.appendChild(a);
};







const charDetails = (d) => {
    let imgCon = document.createElement("div");
    imgCon.className = "img-container";
    let img = document.createElement("img");
    img.setAttribute("src", `${d.img}`);
    imgCon.appendChild(img);

    let nameD = document.createElement("div");
    nameD.className = "name-tetails";
    let name = document.createElement("h1");
    name.innerHTML=`${d.name}`;
    let nickname = document.createElement("span");
    nickname.innerHTML=`----(${d.nickname})`;
    name.appendChild(nickname);
    let Bday = document.createElement("p");
    Bday.innerHTML=`${d.birthday}`;
    nameD.appendChild(name);
    nameD.appendChild(Bday);


    charD.appendChild(imgCon);
    charD.appendChild(nameD);
    

    let x = document.createElement("button");
    charD.appendChild(x);
    x.addEventListener("click",()=>{
        console.log("clicked....");
        container.classList.remove('hide');
        getData(url);
        charD.classList.add("hide");
        imgCon.remove();
        nameD.remove();
    });
    
};

