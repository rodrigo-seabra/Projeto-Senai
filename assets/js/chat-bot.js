$(document).ready(function () {
  $(".msg-send-btn").on("click", function (e) {
    let msg = "";
    let date = new Date();
    let perguntas = $("#pergunta").val();
    $("#pergunta").val("");
    let clone = $("#clone").clone();
    clone.attr("id", "");
    clone
      .find(".msg-info-time")
      .text(" " + date.getHours() + ":" + date.getMinutes());
    clone.find(".msg-text").text(perguntas);
    clone.appendTo("#main-chat");
    clone.show();

    perguntas = perguntas.toLowerCase();
    switch (perguntas) {
      case "olá":
      case "oi":
      case "ola":
        msg = "Oi, informe sua pergunta";
        break;
      case "cadastro":
      case "cadastrar":
      case "sign up":
      case "signup":
      case "como se cadastrar":
      case "criar conta":
      case "quero criar um conta":
      case "como criar uma conta":
        msg = "Para você criar uma conta clique aqui";
        break;
      case "bom dia, meu pet precisa ser vacinado":
      case "boa tarde, meu pet precisa ser vacinado":
      case "boa noite, meu pet precisa ser vacinado":
      case "bom dia, o meu cachorro precisa ser vacinado até o dia 30/05":
      case "gostaria de vacinar meu gato":
      case "gostaria de vacinar meu cachorro":
      case "vacina":
      case "ola, meu pet precisa ser vacinado":
      case "como vacinar meu pet":
      case "vacinar pet":
        msg = "Para vacinar seu pet basta agendar um horário clincando no link";
        break;
      case "meu pedido está em atraso":
      case "não estou conseguindo acompanhar o meu pedido":
      case "nao estou conseguindo acompanhar o meu pedido":
      case "não estou conseguindo acompanhar o pedido":
      case "meu pedido esta em atraso":
      case "pedido atrasado":
      case "pedido não entregue":
      case "pedido nao entregue":
        msg = "Por favor informe o número do pedido";
        break;
      case "valor":
      case "preco":
        msg = "Por favor detalhe um pouco mais";
        break;
      case "pedido":
      case "meu pedido":
        msg = "O que houve com o seu pedido?";
        break;
      default:
        msg = "Não entedi o que você disse";
        break;
    }
    let clone2 = $("#msg-esquerda").clone();
    clone2.attr("id", "");
    clone2
      .find(".msg-info-time")
      .text(" " + date.getHours() + ":" + date.getMinutes());
    clone2.find(".msg-text").text(msg);
    clone2.appendTo("#main-chat");

    e.preventDefault();
  });
  $(".janela-chat").on("click", function () {
    $(".chat").hide();
    $(".bottop").show();
    $(".close").show();
  });
  $("#fechar").on("click", function () {
    $(".chat").show();
    $(".bottop").hide();
    $(".close").hide();
    location.reload();
  });
});
