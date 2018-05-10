const RestaurantePage = require('../page-objects/restaurantes.po.js');
const data = require('../data.json');

describe('Suite - Restaurantes', () => {

  const page = new RestaurantePage();
  let d = 0;

  beforeEach(function () {
    page.acessar();

  });


  it('realizar pedido', () => {
/*
    dados = {
      nome: 'Maria da Silva',
      email: 'maria@tste.com',
      emailConfirmacao: 'maria@tste.com',
      endereco: 'rua jose filho',
      numero: 8,
      complemento: 'casa 56'
    } */

    dados = data;

    browser.sleep(1000);

    page.btn_verRestaurante.click();

    browser.sleep(1000);

    page.restaurante01.click();

    browser.sleep(1000);
    page.btn_add1.click();
    browser.sleep(1000);
    page.btn_add2.click();
    page.btn_add3.click();

    browser.sleep(1000);
    page.btn_finalizar.click();

    browser.sleep(1000);

    page.campo_nome.sendKeys(dados.dados.nome);
    page.campo_email.sendKeys(dados.dados.email);
    page.campo_email_confirmacao.sendKeys(dados.dados.emailConfirmacao);
    page.campo_endereco.sendKeys(dados.endereco.endereco);
    page.campo_numero.sendKeys(dados.endereco.numero);
    page.campo_complemento.sendKeys(dados.endereco.complemento);


    page.opcao_pagamento.click();
    browser.sleep(1000);
    page.btn_concluir.click();
    browser.sleep(2000);

    expect(page.msn.getText()).toEqual('Pedido Conluído');

    browser.sleep(3000);

  });

});
