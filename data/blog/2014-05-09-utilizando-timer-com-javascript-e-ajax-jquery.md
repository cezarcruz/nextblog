---
title: Utilizando timer com JavaScript e AJAX JQuery
author: Cezar Cruz
date: 2014-05-09T12:17:40+00:00
url: /utilizando-timer-com-javascript-e-ajax-jquery/
categories:
  - JavaScript
tags:
  - JavaScript
---

Olás,

Hoje uma pequena dica de JavaScript / JQuery: Como fazer um "Ajax get" com timer.

Vamos lá, depois de colocarmos as referencias necessárias para o JQuery, devemos utilizar o seguinte código:

```html
<script>
  $(document).ready(function () {
    function getData() {
      $.ajax({
        url: 'http://localhost/dados.php',
        beforeSend: function () {
          $('#conteudo').empty()
          $('#conteudo').append('Carregando')
        },
      }).done(function (data) {
        $('#conteudo').empty()
        $('#conteudo').append(data)
      })
    }
    getData()
    setInterval(getData, 50000)
  })
</script>
```

Explicando:

Dentro do  **$(document).ready(function()** colocamos os scripts que irão fazer a mágica.

Na função **getData** colocamos a chamada ajax:

Parametros

- url: caminho do script que irá retornar os dados;
- beforeSend: ação que deve ser realizada antes de obter o resultado da url solicitada, loading, por exemplo;
- .done: é o que acontece após o recebimento dos dados, nesse caso o resultado é salvo na var **data.**

Após a criação da função, devemos fazer a primeira chamada, pois quando utilizamos o timer, ele executa somente após ao tempo determinado.

A parte principal é o **setInterval(getData, 50000). **Aqui temos  a parte principal, que efetivamente irá fazer a requisição de tempos em tempos, nela devemos atentar a 2 fatos:

1. A função que será executada deve ser chamada sem o "()" (parênteses) no final;
2. O segundo parâmetro é o intervalo de tempo e milissegundos;

Bom, é isso, espero que seja útil!! Até mais! =D

PS: Nesse tutorial utilizamos o JQuery somente pelo fato de abstrair o AJAX, de qualquer forma, ele irá funcionar normalmente se você não utilizar uma lib JavaScript.
