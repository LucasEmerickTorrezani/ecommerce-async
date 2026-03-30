function carregarDados() {
  var xhr = new XMLHttpRequest();

  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var dados = JSON.parse(xhr.responseText);
      var lista = document.getElementById("lista");

      lista.innerHTML = "";

      dados.slice(0, 5).forEach(function (item) {
        var li = document.createElement("li");
        li.textContent = item.title;
        lista.appendChild(li);
      });
    }
  };

  xhr.send();
}
