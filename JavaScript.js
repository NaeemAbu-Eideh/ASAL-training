

let showBigImg = false;
let offset = 0; 
let limit = 10; 
let check = false;
let num = 0;
let gifNum = 0;
let isLoading = false;
let Div = document.createElement("div");
Div.id = "GIFS";
let showDiv = document.getElementById('gifs');
let gifs = [];

let div2 = document.createElement('div');
div2.id = "searchName";
showDiv.appendChild(div2);

search = document.createElement('input');
search.type = "text";
search.id="searchGifs";
search.placeholder="Search";
div2.appendChild(search);

arrow = document.createElement('div');
arrow.id = 'arrow';
let all = document.getElementById('all');
all.appendChild(arrow);

searchIcon = document.createElement('i');
searchIcon.className = "material-icons";
searchIcon.textContent = "search";
searchIcon.id = "i5";
div2.appendChild(searchIcon);

clearIcon = document.createElement('i');
clearIcon.className = "material-icons";
clearIcon.textContent = "cancel";
clearIcon.id = "i6";
clearIcon.onclick= function() {
    searchGifs.value = "";
    clearIcon.style.display = "none";
};
clearIcon.style.display = "none";
div2.appendChild(clearIcon);




async function fetchData() {
    try {
        isLoading = true;
        const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=oP73qkuaWZ6xB54SbHLWoNjVKVz25gab&limit=${limit}&offset=${offset}`);
        const data = await response.json();
        gifs = data.data;
        offset += gifs.length;
        isLoading = false;
    } catch (error) {
        console.error('Error fetching GIFs:', error);
        isLoading = false;
    }
}

async function fetchMoreGIFs() {
    if (isLoading) return;
    isLoading = true;
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=oP73qkuaWZ6xB54SbHLWoNjVKVz25gab&limit=${limit}&offset=${offset}`);
        const data = await response.json();
        const newGIFs = data.data;
        gifs.push(newGIFs);
        offset += newGIFs.length; 
        insertToDiv(newGIFs);
        isLoading = false;
    } catch (error) {
        console.error('Error fetching more GIFs:', error);
        isLoading = false;
    }
}

fetchData();

function insertToDiv(array) {
    for (let i = 0; i < array.length; i++) {
        const src = document.createElement('img');
        src.src = `${array[i].images.downsized.url}`;
        src.title = `${array[i].username}`;
        src.className = "gif";
        src.loading="lazy";
        Div.appendChild(src);
    }
}

async function showGifs() {
    if (check == false) {
        await fetchData();
        if (gifNum == 0) {
            insertToDiv(gifs);
            gifNum++;
        }
        if (num == 0) {
            showDiv.appendChild(Div);
            arrow.style.display = "block";
            div2.style.display = "block"
            num++;
        } else {
            Div.style.display = "block";
            arrow.style.display = "block";
            div2.style.display = "block"
        }
        check = true;
    }
}

function hiddenDiv() {
    function handleClickOutside(event) {
        let clicked = event.target;
            if (clicked.id == 'i3'  || clicked.id == 'i5'  || clicked.id == 'i6'  || clicked.classList.contains("gif") || clicked.id == "searchName" || clicked.id == "searchGifs") {}
            else {
               if (check == true) {
                   Div.style.display = "none";
                   arrow.style.display = "none";
                   div2.style.display = "none"
                   check = false;
               }
        }
    }

    document.body.addEventListener('click', handleClickOutside);
}

Div.addEventListener('scroll', function() {
    if (Div.scrollTop + Div.clientHeight >= Div.scrollHeight) {
        fetchMoreGIFs();
    }
});

search.addEventListener('input', function() {
    const searchTerm = this.value.trim();
    if (searchTerm !== '') {
        clearIcon.style.display = "block"; 
        
        fetchGIFsBySearch(searchTerm);
    } else {
        clearIcon.style.display = "none"; 
        clearDiv(Div); 
    }
});

async function fetchGIFsBySearch(searchTerm) {
    try {
        isLoading = true;
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(searchTerm)}&api_key=oP73qkuaWZ6xB54SbHLWoNjVKVz25gab&limit=${limit}&offset=${offset}`);
        const data = await response.json();
        gifs = data.data;
        clearDiv(Div);
        insertToDiv(gifs);
        isLoading = false;
        
    } catch (error) {
        console.error('Error fetching GIFs:', error);
        isLoading = false;
    }
}

function clearDiv(div) {
    const children = div.children;
    for (let i = children.length - 1; i >= 0; i--) {
        const child = children[i];
        if (child.id !== 'searchName') {
            div.removeChild(child);
        }
    }
}


