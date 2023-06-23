---
title: Como adicionar o Lightbox em um site utilizando CakePHP
author: Cezar Cruz
date: 2014-04-19T14:50:41+00:00
url: /como-adicionar-o-lightbox-em-um-site-utilizando-cakephp/
categories:
  - JavaScript
tags:
  - JavaScript
---

Olás,

Hoje vamos com uma dica simples e usual: Como utilizar o Lightbox, [aquele plugin JQuery para imagens/galeria][1], com o CakePHP.

Vamos lá, depois de instalado o CakePHP, podemos utilizar esse tutorial ([Como usar javascript e css no CakePHP][2]), pra colocarmos os arquivos do Lightbox no local correto, e fazermos a chamada no nosso arquivo de layout.

A chamada para os arquivos de CSS e Javascript devem ficar assim:

```php
<?php echo $this->Html->css('lightbox'); ?>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js" type="text/javascript"></script>
<?php echo $this->Html->script('lightbox.min'); ?>
```

No código acima podemos ver:

1. A chamada pra exibir o css do Lightbox;
2. A chamada pro JQuery 2.1.0 nos servidores do Google =D;
3. A chamada para o arquivo Javascript do Lightbox

Feito isso, já estamos na metade do caminho, o próximo passo, é colocar as imagens que serão exibidas.

Veja como irá ficar a nossa View que irá exibir as fotos:

```php
echo $this->Html->link(
     $this->Html->image($fotos['Foto']['caminho'], array('class' => 'class_img')),
     $fotos['Foto']['caminho'],
     array('escapeTitle' => false, 'title' => $fotos['Foto']['alt'], 'data-lightbox'=> 'roadtrip', 'class' => 'class_url')
);
```

Explicando o código (Acho que vou criar um categoria, "_explicando o código_" hahahahahah) :

1. Utilizaremos o método link do Helper Html do CakePhp;
2. Dentro do método Html, iremos colocar o método image, também do Helper Html (Aqui podemos utilizar a forma padrão, primeiro com o caminho da imagem, e depois os parâmetros adicionais dentro de um array, como é feito de costume), aqui, sugiro que utilize um thumbnail;
3. Na 3° linha, temos novamente o caminho da imagem, é ali que o link irá apontar pra imagem que ira ser aberta no modal;
4. N 4° linha, temos os parâmetros finais do link, o title é o que irá aparecer na legenda da imagem quando ela for aberta no modal, o mais importate é o "data-lightbox", esse parâmetro que será utilizado para ativar o Lightbox;

A partir daqui, use a criatividade e seja feliz =D.

Espero que seja útil e obrigado por ter chegado até aqui!!

Até!

[1]: http://lokeshdhakar.com/projects/lightbox2/
[2]: /como-usar-javascript-e-css-no-cakephp/
