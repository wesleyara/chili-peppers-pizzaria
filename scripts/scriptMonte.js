/* eslint-disable @typescript-eslint/no-unused-vars */
// Início dos valores de bordas.

const borderCCCMPequena = 6;
const borderCCCMGrande = 9;
const borderChocolatePequena = 8;
const borderChocolateGrande = 12;
const borderGCCLPequena = 8;
const borderGCCLGrande = 14;
const borderPaozinho = 18;
const borderCoxinhaG = 27;

// Final dos valores de bordas.

// Início dos valores de bebidas.

const bebidaCoca1L = 8;
const bebidaCoca2L = 12;

const bebidaLata = 5;
const bebida1L = 7;
const bebida2L = 10;

const bebidaSucoCom = 5;
const bebidaSucoSem = 3;

// Final dos valores de bebidas.

// Início da seleção da quantidade de sabores.

function selectQuant(valor) {
  let checkWrapper = document.getElementById("check-wrapper");

  if (valor === "2") {
    checkWrapper.innerHTML = `
        <br>
        <h2>Selecione os sabores que você deseja:</h2>
        <p>
        1º Sabor: <select class="selects" name="sabor-um" id="sabor-um">
            <option value="none">Selecione</option>
            <option precop='25' precog='35' value="mussarela">Mussarela</option>
            <option precop='27' precog='38' value="marguerita">Marguerita</option>
            <option precop='28' precog='40' value="calabresa">Calabresa</option>
            <option precop='32' precog='44' value="portuguesa">Portuguesa</option>
            <option precop='31' precog='43' value="4queijos">4 Queijos</option>
            <option precop='31' precog='43' value="frangoccatupiry">Frango c/ Catupiry</option>
            <option precop='32' precog='44' value="frangocaipira">Frango Caipira</option>
            <option precop='32' precog='44' value="vicentina">Vicentina</option>
            <option precop='32' precog='44' value="amodadacasa">À Moda da Casa</option>
            <option precop='30' precog='40' value="brasileira">Brasileira</option>
            <option precop='31' precog='43' value="frangocbacon">Frango c/ Bacon</option>
            <option precop='31' precog='43' value="clabresaccatupiry">Calabresa c/ Catupiry</option>
            <option precop='31' precog='42' value="abobrinha">Abobrinha</option>
            <option precop='32' precog='44' value="frangocremoso">Frango Cremoso</option>
            <option precop='32' precog='44' value="mista">Mista</option>
            <option precop='36' precog='47' value="havaiana">Havaiana</option>
            <option precop='40' precog='55' value="camarão">Camarão</option>
            <option precop='38' precog='50' value="sertaneja">Sertaneja</option>
            <option precop='40' precog='55' value="xtudao">X-tudão</option>
            <option precop='38' precog='50' value="amodadochef">À Moda do Chefe</option>
            <option precop='33' precog='45' value="5queijos">5 Queijos</option>
            <option precop='37' precog='49' value="carnesecaccatupiry">Carne Seca c/ Catupiry</option>
            <option precop='36' precog='48' value="sabordnordeste">Sabor do Nordeste</option>
            <option precop='38' precog='55' value="sushisalmon">Sushi Salmon</option>
            <option precop='33' precog='45' value="brocolis">Brócolis</option>
            <option precop='33' precog='45' value="nordestina">Nordestina</option>
            <option precop='33' precog='45' value="pepperoni">Pepperoni</option>
            <option precop='33' precog='45' value="vegetariana">Vegetariana</option>
            <option precop='32' precog='43' value="choco">Choco M&M</option>
            <option precop='32' precog='46' value="chocobom">Chocobom</option>
            <option precop='34' precog='46' value="sensacoes">Sensações</option>
            <option precop='34' precog='46' value="banananevada">Banana Nevada</option>
            <option precop='26' precog='35' value="cartola">Cartola</option>
            <option precop='28' precog='40' value="deliciadabacaxi">Delícia de Abacaxi</option>
            <option precop='26' precog='35' value="romeuejulieta">Romeu e Julieta</option>
        </select>
        <br>
        2º Sabor: <select class="selects" name="sabor-dois" id="sabor-dois">
            <option value="none">Selecione</option>
            <option precop='25' precog='35' value="mussarela">Mussarela</option>
            <option precop='27' precog='38' value="marguerita">Marguerita</option>
            <option precop='28' precog='40' value="calabresa">Calabresa</option>
            <option precop='32' precog='44' value="portuguesa">Portuguesa</option>
            <option precop='31' precog='43' value="4queijos">4 Queijos</option>
            <option precop='31' precog='43' value="frangoccatupiry">Frango c/ Catupiry</option>
            <option precop='32' precog='44' value="frangocaipira">Frango Caipira</option>
            <option precop='32' precog='44' value="vicentina">Vicentina</option>
            <option precop='32' precog='44' value="amodadacasa">À Moda da Casa</option>
            <option precop='30' precog='40' value="brasileira">Brasileira</option>
            <option precop='31' precog='43' value="frangocbacon">Frango c/ Bacon</option>
            <option precop='31' precog='43' value="clabresaccatupiry">Calabresa c/ Catupiry</option>
            <option precop='31' precog='42' value="abobrinha">Abobrinha</option>
            <option precop='32' precog='44' value="frangocremoso">Frango Cremoso</option>
            <option precop='32' precog='44' value="mista">Mista</option>
            <option precop='36' precog='47' value="havaiana">Havaiana</option>
            <option precop='40' precog='55' value="camarão">Camarão</option>
            <option precop='38' precog='50' value="sertaneja">Sertaneja</option>
            <option precop='40' precog='55' value="xtudao">X-tudão</option>
            <option precop='38' precog='50' value="amodadochef">À Moda do Chefe</option>
            <option precop='33' precog='45' value="5queijos">5 Queijos</option>
            <option precop='37' precog='49' value="carnesecaccatupiry">Carne Seca c/ Catupiry</option>
            <option precop='36' precog='48' value="sabordnordeste">Sabor do Nordeste</option>
            <option precop='38' precog='55' value="sushisalmon">Sushi Salmon</option>
            <option precop='33' precog='45' value="brocolis">Brócolis</option>
            <option precop='33' precog='45' value="nordestina">Nordestina</option>
            <option precop='33' precog='45' value="pepperoni">Pepperoni</option>
            <option precop='33' precog='45' value="vegetariana">Vegetariana</option>
            <option precop='32' precog='43' value="choco">Choco M&M</option>
            <option precop='32' precog='46' value="chocobom">Chocobom</option>
            <option precop='34' precog='46' value="sensacoes">Sensações</option>
            <option precop='34' precog='46' value="banananevada">Banana Nevada</option>
            <option precop='26' precog='35' value="cartola">Cartola</option>
            <option precop='28' precog='40' value="deliciadabacaxi">Delícia de Abacaxi</option>
            <option precop='26' precog='35' value="romeuejulieta">Romeu e Julieta</option>
        </select>
        <br>
        Tamanho: <select class="selects" name="size-pizza" id="select-size">
            <option value="g">Grande</option>
            <option value="p">Pequena</option>
        </select> <a href="#card-wrapper"><input type="button" class="search" onclick="pizzaDois()" value="Atualizar"></a>
        </p>
        `;
  } else if (valor === "3") {
    checkWrapper.innerHTML = `
        <br>
        <h2>Selecione os sabores que você deseja:</h2>
        <p>
        1º Sabor: <select class="selects" name="sabor-um" id="sabor-um">
            <option value="none">Selecione</option>
            <option precop='25' precog='35' value="mussarela">Mussarela</option>
            <option precop='27' precog='38' value="marguerita">Marguerita</option>
            <option precop='28' precog='40' value="calabresa">Calabresa</option>
            <option precop='32' precog='44' value="portuguesa">Portuguesa</option>
            <option precop='31' precog='43' value="4queijos">4 Queijos</option>
            <option precop='31' precog='43' value="frangoccatupiry">Frango c/ Catupiry</option>
            <option precop='32' precog='44' value="frangocaipira">Frango Caipira</option>
            <option precop='32' precog='44' value="vicentina">Vicentina</option>
            <option precop='32' precog='44' value="amodadacasa">À Moda da Casa</option>
            <option precop='30' precog='40' value="brasileira">Brasileira</option>
            <option precop='31' precog='43' value="frangocbacon">Frango c/ Bacon</option>
            <option precop='31' precog='43' value="clabresaccatupiry">Calabresa c/ Catupiry</option>
            <option precop='31' precog='42' value="abobrinha">Abobrinha</option>
            <option precop='32' precog='44' value="frangocremoso">Frango Cremoso</option>
            <option precop='32' precog='44' value="mista">Mista</option>
            <option precop='36' precog='47' value="havaiana">Havaiana</option>
            <option precop='40' precog='55' value="camarão">Camarão</option>
            <option precop='38' precog='50' value="sertaneja">Sertaneja</option>
            <option precop='40' precog='55' value="xtudao">X-tudão</option>
            <option precop='38' precog='50' value="amodadochef">À Moda do Chefe</option>
            <option precop='33' precog='45' value="5queijos">5 Queijos</option>
            <option precop='37' precog='49' value="carnesecaccatupiry">Carne Seca c/ Catupiry</option>
            <option precop='36' precog='48' value="sabordnordeste">Sabor do Nordeste</option>
            <option precop='38' precog='55' value="sushisalmon">Sushi Salmon</option>
            <option precop='33' precog='45' value="brocolis">Brócolis</option>
            <option precop='33' precog='45' value="nordestina">Nordestina</option>
            <option precop='33' precog='45' value="pepperoni">Pepperoni</option>
            <option precop='33' precog='45' value="vegetariana">Vegetariana</option>
            <option precop='32' precog='43' value="choco">Choco M&M</option>
            <option precop='32' precog='46' value="chocobom">Chocobom</option>
            <option precop='34' precog='46' value="sensacoes">Sensações</option>
            <option precop='34' precog='46' value="banananevada">Banana Nevada</option>
            <option precop='26' precog='35' value="cartola">Cartola</option>
            <option precop='28' precog='40' value="deliciadabacaxi">Delícia de Abacaxi</option>
            <option precop='26' precog='35' value="romeuejulieta">Romeu e Julieta</option>
        </select>
        <br>
        2º Sabor: <select class="selects" name="sabor-dois" id="sabor-dois">
            <option value="none">Selecione</option>
            <option precop='25' precog='35' value="mussarela">Mussarela</option>
            <option precop='27' precog='38' value="marguerita">Marguerita</option>
            <option precop='28' precog='40' value="calabresa">Calabresa</option>
            <option precop='32' precog='44' value="portuguesa">Portuguesa</option>
            <option precop='31' precog='43' value="4queijos">4 Queijos</option>
            <option precop='31' precog='43' value="frangoccatupiry">Frango c/ Catupiry</option>
            <option precop='32' precog='44' value="frangocaipira">Frango Caipira</option>
            <option precop='32' precog='44' value="vicentina">Vicentina</option>
            <option precop='32' precog='44' value="amodadacasa">À Moda da Casa</option>
            <option precop='30' precog='40' value="brasileira">Brasileira</option>
            <option precop='31' precog='43' value="frangocbacon">Frango c/ Bacon</option>
            <option precop='31' precog='43' value="clabresaccatupiry">Calabresa c/ Catupiry</option>
            <option precop='31' precog='42' value="abobrinha">Abobrinha</option>
            <option precop='32' precog='44' value="frangocremoso">Frango Cremoso</option>
            <option precop='32' precog='44' value="mista">Mista</option>
            <option precop='36' precog='47' value="havaiana">Havaiana</option>
            <option precop='40' precog='55' value="camarão">Camarão</option>
            <option precop='38' precog='50' value="sertaneja">Sertaneja</option>
            <option precop='40' precog='55' value="xtudao">X-tudão</option>
            <option precop='38' precog='50' value="amodadochef">À Moda do Chefe</option>
            <option precop='33' precog='45' value="5queijos">5 Queijos</option>
            <option precop='37' precog='49' value="carnesecaccatupiry">Carne Seca c/ Catupiry</option>
            <option precop='36' precog='48' value="sabordnordeste">Sabor do Nordeste</option>
            <option precop='38' precog='55' value="sushisalmon">Sushi Salmon</option>
            <option precop='33' precog='45' value="brocolis">Brócolis</option>
            <option precop='33' precog='45' value="nordestina">Nordestina</option>
            <option precop='33' precog='45' value="pepperoni">Pepperoni</option>
            <option precop='33' precog='45' value="vegetariana">Vegetariana</option>
            <option precop='32' precog='43' value="choco">Choco M&M</option>
            <option precop='32' precog='46' value="chocobom">Chocobom</option>
            <option precop='34' precog='46' value="sensacoes">Sensações</option>
            <option precop='34' precog='46' value="banananevada">Banana Nevada</option>
            <option precop='26' precog='35' value="cartola">Cartola</option>
            <option precop='28' precog='40' value="deliciadabacaxi">Delícia de Abacaxi</option>
            <option precop='26' precog='35' value="romeuejulieta">Romeu e Julieta</option>
        </select>
        <br>
        3º Sabor: <select class="selects" name="sabor-tres" id="sabor-tres">
            <option value="none">Selecione</option>
            <option precop='25' precog='35' value="mussarela">Mussarela</option>
            <option precop='27' precog='38' value="marguerita">Marguerita</option>
            <option precop='28' precog='40' value="calabresa">Calabresa</option>
            <option precop='32' precog='44' value="portuguesa">Portuguesa</option>
            <option precop='31' precog='43' value="4queijos">4 Queijos</option>
            <option precop='31' precog='43' value="frangoccatupiry">Frango c/ Catupiry</option>
            <option precop='32' precog='44' value="frangocaipira">Frango Caipira</option>
            <option precop='32' precog='44' value="vicentina">Vicentina</option>
            <option precop='32' precog='44' value="amodadacasa">À Moda da Casa</option>
            <option precop='30' precog='40' value="brasileira">Brasileira</option>
            <option precop='31' precog='43' value="frangocbacon">Frango c/ Bacon</option>
            <option precop='31' precog='43' value="clabresaccatupiry">Calabresa c/ Catupiry</option>
            <option precop='31' precog='42' value="abobrinha">Abobrinha</option>
            <option precop='32' precog='44' value="frangocremoso">Frango Cremoso</option>
            <option precop='32' precog='44' value="mista">Mista</option>
            <option precop='36' precog='47' value="havaiana">Havaiana</option>
            <option precop='40' precog='55' value="camarão">Camarão</option>
            <option precop='38' precog='50' value="sertaneja">Sertaneja</option>
            <option precop='40' precog='55' value="xtudao">X-tudão</option>
            <option precop='38' precog='50' value="amodadochef">À Moda do Chefe</option>
            <option precop='33' precog='45' value="5queijos">5 Queijos</option>
            <option precop='37' precog='49' value="carnesecaccatupiry">Carne Seca c/ Catupiry</option>
            <option precop='36' precog='48' value="sabordnordeste">Sabor do Nordeste</option>
            <option precop='38' precog='55' value="sushisalmon">Sushi Salmon</option>
            <option precop='33' precog='45' value="brocolis">Brócolis</option>
            <option precop='33' precog='45' value="nordestina">Nordestina</option>
            <option precop='33' precog='45' value="pepperoni">Pepperoni</option>
            <option precop='33' precog='45' value="vegetariana">Vegetariana</option>
            <option precop='32' precog='43' value="choco">Choco M&M</option>
            <option precop='32' precog='46' value="chocobom">Chocobom</option>
            <option precop='34' precog='46' value="sensacoes">Sensações</option>
            <option precop='34' precog='46' value="banananevada">Banana Nevada</option>
            <option precop='26' precog='35' value="cartola">Cartola</option>
            <option precop='28' precog='40' value="deliciadabacaxi">Delícia de Abacaxi</option>
            <option precop='26' precog='35' value="romeuejulieta">Romeu e Julieta</option>
        </select>
        <br>
        Tamanho: <select class="selects" name="size-pizza" id="select-size">
            <option value="g">Grande</option>
            <option value="p">Pequena</option>
        </select> <a href="#card-wrapper"><input type="button" class="search" onclick="pizzaTres()" value="Atualizar"></a>
        </p>
        `;
  }
}

// Final da seleção da quantidade de sabores.

// Início do monte sua pizza com dois sabores.

var metade01 = "";
var metade02 = "";
var preco01 = "";
var preco02 = "";
var sizePizzaDois = "";
var result = "";

function pizzaDois() {
  let cardWrapper = document.getElementById("card-wrapper");

  let clearn = document.getElementById("clear");

  let select1 = document.querySelector("#sabor-um");
  let value1 = select1.options[select1.selectedIndex].value;

  let select2 = document.querySelector("#sabor-dois");
  let value2 = select2.options[select2.selectedIndex].value;

  let select3 = document.getElementById("select-size");
  let value3 = select3.options[select3.selectedIndex].value;

  metade01 = select1.options[select1.selectedIndex].textContent;
  metade02 = select2.options[select2.selectedIndex].textContent;

  if (value1 === "none" && value2 === "none") {
    alert("Por favor, selecione os sabores da pizza.");
  } else if (value1 === "none" || value2 === "none") {
    alert("Por favor, selecione o sabor que falta.");
  } else if (value1 === value2) {
    alert("Por favor, selecione dois sabores diferentes.");
    cardWrapper.innerHTML = "";
  } else {
    clearn.innerHTML = `<hr>`;
    // Início para pegar o valor da pizza.
    let preco001 = select1.options[select1.selectedIndex];
    let preco002 = select2.options[select2.selectedIndex];

    if (value3 === "p") {
      sizePizzaDois = "P";
      preco01 = parseFloat(preco001.getAttribute("precop"));
      preco02 = parseFloat(preco002.getAttribute("precop"));
    } else if (value3 === "g") {
      sizePizzaDois = "G";
      preco01 = parseFloat(preco001.getAttribute("precog"));
      preco02 = parseFloat(preco002.getAttribute("precog"));
    }

    if (preco01 > preco02) {
      result = (preco01 + preco02) / 2 + (preco01 % preco02) / 2;
    } else if (preco01 < preco02) {
      result = (preco01 + preco02) / 2 + (preco02 % preco01) / 2;
    } else if (preco01 == preco02) {
      result = (preco01 + preco02) / 2;
    }
    // Final do para pegar o valor da pizza.

    cardWrapper.innerHTML = `
        <div id="cardItem" class="card-item">
            <img class="pizza-image" src="" alt="pizzas">
            <div class="card-content">
                <h3>Seu Pedido:</h3>
                <p id='ingredientes'>
                Pizza metade ${metade01} e metate ${metade02}, tamanho ${sizePizzaDois}.
                </p>
                <br>
                <p>
                    Preço: R$ ${result
                      .toFixed(2)
                      .replace(
                        ".",
                        ",",
                      )} (O preço é dado em cima da pizza de maior valor selecionada)
                </p> 
            </div>
        </div>
        <div id="espaço"></div>
    `;

    let checkWrappe = document.getElementById("card-wrappe");

    checkWrappe.innerHTML = `
    <div class="border-select">
        <div id='bebida'>
        <h2>Selecione sua bebida para acompanhar:</h2>
            <p>
            <select class="selects" name="drinksel" id="select-drink">
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
            </select>
        </p>
        </div>
        <h2>Selecione sua borda para acompanhar:</h2>
        <p>
        <select class="selects" name="bordersel" id="select-bord">
          <option value="none">Nenhuma</option>
          <option value="choco">Chocolate</option>
          <option value="cheddar">Cheddar</option>
          <option value="cream">Cream Cheese</option>
          <option value="catupiry">Catupiry</option>
          <option value="mussarela">Mussarela</option>
          <option value="paozinhopre">Pãozinho: Presunto/Mussarela</option>
          <option value="paozinhocal">Pãozinho: Calabresa/Catupiry</option>
          <option value="paozinhofra">Pãozinho: Frango/Catupiry</option>
          <option value="coxinha">Coxinha</option>
        </select> <input type="button" id='compr' onclick="comprarPizzaDois()" class="search" value="Atualizar">
        </p>
        <div id='finalizar-compras'></div>
    </div>
    `;
  }
}

var drinkPizDoisSelect = "";
var bordPizDoisSelect = "";
var drinkValue = "";
var bordValue = "";

function comprarPizzaDois() {
  let checkWrap = document.getElementById("finalizar-compras");

  let select1 = document.getElementById("select-size");
  let value1 = select1.options[select1.selectedIndex].value;

  let select2 = document.getElementById("select-drink");
  let value2 = select2.options[select2.selectedIndex].value;

  let select3 = document.getElementById("select-bord");
  let value3 = select3.options[select3.selectedIndex].value;

  drinkPizDoisSelect = select2.options[select2.selectedIndex].textContent;
  bordPizDoisSelect = select3.options[select3.selectedIndex].textContent;

  let value4 = value1;

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
  } // pega o valor da bebida e colocando em bordValue

  if (value4 === "p") {
    if (
      value3 === "cheddar" ||
      value3 === "cream" ||
      value3 === "catupiry" ||
      value3 === "mussarela"
    ) {
      bordValue = borderCCCMPequena;
    } else if (value3 === "choco") {
      bordValue = borderChocolatePequena;
    } else if (value3 === "goiaba" || value3 === "caracol") {
      bordValue = borderGCCLPequena;
    } else if (
      value3 === "paozinhopre" ||
      value3 === "paozinhocal" ||
      value3 === "paozinhofra"
    ) {
      alert(
        "Desculpe, as bordas de Pãozinho só podem ser pedidas com uma pizza tamanho G. Por favor, selecione uma borda diferente ou uma pizza maior.",
      );

      checkWrap.innerHTML = "";

      bordValue = "";
    } else if (value3 === "coxinha") {
      alert(
        "Desculpe, as bordas de Coxinha só podem ser pedidas com uma pizza tamanho G. Por favor, selecione uma borda diferente ou uma pizza maior.",
      );

      checkWrap.innerHTML = "";

      bordValue = "";
    }
  } else if (value4 === "g") {
    if (
      value3 === "cheddar" ||
      value3 === "cream" ||
      value3 === "catupiry" ||
      value3 === "mussarela"
    ) {
      bordValue = borderCCCMGrande;
    } else if (value3 === "choco") {
      bordValue = borderChocolateGrande;
    } else if (value3 === "goiaba" || value3 === "caracol") {
      bordValue = borderGCCLGrande;
    } else if (
      value3 === "paozinhopre" ||
      value3 === "paozinhocal" ||
      value3 === "paozinhofra"
    ) {
      bordValue = borderPaozinho;
    } else if (value3 === "coxinha") {
      bordValue = borderCoxinhaG;
    }
  } // pegando o valor das bordas e colocando em bordValue

  if (value2 === "none" && value3 === "none") {
    checkWrap.innerHTML = `
        <h2>Selecione o método de pagamento:</h2>
        <p>Valor total é de R$${result.toFixed(2).replace(".", ",")}.</p>
        <p>
        <select class="selects" onchange='selectPag(this.value)' name="pagsel" id="select-pague">
            <option value="selecione">Selecione</option>
            <option value="card">Cartão</option>
            <option value="dinheiro">Dinheiro</option>
            <option value="pix">Pix</option>
        </select>
        </p>
        <div id='pagamento'></div>
        `;
  } else if (value3 === "none") {
    let finalValue = result + drinkValue;
    checkWrap.innerHTML = `
        <h2>Selecione o método de pagamento:</h2>
        <p>Valor total é de R$${finalValue.toFixed(2).replace(".", ",")}.</p>
        <p>
        <select class="selects" onchange='selectPag(this.value)' name="pagsel" id="select-pague">
        <option value="selecione">Selecione</option>
            <option value="card">Cartão</option>
            <option value="dinheiro">Dinheiro</option>
            <option value="pix">Pix</option>
        </select>
        </p> 
        <div id='pagamento'></div>
        `;
  } else if (value2 === "none") {
    let finalValue = result + bordValue;
    checkWrap.innerHTML = `
        <h2>Selecione o método de pagamento:</h2>
        <p>Valor total é de R$${finalValue.toFixed(2).replace(".", ",")}.</p>
        <p>
        <select class="selects" onchange='selectPag(this.value)' name="pagsel" id="select-pague">
        <option value="selecione">Selecione</option>
            <option value="card">Cartão</option>
            <option value="dinheiro">Dinheiro</option>
            <option value="pix">Pix</option>
        </select>
        </p>
        <div id='pagamento'></div>
        `;
  } else {
    let finalValue = result + bordValue + drinkValue;
    checkWrap.innerHTML = `
        <h2>Selecione o método de pagamento:</h2>
        <p>Valor total é de R$${finalValue.toFixed(2).replace(".", ",")}.</p>
        <p>
        <select class="selects" onchange='selectPag(this.value)' name="pagsel" id="select-pague">
            <option value="selecione">Selecione</option>
            <option value="card">Cartão</option>
            <option value="dinheiro">Dinheiro</option>
            <option value="pix">Pix</option>
        </select>
        </p>
        <div id='pagamento'></div>
        `;
  }
}

function selectPag(valor) {
  let select2 = document.getElementById("select-drink");
  let value2 = select2.options[select2.selectedIndex].value;

  let select3 = document.getElementById("select-bord");
  let value3 = select3.options[select3.selectedIndex].value;

  let pagamento = document.getElementById("pagamento");

  if (valor === "selecione") {
    pagamento.innerHTML = "";
  } else if (valor === "card") {
    pagamento.innerHTML = `
      <h2>Selecione</h2>
      <input class="search" onclick="creditoD()" type="button" value="Crédito"> ou <input class="search" onclick="debitoD()" type="button" value="Débito">
      <div id='pag'></div>
      `;
  } else if (valor === "dinheiro") {
    pagamento.innerHTML = `
        <p>Você deseja troco para que quantia?</p>
        R$ <input type="number" min='0' class='quantia-dinheiro' name="quant" id="quantDinheiro"> <input type="button" id='compr' onclick="finalizarPizzaDois()" class="search" value="Continuar">
        <div id='pag'></div>
        `;
  } else if (valor === "pix") {
    if (value2 === "none" && value3 === "none") {
      pagamento.innerHTML = `
            <br>
            <h3>Essa é a nossa chave Pix: 99999999999 (CPF); Banco Santander, Chili Peppers.</h3>
            <p>Após fazer o Pix, tire um print do comprovante e envie ao terminar a compra pelo WhatsApp.</p>
            <br>
            <h2>Deseja finalizar o  pedido?</h2>
            <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%202%20sabores,%20metade%20${metade01}%20e%20metade%20${metade02},%20tamanho%20${sizePizzaDois},%20sem%20borda%20e%20sem%20bebida.%20Pagamento%20em%20Pix." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
            `;
    } else if (value3 === "none") {
      pagamento.innerHTML = `
            <br>
            <h3>Essa é a nossa chave Pix: 99999999999 (CPF); Banco Santander, Chili Peppers.</h3>
            <p>Após fazer o Pix, tire um print do comprovante e envie ao terminar a compra pelo WhatsApp.</p>
            <br>
            <h2>Deseja finalizar o  pedido?</h2>
            <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%202%20sabores,%20metade%20${metade01}%20e%20metade%20${metade02},%20tamanho%20${sizePizzaDois},%20com%20um(a)%20${drinkPizDoisSelect}%20e%20sem%20borda.%20Pagamento%20em%20Pix." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
            `;
    } else if (value2 === "none") {
      pagamento.innerHTML = `
            <br>
            <h3>Essa é a nossa chave Pix: 999999999999 (CPF); Banco Santander, Chili Peppers.</h3>
            <p>Após fazer o Pix, tire um print do comprovante e envie ao terminar a compra pelo WhatsApp.</p>
            <br>
            <h2>Deseja finalizar o  pedido?</h2>
            <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%202%20sabores,%20metade%20${metade01}%20e%20metade%20${metade02},%20tamanho%20${sizePizzaDois},%20com%20borda%20de%20${bordPizDoisSelect}%20e%20sem%20bebida.%20Pagamento%20em%20Pix." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
            `;
    } else {
      pagamento.innerHTML = `
            <br>
            <h3>Essa é a nossa chave Pix: 999999999999 (CPF); Banco Santander, Chili Peppers.</h3>
            <p>Após fazer o Pix, tire um print do comprovante e envie ao terminar a compra pelo WhatsApp.</p>
            <br>
            <h2>Deseja finalizar o  pedido?</h2>
            <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%202%20sabores,%20metade%20${metade01}%20e%20metade%20${metade02},%20tamanho%20${sizePizzaDois},%20com%20borda%20de%20${bordPizDoisSelect}%20e%20com%20um(a)%20${drinkPizDoisSelect}.%20Pagamento%20em%20Pix." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
            `;
    }
  }
}

function creditoD() {
  let select2 = document.getElementById("select-drink");
  let value2 = select2.options[select2.selectedIndex].value;

  let select3 = document.getElementById("select-bord");
  let value3 = select3.options[select3.selectedIndex].value;

  let pag = document.getElementById("pag");

  if (value2 === "none" && value3 === "none") {
    let finalValue = result + 2;
    pag.innerHTML = `
    No crédito temos uma taxa da maquininha, onde R$2,00 são acrescentados ao valor total da compra, logo o valor total passa a ser ${finalValue
      .toFixed(2)
      .replace(".", ",")}.
    <h2>Deseja finalizar o  pedido?</h2>
    <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%202%20sabores,%20metade%20${metade01}%20e%20metade%20${metade02},%20tamanho%20${sizePizzaDois},%20sem%20borda%20e%20sem%20bebida.%20Pagamento%20em%20cartão%20de%20crédito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
    `;
  } else if (value3 === "none") {
    let finalValue = result + drinkValue + 2;
    pag.innerHTML = `
    No crédito temos uma taxa da maquininha, onde R$2,00 são acrescentados ao valor total da compra, logo o valor total passa a ser ${finalValue
      .toFixed(2)
      .replace(".", ",")}.
    <h2>Deseja finalizar o  pedido?</h2>
    <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%202%20sabores,%20metade%20${metade01}%20e%20metade%20${metade02},%20tamanho%20${sizePizzaDois},%20com%20um(a)%20${drinkPizDoisSelect}%20e%20sem%20borda.%20Pagamento%20em%20cartão%20de%20crédito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
    `;
  } else if (value2 === "none") {
    let finalValue = result + bordValue + 2;
    pag.innerHTML = `
    No crédito temos uma taxa da maquininha, onde R$2,00 são acrescentados ao valor total da compra, logo o valor total passa a ser ${finalValue
      .toFixed(2)
      .replace(".", ",")}.
    <h2>Deseja finalizar o  pedido?</h2>
    <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%202%20sabores,%20metade%20${metade01}%20e%20metade%20${metade02},%20tamanho%20${sizePizzaDois},%20com%20borda%20de%20${bordPizDoisSelect}%20e%20sem%20bebida.%20Pagamento%20em%20cartão%20de%20crédito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
    `;
  } else {
    let finalValue = result + bordValue + drinkValue + 2;
    pag.innerHTML = `
    No crédito temos uma taxa da maquininha, onde R$2,00 são acrescentados ao valor total da compra, logo o valor total passa a ser ${finalValue
      .toFixed(2)
      .replace(".", ",")}.
    <h2>Deseja finalizar o  pedido?</h2>
    <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%202%20sabores,%20metade%20${metade01}%20e%20metade%20${metade02},%20tamanho%20${sizePizzaDois},%20com%20borda%20de%20${bordPizDoisSelect}%20e%20com%20um(a)%20${drinkPizDoisSelect}.%20Pagamento%20em%20cartão%20de%20crédito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
    `;
  }
}

function debitoD() {
  let select2 = document.getElementById("select-drink");
  let value2 = select2.options[select2.selectedIndex].value;

  let select3 = document.getElementById("select-bord");
  let value3 = select3.options[select3.selectedIndex].value;

  let pag = document.getElementById("pag");

  if (value2 === "none" && value3 === "none") {
    pag.innerHTML = `
                <h2>Deseja finalizar o  pedido?</h2>
                <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%202%20sabores,%20metade%20${metade01}%20e%20metade%20${metade02},%20tamanho%20${sizePizzaDois},%20sem%20borda%20e%20sem%20bebida.%20Pagamento%20em%20cartão%20de%20débito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
                `;
  } else if (value3 === "none") {
    pag.innerHTML = `
                <h2>Deseja finalizar o  pedido?</h2>
                <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%202%20sabores,%20metade%20${metade01}%20e%20metade%20${metade02},%20tamanho%20${sizePizzaDois},%20com%20um(a)%20${drinkPizDoisSelect}%20e%20sem%20borda.%20Pagamento%20em%20cartão%20de%20débito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
                `;
  } else if (value2 === "none") {
    pag.innerHTML = `
                <h2>Deseja finalizar o  pedido?</h2>
                <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%202%20sabores,%20metade%20${metade01}%20e%20metade%20${metade02},%20tamanho%20${sizePizzaDois},%20com%20borda%20de%20${bordPizDoisSelect}%20e%20sem%20bebida.%20Pagamento%20em%20cartão%20de%20débito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
                `;
  } else {
    pag.innerHTML = `
                <h2>Deseja finalizar o  pedido?</h2>
                <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%202%20sabores,%20metade%20${metade01}%20e%20metade%20${metade02},%20tamanho%20${sizePizzaDois},%20com%20borda%20de%20${bordPizDoisSelect}%20e%20com%20um(a)%20${drinkPizDoisSelect}.%20Pagamento%20em%20cartão%20de%20débito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
                `;
  }
}

function finalizarPizzaDois() {
  let trocos = document.getElementById("quantDinheiro").value;

  let pag = document.getElementById("pag");

  let select2 = document.getElementById("select-drink");
  let value2 = select2.options[select2.selectedIndex].value;

  let select3 = document.getElementById("select-bord");
  let value3 = select3.options[select3.selectedIndex].value;

  if (trocos === "") {
    alert("Insira o valor da quantia para troco.");
  } else {
    if (value2 === "none" && value3 === "none") {
      pag.innerHTML = `
                <h2>Deseja finalizar o  pedido?</h2>
                <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%202%20sabores,%20metade%20${metade01}%20e%20metade%20${metade02},%20tamanho%20${sizePizzaDois},%20sem%20borda%20e%20sem%20bebida.%20Pagamento%20em%20dinheiro,%20troco%20para%20R$${trocos},00." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
                `;
    } else if (value3 === "none") {
      pag.innerHTML = `
                <h2>Deseja finalizar o  pedido?</h2>
                <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%202%20sabores,%20metade%20${metade01}%20e%20metade%20${metade02},%20tamanho%20${sizePizzaDois},%20com%20um(a)%20${drinkPizDoisSelect}%20e%20sem%20borda.%20Pagamento%20em%20dinheiro,%20troco%20para%20R$${trocos},00." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
                `;
    } else if (value2 === "none") {
      pag.innerHTML = `
                <h2>Deseja finalizar o  pedido?</h2>
                <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%202%20sabores,%20metade%20${metade01}%20e%20metade%20${metade02},%20tamanho%20${sizePizzaDois},%20com%20borda%20de%20${bordPizDoisSelect}%20e%20sem%20bebida.%20Pagamento%20em%20dinheiro,%20troco%20para%20R$${trocos},00." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
                `;
    } else {
      pag.innerHTML = `
                <h2>Deseja finalizar o  pedido?</h2>
                <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%202%20sabores,%20metade%20${metade01}%20e%20metade%20${metade02},%20tamanho%20${sizePizzaDois},%20com%20borda%20de%20${bordPizDoisSelect}%20e%20com%20um(a)%20${drinkPizDoisSelect}.%20Pagamento%20em%20dinheiro,%20troco%20para%20R$${trocos},00." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
                `;
    }
  }
}

// Final do monte sua pizza com dois sabores.

// Início do monte sua pizza com três sabores.

var metade03 = "";
var metade04 = "";
var metade05 = "";
var preco03 = "";
var preco04 = "";
var preco05 = "";
var sizePizzaTres = "";
var resultado = "";

function pizzaTres() {
  let cardWrapper = document.getElementById("card-wrapper");

  let clearn = document.getElementById("clear");

  let select1 = document.querySelector("#sabor-um");
  let value1 = select1.options[select1.selectedIndex].value;

  let select2 = document.querySelector("#sabor-dois");
  let value2 = select2.options[select2.selectedIndex].value;

  let select4 = document.querySelector("#sabor-tres");
  let value4 = select4.options[select4.selectedIndex].value;

  let select3 = document.getElementById("select-size");
  let value3 = select3.options[select3.selectedIndex].value;

  metade03 = select1.options[select1.selectedIndex].textContent;
  metade04 = select2.options[select2.selectedIndex].textContent;
  metade05 = select4.options[select4.selectedIndex].textContent;

  if (value1 === "none" && value2 === "none" && value4 === "none") {
    alert("Por favor, selecione os sabores da pizza.");
  } else if (value1 === "none" || value2 === "none" || value4 === "none") {
    alert("Por favor, selecione o sabor que falta.");
  } else if (value1 === value2 && value2 === value4) {
    alert("Por favor, selecione três sabores diferentes.");
    cardWrapper.innerHTML = "";
  } else if (value1 === value2) {
    alert("Por favor, selecione três sabores diferentes.");
    cardWrapper.innerHTML = "";
  } else if (value1 === value4) {
    alert("Por favor, selecione três sabores diferentes.");
    cardWrapper.innerHTML = "";
  } else if (value2 === value4) {
    alert("Por favor, selecione três sabores diferentes.");
    cardWrapper.innerHTML = "";
  } else {
    clearn.innerHTML = `<hr>`;
    // Início para pegar o valor da pizza.
    let preco003 = select1.options[select1.selectedIndex];
    let preco004 = select2.options[select2.selectedIndex];
    let preco005 = select4.options[select4.selectedIndex];

    if (value3 === "p") {
      sizePizzaTres = "P";
      preco03 = parseFloat(preco003.getAttribute("precop"));
      preco04 = parseFloat(preco004.getAttribute("precop"));
      preco05 = parseFloat(preco005.getAttribute("precop"));
    } else if (value3 === "g") {
      sizePizzaTres = "G";
      preco03 = parseFloat(preco003.getAttribute("precog"));
      preco04 = parseFloat(preco004.getAttribute("precog"));
      preco05 = parseFloat(preco005.getAttribute("precog"));
    }

    if (preco03 > preco04 && preco03 > preco05) {
      resultado = preco03;
    } else if (preco04 > preco03 && preco04 > preco05) {
      resultado = preco04;
    } else if (preco05 > preco03 && preco05 > preco04) {
      resultado = preco05;
    } else if (preco03 === preco04 && preco05 < preco04) {
      resultado = preco03;
    } else if (preco03 === preco05 && preco04 < preco05) {
      resultado = preco03;
    } else if (preco04 === preco05 && preco03 < preco05) {
      resultado = preco04;
    } else if (preco04 === preco05 && preco05 === preco03) {
      resultado = preco05;
    }
    // Final do para pegar o valor da pizza.

    cardWrapper.innerHTML = `
      <div id="cardItem" class="card-item">
          <img class="pizza-image" src="" alt="pizzas">
          <div class="card-content">
              <h3>Seu Pedido:</h3>
              <p id='ingredientes'>
              Pizza de 3 sabores, ${metade03}, ${metade04} e ${metade05}, tamanho ${sizePizzaTres}.
              </p>
              <br>
              <p>
                  Preço: R$ ${resultado
                    .toFixed(2)
                    .replace(
                      ".",
                      ",",
                    )} (O preço é dado em cima da pizza de maior valor selecionada)
              </p> 
          </div>
      </div>
      <div id="espaço"></div>
  `;

    let checkWrappe = document.getElementById("card-wrappe");

    checkWrappe.innerHTML = `
  <div class="border-select">
      <div id='bebida'>
      <h2>Selecione sua bebida para acompanhar:</h2>
          <p>
          <select class="selects" name="drinksel" id="select-drink">
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
          </select>
      </p>
      </div>
      <h2>Selecione sua borda para acompanhar:</h2>
      <p>
      <select class="selects" name="bordersel" id="select-bord">
        <option value="none">Nenhuma</option>
        <option value="choco">Chocolate</option>
        <option value="cheddar">Cheddar</option>
        <option value="cream">Cream Cheese</option>
        <option value="catupiry">Catupiry</option>
        <option value="mussarela">Mussarela</option>
        <option value="paozinhopre">Pãozinho: Presunto/Mussarela</option>
        <option value="paozinhocal">Pãozinho: Calabresa/Catupiry</option>
        <option value="paozinhofra">Pãozinho: Frango/Catupiry</option>
        <option value="coxinha">Coxinha</option>
      </select> <input type="button" id='compr' onclick="comprarPizzaTres()" class="search" value="Atualizar">
      </p>
      <div id='finalizar-compras'></div>
  </div>
  `;
  }
}

var drinkPizTresSelect = "";
var bordPizTresSelect = "";
var drinkValueT = "";
var bordValueT = "";

function comprarPizzaTres() {
  let checkWrap = document.getElementById("finalizar-compras");

  let select1 = document.getElementById("select-size");
  let value1 = select1.options[select1.selectedIndex].value;

  let select2 = document.getElementById("select-drink");
  let value2 = select2.options[select2.selectedIndex].value;

  let select3 = document.getElementById("select-bord");
  let value3 = select3.options[select3.selectedIndex].value;

  drinkPizTresSelect = select2.options[select2.selectedIndex].textContent;
  bordPizTresSelect = select3.options[select3.selectedIndex].textContent;

  let value4 = value1;

  if (
    value2 === "gualat" ||
    value2 === "coclat" ||
    value2 === "sprlat" ||
    value2 === "fanlat"
  ) {
    drinkValueT = bebidaLata;
  } else if (value2 === "gua1l" || value2 === "spr1l" || value2 === "fan1l") {
    drinkValue = bebida1L;
  } else if (value2 === "gua2l" || value2 === "spr2l" || value2 === "fan2l") {
    drinkValueT = bebida2L;
  } else if (value2 === "coc1l") {
    drinkValueT = bebidaCoca1L;
  } else if (value2 === "coc2l") {
    drinkValueT = bebidaCoca2L;
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
    drinkValueT = bebidaSucoSem;
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
    drinkValueT = bebidaSucoCom;
  } // pega o valor da bebida e colocando em bordValue

  if (value4 === "p") {
    if (
      value3 === "cheddar" ||
      value3 === "cream" ||
      value3 === "catupiry" ||
      value3 === "mussarela"
    ) {
      bordValueT = borderCCCMPequena;
    } else if (value3 === "choco") {
      bordValueT = borderChocolatePequena;
    } else if (value3 === "goiaba" || value3 === "caracol") {
      bordValueT = borderGCCLPequena;
    } else if (
      value3 === "paozinhopre" ||
      value3 === "paozinhocal" ||
      value3 === "paozinhofra"
    ) {
      alert(
        "Desculpe, as bordas de Pãozinho só podem ser pedidas com uma pizza tamanho G. Por favor, selecione uma borda diferente ou uma pizza maior.",
      );

      checkWrap.innerHTML = "";

      bordValueT = "";
    } else if (value3 === "coxinha") {
      alert(
        "Desculpe, as bordas de Coxinha só podem ser pedidas com uma pizza tamanho G. Por favor, selecione uma borda diferente ou uma pizza maior.",
      );

      checkWrap.innerHTML = "";

      bordValueT = "";
    }
  } else if (value4 === "g") {
    if (
      value3 === "cheddar" ||
      value3 === "cream" ||
      value3 === "catupiry" ||
      value3 === "mussarela"
    ) {
      bordValueT = borderCCCMGrande;
    } else if (value3 === "choco") {
      bordValueT = borderChocolateGrande;
    } else if (value3 === "goiaba" || value3 === "caracol") {
      bordValueT = borderGCCLGrande;
    } else if (
      value3 === "paozinhopre" ||
      value3 === "paozinhocal" ||
      value3 === "paozinhofra"
    ) {
      bordValueT = borderPaozinho;
    } else if (value3 === "coxinha") {
      bordValueT = borderCoxinhaG;
    }
  } // pegando o valor das bordas e colocando em bordValue

  if (value2 === "none" && value3 === "none") {
    checkWrap.innerHTML = `
        <h2>Selecione o método de pagamento:</h2>
        <p>Valor total é de R$${resultado.toFixed(2).replace(".", ",")}.</p>
        <p>
        <select class="selects" onchange='selectPagT(this.value)' name="pagsel" id="select-pague">
            <option value="selecione">Selecione</option>
            <option value="card">Cartão</option>
            <option value="dinheiro">Dinheiro</option>
            <option value="pix">Pix</option>
        </select>
        </p>
        <div id='pagamento'></div>
        `;
  } else if (value3 === "none") {
    let finalValue = resultado + drinkValueT;
    checkWrap.innerHTML = `
        <h2>Selecione o método de pagamento:</h2>
        <p>Valor total é de R$${finalValue.toFixed(2).replace(".", ",")}.</p>
        <p>
        <select class="selects" onchange='selectPagT(this.value)' name="pagsel" id="select-pague">
        <option value="selecione">Selecione</option>
            <option value="card">Cartão</option>
            <option value="dinheiro">Dinheiro</option>
            <option value="pix">Pix</option>
        </select>
        </p> 
        <div id='pagamento'></div>
        `;
  } else if (value2 === "none") {
    let finalValue = resultado + bordValueT;
    checkWrap.innerHTML = `
        <h2>Selecione o método de pagamento:</h2>
        <p>Valor total é de R$${finalValue.toFixed(2).replace(".", ",")}.</p>
        <p>
        <select class="selects" onchange='selectPagT(this.value)' name="pagsel" id="select-pague">
        <option value="selecione">Selecione</option>
            <option value="card">Cartão</option>
            <option value="dinheiro">Dinheiro</option>
            <option value="pix">Pix</option>
        </select>
        </p>
        <div id='pagamento'></div>
        `;
  } else {
    let finalValue = resultado + bordValueT + drinkValueT;
    checkWrap.innerHTML = `
        <h2>Selecione o método de pagamento:</h2>
        <p>Valor total é de R$${finalValue.toFixed(2).replace(".", ",")}.</p>
        <p>
        <select class="selects" onchange='selectPagT(this.value)' name="pagsel" id="select-pague">
            <option value="selecione">Selecione</option>
            <option value="card">Cartão</option>
            <option value="dinheiro">Dinheiro</option>
            <option value="pix">Pix</option>
        </select>
        </p>
        <div id='pagamento'></div>
        `;
  }
}

function selectPagT(valor) {
  let select2 = document.getElementById("select-drink");
  let value2 = select2.options[select2.selectedIndex].value;

  let select3 = document.getElementById("select-bord");
  let value3 = select3.options[select3.selectedIndex].value;

  let pagamento = document.getElementById("pagamento");

  if (valor === "selecione") {
    pagamento.innerHTML = "";
  } else if (valor === "card") {
    pagamento.innerHTML = `
    <h2>Selecione</h2>
    <input class="search" onclick="creditoT()" type="button" value="Crédito"> ou <input class="search" onclick="debitoT()" type="button" value="Débito">
    <div id='pag'></div>
    `;
  } else if (valor === "dinheiro") {
    pagamento.innerHTML = `
      <p>Você deseja troco para que quantia?</p>
      R$ <input type="number" min='0' class='quantia-dinheiro' name="quant" id="quantDinheiro"> <input type="button" id='compr' onclick="finalizarPizzaTres()" class="search" value="Continuar">
      <div id='pag'></div>
      `;
  } else if (valor === "pix") {
    if (value2 === "none" && value3 === "none") {
      pagamento.innerHTML = `
          <br>
          <h3>Essa é a nossa chave Pix: 999999999999 (CPF); Banco Santander, Chili Peppers.</h3>
          <p>Após fazer o Pix, tire um print do comprovante e envie ao terminar a compra pelo WhatsApp.</p>
          <br>
          <h2>Deseja finalizar o  pedido?</h2>
          <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%203%20sabores,%20${metade03},%20${metade04}%20e%20${metade05},%20tamanho%20${sizePizzaTres},%20sem%20borda%20e%20sem%20bebida.%20Pagamento%20em%20Pix." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
          `;
    } else if (value3 === "none") {
      pagamento.innerHTML = `
          <br>
          <h3>Essa é a nossa chave Pix: 99999999999 (CPF); Banco Santander, Chili Peppers.</h3>
          <p>Após fazer o Pix, tire um print do comprovante e envie ao terminar a compra pelo WhatsApp.</p>
          <br>
          <h2>Deseja finalizar o  pedido?</h2>
          <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%203%20sabores,%20${metade03},%20${metade04}%20e%20${metade05},%20tamanho%20${sizePizzaTres},%20com%20um(a)%20${drinkPizTresSelect}%20e%20sem%20borda.%20Pagamento%20em%20Pix." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
          `;
    } else if (value2 === "none") {
      pagamento.innerHTML = `
          <br>
          <h3>Essa é a nossa chave Pix: 9999999999999 (CPF); Banco Santander, Chili Peppers.</h3>
          <p>Após fazer o Pix, tire um print do comprovante e envie ao terminar a compra pelo WhatsApp.</p>
          <br>
          <h2>Deseja finalizar o  pedido?</h2>
          <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%203%20sabores,%20${metade03},%20${metade04}%20e%20${metade05},%20tamanho%20${sizePizzaTres},%20com%20borda%20de%20${bordPizTresSelect}%20e%20sem%20bebida.%20Pagamento%20em%20Pix." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
          `;
    } else {
      pagamento.innerHTML = `
          <br>
          <h3>Essa é a nossa chave Pix: 999999999999 (CPF); Banco Santander, Chili Peppers.</h3>
          <p>Após fazer o Pix, tire um print do comprovante e envie ao terminar a compra pelo WhatsApp.</p>
          <br>
          <h2>Deseja finalizar o  pedido?</h2>
          <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%203%20sabores,%20${metade03},%20${metade04}%20e%20${metade05},%20tamanho%20${sizePizzaDois},%20com%20borda%20de%20${bordPizTresSelect}%20e%20com%20um(a)%20${drinkPizTresSelect}.%20Pagamento%20em%20Pix." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
          `;
    }
  }
}

function creditoT() {
  let select2 = document.getElementById("select-drink");
  let value2 = select2.options[select2.selectedIndex].value;

  let select3 = document.getElementById("select-bord");
  let value3 = select3.options[select3.selectedIndex].value;

  let pag = document.getElementById("pag");

  if (value2 === "none" && value3 === "none") {
    let finalValue = resultado + 2;
    pag.innerHTML = `
    No crédito temos uma taxa da maquininha, onde R$2,00 são acrescentados ao valor total da compra, logo o valor total passa a ser ${finalValue
      .toFixed(2)
      .replace(".", ",")}.
    <h2>Deseja finalizar o  pedido?</h2>
    <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%203%20sabores,%20${metade03},%20${metade04}%20e%20${metade05},%20tamanho%20${sizePizzaTres},%20sem%20borda%20e%20sem%20bebida.%20Pagamento%20em%20cartão%20de%20crédito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
    `;
  } else if (value3 === "none") {
    let finalValue = resultado + drinkValueT + 2;
    pag.innerHTML = `
    No crédito temos uma taxa da maquininha, onde R$2,00 são acrescentados ao valor total da compra, logo o valor total passa a ser ${finalValue
      .toFixed(2)
      .replace(".", ",")}.
    <h2>Deseja finalizar o  pedido?</h2>
    <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%203%20sabores,%20${metade03},%20${metade04}%20e%20${metade05},%20tamanho%20${sizePizzaTres},%20com%20um(a)%20${drinkPizTresSelect}%20e%20sem%20borda.%20Pagamento%20em%20cartão%20de%20crédito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
    `;
  } else if (value2 === "none") {
    let finalValue = resultado + bordValueT + 2;
    pag.innerHTML = `
    No crédito temos uma taxa da maquininha, onde R$2,00 são acrescentados ao valor total da compra, logo o valor total passa a ser ${finalValue
      .toFixed(2)
      .replace(".", ",")}.
    <h2>Deseja finalizar o  pedido?</h2>
    <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%203%20sabores,%20${metade03},%20${metade04}%20e%20${metade05},%20tamanho%20${sizePizzaTres},%20com%20borda%20de%20${bordPizTresSelect}%20e%20sem%20bebida.%20Pagamento%20em%20cartão%20de%20crédito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
    `;
  } else {
    let finalValue = resultado + bordValueT + drinkValueT + 2;
    pag.innerHTML = `
    No crédito temos uma taxa da maquininha, onde R$2,00 são acrescentados ao valor total da compra, logo o valor total passa a ser ${finalValue
      .toFixed(2)
      .replace(".", ",")}.
    <h2>Deseja finalizar o  pedido?</h2>
    <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%203%20sabores,%20${metade03},%20${metade04}%20e%20${metade05},%20tamanho%20${sizePizzaTres},%20com%20borda%20de%20${bordPizTresSelect}%20e%20com%20um(a)%20${drinkPizTresSelect}.%20Pagamento%20em%20cartão%20de%20crédito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
    `;
  }
}

function debitoT() {
  let select2 = document.getElementById("select-drink");
  let value2 = select2.options[select2.selectedIndex].value;

  let select3 = document.getElementById("select-bord");
  let value3 = select3.options[select3.selectedIndex].value;

  let pag = document.getElementById("pag");

  if (value2 === "none" && value3 === "none") {
    pag.innerHTML = `
    <h2>Deseja finalizar o  pedido?</h2>
    <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%203%20sabores,%20${metade03},%20${metade04}%20e%20${metade05},%20tamanho%20${sizePizzaTres},%20sem%20borda%20e%20sem%20bebida.%20Pagamento%20em%20cartão%20de%20débito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
    `;
  } else if (value3 === "none") {
    pag.innerHTML = `
    <h2>Deseja finalizar o  pedido?</h2>
    <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%203%20sabores,%20${metade03},%20${metade04}%20e%20${metade05},%20tamanho%20${sizePizzaTres},%20com%20um(a)%20${drinkPizTresSelect}%20e%20sem%20borda.%20Pagamento%20em%20cartão%20de%20débito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
    `;
  } else if (value2 === "none") {
    pag.innerHTML = `
    <h2>Deseja finalizar o  pedido?</h2>
    <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%203%20sabores,%20${metade03},%20${metade04}%20e%20${metade05},%20tamanho%20${sizePizzaTres},%20com%20borda%20de%20${bordPizTresSelect}%20e%20sem%20bebida.%20Pagamento%20em%20cartão%20de%20débito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
    `;
  } else {
    pag.innerHTML = `
    <h2>Deseja finalizar o  pedido?</h2>
    <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%203%20sabores,%20${metade03},%20${metade04}%20e%20${metade05},%20tamanho%20${sizePizzaTres},%20com%20borda%20de%20${bordPizTresSelect}%20e%20com%20um(a)%20${drinkPizTresSelect}.%20Pagamento%20em%20cartão%20de%20débito." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
    `;
  }
}

function finalizarPizzaTres() {
  let trocos = document.getElementById("quantDinheiro").value;

  let pag = document.getElementById("pag");

  let select2 = document.getElementById("select-drink");
  let value2 = select2.options[select2.selectedIndex].value;

  let select3 = document.getElementById("select-bord");
  let value3 = select3.options[select3.selectedIndex].value;

  if (trocos === "") {
    alert("Insira o valor da quantia para troco.");
  } else {
    if (value2 === "none" && value3 === "none") {
      pag.innerHTML = `
              <h2>Deseja finalizar o  pedido?</h2>
              <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%203%20sabores,%20${metade03},%20${metade04}%20e%20${metade05},%20tamanho%20${sizePizzaTres},%20sem%20borda%20e%20sem%20bebida.%20Pagamento%20em%20dinheiro,%20troco%20para%20R$${trocos},00." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
              `;
    } else if (value3 === "none") {
      pag.innerHTML = `
              <h2>Deseja finalizar o  pedido?</h2>
              <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%203%20sabores,%20${metade03},%20${metade04}%20e%20${metade05},%20tamanho%20${sizePizzaTres},%20com%20um(a)%20${drinkPizTresSelect}%20e%20sem%20borda.%20Pagamento%20em%20dinheiro,%20troco%20para%20R$${trocos},00." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
              `;
    } else if (value2 === "none") {
      pag.innerHTML = `
              <h2>Deseja finalizar o  pedido?</h2>
              <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%203%20sabores,%20${metade03},%20${metade04}%20e%20${metade05},%20tamanho%20${sizePizzaTres},%20com%20borda%20de%20${bordPizTresSelect}%20e%20sem%20bebida.%20Pagamento%20em%20dinheiro,%20troco%20para%20R$${trocos},00." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
              `;
    } else {
      pag.innerHTML = `
              <h2>Deseja finalizar o  pedido?</h2>
              <a href="https://api.whatsapp.com/send/?phone=559999999999&text=Pizza%20com%203%20sabores,%20${metade03},%20${metade04}%20e%20${metade05},%20tamanho%20${sizePizzaTres},%20com%20borda%20de%20${bordPizTresSelect}%20e%20com%20um(a)%20${drinkPizTresSelect}.%20Pagamento%20em%20dinheiro,%20troco%20para%20R$${trocos},00." target="_blank"><input type="button" id='compr' class="search" value="Comprar"></a>
              `;
    }
  }
}

// Final do monte sua pizza com três sabores.
