const random = document.getElementById("random");
const botonBuscar = document.getElementById("buscar");
const img = document.getElementById("imagen");


botonBuscar.addEventListener("click",()=>{
  const api = new XMLHttpRequest();
  console.log(random.value);
  api.addEventListener("readystatechange", () => {
    const isDone = api.readyState === 4;
    const isOk = api.status === 200;
  
    if (isDone && isOk) {
      const info = api.response;
      console.log(info);
      img.innerHTML = "<img src= " + "'"+ info.sprites.front_default +"'>" + "<img src= " + "'"+ info.sprites.front_shiny +"'>"; 
    }
  });
  api.responseType = "json";
  var url = `http://localhost:3000/pokemon/${random.value}`;
  //url = "http://localhost:3000/pokemon/dragonite"
  console.log(url);
  api.open("GET",url);
  api.send();
})