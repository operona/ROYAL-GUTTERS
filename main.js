fetch("./menu.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("menu").innerHTML = data;
  });


  fetch("./grid1.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("grid1").innerHTML = data;
    });


    fetch("./mapa.html")
      .then(response => {
        return response.text()
      })
      .then(data => {
        document.querySelector("mapa").innerHTML = data;
      });
