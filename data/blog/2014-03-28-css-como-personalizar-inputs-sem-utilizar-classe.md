---
title: 'CSS: como personalizar inputs sem utilizar classe'
author: Cezar Cruz
date: 2014-03-28T19:23:34+00:00
url: /css-como-personalizar-inputs-sem-utilizar-classe/
categories:
  - CSS
tags:
  - CSS
---

Olás, vindo aqui hoje só pra manter o blog "ativo" heheh, hoje, uma dica bem simples de **css** pra personalizar <del>textbox</del> (mania de .net) inputs.

O código é o seguinte:

```css
input[type='text'] {
  /* regras de estilo aqui. */
}
```

Com o código **css** acima, não será mais preciso declarar uma classe no e colocar em cada elemento input, lembrando que pode ser utilizado em outros elementos, exemplo:

```
input[type=checkbox] {
    /* estilo aqui */
}
```

Espero que ajude, até mais.
