---
categories: ['Java', '1Z0-808']
description: 'Certificação JAVA (1Z0-808) - Compilação e execução'
Tags: ['Java', '1Z0-808']
date: '2018-03-10T10:05:51-03:00'
title: 'Certificação JAVA (1Z0-808) - Compilação e execução'
url: /certificacao-java-compilacao-e-execucao/
author: Cezar Cruz
---

Olá,
neste primeiro post iremos ver como escrever o nosso primeiro programa Java, como executar e como passar “parâmetros” para ele.

Com o JDK é necessário usar um console, um prompt de comandos, para efetuar a compilação ou execução de programas Java, além de compilar e executar, são disponibilizadas outras ferramentas no JDK. Nosso foco será apenas nos comando _javac_ e _java_.

Para criarmos nosso primeiro programa, será necessário criar um arquivo texto com o nome _HelloWorld.java_, seu conteúdo deve ser conforme o texto abaixo.

```java
public class HelloWorld {
    public static void main(String args[]) {
        System.out.println("Oi Mundo");
    }
}
```

Para compilar um arquivo Java

```
javac HelloWorld.java
```

O nome do arquivo-fonte a ser compilado deve ser fornecido obrigatoriamente com sua extensão _.java_. Quando a compilação transcorre corretamente, nenhuma mensagem é exibida, produzindo o arquivo _HelloWorld.class_. Caso sejam exibidas mensagens de erros, as linhas em que esses erros ocorrem também serão exibidas.

Para executar o programa _HelloWorld_ é preciso acionar a JVM com o comando

```
java HelloWorld
```

A extensão _.class_ não deve ser fornecida quando se executa um programa Java com a JVM.

Também é possível passar argumentos para um programa Java.

```java
public class Echo {
    public static void main(String args[]) {
        for (String s: args) {
            System.out.pritln(s);
        }
    }
}
```

Compilação

```
javac Echo.java
```

Execução

```
java Echo a b c
```

Esse post cobre o básico, veremos mais detalhes sobre um programa Java nos posts futuros.

Até.
