let cards = document.getElementsByClassName('card');

let right = document.getElementById('right')

let left = document.getElementById('left')

for (card of cards){
    card.addEventListener('dragstart', (e) => {
        let selected = e.target;
        let selectedCard = document.createElement('div')
        selectedCard = selected;

        right.addEventListener("dragover", (e) =>{
            e.preventDefault();
        })
        right.addEventListener('drop', () => {
            right.appendChild(selectedCard);
            selectedCard = null;
        })

        left.addEventListener("dragover", (e) =>{
            e.preventDefault();
        })
        left.addEventListener('drop', () => {
            left.appendChild(selectedCard);
            selectedCard = null;
        })
    })
}

const modal = document.getElementById('myModal');

const addBtn = document.getElementById('addBtn')

const add = document.getElementById('add')



addBtn.addEventListener('click', () => {
  modal.style.display = "flex";
})


add.addEventListener('click', () => {
  const cardAdd = document.createElement('div');
  cardAdd.innerHTML = document.getElementById('content').value;
  cardAdd.classList.add('card')
  cardAdd.draggable = "true";
  left.appendChild(cardAdd)
  modal.style.display = "none"
  cardAdd.addEventListener('dragstart', (e) => {
        let selected = e.target;
        let selectedCard = document.createElement('div')
        selectedCard = selected;

        right.addEventListener("dragover", (e) =>{
            e.preventDefault();
        })
        right.addEventListener('drop', () => {
            right.appendChild(selectedCard);
            selectedCard = null;
        })

        left.addEventListener("dragover", (e) =>{
            e.preventDefault();
        })
        left.addEventListener('drop', () => {
            left.appendChild(selectedCard);
            selectedCard = null;
        })
    })
})



const generateClouds = () => {
    for (let i = 0; i < 6; i++) {
        const rightCloud = document.createElement('p');
        rightCloud.textContent = "☁"
        rightCloud.style.color = "#ffffff"
        rightCloud.style.fontSize = "5rem"
        rightCloud.style.position = "absolute"
        let positionX = Math.floor(Math.random() * ((window.innerWidth - 100) - 0 + 1) + 0);
        let positionY = Math.floor(Math.random() * ((window.innerHeight - 100) - 0 + 1) + 0);
        rightCloud.style.right = positionX + 'px';
        rightCloud.style.top = positionY + 'px';
        const leftCloud = document.createElement('p');
        leftCloud.textContent = "☁"
        leftCloud.style.color = "#ffffff"
        leftCloud.style.fontSize = "5rem"
        leftCloud.style.position = "absolute"
        let positionXa = Math.floor(Math.random() * ((window.innerWidth - 100) - 0 + 1) + 0);
        let positionYa = Math.floor(Math.random() * ((window.innerHeight - 100) - 0 + 1) + 0);
        leftCloud.style.left = positionXa + 'px';
        leftCloud.style.top = positionYa + 'px';
        leftCloud.style.zIndex = "0"
        rightCloud.style.zIndex = "0"
      
        document.getElementsByClassName('wrapper')[0].appendChild(rightCloud);
        document.getElementsByClassName('wrapper')[0].appendChild(leftCloud);
    }
}

generateClouds()