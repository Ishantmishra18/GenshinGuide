let cards=document.querySelectorAll(".card")
cards.forEach(function(card){
  card.addEventListener("mouseover",function(){
      let char=card.childNodes[1].childNodes[1]
      let bg=card.childNodes[1]
      bg.style.backgroundSize="320px"
      card.style.transform="scale(1.06)"
      char.style.transform="scale(1.12) translateY(-10px)"

  })
  card.addEventListener("mouseleave",function(){
      let char=card.childNodes[1].childNodes[1]
      let bg=card.childNodes[1]
      bg.style.backgroundSize="400px"
      card.style.transform="scale(1)"
      char.style.transform="scale(1)"
      
  })
})
  


let elements = ["pyro", "cryo", "hydro", "dendro", "geo", "anemo", "electro"];
let characters = {
    pyro: ["bennett", "alerchino", "xiangling"],
    cryo: ["ayaka", "ganyu", "wriothesley"],
    hydro: ["neuvillette", "childe", "yelan", "kokomi", "furina", "ayato"],
    anemo: ["venti", "xiao", "kazuha"],
    electro: ["raiden shogun", "yae miko"],
    dendro: ["nahida", "Alhaitam", "tainari", "baizhu"],
    geo: ["arataki itto", "navia"]
};

let elementsbtn = document.querySelectorAll(".elem");
elementsbtn.forEach(function(elem) {
    elem.addEventListener("click", function() {
        let cardshow = document.querySelector(".cardshowcase");
        cardshow.innerHTML = "";
        let elementClicked = elem.getAttribute('elem');
        if (characters.hasOwnProperty(elementClicked)) {
            characters[elementClicked].forEach(character => {
                let characterImageSrc = `char/${character}.png`;
                console.log(character);
                cardshow.innerHTML += `<div class="card">
                    <div class="bg">
                        <img src="${characterImageSrc}" alt="${character}">
                        <span class="text">${character}</span>
                        <div class="bottom"></div>
                    </div>
                </div>`;
               
            });
        }
        cards=document.querySelectorAll(".card")
    });
});


              
            
                   
              
    