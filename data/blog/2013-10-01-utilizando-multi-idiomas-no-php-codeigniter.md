---
title: Utilizando multi idiomas no php CodeIgniter
author: Cezar Cruz
date: 2013-10-01T18:23:53+00:00
url: /utilizando-multi-idiomas-no-php-codeigniter/
categories:
  - PHP
tags:
  - PHP
---

## Esse é o primeiro post falando de **CodeIginiter**.

Vamos lá, nesse tutorial vamos tentar aprender como utilizar o multi idioma em uma aplicação utilizando **CodeIginiter**, daqui pra frente, apenas CI.

O primeiro passo é configurar:

<!--more-->

Criamos uma pasta dentro de application/language chamada **portuguese** nessa pasta que iremos colocar nossas strings traduzidas.

Após criarmos a pasta, devemos alterar o arquivo application/config/config.php, na seguinte linha:

```php
$config['language'] = 'english';
```

para:

```php
$config['language'] = 'portuguese';
```

Essa configuração quer dizer que o idioma padrão vai ser o que tiver dentro da pasta portuguese.

> Repare que temos duas pastas language, uma dentro de application e outra dentro de system, quando o CI procura pelas strings traduzidas, o primeiro local que ele procurar é em application/language e em seguida system/language, então, o mais sensato é colocarmos nossas strings dentro de application/language.

A nomenclatura padrão dos arquivos de idiomas é **nome_lang.php,** para o nosso exemplo, vamos criar um arquivo chamada app_lang.php dentro da pasta portuguese. O conteúdo do arquivo deverá ficar da seguinte forma:

```php
<?php
        $lang['title'] = "Titulo";
    $lang['first_name'] = "Primeiro nome";
    $lang['last_name'] = "Ultimo nome";
    $lang['date'] = "data";

?>
```

Agora, para utilizarmos ele é tão simples quanto a sua criação, basta carregar ele com essa "enorme" linha de código:

```php
$this->lang->load("app","portuguese");
```

Da forma acima, devemos colocar a chamada em todo lugar que for ter strings traduzidas, então, pra facilitar, vamos usar ele no método construtor do nosso Controller:

```php
public function __construct() {
        parent::__construct();
        $this->lang->load("app","portuguese");
   }
```

> Repare que utilizamos apenas o nome do arquivo, "app", o resto o CI que preenche.

Agora que carregamos ele no nosso Controller, vamos utilizar ele:

```php
$data['title'] = $this -> lang -> line('title');
```

A linha acima assume que o valor de $title será Titulo. É tão simples que parece mentira, mas é isso mesmo, agora só passar o valor pra view e exibir, lindo e traduzido.

E claro, como a intenção de utilizar o multi idioma é o de que nossa aplicação seja visível em outra língua, pra isso, basta criar uma nova pasta em application/language com o idioma que preferir, criar os mesmos arquivos que estão na pasta portuguese e mandar ver na tradução.

Só não esqueça de alterar o lang->load para que ele carregue o novo idioma corretamente:

```php
$this->lang->load("app","idioma");
```

[Obtenha o CI aqui][1] e o [pratico manual aqui][2].

É isso ai, espero que seja útil.

Até mais, abraços.

[1]: https://github.com/EllisLab/CodeIgniter/
[2]: http://ellislab.com/codeigniter/user-guide/
