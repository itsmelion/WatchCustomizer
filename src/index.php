<!doctype html>
<html lang=pt-BR>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <link rel=preload href="/main.css" as="style">
    <link rel=preload href="/vendors.js" as="script"></link>
    <link rel=preload href="/app.js" as="script"></link>
    <link rel=prefetch href="/async.js" as="script"></link>
    <link rel=prefetch href="/async.css" as="style"></link>
    <link rel="stylesheet" href="/main.css" media="screen" charset="utf-8">
    <title>Watch Customizer</title>
    <?php include './meta.php'; ?>
</head>

<body>

    <main ng-app=WatchCustomizer>
        <section ng-controller=Watch>
            <div id=view>
                <?php include './images/dial.svg'; ?>
            </div>

            <br>
            <article ng-repeat="case in baseWatch.case">
                <button ng-click=getPulseira(case.imagem)>{{case.nome}}<br><img height=100px width=auto ng-src="/images/{{case.imagem}}" /></button>
            </article>
            <pre id=debug></pre>
            <img height=100px width=auto ng-src="/images/{{watch.relogio}}" />
            <pre><code>{{baseWatch | json}}</code></pre>
        </section>
    </main>

    <link rel="stylesheet" async defer href="/async.css" lazyload="1" media="screen" charset="utf-8">
    <script src="/vendors.js"></script>
    <script src="/app.js"></script>
    <script async defer src="/async.js"></script>

</body>

</html>