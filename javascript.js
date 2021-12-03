var form = document.form;
var erros = 0;

document.getElementById("submit").onclick = function validarForm() {
    //-----------------------------------------------------------------------------------------
    let nome = document.getElementById("nome");
    if (form.nom.value == "") {
        if (nome.lastElementChild.tagName != "SPAN") {
            nome.innerHTML += "<br><span class='erro'>Digite seu nome!</span>";
            erros++;
        }
    }
    else if (nome.lastElementChild.tagName == "SPAN") {
        nome.removeChild(nome.lastElementChild);
        erros--;
    }
    //-----------------------------------------------------------------------------------------

    let email = document.getElementById("email");
    let eml = document.getElementById("eml").value;
    let regexp2 = /^[\w]+@[\w]+\.[\w|\.]+$/;

    if (eml == "" || !regexp2.test(eml)) {
        if (email.lastElementChild.tagName != "SPAN") {
            email.innerHTML += "<span class='erro'>Digite um e-mail válido!</span>";
            erros++;
        }
    }
    else {
        if (email.lastElementChild.tagName == "SPAN" && regexp2.test(eml)) {
            email.removeChild(email.lastElementChild);
            erros--;
        }
    }

    //---------------------------------------------------------------------------------------

    let cep = document.getElementById("cep");
    let ocep = document.getElementById("ocep").value;
    let regexp6 = /(\d{2})(\d{3})(\d{3})/;

    if (ocep == "" || !regexp6.test(ocep)) {
        if (cep.lastElementChild.tagName != "SPAN") {
            cep.innerHTML += "<span class='erro'>Digite um CEP!</span>";
            erros++;
        }
    }
    else {
        if (cep.lastElementChild.tagName == "SPAN" && regexp6.test(ocep)) {
            cep.removeChild(cep.lastElementChild);
            erros--;
        }
    }


    //-----------------------------------------------------------------------------------------

    let endereco = document.getElementById("endereco");
    if (form.ende.value == "") {
        if (endereco.lastElementChild.tagName != "SPAN") {
            endereco.innerHTML += "<br><span class='erro'>Digite o endereço!</span>";
            erros++;
        }
    }
    else if (endereco.lastElementChild.tagName == "SPAN") {
        endereco.removeChild(endereco.lastElementChild);
        erros--;
    }

    //----------------------------------------------------------------------------------------

    //numero aqui
    let numero = document.getElementById("numero");
    let num = document.getElementById("num").value;
    let regexp3 = /^\d+$/;

    if (num == "" || !regexp3.test(num)) {
        if (numero.lastElementChild.tagName != "SPAN") {
            numero.innerHTML += "<span class='erro'>Digite um número!</span>";
            erros++;
        }
    }
    else {
        if (numero.lastElementChild.tagName == "SPAN" && regexp3.test(num)) {
            numero.removeChild(numero.lastElementChild);
            erros--;
        }
    }

    //------------------------------------------------------------------------------------------

    let rg = document.getElementById("rg");
    let erg = document.getElementById("erg").value;
    let regexp4 = /^(\d{1,2})(\d{3})(\d{3})([\dX])$/;

    if (erg == "" || !regexp4.test(erg)) {
        if (rg.lastElementChild.tagName != "SPAN") {
            rg.innerHTML += "<span class='erro'>Digite um RG!</span>";
            erros++;
        }
    }
    else {
        if (rg.lastElementChild.tagName == "SPAN" && regexp4.test(erg)) {
            rg.removeChild(rg.lastElementChild);
            erros--;
        }
    }

    //--------------------------------------------------------------------------------------------

    let cpf = document.getElementById("cpf");
    let ocpf = document.getElementById("ocpf").value;
    let regexp5 = /(\d{3})(\d{3})(\d{3})(\d{2})/;

    if (ocpf == "" || !regexp5.test(ocpf)) {
        if (cpf.lastElementChild.tagName != "SPAN") {
            cpf.innerHTML += "<span class='erro'>Digite um CPF!</span>";
            erros++;
        }
    }
    else {
        if (cpf.lastElementChild.tagName == "SPAN" && regexp5.test(ocpf)) {
            cpf.removeChild(cpf.lastElementChild);
            erros--;
        }
    }
    //--------------------------------------------------------------------------------------------------

    let data = document.getElementById("data");
    let dat = document.getElementById("dat").value;
    let regexp7 = /(\d{2})(\d{2})(\d{4})$/;

    if (dat == "" || !regexp7.test(dat)) {
        if (data.lastElementChild.tagName != "SPAN") {
            data.innerHTML += "<span class='erro'>Digite uma Data !</span>";
            erros++;
        }
    }
    else {
        if (data.lastElementChild.tagName == "SPAN" && regexp7.test(dat)) {
            data.removeChild(data.lastElementChild);
            erros--;
        }
    }


    //------------------------------------------------------------------------------------------------------

    let sexo = document.getElementById("sexo");
    if (!form.sexo[0].checked && !form.sexo[1].checked) {
        if (sexo.lastElementChild.tagName != "SPAN") {
            sexo.innerHTML += "<span class='erro'>Escolha um sexo!</span>";
            erros++;
        }
    }
    else if (sexo.lastElementChild.tagName == "SPAN") {
        sexo.removeChild(sexo.lastElementChild);
        erros--;
    }
    //---------------------
    let estados = document.getElementById("estado");
    if (form.estado.value == "") {
        if (estados.lastElementChild.tagName != "SPAN") {
            estados.innerHTML += "<span class='erro'>Escolha um estado!</span>";
            erros++;
        }
    }
    else if (estados.lastElementChild.tagName == "SPAN") {
        estados.removeChild(estados.lastElementChild);
        erros--;
    }
    //---------------------
    let cidades = document.getElementById("cidade");
    if (form.cidade.value == "") {
        if (cidades.lastElementChild.tagName != "SPAN") {
            cidades.innerHTML += "<span class='erro'>Escolha uma cidade!</span>";
            erros++;
        }
    }
    else if (cidades.lastElementChild.tagName == "SPAN") {
        cidades.removeChild(cidades.lastElementChild);
        erros--;
    }
    //------------------------------------------------------------------------------------------

    let telefone = document.getElementById("telefone");
    let tele = document.getElementById("tele").value;
    let regexp = /^\(([\d]{2})\)([\d]{4})\-([\d]{4})$/;

    if (tele == "" || !regexp.test(tele)) {
        if (telefone.lastElementChild.tagName != "SPAN") {
            telefone.innerHTML += "<span class='erro'>Digite um telefone válido!</span>";
            erros++;
        }
    }
    else {
        if (telefone.lastElementChild.tagName == "SPAN" && regexp.test(tele)) {
            telefone.removeChild(telefone.lastElementChild);
            erros--;
        }
    }

    //-------------------------------------------------------------------------------------

    if (erros == 0) {
        document.getElementById("validacao").style.display = "block";

        var val = "<h1>Aqui está o seu formulário !</h1>"

        val += "</p><p>Nome:  " + form.nome.value.toUpperCase() + "<p>"

        val += "<p>E-mail:  " + form.email.value.toUpperCase() + "</p>";

        val += "<p>CEP:  " + form.ocep.value + "</p>";

        val += "<p>Endereço:  " + form.ende.value.toUpperCase() + "</p>";

        val += "<p>Número:  " + form.num.value + "</p>";

        val += "<p>CPF:  " + form.ocpf.value + "</p>";

        val += "<p>RG:  " + form.erg.value + "</p>";

        val += "</p><p>Estado:  " + form.estado.value.toUpperCase() + "</p>";

        val += "<p>Cidade:  " + form.cidade.value.toUpperCase() + "</p>";

        val += "<p>Data de Nascimento:  " + form.dat.value + "</p>";

        val += "</p><p>Sexo:  "
        if (form.sexo[0].checked)
            val += form.sexo[0].value.toUpperCase();
        else if (form.sexo[1].checked)
            val += form.sexo[1].value.toUpperCase();

        val += "<p>Telefone:  " + form.tel.value + "</p>";



        document.getElementById("validacao").innerHTML = val;
    }
};

//--------------------------------------------------------------------------------------------

var cidades = document.getElementsByClassName("cidade");
document.getElementById("estado").addEventListener("change", function mostrarCidades() {
    for (var i = 0; i < cidades.length; i++) {
        if (form.estado.value == cidades[i].getAttribute("name")) {
            cidades[i].removeAttribute("hidden");
        }
        else {
            cidades[i].setAttribute("hidden", "");
        }
    }
});

document.getElementById("telefone").addEventListener("focusout", function ajustarTelefone() {
    let regexp = /^([\d]{2})([\d]{4})([\d]{4})$/;

    form.tel.value = form.tel.value.replace(regexp, "($1)$2-$3")
});
