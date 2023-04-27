let imgCardUm = document.getElementById("imgCardUm")
let imgCardDois = document.getElementById("imgCardDois")
let imgCardTres = document.getElementById("imgCardTres")
let txtCardUm = document.getElementById("txtCardUm")
let txtCardDois = document.getElementById("txtCardDois")
let txtCardTres = document.getElementById("txtCardTres")
const radioBtn = document.querySelectorAll("#radioBtn > div")
const selectBtn = document.querySelectorAll('.selectBtn')
const carneSelecionada = document.querySelector('#carneSelecionada')
const selectCarne = document.querySelector('#selectCarne')
const opcoesSelect = document.querySelector('#opcoesSelect')
const setaSelect = document.querySelector('#setaSelect')
let dadosInvalidos = document.querySelector('#dadosInvalidos')
let btnMarcarTodos = document.querySelector('#btnMarcarTodos');
let btnSms = document.querySelector('#btnSms');
let btnEmail = document.querySelector('#btnEmail');
let txtMarcarTodos = document.querySelector("#txtMarcarTodos")
let txtBtnEmail = document.querySelector("#txtBtnEmail")
let txtBtnSms = document.querySelector("#txtBtnSms")
let PagCarrossel
let radioBtnPrefCarne = false
let selectCarneFavorita = false
let checkBoxinf = false


function CarrosselEsquerda() {
    if (!PagCarrossel) {
        imgCardUm.src = "imgs/picanhaCarrossel.jpg"
        txtCardUm.innerText = "Picanha"
        imgCardUm.classList.add("animate__animated", "animate__fadeInLeft")
        txtCardUm.classList.add("animate__animated", "animate__fadeInLeft")

        imgCardDois.src = "imgs/bifeAnchoCarrossel.jpg"
        txtCardDois.innerText = "Ancho"
        imgCardDois.classList.add("animate__animated", "animate__fadeInLeft")
        txtCardDois.classList.add("animate__animated", "animate__fadeInLeft")


        imgCardTres.src = "imgs/maminhaCarrossel.jpg"
        txtCardTres.innerText = "Maminha"
        imgCardTres.classList.add("animate__animated", "animate__fadeInLeft")
        txtCardTres.classList.add("animate__animated", "animate__fadeInLeft")

        PagCarrossel = true

        document.getElementById("setaEsquerdaCarrossel").disabled = true
        document.getElementById("setaDireitaCarrossel").disabled = true

        setTimeout(() => {
            document.getElementById("setaEsquerdaCarrossel").disabled = false
            document.getElementById("setaDireitaCarrossel").disabled = false
            imgCardUm.classList.remove("animate__animated", "animate__fadeInLeft")
            txtCardUm.classList.remove("animate__animated", "animate__fadeInLeft")
            imgCardDois.classList.remove("animate__animated", "animate__fadeInLeft")
            txtCardDois.classList.remove("animate__animated", "animate__fadeInLeft")
            imgCardTres.classList.remove("animate__animated", "animate__fadeInLeft")
            txtCardTres.classList.remove("animate__animated", "animate__fadeInLeft")
        }, 900)
    } else if (PagCarrossel) {

        imgCardUm.src = "imgs/Acem.png"
        txtCardUm.innerText = "Acém"
        imgCardUm.classList.add("animate__animated", "animate__fadeInLeft")
        txtCardUm.classList.add("animate__animated", "animate__fadeInLeft")

        imgCardDois.src = "imgs/Costela.png"
        txtCardDois.innerText = "Costela"
        imgCardDois.classList.add("animate__animated", "animate__fadeInLeft")
        txtCardDois.classList.add("animate__animated", "animate__fadeInLeft")


        imgCardTres.src = "imgs/Cupim.png"
        txtCardTres.innerText = "Cupim"
        imgCardTres.classList.add("animate__animated", "animate__fadeInLeft")
        txtCardTres.classList.add("animate__animated", "animate__fadeInLeft")

        PagCarrossel = false

        document.getElementById("setaEsquerdaCarrossel").disabled = true
        document.getElementById("setaDireitaCarrossel").disabled = true

        setTimeout(() => {
            document.getElementById("setaEsquerdaCarrossel").disabled = false
            document.getElementById("setaDireitaCarrossel").disabled = false
            imgCardUm.classList.remove("animate__animated", "animate__fadeInLeft")
            txtCardUm.classList.remove("animate__animated", "animate__fadeInLeft")
            imgCardDois.classList.remove("animate__animated", "animate__fadeInLeft")
            txtCardDois.classList.remove("animate__animated", "animate__fadeInLeft")
            imgCardTres.classList.remove("animate__animated", "animate__fadeInLeft")
            txtCardTres.classList.remove("animate__animated", "animate__fadeInLeft")
        }, 900)
    }
}
function CarrosselDireita() {
    if (!PagCarrossel) {
        imgCardUm.src = "imgs/picanhaCarrossel.jpg"
        txtCardUm.innerText = "Picanha"
        imgCardUm.classList.add("animate__animated", "animate__fadeInRight")
        txtCardUm.classList.add("animate__animated", "animate__fadeInRight")

        imgCardDois.src = "imgs/bifeAnchoCarrossel.jpg"
        txtCardDois.innerText = "Ancho"
        imgCardDois.classList.add("animate__animated", "animate__fadeInRight")
        txtCardDois.classList.add("animate__animated", "animate__fadeInRight")


        imgCardTres.src = "imgs/maminhaCarrossel.jpg"
        txtCardTres.innerText = "Maminha"
        imgCardTres.classList.add("animate__animated", "animate__fadeInRight")
        txtCardTres.classList.add("animate__animated", "animate__fadeInRight")

        PagCarrossel = true

        document.getElementById("setaEsquerdaCarrossel").disabled = true
        document.getElementById("setaDireitaCarrossel").disabled = true

        setTimeout(() => {
            document.getElementById("setaEsquerdaCarrossel").disabled = false
            document.getElementById("setaDireitaCarrossel").disabled = false
            imgCardUm.classList.remove("animate__animated", "animate__fadeInRight")
            txtCardUm.classList.remove("animate__animated", "animate__fadeInRight")
            imgCardDois.classList.remove("animate__animated", "animate__fadeInRight")
            txtCardDois.classList.remove("animate__animated", "animate__fadeInRight")
            imgCardTres.classList.remove("animate__animated", "animate__fadeInRight")
            txtCardTres.classList.remove("animate__animated", "animate__fadeInRight")
        }, 900)
    } else if (PagCarrossel) {

        imgCardUm.src = "imgs/Acem.png"
        txtCardUm.innerText = "Acém"
        imgCardUm.classList.add("animate__animated", "animate__fadeInRight")
        txtCardUm.classList.add("animate__animated", "animate__fadeInRight")

        imgCardDois.src = "imgs/Costela.png"
        txtCardDois.innerText = "Costela"
        imgCardDois.classList.add("animate__animated", "animate__fadeInRight")
        txtCardDois.classList.add("animate__animated", "animate__fadeInRight")


        imgCardTres.src = "imgs/Cupim.png"
        txtCardTres.innerText = "Cupim"
        imgCardTres.classList.add("animate__animated", "animate__fadeInRight")
        txtCardTres.classList.add("animate__animated", "animate__fadeInRight")

        PagCarrossel = false

        document.getElementById("setaEsquerdaCarrossel").disabled = true
        document.getElementById("setaDireitaCarrossel").disabled = true

        setTimeout(() => {
            document.getElementById("setaEsquerdaCarrossel").disabled = false
            document.getElementById("setaDireitaCarrossel").disabled = false
            imgCardUm.classList.remove("animate__animated", "animate__fadeInRight")
            txtCardUm.classList.remove("animate__animated", "animate__fadeInRight")
            imgCardDois.classList.remove("animate__animated", "animate__fadeInRight")
            txtCardDois.classList.remove("animate__animated", "animate__fadeInRight")
            imgCardTres.classList.remove("animate__animated", "animate__fadeInRight")
            txtCardTres.classList.remove("animate__animated", "animate__fadeInRight")
        }, 900)
    }
}

document.addEventListener("scroll", function () {
    const divTitulo = document.getElementById("divTitulo")
    const navBar = document.getElementById("navegacao")
    const listaCatalogo = document.getElementById("listaCatalogo")

    if (window.pageYOffset > 390) {
        divTitulo.style.borderBottom = '2px solid black'
        navBar.classList.add("navBorder");
        listaCatalogo.style.border = '2px solid black'
    }
    if (window.pageYOffset < 390) {
        divTitulo.style.borderBottom = ''
        navBar.classList.remove("navBorder");
        listaCatalogo.style.border = ''
    }
})

function verificarDados() {

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const textarea = document.getElementById("textarea").value;

    const nomes = nome.trim().split(" ");
    if (nomes.length < 2 || nomes === "") {
        dadosInvalidos.innerHTML = 'Insira o nome corretamente.'
        return
    }

    const emailpartes = email.trim().split("@");
    if (emailpartes.length !== 2 || emailpartes[1].indexOf(".") === -1 || emailpartes[1].indexOf(".") === 0) {
        dadosInvalidos.innerHTML = 'Insira o e-mail corretamente.'
        return
    }

    const telefoneNumerico = telefone.replace(/\D/g, "");
    if (telefoneNumerico.length !== 11) {
        dadosInvalidos.innerHTML = 'Insira o número corretamente.'
        return
    }

    if (textarea.length < 5) {
        dadosInvalidos.innerHTML = 'Escreva pelo menos 5 letras na mensagem.'
        return
    }

    if (!selectCarneFavorita) {
        dadosInvalidos.innerHTML = 'Selecione pelo menos uma carne favorita.'
        return
    }

    if (!radioBtnPrefCarne) {
        dadosInvalidos.innerHTML = 'Selecione pelo menos uma prefência de carne.'
        return
    }

    if(!checkBoxinf) {
        dadosInvalidos.innerHTML = 'Selecione pelo menos uma opção de contato.'
        return
    }

    dadosInvalidos.innerHTML = 'Formulário enviado.'
}

if (document.getElementById("bodyContato")) {
    radioBtn.forEach(function (element) {
        element.onclick = (function () {
            radioBtnPrefCarne = true
            radioBtn.forEach(function (click) {
                click.classList.remove("btnSelected");
            })
            this.classList.add('btnSelected')
        })
    })
}
if (document.getElementById('bodyContato')) {
    selectCarne.addEventListener("click", function () {
        opcoesSelect.classList.toggle('visivel')
        setaSelect.classList.toggle('mexerSeta')
        selectBtn.forEach(function (element) {
            element.addEventListener('click', function () {
                carneSelecionada.innerText = element.textContent;
                opcoesSelect.classList.remove('visivel')
                setaSelect.classList.remove('mexerSeta')
            })
        })
        selectCarneFavorita = true
    })
}



function selecionarCheckbox(element) {
  if (element == btnMarcarTodos) {

    if (btnEmail.classList.contains('marcado') || btnSms.classList.contains('marcado') && btnMarcarTodos.classList.contains('marcado')) {

      btnMarcarTodos.classList.remove('marcado');
      btnEmail.classList.remove('marcado');
      btnSms.classList.remove('marcado');
      checkBoxinf = false
    } else {

      btnMarcarTodos.classList.add('marcado');
      btnEmail.classList.add('marcado');
      btnSms.classList.add('marcado');
      checkBoxinf = true
    }

  } else {
    btnMarcarTodos.classList.add('marcado');
    btnMarcarTodos.classList.remove('meioMarcado');
    txtMarcarTodos.innerHTML = ""
    element.classList.toggle('marcado');
    checkBoxinf = true
  }

  verificarSelect();

};
function verificarSelect() {

  if (btnEmail.classList.contains('marcado') && btnSms.classList.contains('marcado')) {

    btnMarcarTodos.classList.add('marcado')
    checkBoxinf = true

  } else if (!btnEmail.classList.contains('marcado') && !btnSms.classList.contains('marcado')) {

    btnMarcarTodos.classList.remove('meioMarcado')
    btnMarcarTodos.classList.remove('marcado');
    txtMarcarTodos.innerHTML = ""
    checkBoxinf = true

  } else if (!btnEmail.classList.contains('marcado') && btnSms.classList.contains('marcado')) {

    btnMarcarTodos.classList.add('meioMarcado')
    txtMarcarTodos.innerHTML = "─"
    checkBoxinf = true

  } else if (btnEmail.classList.contains('marcado') && !btnSms.classList.contains('marcado')) {

    btnMarcarTodos.classList.add('meioMarcado')
    txtMarcarTodos.innerHTML = "─"
    checkBoxinf = true

  }

}