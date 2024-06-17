function importarCadastro() {
  const fileInput = document.getElementById("fileInput");
  const cadastroFormatado = document.getElementById("cadastroFormatado");

  const file = fileInput.files[0];

  if (!file) {
    alert("Por favor, selecione um arquivo para importar.");
    return;
  }

  const reader = new FileReader();

  reader.onload = function (e) {
    const conteudo = e.target.result;
    const linhas = conteudo.split("\n");

    let htmlFormatado = "<h2>Cadastro Importado</h2><ul>";

    linhas.forEach(function (linha) {
      if (linha.trim() !== "") {
        htmlFormatado += `<li>${linha}</li>`;
      }
    });

    htmlFormatado += "</ul>";
    cadastroFormatado.innerHTML = htmlFormatado;
  };

  reader.readAsText(file);
}
