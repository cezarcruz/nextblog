---
title: Java – Como navegar por ENUMs
author: Cezar Cruz
date: 2014-09-11T18:37:27+00:00
url: /java-como-navegar-por-enums/
categories:
  - Java
tags:
  - Java
---

Olás,

hoje uma dica rápida pra navegarmos por uma classe java que contenha **enums**:

Considerando nosso **enum**:

```java
public enum Cidades {
    CAMPINAS, HORTOLANDIA, SUMARE, VALINHOS
}
```

Pra navegamos por ele basta fazer o seguinte:

```java
for (Cidades c : Cidages.values()) {
    System.out.println(c.toString());
}
```

Utilizando o método **values**, obtemos um list do tipo do nosso **enum** com todos os **enum**, daí pra frente é só diversão.

Abraços!
