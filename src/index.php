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

    <main ng-cloak ng-app=WatchCustomizer >

        <section ng-controller=Watch class=layout-row>

            <aside class=layout-column-between-center>

                <ul class="layout-row-start list">
                    <li ng-repeat="items in baseWatch">
                        <?php include './images/icon.svg'; ?>
                        <small>{{items.name}}</small>
                    </li>
                </ul>

                <div class=layout-row>
                <article ng-repeat="case in baseWatch.case.options">
                    <button data-watch ng-click="select('case',case)">{{case.name}}
                    <img height=80px width=auto ng-src="/images/{{case.image}}" /></button>
                </article>
                <article ng-repeat="bezel in baseWatch.bezel.options">
                    <button data-watch ng-click="select('bezel',bezel)">{{bezel.name}}
                    <img height=80px width=auto ng-src="/images/{{bezel.image}}" /></button>
                </article>
                </div>


            </aside>

                <button ng-click=share(watch)>share</button>
            <div id=view>
                <pre>{{watch | json}}</pre>
                <img height=100px width=auto ng-src="/images/{{watch.case.image}}" />
                <img height=100px width=auto ng-src="/images/{{watch.bezel.image}}" />
                <?php include './images/dial.svg'; ?>
            </div>
        </section>
    </main>

    <link rel="stylesheet" async defer href="/async.css" lazyload="1" media="screen" charset="utf-8">
    <script src="/vendors.js"></script>
    <script src="/app.js"></script>
    <script async defer src="/async.js"></script>

</body>

</html>