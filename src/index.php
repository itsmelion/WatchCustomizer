<!doctype html>
<html>

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
</head>

<body>
    <section class="customizer-container">
        <div class="container">
            <div class="row">
                <div class="col-md-4 options">
                    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingOne">
                                <h4 class="panel-title">
                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        <i class="more-less glyphicon glyphicon-plus"></i>
                                        METAL TYPE
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                                <div class="panel-body">
                                    <div class="container-fluid">
                                        <!-- LOOP METAL TYPE -->
                                        <div class="row">
                                            <?php for($i = 0; $i < 4; $i++)  { ?>
                                            <div class="col-md-6 opt-metal-type" id="metal-type-<?php echo $i+1; ?>">
                                                <a title="">
                                                    <div class="image-container">
                                                        <img src="/images/daytona-<?php echo $i+1; ?>.png" alt="NIGHTFLIGHT" />
                                                    </div>
                                                    <p>TWO TONE</p>
                                                </a>
                                            </div>
                                            <?php } ?>
                                        </div>
                                        <!-- END -->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingTwo">
                                <h4 class="panel-title">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false"
                                        aria-controls="collapseTwo">
                                        <i class="more-less glyphicon glyphicon-plus"></i>
                                        Bezel Type
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                <div class="panel-body">
                                    <div class="container-fluid">
                                        <!-- LOOP METAL TYPE -->
                                        <div class="row">
                                            <?php for($i = 0; $i < 5; $i++)  { ?>
                                            <div class="col-md-6 opt-bezel-type" id="bezel-type-<?php echo $i+1; ?>">
                                                <a title="">
                                                    <div class="image-container">
                                                        <img src="/images/bezel-type-<?php echo $i+1; ?>.png" alt="NIGHTFLIGHT" />
                                                    </div>
                                                    <p>TWO TONE</p>
                                                </a>
                                            </div>
                                            <?php } ?>
                                        </div>
                                        <!-- END -->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="panel panel-default">
                            <div class="panel-heading" role="tab" id="headingThree">
                                <h4 class="panel-title">
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false"
                                        aria-controls="collapseThree">
                                        <i class="more-less glyphicon glyphicon-plus"></i>
                                        DIAMOND TYPE
                                    </a>
                                </h4>
                            </div>
                            <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                <div class="panel-body">
                                    <div class="container-fluid">
                                        <!-- LOOP METAL TYPE -->
                                        <div class="row">
                                            <?php for($i = 0; $i < 4; $i++)  { ?>
                                            <div class="col-md-6 opt-metal-type" id="metal-type-<?php echo $i+1; ?>">
                                                <a title="">
                                                    <div class="image-container">
                                                        <img src="/images/daytona-<?php echo $i+1; ?>.png" alt="NIGHTFLIGHT" />
                                                    </div>
                                                    <p>TWO TONE</p>
                                                </a>
                                            </div>
                                            <?php } ?>
                                        </div>
                                        <!-- END -->
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- panel-group -->
                </div>
                <div class="col-md-8  watch-box">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="watch-container">
                                <img class="metal-type" src="/images/daytona-1.png" alt="">
                                <img class="bezel-type">
                                <iframe class="dial" id="svgCustomiser" src="/images/dial.svg" width="212" height="212"></iframe>
                                <!-- <img class="dial" src="/images/dial.svg" alt="Kiwi standing on oval"> -->
                                <!-- <img class="dial" src="/images/base_1_dial.png" alt=""> -->
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </section>

    <link rel="stylesheet" async defer href="/async.css" lazyload="1" media="screen" charset="utf-8">
    <script src="/vendors.js"></script>
    <script src="/app.js"></script>
    <script async defer src="/async.js"></script>

</body>

</html>