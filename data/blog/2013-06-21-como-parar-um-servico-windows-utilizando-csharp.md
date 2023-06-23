---
title: Como parar um serviço Windows utilizando CSharp
author: Cezar Cruz
date: 2013-06-21T12:22:39+00:00
url: /como-parar-um-servico-windows-utilizando-csharp/
categories:
  - NET
  - CSharp
tags:
  - NET
  - CSharp
---

Saindo um pouco do PHP, vamos para a plataforma .NET, nesse tutorial (guia rápido hehhehe), vou ensinar como parar e subir um serviço Windows utilizando CSharp, vamos lá.

Primeiro, vamos instanciar o ServiceController passando como o parâmetro  o nome do serviço que iremos gerenciar

```csharp
using System.ServiceProcess;

ServiceController service = new ServiceController("xxxservico");
```

Aqui como paramos o serviço

```csharp
if (service.Status.Equals(ServiceControllerStatus.Running))
    service.Stop();
```

- Primeiro, verificamos se o serviço e está rodando
- Coso ele esteja, paramos ele usando o método Stop.

Para iniciar basta utilizar isso

```csharp
if (service.Status.Equals(ServiceControllerStatus.Stopped))
    service.Start();
```

- Verificamos se o serviço está parado
- Caso esteja, iniciamos ele

Simples e pratico, até mais!!
