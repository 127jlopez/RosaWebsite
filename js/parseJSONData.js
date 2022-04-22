export { parseJsonData };

function parseJsonData() {
  fetch("./JSONFiles/products.json")
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
}
