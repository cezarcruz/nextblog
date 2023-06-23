---
categories: ['Java', '1Z0-808']
description: 'Certificação JAVA (1Z0-808) - Variáveis'
tags: ['Java', '1Z0-808']
date: '2018-03-12T10:05:51-03:00'
title: 'Certificação JAVA (1Z0-808) - Variáveis'
url: /certificacao-java-variaveis/
author: Cezar Cruz
---

Neste post veremos como são criadas e utilizadas as variáveis em uma aplicação Java.

<!--more-->

Uma variável é um nome definido pelo programador ao qual se associa um valor pertencente a um certo tipo de dados e armazenado em um conjunto de posições da memória do computador. Basicamente, toda variável sempre possui um nome, um tipo e um conteúdo.

O nome de uma variável, em Java, pode ser formado por uma letra, pelos caracteres \_ (_underscore_), ou $ (cifrão). Nomes não podem conter outros símbolos gráficos, operadores ou espaços em branco, podendo ser longos, embora apenas os primeiros 32 caracteres sejam usados para distinguir. Lembrando que Java é _Case Sensitive_, letras minusculas e maiúsculas são consideradas diferentes. Exemplos válidos:

- a
- outro
- x
- \_valor
- $top
- VALOR

Exemplos inválidos:

- 1x
- novo valor
- sem-valor
- void
- super

O Java possui um conjunto de palavras que indicam os nomes dos tipos primitivos, as diretivas da linguagem, os especificadores e modificadores e outros elementos pertencentes a sintaxe dessa linguagem. Essas palavras são reservadas e não podem ser utilizadas com outra finalidade:

_abstract_, _assert_, _boolean_, _break_, _byte_, _case_, _catch_, _class_, _continue_, _default_, _do_, _double_, _else_, _enum_, _extends_, _false_, _final_, _finally_, _float_, _for_, _if_, _implements_, _import_, _instanceof_, _int_, _interface_, _long_, _native_, _new_, _null_, _package_, _private_, _protected_, _public_, _return_, _short_, _static_, _strictfp_, _super_, _switch_, _synchronized_, _this_, _throw_, _throws_, _transient_, _true_, _try_, _void_, _volatile_, _while_

false e true não são palavras reservadas, mas valores literais do tipo boolean. Do mesmo modo, null é o literal nulo. Além dos citados, existem outras duas que, embora sejam reservadas, não são utilizadas pela linguagem: _const_ e _goto_.

Declarar uma variável é associar um tipo, um nome e um valor. Para isso deve ser observada a sintaxe:

```
<Tipo> <nome1> [, nome2 [, nome3 [..., nomeN]]];
```

A especificação de um Tipo e ao menos um nome são obrigatórios. Pode seguir opcionalmente uma lista de nomes, todos separados por vírgulas. A declaração é terminado por ; (ponto e vírgula). O Tipo pode ser um tipo primitivo, uma classe da API Java ou outra definida pelo programador. Exemplos:

```java
int i;
float total, preco;
byte mascara;
double valorMedio;
```

Variáveis de um mesmo tipo podem ser declaradas separadas ou em conjunto:

```java
char op1;
char op2;

char op3, op4;
```

Também é possível definir um valor inicial para uma variável, o que é chamado de inicialização:

```java
int i, quantidade = 0;
float angulo = 1.57f, temp;
double valor = 13.323;
boolean ok = false;
char letra = ‘c’;
```

Variáveis podem ser declaradas em qualquer ponto de um programa Java, sendo válidas em todo o escopo em que foram declaradas e nos escopos internos a esses.

O conjunto dos locais no qual uma declaração tem validade é denominado escopo. Um bloco de comandos é um conjunto de comandos da linguagem delimitados por uma chave inicial { e outra chave final }. A partir do ponto em que ocorreu a declaração de uma variável, é dito que a variável está em seu escopo, limitado ao bloco de comandos onde ocorreu essa declaração, mas incluindo escopos mais internos. Observe os vários escopos existentes abaixo:

```java
public class Escopo { // inicio do bloco0
    public static void main(String args[]) { //inicio do bloco 1
        int i = 5; // variavel do bloco 1
        { // inicio do bloco 2
            int j = 0; // variavel do bloco 2
            System.out.println(i); // uso de i dentro do seu escopo
            j = 4 * i; // uso de i dentro do seu escopo
            System.out.println(j);
            { // inicio do bloco 3
                System.out.println(i); // uso de i dentro do seu escopo
                System.out.println(j); // uso de j dentro do seu escopo
            }
        }

        System.out.println(i); // uso de i dentro do seu escopo
        System.out.println(j); // ERRO. Uso de j FORA do seu escopo
    }
}
```

A variável i foi declarada no bloco de escopo 1 e pode ser usada nesse escopo e também nos blocos 2 e 3, que são escopos internos em relação ao bloco 1. A variável j, declarada no bloco 2, também pode ser usada no próprio bloco de escopo e em escopos mais internos. No código acima, existe um erro, que pode ser visualizado usando o compilador do java:

```
javac Escopo.java
Escopo.java:16: error: cannot find symbol
        System.out.println(j);
                           ^
  symbol:   variable j
  location: class Escopo
1 error
```

A mensagem indica que na linha 16 do arquivo Escopo.java foi detectado um simbolo desconhecido (variável j), pois, de fato, naquele escopo, (bloco 1 ou mais externos) não existe essa variável. Para corrigir o erro, a declaração da variável j deve ser movida para o início do bloco onde ocorreu o erro:

```java
public class Escopo { // inicio do bloco0
    public static void main(String args[]) { //inicio do bloco 1
        int i = 5; // variavel do bloco 1
        int j = 0; // variavel do bloco 1
        { // inicio do bloco 2

            System.out.println(i); // uso de i dentro do seu escopo
            j = 4 * i; // uso de i dentro do seu escopo
            System.out.println(j);
            { // inicio do bloco 3
                System.out.println(i); // uso de i dentro do seu escopo
                System.out.println(j); // uso de j dentro do seu escopo
            }
        }

        System.out.println(i); // uso de i dentro do seu escopo
        System.out.println(j); // Sucesso
    }
}
```

O uso de variáveis ou objetos fora de seu escopo constitui um erro de programação detectado pelo compilador e que deve ser obrigatoriamente corrigido.

Uma variável declarada dentro de métodos é denominada variável (de escopo) local e sua validade segue as regras apresentadas. Contudo, se a variável for declarada dentro do corpo da classe, será tratada como campo (field) da classe e será então escopo de classe, será válida em qualquer ponto da classe.

Hoje abordamos as criações de variáveis, futuramente iremos ver sobre os modificadores de acesso, enquanto isso, leia sobre convenções de código java aqui:

https://www.devmedia.com.br/convencoes-de-codigo-java/23871

Até!
