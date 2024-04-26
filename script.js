let charinfocont=document.querySelector(".charinfocont")
let mainbg=document.querySelector(".mainbg")
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
                        let charr=cardo.classList[1]
                        cardshow.style.display="none"
                        charinfocont.style.display="block"
                        if (window.innerWidth < 768) {
                            charinfocont.innerHTML=`<div class="photo">
                        <img class="mainimg" src="char/${charr}/phonemain.png" alt="">
                        </div>`
                        } else {
                            charinfocont.innerHTML=`<div class="photo">
                            <img class="mainimg" src="char/${charr}/main.png" alt="">
                            </div>`
                        }
                        
                    }
                )
                })}   
                  

let allcharacters = {
 bennet: ["bennet", "sword", "star4", "modstate"],
 xiangling: ["xiangling", "pyro", "polearm", "star4", "liyue"],
raiden:["raiden shogun", "electro", "polearm", "5star", "inazuma"],
 ganyu: ["ganyu", "cryo", "bow", "star5", "liyue"],
 zhongli:["zhongli","geo","polearn","star4" ,"liyue"],
 furina:["furina","hydro","polearn","star4" ,"liyue"],
 ayato:["ayato","hydro","polearn","star4" ,"liyue"],
 tighnari:["tighnari","dendro","polearn","star4" ,"liyue"],
 shenhe:["shenhe","cryo","polearn","star4" ,"liyue"],
 venti:["venti","anemo","polearn","star4" ,"liyue"],
 arataki:["arataki itto","geo","polearn","star4" ,"liyue"],
 neuvillette:["neuvillette","hydro","polearn","star4" ,"liyue"],
 yalen:["yalen","hydro","polearn","star4" ,"liyue"],
 kokomi:["kokomi","hydro","polearn","star4" ,"liyue"],
 childe:["childe","hydro","polearn","star4" ,"liyue"],
 alhaitam:["alhaitam","dendro","polearn","star4" ,"liyue"],
 kazuha:["kazuha","anemo","polearn","star4" ,"liyue"],
 barbara:["barbara","hydro","polearn","star4" ,"liyue"],
 mona:["mona","hydro","polearn","star4" ,"liyue"],
 nilou:["nilou","hydro","polearn","star4" ,"liyue"],
 candance:["candance","hydro","polearn","star4" ,"liyue"],
 xingqui:["xingqui","hydro","polearn","star4" ,"liyue"],


                };
                
let elements = ["pyro", "hydro", "anemo", "electro","dendro", "cryo",  "geo"];
                
 let cardshow = document.querySelector(".cardshowcase");
 let elementsbtn = document.querySelectorAll(".elem");
                
 elementsbtn.forEach(function(elem) {
     elem.addEventListener("click", function() {
     cardshow.innerHTML = "";
    let elementClicked = elem.getAttribute('elem');
                        
    for (const character in allcharacters) {
     if (allcharacters.hasOwnProperty(character)) {
  if (allcharacters[character][1] === elementClicked) {
    let characterName = allcharacters[character][0];
    let rarity=allcharacters[character][3];
     let characterImageSrc = `char/${character}/main.png`;
     let backgroundImageURL = `url(bg/${elementClicked}bg.jpg)`;
     charinfocont.style.display="none"
     mainbg.style.backgroundImage = backgroundImageURL;
     cardshow.style.display="flex"
            cardshow.innerHTML += `<div class="card ${character} ${rarity}">
            <div class="bg">
             <img src="${characterImageSrc}" alt="${characterName}">
            <span class="text">${characterName}</span>
            <div class="bottom"></div>
            </div>
            </div>`;
             }
            }
            }
        Hover(); 
    });
 });
                
    


                   
              
    