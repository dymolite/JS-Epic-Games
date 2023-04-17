var games = [
    {
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        img: "kine.png",
        name: "Kine",
        status: ""
    },
    {
        link: "https://www.youtube.com/watch?v=OyDyOweu-PA",
        img: "journey.jpg",
        name: "Journey",
        icon: "fa-solid fa-cloud-arrow-down",
        status: "Uptade Aviable"
    },
    {
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        img: "fortnite.jpg",
        name: "Fortnite",
        status: ""
    },
    {
        link: "https://www.youtube.com/watch?v=OyDyOweu-PA",
        img: "wwZ.jpg",
        name: "World War Z",
        status: "Phoenix Labs"
    },
    {
        link: "https://www.youtube.com/watch?v=_S7WEVLbQ-Y",
        img: "JohnWickHex.jpg",
        name: "John Wick Hex",
        status: ""
    },
    {
        link: "https://youtu.be/81J56YChYo4",
        img: "Cyberpunk2077.jpg",
        name: "Cyberpunk 2077",
        status: ""
    },
    {
        link: "https://www.youtube.com/watch?v=OyDyOweu-PA",
        img: "ACUnity.jpg",
        name: "Assasin's Creed Unity",
        icon: "fa-solid fa-cloud-arrow-down",
        status: "Uptade Aviable"
    },
    {
        link: "https://www.youtube.com/watch?v=_S7WEVLbQ-Y",
        img: "mk11.jpg",
        name: "Mortal Kombat 11",
        icon: "fa-solid fa-download",
        status: "Install",
        opacity: "opacity"
    },
    {
        link: "https://www.youtube.com/watch?v=fVeI5xcnsd8",
        img: "batman.jpg",
        name: "Batman Arkham City",
        icon: "fa-solid fa-download",
        status: "Install",
        opacity: "opacity"
    },
    {
        link: "https://www.youtube.com/watch?v=NoMTPeRPVgw",
        img: "MetroExodus.jpg",
        name: "Metro Exodus",
        status: "OS Unsupported",
        opacity: "opacity"
    }
]

var result="";

for (var i=0; i <games.length; i++) {
    result += 
    `<li class="col-2">
        <a target="_blank" href="${games[i].link}">
            <div class="content-item ${games[i].opacity}">
                <img src="./assets/img/${games[i].img}" alt="">
                <div class="content-title">
                    <h4>${games[i].name}</h4>
                    <p><i class="${games[i].icon}"></i> ${games[i].status}</p>
                </div>
            </div>
        </a>
    </li>`
}

items.innerHTML = result;