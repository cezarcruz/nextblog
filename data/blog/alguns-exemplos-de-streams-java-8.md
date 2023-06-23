---
categories: ['Java']
description: 'Veja algumas formas básicas de utilizar a api de Stream do Java 8'
date: '2017-06-15T09:59:51-03:00'
title: 'Alguns exemplos de streams java 8'
url: /alguns-exemplos-de-streams-java-8/
author: Cezar Cruz
---

Olas, hoje iremos ver algumas formas básicas de utilizar a api de Stream do Java 8.

<!--more-->

A ideia é ser bem pratico, então, vamos ao exemplo:

O primeiro passo é criar uma lista, no nosso caso, uma lista de Strings:

```java
final List<String> stringList = new ArrayList<>();

stringList.add("Brasil");
stringList.add("Argentina");
stringList.add("Chile");
stringList.add("Equador");
stringList.add("Brasil");
```

O ação obvia é iterar esta lista e imprimir seus itens, nada mais útil que nosso System.out:

```java
stringList.forEach(s -> {
    System.out.println(s);
});
```

No exemplo acima, podemos ler da seguinte forma:
**para cada item s da lista stringList passamos um método que faz algo com s**

Repare que estamos utilizando "thin arrow" -> e passamos entre chaves {} a ação.

Em casos onde a ação é realizada com apenas 1 linha, podemos simplificar para:

```java
stringList.forEach(s -> System.out.println(s));
```

Ou ainda:

```java
stringList.forEach(System.out::println);
```

Lembre sempre da tipagem da lista e do seu método.

Outra ação que pode ser feita utilizando a api de Streams e' filtrar uma lista utilizando o método _filter_, veja o exemplo abaixo:

```java
stringList.stream().filter((s -> s.equals("Brasil"))).forEach(System.out::println);
```

O input do método _filter_ e' o mesmo do _forEach_: 1 item por vez da lista. No entanto, o método que ele recebe deve retornar um boolean. Basicamente ele itera a lista item por item e executa o método em cada um, sempre que o resultado for true, ele guarda em uma lista temporária, ao final da iteração ele retorna esses itens em uma nova lista (no nosso exemplo, sera impresso todos os itens que forem igual 'Brasil').
Repare que o retorno do filter e' uma Stream de itens, então, é possível iterar essa lista com um _forEach_, igual ao primeiro exemplo.

Também e' possível guardar o itens de um filter em um List, basta usar o código abaixo:

```java
List<String> brasilList = stringList.stream().filter((s -> s.equals("Brasil"))).collect(Collectors.toList());
```

Como o método _filter_ retornar um "Stream" é necessário transformar em um "List", para isso utilizamos o método _collect(Collectors.toList())_

Podemo utilizar a Api de Streams para remover os itens duplicados de uma lista, simplesmente utilizando o método _distinct_:

```java
stringList.stream().distinct().forEach(System.out::println);
```

O código acima ira remover todos os itens duplicados da lista e ira imprimir na tela o resultado.

Outra funcionalidade muito útil é transformar uma lista de um tipo para outro, para isso utilizamos o método _map_. No exemplo abaixo iremos transformar a nossa lista de string em uma lista de números:

```java
stringList.stream().map((String::length)).forEach(System.out::println);
```

E para guardar os itens retornados do map, simples:

```java
List<Integer> integerStream = stringList.stream().map(String::length).collect(Collectors.toList());
```

Por fim, nunca devemos esquecer que podemos chamar vários métodos da api de streams em sequencia:

```java
stringList.stream().distinct().sorted().forEach(System.out::println);
```

O código acima faz a seguinte ação: **dado uma lista de strings ele remove todo os itens duplicados utilizando _distinct_ depois ordena com o método _sorted_ e por fim imprime o resultado na tela.**

Essa foi uma passada bem básica na api de streams do Java 8, para saber mais, visite o link abaixo:

<http://www.oracle.com/technetwork/pt/articles/java/streams-api-java-8-3410098-ptb.html>

Abraços.
