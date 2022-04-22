// Grabs the json file and adds it to html
fetch("./JSONFiles/products.json")
  .then((response) => response.json())
  .then((data) => productHTMLGrid(data))
  .catch((error) => console.log(error));

function productHTMLGrid(jsonData) {
  const JsonKeys = Object.keys(jsonData.Capes);
  let promises = [];
  let imgs = [];

  let oldelem = document.querySelector("script#replace_with_grid");
  oldelem.parentNode.removeChild(oldelem);

  // places a product item into html
  for (let i = 0; i < JsonKeys.length; i++) {
    promises.push(
      fetch("./html/productTemplate.html")
        .then((res) => res.text())
        .then((html) => {
          let parser = new DOMParser();
          let doc = parser.parseFromString(html, "text/html");
          const classname = `cape-collection-${i}`;

          let aRef = doc.querySelector(".Grid-Container");
          aRef.href = jsonData["Capes"][i]["ahref"];

          let imgRef = doc.querySelector("#image-src");
          imgRef.src = jsonData["Capes"][i]["imgsrc1"];
          imgRef.alt = jsonData["Capes"][i]["titleh3"];

          let titleRef = doc.querySelector(".Title-container");
          titleRef.childNodes[1].innerText = jsonData["Capes"][i]["titleh3"];

          let priceRef = doc.querySelector(".Price-container");
          priceRef.childNodes[1].innerText = jsonData["Capes"][i]["priceh3"];

          let newDiv = document.querySelector(".cape-Collection-products");

          newDiv.innerHTML += doc.body.innerHTML;
        })
        .catch((err) => console.error(err))
    );
  }

  Promise.all(promises);
}
