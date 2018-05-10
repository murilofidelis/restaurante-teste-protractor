class RestaurantePage {
  constructor() {
    this.btn_verRestaurante = element(by.linkText('Ver Restaurantes'));
    //this.restaurante01 = $('.place-info-box .place-info-box-text');
    //this.restaurante01 = element(by.css('[ng-reflect-obj-restaurant="[object Object]"]'));
    //this.restaurante01 = element.all(by.css('.place-info-box .place-info-box-text')).first();
    this.restaurante01 = element.all(by.css('.place-info-box .place-info-box-text')).get(2);

    //  this.btn_add2 = element(by.css('.menu-item-info-box .menu-item-info-box-content:nth-child(2) i'));
    this.btn_add1 = element.all(by.css('.fa-plus-circle')).get(0);
    this.btn_add2 = element.all(by.css('.fa-plus-circle')).get(1);
    this.btn_add3 = element.all(by.css('.fa-plus-circle')).get(2);

    this.btn_finalizar = element(by.linkText('Fechar Pedido'));

    this.campo_nome = element(by.name('nome'));
    this.campo_email = element(by.name('email'));
    this.campo_email_confirmacao = element(by.name('emailConfirmation'));

    this.campo_endereco = element(by.id('endereco'));
    this.campo_numero = element(by.id('numero'));
    this.campo_complemento = element(by.id('complemento'));
    //this.opcao_pagamento = element(by.css('[ng-reflect-name="opcaoPagamentoSelecionada"]'));
    //this.opcao_pagamento = element.all(by.css('.form-group')).get(1);
    this.opcao_pagamento = element.all(by.css('.iradio_flat-red')).get(1);
    this.btn_concluir = element(by.buttonText('Concluir Pedido'));
    this.msn = element(by.css('h2'));
  }

  acessar() {
    browser.get('#/');
  }
}
module.exports = RestaurantePage;
