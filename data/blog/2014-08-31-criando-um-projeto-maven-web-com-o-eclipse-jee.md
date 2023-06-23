---
title: Criando um projeto Maven web com o Eclipse JEE
author: Cezar Cruz
date: 2014-08-31T16:11:10+00:00
url: /criando-um-projeto-maven-web-com-o-eclipse-jee/
tags:
  - Maven
  - Eclipse
  - Java
categories:
  - Maven
  - Eclipse
  - Java
---

Olás, hoje vamos ver como criar um projeto java web utilizando [Olás, hoje vamos ver como criar um projeto java web utilizando][1] e Eclipse JEE/Tomcat.

<!--more-->

Pra esse tutorial, vamos considerar que o **Maven**, **Eclipse JEE** (utilizando java 1.8) e o **tomcat** estão configurados.

## Criando o projeto

O primeiro passo é criar um projeto no Eclipse:

File -> New -> Maven Project<figure id="attachment_398" style="width: 300px" class="wp-caption aligncenter">

[<img class="wp-image-398 size-medium" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/h_272,w_300/v1454457566/maven-new-project_chg3gr.png" alt="Novo projeto Maven" width="300" height="271" />][2]<figcaption class="wp-caption-text">Novo projeto Maven</figcaption></figure>

Nessa tele devemos selecionar a opção **Create a simple project(skip archetype selection),** conforme a figura, em seguida clicar em next.<figure id="attachment_399" style="width: 300px" class="wp-caption aligncenter">

[<img class="wp-image-399 size-medium" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/h_272,w_300/v1454457564/maven-new-project-description_ui33fj.png" alt="Novo projeto Maven - Descrição" width="300" height="271" />][3]<figcaption class="wp-caption-text">Novo projeto Maven - Descrição</figcaption></figure>

Nessa tela temos as opções para identificar nosso projeto, devemos preencher as seguintes opções:

\*` (um identificador da empresa/grupo ao qual o projeto pertence. Geralmente o nome do site da empresa/grupo ao contrário) : **br.com.cezarcruz**

- Artifact ID (nome do projeto): **website**
- Packaging (como o projeto será empacotado, ex: jar, war, ear): **war**

> Pra conhecer um pouco mais acesse o link: <http://maven.apache.org/guides/mini/guide-naming-conventions.html>

Depois de preencher os dados, clique em finish.

Depois disso nosso projeto será criado com a seguinte estrutura:<figure id="attachment_400" style="width: 230px" class="wp-caption aligncenter">

[<img class="wp-image-400 size-medium" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/h_300,w_230/v1454457563/projeto-maven-estrutura_sr3pff.png" alt="Estrutura de um projeto Maven" width="230" height="300" />][4]<figcaption class="wp-caption-text">Estrutura de um projeto Maven</figcaption></figure>

De cima pra baixo temo:

- Java Resources: é nessa pasta onde deve ficar o código java de nossa aplicação/site, ela usa uma estrutura própria para o **Maven**. A pasta é dividia em sub diretório:
  - src/main/java: onde fica os packages e as classes java;
  - src/main/resources: fica os arquivos de properties (ex: arquivos res, persistence.xml, configuração de logs);
  - src/test/java: aqui onde fica os arquivos de teste unitários;
  - src/test/resources: arquivos de propertires que são usado em **tempo de testes**.
- src/main: nessa pasta ficam uma cópia dos arquivos do src/main/java, mas exibidas como elas são exibidas na estrutura de pastas;
  - webapp: essa é a pasta onde iram ficar os arquivos html/jsp/xhtml;
- pom.xml: pra um projeto **maven**, esse é o arquivo onde ficam todas as configurações pertinente a geração de build, testes, jars de terceiros, etc;

## Ajustando configurações

Depois que nosso projeto foi criado, precisamos fazer alguns ajustes para que ele rode adequadamente no **Eclipse**. Vamos começar pelo **pom.xml,** a versão gerada pelo Eclipse é a seguinte:

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>br.com.cezarcruz</groupId>
  <artifactId>website</artifactId>
  <version>0.0.1-SNAPSHOT</version>
  <packaging>war</packaging>
</project>
```

Nele devemos adicionar uma configuração para que o **maven/eclipse** saiba qual a versão do **java** ele deve utilizar no projeto:

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <groupId>br.com.cezarcruz</groupId>
    <artifactId>website</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>war</packaging>
    <build>
        <finalName>website</finalName>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.1</version>
                <configuration>
                    <source>1.8</source>
                    <target>1.8</target>
                </configuration>
            </plugin>
        </plugins>
    </build>
</project>
```

Explicando:

Dentro do **build**, definimos o **finalName** (o nome final do pacote, ex: website.war), em seguida os **plugins**, aqui destacamos apenas as marcações **source** dentro de **configuration**, é nela que definimos a versão do java utilizado no projeto, nesse caso a versão 1.8.

Depois disso, temos que atualizar o projeto:

Botão direito em cima do nome do projeto: **Maven** -> Update Project.

Feito isso, nosso projeto já está quase pronto, falta apenas criar o arquivo web.xml:

Clicar com botão direito em webapp: New -> Other.

Escolha a opção pra criar um arquivo xml. Clique em next:<figure id="attachment_403" style="width: 260px" class="wp-caption aligncenter">

[<img class="wp-image-403 size-medium" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/h_300,w_260/v1454457561/criando-arquivo-web-xml1_sjwkfw.png" alt="" width="260" height="300" />][5]<figcaption class="wp-caption-text">Criando arquivo xml</figcaption></figure>

Aqui, devemos reparar em duas coisas:

- O local do arquivo: foi acrescentado a subpasta **/WEB-INF**;
- O nome do arquivo tem que ser **web.xml**;

Feito isso, clique em finish, será criando um arquivo xml vazio, apenas com o cabeçalho, devemos apagar e colocar o conteúdo abaixo:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app version="3.1" xmlns="http://xmlns.jcp.org/xml/ns/javaee"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd" />
```

> Os arquivos que ficam dentro de WEB-INF não é possível acessar pela rede.

Pronto, projeto configurado.

## Criando e acessando uma página HTML

Agora que nosso projeto está configurado, vamos criar nossa primeira página, pra isso, basta criarmos uma página html qualquer, dentro da pasta webapp, pra concluir nosso tutorial, crie uma página com nome index.html e utilize o HTML abaixo:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Insert title here</title>
  </head>
  <body>
    <h1>Olá mundo</h1>
  </body>
</html>
```

Feito isso, basta adicionarmos o projeto dentro do **tomcat** e iniciar o mesmo. Após a inicialização do **tomcat**, acesse nossa pagina utilizando o link http://localhost:8080/website/ e nossa linda página será carregada:<figure id="attachment_404" style="width: 300px" class="wp-caption aligncenter">

[<img class="wp-image-404 size-medium" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/h_162,w_300/v1454457560/pagina-html_jfcria.png" alt="Página html" width="300" height="162" />][6]<figcaption class="wp-caption-text">Página html</figcaption></figure>

É isso ae, nosso projeto está OK, agora é por sua conta.

Até mais.

[1]: /como-instalar-o-maven-windows/ 'Como instalar o Maven no Windows'
[2]: https://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457566/maven-new-project_chg3gr.png
[3]: https://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457564/maven-new-project-description_ui33fj.png
[4]: https://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457563/projeto-maven-estrutura_sr3pff.png
[5]: https://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457561/criando-arquivo-web-xml1_sjwkfw.png
[6]: https://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457560/pagina-html_jfcria.png
