---
title: Criando o primeiro projeto ASPNET MVC com CSharp
author: Cezar Cruz
date: 2013-09-02T12:31:21+00:00
url: /criando-o-primeiro-projeto-aspnet-mvc-com-csharp/
categories:
  - NET
  - CSharp
tags:
  - NET
  - CSharp
---

Fala pessoal,

nesse post vou mostrar como criar a nossa primeira página ASP.NET MVC.

Não vou entrar em detalhes da tecnologia, mas pelo pouco que estou aprendendo, acredito ser uma boa área de estudo, quem vem do Web Forms vai sentir um pouco de dificuldade, mas rapidinho pega o jeito, vamos lá:

<!--more-->

**Requisitos**

Nesse tutorial vamos utilizar o [Visual Studio 2012 Express for Web][1]

**Mão na massa**

Nosso primeiro passo é criar um novo projeto no VS(Visual Studio), clique em File -> New Project

<p style="text-align: center;">
  <a href="http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457585/tela_new_project_vs2012_MVC_nikiyo.png"><img class=" wp-image-172   aligncenter" alt="tela_new_project_vs2012_MVC" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457585/tela_new_project_vs2012_MVC_nikiyo.png" /></a>
</p>

Na tela New Project iremos escolher a linguagem (Csharp ou VB.NET) qual é o tipo de projeto, a localização e o nome dele:

Pra esse tutorial iremos utilizar a linguagem CSharp, o tipo de projeto é ASP.NET MVC 4 Web Aplication, o nome, iremos colocar **SiteMVC**, clicamos em OK.

<p style="text-align: center;">
  <a href="http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457584/tela_new_aspnet_mvc_project_euqv1f.png"><img class=" wp-image-173  aligncenter" alt="Tela new MVC project" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457584/tela_new_aspnet_mvc_project_euqv1f.png" /></a>
</p>

Nessa tela iremos escolher os tipos de projetos, no nosso caso iremos utilizar o template **_Empty_** (Os outros templates já vem com algumas funcionalidades, recomendo dar uma olhada, pra entender um pouco mais como funciona a estrutura do ASP.NET MVC), o View engine podemos deixar Razor mesmo ([mais informações sobre o Razor aqui][2] _\*\*\*\*_). Após as escolhas, clicar em OK.

Após nosso projeto ser criado, teremos a seguinte estrutura:

<p style="text-align: center;">
  <a href="http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457582/projeto_site_mvc_vs2012_qwbyct.png"><img class=" wp-image-174  aligncenter" alt="Estrutura projeto MVC" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457582/projeto_site_mvc_vs2012_qwbyct.png" /></a>
</p>

Pra esse tutorial devemos destacar os seguintes diretórios

- **App_Start**: Nesse diretório devemos ficar atento com o arquivo RouteConfig.cs, que iremos utilizar em seguida;
- **Controllers:** Onde fica os controles da nossa aplicação (MVC básico aqui =D);
- **Model**: Onde fica os modelos/dados da aplicação (MVC básico aqui também);
- **Views**: Onde fica os cshtml, arquivos que serão a "cara" da nossa aplicação;
- **Web.config**: Onde normalmente fica as configurações de uma aplicação .NET;

Com a estrutura criada, vamos escrever códigos. Primeiro, vamos criar um Controller chamado site, isso é bem simples, clicar com o botão direito do mouse na pasta Controllers e em seguida Add -> Controller. Por padrão devemos criar um controle assim:

**[NomeDoController]Controler**

No nosso exemplo ficará SiteController, na tela AddController coloque o Controller name SiteController e no Scaffolding options selecione Empty MVC controller, clique em add:

<img class="size-medium wp-image-175  " alt="tela_add_controller" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/h_195,w_300/v1454457581/tela_add_controller_mrsuxs.png" width="300" height="195" />

Nossa classe SiteController irá estar assim:

```csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SiteMVC.Controllers
{
    public class SiteController : Controller
    {
        //
        // GET: /Site/

        public ActionResult Index()
        {
            return View();
        }

    }
}
```

Note que nossa classe herda da classe Controller (OO aqui =P), e que já é criado automaticamente um método ActionResult chamdo Index que retorna uma View(). Essa classe quer dizer que, quando for feita a requisição http://endereco/Site/ irá retornar a View /Site/Index.

Agora vamos criar a view /Site/Index, pra fazermos isso, devemos criar uma pasta chamada Site(com S maiúsculo) dentro da pasta Views. Depois de criado a pasta Site vamos criar a View Index, botão direito do mouse em cima da pasta Site, Add -> View. Na tela Add View, colocamos o View name de Index, View engine deixamos Razor mesmo, de resto deixamos como está, clicar em Add.

<img class="size-medium wp-image-176 " alt="Tela Add view" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/h_295,w_300/v1454457580/tela_add_view_gusagk.png" width="300" height="295" />

Agora foi criado a view Index.cshtml dentro da pasta Site, que ficou assim:

```html
@{ ViewBag.Title = "Index"; }

<h2>Index</h2>
```

> Nota: Sempre que criarmos um ActionResult no controller, devemos criar um arquivo cshtml com o mesmo nome para que possa ser chamado quando for feito a requisição via http.

O arquivos Index.cshtml é um arquivo html (podemos colocar marcação html neles):

```html
@{ ViewBag.Title = "Index"; }
<!DOCTYPE html>
<html>
  <head>
    <title>Home</title>
  </head>
  <body>
    <h1>Home</h1>
  </body>
</html>
```

Pra executarmos nosso projeto, precisamos fazer um pequeno ajuste no arquivo _RouteConfig.cs:_

```csharp
public static void RegisterRoutes(RouteCollection routes)
    {
        routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

        routes.MapRoute(
            name: "Default",
            url: "{controller}/{action}/{id}",
            defaults: new { controller = "Site", action = "Index", id = UrlParameter.Optional }
        );
    }
```

Essa classe define as rotas do MVC, e o parâmetro defaults é o controller que deve ser chamado quando não é passado nenhum link na url. No nosso caso, usaremos o controller Site, e o action Index, para que a primeira pagina a ser processada será o Index.cshmtl, o resultado está a baixo:

<img class="size-medium wp-image-179 " alt="Página index.cshtml" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/h_196,w_300/v1454457578/index_cshtml_t8wqep.png" width="300" height="196" />

O código html gerado fica assim:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Home</title>
  </head>
  <body>
    <h1>Home</h1>
  </body>
</html>
```

Repare que o código gerado fica limpo e nada gerado escondido, que é comum quando se trata de webforms.

Pra finalizar, vamos passar dados do controller para a View, pra isso, abrimos o SiteController.cs e editamos o ActionResult Index, inserindo a seguinte linha:

```csharp
ViewBag.Mensagem = "Olá MVC";
```

Estamos definindo que a variável Titulo receberá a string Olá MVC. Obs: ela deve ser colocada antes do return View().

Depois de definido o valor da variável, devemos colocar ela no arquivo Index.cshtml:

```html
@{ ViewBag.Title = "Index"; }
<!DOCTYPE html>
<html>
  <head>
    <title>Home</title>
  </head>
  <body>
    <h1>@ViewBag.Mensagem</h1>
  </body>
</html>
```

> Pra utilizarmos Csharp no arquivo Index.cshtml devemos sempre começar o código com @ (arroba).
>
> Sempre que fizer atualização no Controller o no Model é preciso recompilar o projeto, mas quando é feito atualização somente na View, não precisa compilar o projeto novamente.

Executamos novamente o nosso projeto, e teremos o resultado abaixo:

<img class="size-medium wp-image-181 " alt="Index.cshtml com ViewBag" src="http://res.cloudinary.com/cezarcruz-com-br/image/upload/h_196,w_300/v1454457577/index_cshtml_final1_xgty2c.png" width="300" height="196" />

E o código gerado:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Home</title>
  </head>
  <body>
    <h1>Olá MVC</h1>
  </body>
</html>
```

É isso ai, até mais!

[1]: http://www.microsoft.com/visualstudio/ptb/products/visual-studio-express-for-web
[2]: http://msdn.microsoft.com/pt-br/library/gg675215.aspx
[3]: http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457581/tela_add_controller_mrsuxs.png
[4]: http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457580/tela_add_view_gusagk.png
[5]: http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457578/index_cshtml_t8wqep.png
[6]: http://res.cloudinary.com/cezarcruz-com-br/image/upload/v1454457577/index_cshtml_final1_xgty2c.png
