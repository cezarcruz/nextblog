---
title: Como usar uma diretiva de máscara no angular js
description: Neste post veremos como adicionar uma simples integração com uma diretiva de máscara no AngularJS
author: Cezar Cruz
date: 2015-09-13T20:24:18+00:00
url: /como-usar-uma-diretiva-de-mascara-no-angular-js/
categories:
  - JavaScript
  - AngularJS
tags:
  - JavaScript
  - AngularJS
---

Olás, no tutorial de hoje, vou mostrar como criar um diretiva bem simples utilizando Angular JS para colocar uma máscara de telefone celular com o nono digito em um campo input text.

<!--more-->

Pré requisito:

- Angular JS;
- JQuery;
- JQuery Mask (<http://igorescobar.github.io/jQuery-Mask-Plugin/>);
- Tutorial [Hello Angular JS][1];

Para criar uma diretiva, devemos definir ela no módulo usando "directive" e passando uma function, que será a diretiva de fato:

```javascript
angular.module('app').directive('phoneDir', PhoneDir)

function PhoneDir() {
  return {
    link: function (scope, element, attrs) {
      var options = {
        onKeyPress: function (val, e, field, options) {
          putMask()
        },
      }

      $(element).mask('(00) 00000-0000', options)

      function putMask() {
        var mask
        var cleanVal = element[0].value.replace(/\D/g, '') //pega o valor sem mascara
        if (cleanVal.length > 10) {
          //verifica a quantidade de digitos.
          mask = '(00) 00000-0000'
        } else {
          mask = '(00) 0000-00009'
        }
        $(element).mask(mask, options) //aplica a mascara novamente
      }
    },
  }
}
```

- Na primeira linha definimos a diretiva dando o nome de "phoneDir", lembrando que o nome deve ser camel case;
- Na function é onde definimos a diretiva;
- Começamos sempre com um return;
- A chave link deve ser utilizada para diretivas que alteram o DOM;
- O "options" é um objeto utilizado para o JQuery, no caso, estamos definindo que quando temos um evento "onKeyPress" (quando teclamos algo), será executado a function putMask;
- Na primeira vez que a diretiva é executada já definimos uma valor inicial para a máscara e adicionamos o objeto "options" ao elemento para começarmos a termos uma ação sempre que é digitado algo no campo;
- Por fim a function que define qual mascara devemos utilizar: a simples de 8 dígitos ou a de 9 dígitos;
- Observação: a máscara é atualizada sempre que é digitado uma nova tecla;

Com a diretiva pronta, é hora de utilizarmos ela em um campo de texto, o que é muito simples:

```html
<input type="text" ng-model="phone" phone-dir />
```

No elemento eu coloco a diretiva utilizando o seguinte padrão:

- Sempre letras minusculas;
- Quando a diretiva tiver um nome composto (phoneDir), no elemento html devemos colocar ela em minúsculo e onde tiver um letra maiúscula colocamos um hífen (-) (phone-dir);

Pronto, uma forma simples de criar uma diretiva AngularJS.

Até a próxima.

[1]: /hello-angular-js/
