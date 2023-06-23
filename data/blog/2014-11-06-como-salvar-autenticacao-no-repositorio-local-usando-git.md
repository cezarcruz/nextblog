---
title: Como salvar autenticação no repositório local usando GIT
author: Cezar Cruz
date: 2014-11-06T23:49:38+00:00
url: /como-salvar-autenticacao-no-repositorio-local-usando-git/
categories:
  - Git
tags:
  - Git
---

Uma dica bem curtinha, porém útil:

Como configurar o git para não pedir senha ao baixar ou subir dados no repositório remoto, para isto, basta entrar no seu repositório local e digitar o comando abaixo:

`git config credential.helper cache`

Pra salvar apenas por um tempo determinado, utilizar:

`git config credential.helper 'cache --timeout=60000'`

=D
