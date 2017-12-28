<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous">
    <link rel="stylesheet" href="src/styles/style.css" media="screen" charset="utf-8">
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
                                                            <img src="./src/images/daytona-<?php echo $i+1; ?>.png" alt="NIGHTFLIGHT" />
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
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
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
                                                            <img src="./src/images/bezel-type-<?php echo $i+1; ?>.png" alt="NIGHTFLIGHT" />
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
                                    <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
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
                                                            <img src="./src/images/daytona-<?php echo $i+1; ?>.png" alt="NIGHTFLIGHT" />
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

                    </div><!-- panel-group -->
                </div>
                <div class="col-md-8  watch-box">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="watch-container">
                                <img class="metal-type" src="src/images/daytona-1.png" alt="">
                                <img class="bezel-type">
                                <iframe class="dial" id="svgCustomiser" src="./src/images/dial.svg" width="212" height="212"></iframe>
                                <!-- <img class="dial" src="./src/images/dial.svg" alt="Kiwi standing on oval"> -->
                                <!-- <img class="dial" src="src/images/base_1_dial.png" alt=""> -->
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

        <script src="src/vendors/jquery/jquery.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
            crossorigin="anonymous"></script>
        <script src="src/scripts/app.js"></script>
</body>

</html>