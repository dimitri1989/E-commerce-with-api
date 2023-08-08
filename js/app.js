

var productSection = document.querySelector(".section__product");
var sectionProductH2 = document.createElement("h2");
sectionProductH2.classList.add("section__product__h2")
productSection.prepend(sectionProductH2)
sectionProductH2.innerHTML=`Populer Products Fromc <br>
    All Brands</h2>`;
const sectionProductContent = document.createElement("div");
sectionProductContent.classList.add("section__product__content");
productSection.append(sectionProductContent)

axios.get("https://fakestoreapi.com/products").then(function(respons){


    var user = respons.data;
    user.forEach(data => {
        const sectionProductItems = document.createElement("div")
        sectionProductItems.classList.add("section__product__items");
        sectionProductContent.append(sectionProductItems)
        const sectionProductItemsImg = document.createElement("div")
        sectionProductItemsImg.classList.add("section__product__items__img")
        sectionProductItems.append(sectionProductItemsImg)
        const sectionProductItemsImgImg = document.createElement("img");
        sectionProductItemsImgImg.src=data.image;
        sectionProductItemsImg.append(sectionProductItemsImgImg);
        const sectionProductItemsIitle = document.createElement("h2");
        sectionProductItemsIitle.classList.add("section__product__items__title");
        sectionProductItems.append(sectionProductItemsIitle)
        sectionProductItemsIitle.innerHTML=`<b>${data.title}</b>`
        const sectionProductItemsText = document.createElement("p");
        sectionProductItemsText.classList.add("section__product__items__text");
        sectionProductItems.append(sectionProductItemsText);
        sectionProductItemsText.innerHTML=`ფასი ${data.price};`
        console.log(data);
        
        
        
    });

    
})