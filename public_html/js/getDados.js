document.getElementById("btnbuscarmesorregioes").addEventListener("click", buscamesorregioes);
function buscamesorregioes() {
    var id_UF = 41;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange =
            function () {
                if (this.readyState == 4 && this.status == 200) {
                    var myObj = JSON.parse(this.responseText);
                    var txt = "";
                    for (var i = 0; i < myObj.length; i++) {
                        txt += "<p>" + myObj[i].id + " " +
                                myObj[i].nome + " " +
                                myObj[i].UF.id + " " +
                                myObj[i].UF.sigla + " " +
                                myObj[i].UF.nome + "</p>";
                    }
                    document.getElementById("list-buscamesorregioes").innerHTML += txt;
                }
            };
    var caminho = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + id_UF + "/mesorregioes";
    xmlhttp.open("GET", caminho, true);
    xmlhttp.send();
}

document.getElementById("btnbuscarregioes").addEventListener("click", buscaregioes);
function buscaregioes() {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange =
            function () {
                if (this.readyState == 4 && this.status == 200) {
                    var myObj = JSON.parse(this.responseText);
                    var txt = "";
                    for (var i = 0; i < myObj.length; i++) {
                        txt += "<p>" +
                                myObj[i].id + " " +
                                myObj[i].sigla + " " +
                                myObj[i].nome + "</p>";
                    }
                    document.getElementById("list-regioes").innerHTML += txt;
                }
            };
    var caminho = "https://servicodados.ibge.gov.br/api/v1/localidades/regioes";
    xmlhttp.open("GET", caminho, true);
    xmlhttp.send();
}

document.getElementById("btnbuscarestados").addEventListener("click", buscaestados);
function buscaestados() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange =
            function () {
                if (this.readyState == 4 && this.status == 200) {
                    var myObj = JSON.parse(this.responseText);
                    var txt = "";
                    for (var i = 0; i < myObj.length; i++) {
                        txt += "<p>" +
                                myObj[i].id + " " +
                                myObj[i].sigla + " " +
                                myObj[i].nome +
                                myObj[i].regiao + "</p>";
                    }
                    document.getElementById("list-estados").innerHTML += txt;
                }
            };
    var caminho = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
    xmlhttp.open("GET", caminho, true);
    xmlhttp.send();
}

document.getElementById("btnbuscamalharestados").addEventListener("click", buscamalhaestados);
function buscamalhaestados() {
    var idUF = 33;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange =
            function () {
                if (this.readyState == 4 && this.status == 200) {
                    var txt = this.responseText;
                    document.getElementById("list-malha-estados").innerHTML += txt;
                }
            };
    var caminho = "https://servicodados.ibge.gov.br/api/v2/malhas/" + idUF;
    xmlhttp.open("GET", caminho, true);
    xmlhttp.send();
}