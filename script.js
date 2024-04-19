

let cards=document.querySelectorAll(".card")
function Hover(){
    cards=document.querySelectorAll(".card")
                cards.forEach(function(cardo , index){
                    const animationDelay = 0.2;
                    cardo.style.animationDelay = `${index * animationDelay}s`;
                    cardo.addEventListener("mouseover",function(){
                        let char=cardo.childNodes[1].childNodes[1]
                        let bg=cardo.childNodes[1]
                        bg.style.backgroundSize="320px"
                        cardo.style.transform="scale(1.06)"
                        char.style.transform="scale(1.12) translateY(-10px)"
                  
                    })
                    cardo.addEventListener("mouseleave",function(){
                        let char=cardo.childNodes[1].childNodes[1]
                        let bg=cardo.childNodes[1]
                        bg.style.backgroundSize="400px"
                        cardo.style.transform="scale(0.75)"
                        char.style.transform="scale(1)"
                        
                    })
                    cardo.addEventListener("click",function(){
                        cardshow.innerHTML=` <div class="charimgi">
                        <img src="char/noob2.png" alt="">`
                    })
                   
                  })}
    

  
let elements = ["pyro", "cryo", "hydro", "dendro", "geo", "anemo", "electro"];
let characters = {
    pyro: {name:["bennet", "yoimiya", "xiangling"],
            weapon:["sword","bow","polearm"],
        rarity:["4star","5star","4star"]},

    cryo: {name:["shenhe", "ganyu", "ayaka"],
            weapon:["sword","bow","polearm"]},
    hydro: {name:["neuvillette", "childe", "furina"],
            weapon:["sword","bow","polearm"]},
    anemo:{name:["venti", "xiao", "kazuha"],
            weapon:["sword","bow","polearm"]},
    electro: {name:["raiden shogun" ,"venti" ,"yelan" ,"yoimiya","xiangling","shenhe","furina","childe","kokomi" ,"tighnari","xiao","ganyu","arataki itto","alhaitham",],
            weapon:["sword","bow","polearm"]},
    dendro: {name:["nahida", "baizhu", "alhaitam" , "tighnari"],
            weapon:["sword","bow","polearm"]},
    geo: {name:["arataki itto", "zhongli"],
            weapon:["sword","bow","polearm"]},
};

let cardshow = document.querySelector(".cardshowcase");
let elementsbtn = document.querySelectorAll(".elem");
elementsbtn.forEach(function(elem) {
    elem.addEventListener("click", function() {
        
        
        cardshow.innerHTML = "";
        let elementClicked = elem.getAttribute('elem');
        if (characters.hasOwnProperty(elementClicked)) {
            characters[elementClicked].name.forEach(character => {
                let characterImageSrc = `char/${character}.png`;
                console.log(character);
                
                cardshow.innerHTML += `<div class="card ${character}">
                    <div class="bg">
                        <img src="${characterImageSrc}" alt="${character}">
                        <span class="text">${character}</span>
                        <div class="bottom"></div>
                    </div>
                </div>`;
                Hover()
                
            });
        }
        
    });
});
Hover()

let elements2=document.querySelectorAll(".celem")
elements2.forEach(function(celem){
    celem.addEventListener("click",function(){
        window.location.href = "index.html";
    })
})
function handleCardClick() {
    const card = document.querySelector('.click');
    card.classList.add('clicked'); // Add a class to the card to trigger the transition
}
             
            
                   
              
    