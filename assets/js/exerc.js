function InformeMes()
{
    let mes = document.getElementById("mes").value;
    mes = mes.toLowerCase();

    switch(mes)
    {
        case "um":
        case "1":
            document.getElementById("RespostaMes").innerHTML = "Janeiro";
            break;

        case "dois":
        case "2":
            document.getElementById("RespostaMes").innerHTML = "Fevereiro";
            break;

        case "três":
        case "3":
            document.getElementById("RespostaMes").innerHTML = "Março";
            break;

        case "quatro":
        case "4":
            document.getElementById("RespostaMes").innerHTML = "Abril";
            break;

        case "cinco":
        case "5":
            document.getElementById("RespostaMes").innerHTML = "Maio";
            break;

        case "seis":
        case "6":
            document.getElementById("RespostaMes").innerHTML = "Junho";
            break;
    
        case "sete":
        case "7":
            document.getElementById("RespostaMes").innerHTML = "Julho";
            break;

        case "oito":
        case "8":
            document.getElementById("RespostaMes").innerHTML = "Agosto";
            break;
            
        case "Nove":
        case "9":
            document.getElementById("RespostaMes").innerHTML = "Setembro";
            break;
    
        case "Dez":
        case "10":
            document.getElementById("RespostaMes").innerHTML = "Outubro";
            break;    

        case "Onze":
        case "11":
            document.getElementById("RespostaMes").innerHTML = "Novembro";
            break;   
        
        case "Doze":
        case "12":
            document.getElementById("RespostaMes").innerHTML = "Dezembro";
            break;   

        default:
            document.getElementById("RespostaMes").innerHTML = "Não existe este mês";
    }
}

function InformeEstacao()
{
    let estacao = document.getElementById("estacao").value;
    estacao = estacao.toLowerCase();

    switch(estacao)
    {
        case "janeiro":
        case "1":
        case "fevereiro":
        case "2":
        case "março":
        case "3":
            document.getElementById("RespostaEstacao").innerHTML = "Outono";
            break;

        case "abril":
        case "4":
        case "maio":
        case "5":
        case "junho":
        case "6":
            document.getElementById("RespostaEstacao").innerHTML = "Inverno";
            break;

        case "julho":
        case "7":
        case "agosto":
        case "8":
        case "setembro":
        case "9":
            document.getElementById("RespostaEstacao").innerHTML = "Primavera";
            break;

        case "outubro":
        case "10":
        case "novembro":
        case "11":
        case "dezembro":
        case "12":
            document.getElementById("RespostaEstacao").innerHTML = "Verão";
            break;

        default:
            document.getElementById("RespostaEstacao").innerHTML = "Não existe este mês";
            console.log(estacao);
    }
}

function FazerConta()
{
    let primeiro = parseFloat(document.getElementById("primeiro").value);
    let segundo = parseFloat(document.getElementById("segundo").value);
    let resultado = document.getElementById("sinal").value;

    switch(resultado)
    {
        case "mais":
        case "+":
            document.getElementById("Calculo").innerHTML = (primeiro + segundo);
            break;

        case "menos":
        case "-":
            document.getElementById("Calculo").innerHTML = (primeiro - segundo);
            break;

        case "vezes":
        case "*":
            document.getElementById("Calculo").innerHTML = (primeiro * segundo);
            break;

        case "dividido":
        case "/":
            document.getElementById("Calculo").innerHTML = (primeiro / segundo);
            break;

        default:
            document.getElementById("Calculo").innerHTML = "Não é possível fazer essa operação";
    }
}

function NovoSalario()
{
    let salario = parseFloat(document.getElementById("salario").value);
    let cargo = document.getElementById("cargo").value.toLowerCase();

    switch(cargo)
    {
        case "gerente":
            document.getElementById("Novo").innerHTML = (salario + salario * 0.30);
            break;

        case "chefe":
            document.getElementById("Novo").innerHTML = (salario + salario * 0.20);
            break;

        case "operario":
            document.getElementById("Novo").innerHTML = (salario + salario * 0.45);
            break;

        default:
            document.getElementById("Novo").innerHTML = (salario + salario * 0.10);
    }
}

function CalcularDesconto()
{
    let valor = parseFloat(document.getElementById("Comprar").value);
    let identificar = document.getElementById("Identificar").value.toLowerCase();

    switch(identificar)
    {
        case "1":
        case "comum":
            document.getElementById("Valor").innerHTML = (valor);
            break;

        case "2":
        case "funcionário":
            document.getElementById("Valor").innerHTML = (valor - valor * 0.10);
            break;

        case "3":
        case "vip":
            document.getElementById("Valor").innerHTML = (valor - valor * 0.05);
            break;

        default:
            document.getElementById("Valor").innerHTML = "Não há esse tipo de comprador";
    }
}