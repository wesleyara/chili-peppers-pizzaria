// Início do itens guirlandas.

var itensGuirlandas = [
  {
    id: 0,
    nome: "Frango com Batata chips e molho",
    img: "/images/guirlandas-images/guirlanda-frango-e-batata.jpeg",
    ingre:
      "Molho de tomate, mussarela, frango, bacon, milho, catupiry e tomate para decoração. (Pizza com 8 pedaços extremamente recheada + borda recheada grátis.)",
    quebra: 0,
    preço: 48,
    quantidade: 0,
  },

  {
    id: 1,
    nome: "Frango com Coxinha",
    img: "/images/guirlandas-images/guirlanda-frango-e-coxinha.jpeg",
    ingre:
      "Molho de tomate, mussarela, frango, bacon, milho, catupiry e tomate para decoração. (Pizza com 8 pedaços extremamente recheada + borda recheada grátis.)",
    quebra: 0,
    preço: 53,
    quantidade: 0,
  },

  {
    id: 2,
    nome: "Frango com Batata frita",
    img: "/images/guirlandas-images/guirlanda-batatafrita.jpeg",
    ingre:
      "Molho de tomate, mussarela, frango, bacon, milho, catupiry e tomate para decoração. (Pizza com 8 pedaços extremamente recheada + borda recheada grátis.)",
    quebra: 0,
    preço: 53,
    quantidade: 0,
  },

  {
    id: 3,
    nome: "Frango com Doritos",
    img: "/images/guirlandas-images/guirlanda-doritos.jpeg",
    ingre:
      "Molho de tomate, mussarela, frango, bacon, milho, catupiry e tomate para decoração. (Pizza com 8 pedaços extremamente recheada + borda recheada grátis.)",
    quebra: 0,
    preço: 48,
    quantidade: 0,
  },

  {
    id: 4,
    nome: "Carne de Sol com Batata chips e molho",
    img: "/images/guirlandas-images/guirlanda-frango-e-batata.jpeg",
    ingre:
      "Molho de tomate, mussarela, frango, bacon, milho, catupiry e tomate para decoração. (Pizza com 8 pedaços extremamente recheada + borda recheada grátis.)",
    quebra: 0,
    preço: 53,
    quantidade: 0,
  },

  {
    id: 5,
    nome: "Carne de Sol com Coxinha",
    img: "/images/guirlandas-images/guirlanda-frango-e-coxinha.jpeg",
    ingre:
      "Molho de tomate, mussarela, frango, bacon, milho, catupiry e tomate para decoração. (Pizza com 8 pedaços extremamente recheada + borda recheada grátis.)",
    quebra: 0,
    preço: 58,
    quantidade: 0,
  },
];

// Final do itens guirlandas.

// Início do itens beirute.

var itensBeirute = [
  {
    id: 0,
    nome: "Frango",
    img: "/images/guirlandas-images/beirute-frango.jpeg",
    imgs: "/images/guirlandas-images/beirute-frangoassado.jpeg",
    ingre:
      "Molho de tomate, tomate fatiado, presunto, frango desfiado, ovo, catupiry, milho, mussarela, molho especial, alface, e batata palha.",
    quebra: 0,
    preçop: 32.0,
    preçog: 0,
    quantidade: 0,
  },

  {
    id: 1,
    nome: "Rosbife",
    img: "/images/guirlandas-images/beirute-rosbife.jpeg",
    imgs: "/images/guirlandas-images/beirute-frangoassado.jpeg",
    ingre:
      "Molho de tomate, tomate fatiado, presunto, rosbife, barbecue, ovo, catupiry, cheddar, mussarela, molho especial, alface e batata palha.",
    quebra: 0,
    preçop: 35.0,
    preçog: 0,
    quantidade: 0,
  },

  {
    id: 2,
    nome: "Misto (Frango/Rosbife)",
    img: "/images/guirlandas-images/beirute-misto.jpeg",
    imgs: "/images/guirlandas-images/beirute-frangoassado.jpeg",
    ingre:
      "Molho de tomate, tomate fatiado, presunto, frango desfiado, rosbife, ovo, barbecue, catupiry, cheddar, milho, mussarela, molho especial, alface e batata palha.",
    quebra: 1,
    preçop: 35.0,
    preçog: 0,
    quantidade: 0,
  },
];

// Final do itens beirute.

// Início do itens acompanhament

// Final do itens acompanhamentos

// Início dos valores de bebidas.

const bebidaCoca1L = 8;
const bebidaCoca2L = 12;

const bebidaLata = 5;
const bebida1L = 7;
const bebida2L = 10;

const bebidaSucoCom = 5;
const bebidaSucoSem = 3;

// Final dos valores de bebidas.

// Início do iniciar loja para todas sections.

function inicializarLoja() {
  var cardWrapper = document.getElementById("card-wrapper");

  itensGuirlandas.map((val) => {
    if (val.quebra == 0) {
      cardWrapper.innerHTML += `
        <div id="cardItem" class="card-item">
            <img class="pizza-image" src="${val.img}" alt="guirlandas">
            <div class="card-content">
                <h3>${val.nome}</h3>
                <p id='ingredientes'>
                    ${val.ingre}
                </p>
                <br>
                <p>
                    Preço: R$${val.preço.toFixed(2).replace(".", ",")}.
                </p>
                <a key=${
                  val.id
                } class="aComprar" href="#check-wrapper"><button onclick="comprarGuirlanda()" type="button">Comprar</button></a> 
            </div>
        </div>
        `;
    }
  });
}

inicializarLoja();

function inicializarLojaBeirute() {
  var cardWrapper = document.getElementById("card-wrapper1");

  itensBeirute.map((val) => {
    if (val.quebra == 0 && val.id == 0) {
      cardWrapper.innerHTML += `
        <div id="cardItem" class="card-item">
        <div class="container-imgbord">
            <div id="imgs-bord" class="img-bords">
              <img class="bord-image" src="${val.img}" alt="beirute">
              <img class="bord-image" src="${val.imgs}" alt="beirute">
            </div> 
        </div>
            <div class="card-content">
                <h3>${val.nome}</h3>
                <p id='ingredientes'>
                    ${val.ingre}
                </p>
                <br>
                <br>
                <p>
                    Preço: R$${val.preçop.toFixed(2).replace(".", ",")}.
                </p>
                <a key=${
                  val.id
                } class="bComprar" href="#check-wrapper"><button onclick="comprarBeirute()" type="button">Comprar</button></a> 
            </div>
        </div>
        `;
    } else if (val.quebra == 0 && val.id == 1) {
      cardWrapper.innerHTML += `
        <div id="cardItem" class="card-item">
        <div class="container-imgbord">
            <div id="imgs-bord1" class="img-bords">
              <img class="bord-image" src="${val.img}" alt="beirute">
              <img class="bord-image" src="${val.imgs}" alt="beirute">
            </div> 
        </div>
            <div class="card-content">
                <h3>${val.nome}</h3>
                <p id='ingredientes'>
                    ${val.ingre}
                </p>
                <br>
                <p>
                    Preço: R$${val.preçop.toFixed(2).replace(".", ",")}.
                </p>
                <a key=${
                  val.id
                } class="bComprar" href="#check-wrapper"><button onclick="comprarBeirute()" type="button">Comprar</button></a> 
            </div>
        </div>
        `;
    } else if (val.quebra == 1 && val.id == 2) {
      cardWrapper.innerHTML += `
        <div id="cardItem" class="card-item">
        <div class="container-imgbord">
            <div id="imgs-bord2" class="img-bords">
              <img class="bord-image" src="${val.img}" alt="beirute">
              <img class="bord-image" src="${val.imgs}" alt="beirute">
            </div> 
        </div>
            <div class="card-content">
                <h3>${val.nome}</h3>
                <p id='ingredientes'>
                    ${val.ingre}
                </p>
                <br>
                <p>
                    Preço: R$${val.preçop.toFixed(2).replace(".", ",")}.
                </p>
                <a key=${
                  val.id
                } class="bComprar" href="#check-wrapper"><button onclick="comprarBeirute()" type="button">Comprar</button></a> 
            </div>
        </div>
        `;
    }
  });
}

inicializarLojaBeirute();

// Final do iniciar loja para todas sections

// Início do atualizar carrinho

function atualizarCarrinho() {
  var containerCarrinho = document.getElementById("card-wrappes");

  itensGuirlandas.map((val) => {
    if (val.quantidade > 0) {
      containerCarrinho.innerHTML = `
            <div id="cardIte" class="card-item">
                <div id="responsive-card">
                <img class="pizza-image" src="${val.img}" alt="guirlanda">
                <div id="card-cont" class="card-content">
                    <h3>${val.nome}</h3>
                    <p>
                        ${val.ingre}
                    </p>
                    <br>
                    <p>
                    Preço: R$${val.preço.toFixed(2).replace(".", ",")}.
                    </p>
                </div>
                </div>
            </div>
            `;
    }
  });
}

function atualizarCarrinhoBeirute() {
  var containerCarrinho = document.getElementById("card-wrappes");

  itensBeirute.map((val) => {
    if (val.quantidade > 0) {
      containerCarrinho.innerHTML = `
            <div id="cardIte" class="card-item">
                <div id="responsive-card">
                <img class="pizza-image" src="${val.img}" alt="beirute">
                <div id="card-cont" class="card-content">
                    <h3>${val.nome}</h3>
                    <p>
                        ${val.ingre}
                    </p>
                    <br>
                    <p>
                    Preço: R$${val.preçop.toFixed(2).replace(".", ",")}.
                    </p>
                </div>
                </div>
            </div>
            `;
    }
  });
}

var links =
  document.querySelectorAll(
    ".aComprar",
  ); /*pode também utilizar a classe para pegar o produto*/

for (var k = 0; k < links.length; k++) {
  links[k].addEventListener("click", function () {
    let key = this.getAttribute("key");
    for (let o = 0; o < itensGuirlandas.length; o++) {
      itensGuirlandas[o].quantidade = 0;
    }
    itensGuirlandas[key].quantidade++;
    atualizarCarrinho();
    return false;
  });
}

var links1 =
  document.querySelectorAll(
    ".bComprar",
  ); /*pode também utilizar a classe para pegar o produto*/

for (var i = 0; i < links1.length; i++) {
  links1[i].addEventListener("click", function () {
    let key = this.getAttribute("key");
    for (let o = 0; o < itensBeirute.length; o++) {
      itensBeirute[o].quantidade = 0;
    }
    itensBeirute[key].quantidade++;
    atualizarCarrinhoBeirute();
    return false;
  });
}

// Final do atualizar carrinho

// Início da seleção de guirlandas e beirutes.

function comprarGuirlanda() {
  var checkWrapper = document.getElementById("check-wrapper");

  checkWrapper.innerHTML = `
    <div class="drink-section">
        <hr>
        <h2>Seu pedido:</h2>
    </div>

    <div id="card-wrappes" class="checkout-item">
        
    </div>
    <div class="border-select">
        <div id='bebida'>
        <h2>Selecione sua bebida para acompanhar:</h2>
            <p>
            <select name="drinksel" id="select-drink">
              <option value="none">Nenhuma</option>
              <option value="gualat">Guaraná Ant. em Lata</option>
              <option value="gua1l">Guaraná Ant. de 1 L</option>
              <option value="gua2l">Guaraná Ant. de 2 L</option>
              <option value="coclat">Coca-cola de lata</option>
              <option value="coc1l">Coca-cola de 1 L</option>
              <option value="coc2l">Coca-cola de 2 L</option>
              <option value="sprlat">Sprite em lata</option>
              <option value="spr1l">Sprite de 1 L</option>
              <option value="spr2l">Sprite de 2 L</option>
              <option value="fanlat">Fanta em lata</option>
              <option value="fan1l">Fanta de 1 L</option>
              <option value="fan2l">Fanta de 2 L</option>
              <option value="acers">Suco de acerola s/ leite</option>
              <option value="acerc">Suco de acerola c/ leite</option>
              <option value="cajas">Suco de cajá s/ leite</option>
              <option value="cajac">Suco de cajá c/ leite</option>
              <option value="cajus">Suco de caju s/ leite</option>
              <option value="cajuc">Suco de caju c/ leite</option>
              <option value="maras">Suco de maracujá s/ leite</option>
              <option value="marac">Suco de maracujá c/ leite</option>
              <option value="gravs">Suco de graviola s/ leite</option>
              <option value="gravc">Suco de graviola c/ leite</option>
              <option value="uvas">Suco de uva s/ leite</option>
              <option value="uvac">Suco de uva c/ leite</option>
              <option value="moras">Suco de morango s/ leite</option>
              <option value="morac">Suco de morango c/ leite</option>
              <option value="limas">Suco de limão s/ leite</option>
              <option value="limac">Suco de limão c/ leite</option>
            </select> <input type="button" id='compr' onclick="comprarGuirlandaTrad()" class="search" value="Atualizar">
        </p>
        </div>
        <div id='finalizar-compras'></div>
    </div>
    `;
}

function comprarBeirute() {
  var checkWrapper = document.getElementById("check-wrapper");

  checkWrapper.innerHTML = `
    <div class="drink-section">
        <hr>
        <h2>Seu pedido:</h2>
    </div>

    <div id="card-wrappes" class="checkout-item">
        
    </div>
        <h2>Selecione sua bebida para acompanhar:</h2>
            <p>
            <select name="drinksel" id="select-drink">
              <option value="none">Nenhuma</option>
              <option value="gualat">Guaraná Ant. em Lata</option>
              <option value="gua1l">Guaraná Ant. de 1 L</option>
              <option value="gua2l">Guaraná Ant. de 2 L</option>
              <option value="coclat">Coca-cola de lata</option>
              <option value="coc1l">Coca-cola de 1 L</option>
              <option value="coc2l">Coca-cola de 2 L</option>
              <option value="sprlat">Sprite em lata</option>
              <option value="spr1l">Sprite de 1 L</option>
              <option value="spr2l">Sprite de 2 L</option>
              <option value="fanlat">Fanta em lata</option>
              <option value="fan1l">Fanta de 1 L</option>
              <option value="fan2l">Fanta de 2 L</option>
              <option value="acers">Suco de acerola s/ leite</option>
              <option value="acerc">Suco de acerola c/ leite</option>
              <option value="cajas">Suco de cajá s/ leite</option>
              <option value="cajac">Suco de cajá c/ leite</option>
              <option value="cajus">Suco de caju s/ leite</option>
              <option value="cajuc">Suco de caju c/ leite</option>
              <option value="maras">Suco de maracujá s/ leite</option>
              <option value="marac">Suco de maracujá c/ leite</option>
              <option value="gravs">Suco de graviola s/ leite</option>
              <option value="gravc">Suco de graviola c/ leite</option>
              <option value="uvas">Suco de uva s/ leite</option>
              <option value="uvac">Suco de uva c/ leite</option>
              <option value="moras">Suco de morango s/ leite</option>
              <option value="morac">Suco de morango c/ leite</option>
              <option value="limas">Suco de limão s/ leite</option>
              <option value="limac">Suco de limão c/ leite</option>
            </select> <input type="button" id='compr' onclick="comprarBeiruteTrad()" class="search" value="Atualizar">
        </p>
    </div>
    <div id='finalizar-compras'></div>
    </div>
    `;
}

// Final da seleção de guirlandas e beirutes.

// Início das compras de guirlandas.

var guirlandaValue = "";
var drinkValue = "";
var guirlandaSelect = "";
var bebidaSelect = "";

function comprarGuirlandaTrad() {
  let checkWrap = document.getElementById("finalizar-compras");

  let select2 = document.getElementById("select-drink");
  let value2 = select2.options[select2.selectedIndex].value;

  bebidaSelect = select2.options[select2.selectedIndex].textContent;

  itensGuirlandas.map((val) => {
    if (val.quantidade > 0) {
      guirlandaValue = val.preço;
    }
  });

  if (
    value2 === "gualat" ||
    value2 === "coclat" ||
    value2 === "sprlat" ||
    value2 === "fanlat"
  ) {
    drinkValue = bebidaLata;
  } else if (value2 === "gua1l" || value2 === "spr1l" || value2 === "fan1l") {
    drinkValue = bebida1L;
  } else if (value2 === "gua2l" || value2 === "spr2l" || value2 === "fan2l") {
    drinkValue = bebida2L;
  } else if (value2 === "coc1l") {
    drinkValue = bebidaCoca1L;
  } else if (value2 === "coc2l") {
    drinkValue = bebidaCoca2L;
  } else if (
    value2 === "acers" ||
    value2 === "cajas" ||
    value2 === "cajus" ||
    value2 === "maras" ||
    value2 === "gravs" ||
    value2 === "uvas" ||
    value2 === "moras" ||
    value2 === "limas"
  ) {
    drinkValue = bebidaSucoSem;
  } else if (
    value2 === "acerc" ||
    value2 === "cajac" ||
    value2 === "cajuc" ||
    value2 === "marac" ||
    value2 === "gravc" ||
    value2 === "uvac" ||
    value2 === "morac" ||
    value2 === "limac"
  ) {
    drinkValue = bebidaSucoCom;
  }

  if (value2 === "none") {
    itensGuirlandas.map((val) => {
      if (val.quantidade > 0) {
        checkWrap.innerHTML = `
          <h2>Selecione o método de pagamento:</h2>
          <p>Valor total é de R$${guirlandaValue
            .toFixed(2)
            .replace(".", ",")}.</p>
          <p>
          <select onchange='selectPag(this.value)' name="pagsel" id="select-pague">
              <option value="selecione">Selecione</option>
              <option value="card">Cartão</option>
              <option value="dinheiro">Dinheiro</option>
              <option value="pix">Pix</option>
          </select>
          </p>
          <div id='pagamento'></div>
          `;
      }
    });
  } else {
    let finalValue = drinkValue + guirlandaValue;
    itensGuirlandas.map((val) => {
      if (val.quantidade > 0) {
        checkWrap.innerHTML = `
          <h2>Selecione o método de pagamento:</h2>
          <p>Valor total é de R$${finalValue.toFixed(2).replace(".", ",")}.</p>
          <p>
          <select onchange='selectPag(this.value)' name="pagsel" id="select-pague">
              <option value="selecione">Selecione</option>
              <option value="card">Cartão</option>
              <option value="dinheiro">Dinheiro</option>
              <option value="pix">Pix</option>
          </select>
          </p>
          <div id='pagamento'></div>
          `;
      }
    });
  }
}

function selectPag(valor) {
  let select2 = document.getElementById("select-drink");
  let value2 = select2.options[select2.selectedIndex].value;

  let pagamento = document.getElementById("pagamento");

  if (valor === "selecione") {
    pagamento.innerHTML = "";
  } else if (valor === "card") {
    pagamento.innerHTML = `
          <h2>Selecione</h2>
          <input class="search" onclick="creditoG()" type="button" value="Crédito"> ou <input class="search" onclick="debitoG()" type="button" value="Débito">
          <div id='pag'></div>
          `;
  } else if (valor === "dinheiro") {
    pagamento.innerHTML = `
        <p>Você deseja troco para que quantia?</p>
        R$ <input type="number" min='0' class='quantia-dinheiro' name="quant" id="quantDinheiro"> <input type="button" id='compr' onclick="finalizarGuirlanda()" class="search" value="Continuar">
        <div id='pag'></div>
        `;
  } else if (valor === "pix") {
    if (value2 === "none") {
      itensGuirlandas.map((val) => {
        if (val.quantidade > 0) {
          pagamento.innerHTML = `
            <br>
            <h3>Essa é a nossa chave Pix: 99999999999 (CPF); Banco Santander, Chili Peppers.</h3>
            <p>Após fazer o Pix, tire um print do comprovante e envie ao terminar a compra pelo WhatsApp.</p>
            <br>
            <h2>Deseja finalizar o  pedido?</h2>
            <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Guirlanda%20sabor%20${val.nome},%20sem%20bebida.%20Pagamento%20em%20PIX." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
            `;
        }
      });
    } else {
      itensGuirlandas.map((val) => {
        if (val.quantidade > 0) {
          pagamento.innerHTML = `
            <br>
            <h3>Essa é a nossa chave Pix: 99999999999 (CPF); Banco Santander, Chili Pepppers.</h3>
            <p>Após fazer o Pix, tire um print do comprovante e envie ao terminar a compra pelo WhatsApp.</p>
            <br>
            <h2>Deseja finalizar o  pedido?</h2>
            <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Guirlanda%20sabor%20${val.nome},%20com%20um(a)%20${bebidaSelect}.%20Pagamento%20em%20PIX." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
            `;
        }
      });
    }
  }
}

function creditoG() {
  let select2 = document.getElementById("select-drink");
  let value2 = select2.options[select2.selectedIndex].value;

  let pag = document.getElementById("pag");

  if (value2 === "none") {
    let credFinal = guirlandaValue + 2;
    itensGuirlandas.map((val) => {
      if (val.quantidade > 0) {
        pag.innerHTML = `
        No crédito temos uma taxa da maquininha, onde R$2,00 são acrescentados ao valor total da compra, logo o valor total passa a ser ${credFinal
          .toFixed(2)
          .replace(".", ",")}.
        <h2>Deseja finalizar o  pedido?</h2>
        <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Guirlanda%20sabor%20${
          val.nome
        },%20sem%20bebida.%20Pagamento%20em%20cartão%20de%20crédito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
        `;
      }
    });
  } else {
    itensGuirlandas.map((val) => {
      let credFinal = drinkValue + guirlandaValue + 2;
      if (val.quantidade > 0) {
        pag.innerHTML = `
        No crédito temos uma taxa da maquininha, onde R$2,00 são acrescentados ao valor total da compra, logo o valor total passa a ser ${credFinal
          .toFixed(2)
          .replace(".", ",")}.
        <h2>Deseja finalizar o  pedido?</h2>
        <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Guirlanda%20sabor%20${
          val.nome
        },%20com%20um(a)%20${bebidaSelect}.%20Pagamento%20em%20cartão%20de%20crédito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
        `;
      }
    });
  }
}

function debitoG() {
  let select2 = document.getElementById("select-drink");
  let value2 = select2.options[select2.selectedIndex].value;

  let pag = document.getElementById("pag");

  if (value2 === "none") {
    itensGuirlandas.map((val) => {
      if (val.quantidade > 0) {
        pag.innerHTML = `
        <h2>Selecione</h2>
        <input type="button" value="Crédito"> ou <input type="button" value="Débito">
        <div id='pag'></div>

        <h2>Deseja finalizar o  pedido?</h2>
        <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Guirlanda%20sabor%20${val.nome},%20sem%20bebida.%20Pagamento%20em%20cartão%20de%20débito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
        `;
      }
    });
  } else {
    itensGuirlandas.map((val) => {
      if (val.quantidade > 0) {
        pag.innerHTML = `
        <h2>Deseja finalizar o  pedido?</h2>
        <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Guirlanda%20sabor%20${val.nome},%20com%20um(a)%20${bebidaSelect}.%20Pagamento%20em%20cartão%20de%20débito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
        `;
      }
    });
  }
}

function finalizarGuirlanda() {
  let trocos = document.getElementById("quantDinheiro").value;

  let pag = document.getElementById("pag");

  let select2 = document.getElementById("select-drink");
  let value2 = select2.options[select2.selectedIndex].value;

  if (trocos === "") {
    alert("Insira o valor da quantia para troco.");
  } else {
    if (value2 === "none") {
      itensGuirlandas.map((val) => {
        if (val.quantidade > 0) {
          pag.innerHTML = `
          <h2>Deseja finalizar o  pedido?</h2>
          <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Guirlanda%20sabor%20${val.nome},%20sem%20bebida.%20Pagamento%20em%20dinheiro,%20troco%20para%20R$${trocos},00." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
          `;
        }
      });
    } else {
      itensGuirlandas.map((val) => {
        if (val.quantidade > 0) {
          pag.innerHTML = `
          <h2>Deseja finalizar o  pedido?</h2>
          <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Guirlanda%20sabor%20${val.nome},%20com%20um(a)%20${bebidaSelect}.%20Pagamento%20em%20dinheiro,%20troco%20para%20R$${trocos},00." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
          `;
        }
      });
    }
  }
}

// Final das compras de guirlandas.

// Início das compras de beirute.

var beiruteValue = "";
var drinkValueB = "";
var bebidaSelectB = "";

function comprarBeiruteTrad() {
  let checkWrap = document.getElementById("finalizar-compras");

  let select2 = document.getElementById("select-drink");
  let value2 = select2.options[select2.selectedIndex].value;

  bebidaSelectB = select2.options[select2.selectedIndex].textContent;

  itensBeirute.map((val) => {
    if (val.quantidade > 0) {
      beiruteValue = val.preçop;
    }
  });

  if (
    value2 === "gualat" ||
    value2 === "coclat" ||
    value2 === "sprlat" ||
    value2 === "fanlat"
  ) {
    drinkValueB = bebidaLata;
  } else if (value2 === "gua1l" || value2 === "spr1l" || value2 === "fan1l") {
    drinkValueB = bebida1L;
  } else if (value2 === "gua2l" || value2 === "spr2l" || value2 === "fan2l") {
    drinkValueB = bebida2L;
  } else if (value2 === "coc1l") {
    drinkValueB = bebidaCoca1L;
  } else if (value2 === "coc2l") {
    drinkValueB = bebidaCoca2L;
  } else if (
    value2 === "acers" ||
    value2 === "cajas" ||
    value2 === "cajus" ||
    value2 === "maras" ||
    value2 === "gravs" ||
    value2 === "uvas" ||
    value2 === "moras" ||
    value2 === "limas"
  ) {
    drinkValueB = bebidaSucoSem;
  } else if (
    value2 === "acerc" ||
    value2 === "cajac" ||
    value2 === "cajuc" ||
    value2 === "marac" ||
    value2 === "gravc" ||
    value2 === "uvac" ||
    value2 === "morac" ||
    value2 === "limac"
  ) {
    drinkValueB = bebidaSucoCom;
  }

  if (value2 === "none") {
    itensBeirute.map((val) => {
      if (val.quantidade > 0) {
        checkWrap.innerHTML = `
          <h2>Selecione o método de pagamento:</h2>
          <p>Valor total é de R$${beiruteValue
            .toFixed(2)
            .replace(".", ",")}.</p>
          <p>
          <select onchange='selectPagB(this.value)' name="pagsel" id="select-pague">
              <option value="selecione">Selecione</option>
              <option value="card">Cartão</option>
              <option value="dinheiro">Dinheiro</option>
              <option value="pix">Pix</option>
          </select>
          </p>
          <div id='pagamento'></div>
          `;
      }
    });
  } else {
    let finalValue = drinkValueB + beiruteValue;
    itensBeirute.map((val) => {
      if (val.quantidade > 0) {
        checkWrap.innerHTML = `
          <h2>Selecione o método de pagamento:</h2>
          <p>Valor total é de R$${finalValue.toFixed(2).replace(".", ",")}.</p>
          <p>
          <select onchange='selectPagB(this.value)' name="pagsel" id="select-pague">
              <option value="selecione">Selecione</option>
              <option value="card">Cartão</option>
              <option value="dinheiro">Dinheiro</option>
              <option value="pix">Pix</option>
          </select>
          </p>
          <div id='pagamento'></div>
          `;
      }
    });
  }
}

function selectPagB(valor) {
  let select2 = document.getElementById("select-drink");
  let value2 = select2.options[select2.selectedIndex].value;

  let pagamento = document.getElementById("pagamento");

  if (valor === "selecione") {
    pagamento.innerHTML = "";
  } else if (valor === "card") {
    pagamento.innerHTML = `
    <h2>Selecione</h2>
    <input class="search" onclick="creditoB()" type="button" value="Crédito"> ou <input class="search" onclick="debitoB()" type="button" value="Débito">
    <div id='pag'></div>
    `;
  } else if (valor === "dinheiro") {
    pagamento.innerHTML = `
      <p>Você deseja troco para que quantia?</p>
      R$ <input type="number" min='0' class='quantia-dinheiro' name="quant" id="quantDinheiro"> <input type="button" id='compr' onclick="finalizarBeirute()" class="search" value="Continuar">
      <div id='pag'></div>
      `;
  } else if (valor === "pix") {
    if (value2 === "none") {
      itensBeirute.map((val) => {
        if (val.quantidade > 0) {
          pagamento.innerHTML = `
          <br>
          <h3>Essa é a nossa chave Pix: 9999999999 (CPF); Banco Santander, Chili Peppers.</h3>
          <p>Após fazer o Pix, tire um print do comprovante e envie ao terminar a compra pelo WhatsApp.</p>
          <br>
          <h2>Deseja finalizar o  pedido?</h2>
          <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Beirute%20de%20${val.nome},%20sem%20bebida.%20Pagamento%20em%20PIX." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
          `;
        }
      });
    } else {
      itensBeirute.map((val) => {
        if (val.quantidade > 0) {
          pagamento.innerHTML = `
          <br>
          <h3>Essa é a nossa chave Pix: 9999999999 (CPF); Banco Santander, Chili Peppers.</h3>
          <p>Após fazer o Pix, tire um print do comprovante e envie ao terminar a compra pelo WhatsApp.</p>
          <br>
          <h2>Deseja finalizar o  pedido?</h2>
          <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Beirute%20de%20${val.nome},%20com%20um(a)%20${bebidaSelectB}.%20Pagamento%20em%20PIX." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
          `;
        }
      });
    }
  }
}

function creditoB() {
  let select2 = document.getElementById("select-drink");
  let value2 = select2.options[select2.selectedIndex].value;

  let pag = document.getElementById("pag");

  if (value2 === "none") {
    let credFinal = beiruteValue + 2;
    itensBeirute.map((val) => {
      if (val.quantidade > 0) {
        pag.innerHTML = `
        No crédito temos uma taxa da maquininha, onde R$2,00 são acrescentados ao valor total da compra, logo o valor total passa a ser ${credFinal
          .toFixed(2)
          .replace(".", ",")}.
        <h2>Deseja finalizar o  pedido?</h2>
        <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Guirlanda%20sabor%20${
          val.nome
        },%20sem%20bebida.%20Pagamento%20em%20cartão%20de%20crédito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
        `;
      }
    });
  } else {
    itensBeirute.map((val) => {
      let credFinal = drinkValueB + beiruteValue + 2;
      if (val.quantidade > 0) {
        pag.innerHTML = `
        No crédito temos uma taxa da maquininha, onde R$2,00 são acrescentados ao valor total da compra, logo o valor total passa a ser ${credFinal
          .toFixed(2)
          .replace(".", ",")}.
        <h2>Deseja finalizar o  pedido?</h2>
        <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Guirlanda%20sabor%20${
          val.nome
        },%20com%20um(a)%20${bebidaSelectB}.%20Pagamento%20em%20cartão%20de%20crédito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
        `;
      }
    });
  }
}

function debitoB() {
  let select2 = document.getElementById("select-drink");
  let value2 = select2.options[select2.selectedIndex].value;

  let pag = document.getElementById("pag");

  if (value2 === "none") {
    itensBeirute.map((val) => {
      if (val.quantidade > 0) {
        pag.innerHTML = `
        <h2>Selecione</h2>
        <input type="button" value="Crédito"> ou <input type="button" value="Débito">
        <div id='pag'></div>

        <h2>Deseja finalizar o  pedido?</h2>
        <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Guirlanda%20sabor%20${val.nome},%20sem%20bebida.%20Pagamento%20em%20cartão%20de%20débito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
        `;
      }
    });
  } else {
    itensBeirute.map((val) => {
      if (val.quantidade > 0) {
        pag.innerHTML = `
        <h2>Deseja finalizar o  pedido?</h2>
        <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Guirlanda%20sabor%20${val.nome},%20com%20um(a)%20${bebidaSelectB}.%20Pagamento%20em%20cartão%20de%20débito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
        `;
      }
    });
  }
}

function finalizarBeirute() {
  let trocos = document.getElementById("quantDinheiro").value;

  let pag = document.getElementById("pag");

  let select2 = document.getElementById("select-drink");
  let value2 = select2.options[select2.selectedIndex].value;

  if (trocos === "") {
    alert("Insira o valor da quantia para troco.");
  } else {
    if (value2 === "none") {
      itensBeirute.map((val) => {
        if (val.quantidade > 0) {
          pag.innerHTML = `
            <h2>Deseja finalizar o  pedido?</h2>
            <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Beirute%20de%20${val.nome},%20sem%20bebida.%20Pagamento%20em%20dinheiro,%20troco%20para%20R$${trocos},00." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
            `;
        }
      });
    } else {
      itensBeirute.map((val) => {
        if (val.quantidade > 0) {
          pag.innerHTML = `
            <h2>Deseja finalizar o  pedido?</h2>
            <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Beirute%20de%20${val.nome},%20com%20um(a)%20${bebidaSelectB}.%20Pagamento%20em%20dinheiro,%20troco%20para%20R$${trocos},00." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
            `;
        }
      });
    }
  }
}

// Final das compras de beirute.

const imgsBord = document.getElementById("imgs-bord");
const imgBord = document.querySelectorAll("#imgs-bord img");

let idx = 0;

function atualizarCarrosselBords() {
  idx++;

  if (idx > imgBord.length - 1) {
    idx = 0;
  }

  imgsBord.style.transform = `translateX(${-idx * 300}px)`;
}

setInterval(atualizarCarrosselBords, 3000);

const imgsBord1 = document.getElementById("imgs-bord1");
const imgBord1 = document.querySelectorAll("#imgs-bord1 img");

let idx1 = 0;

function atualizarCarrosselBords1() {
  idx1++;

  if (idx1 > imgBord1.length - 1) {
    idx1 = 0;
  }

  imgsBord1.style.transform = `translateX(${-idx1 * 300}px)`;
}

setInterval(atualizarCarrosselBords1, 3000);

const imgsBord2 = document.getElementById("imgs-bord2");
const imgBord2 = document.querySelectorAll("#imgs-bord2 img");

let idx2 = 0;

function atualizarCarrosselBords2() {
  idx2++;

  if (idx2 > imgBord2.length - 1) {
    idx2 = 0;
  }

  imgsBord2.style.transform = `translateX(${-idx2 * 300}px)`;
}

setInterval(atualizarCarrosselBords2, 3000);
