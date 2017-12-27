var _svgCustomiser = $('#svgCustomiser');
$('#metalContents #templatesWrapper ul li a').live('click', function() {
    var take_code_source = $(this).children("img").attr("src");
    _svgCustomiser.contents().find("#watchStrap_1_ image#metal").attr( "xlink:href", take_code_source );
    _svgCustomiser.contents().find("#Layer_15 image#metal").attr( "xlink:href", take_code_source );
    var take_price = $(this).attr("title");
    var _metal_type = $(this).text().replace(/^\s+|\s+$/g,'');
    $(".wpuf-fields #metal_type").val(_metal_type);
    $("#the-watchPrice span").text(take_price);
});

$('#bezelContents #templatesWrapper ul li a').live('click', function() {
    var take_code_source = $(this).children("img").attr("src");
    _svgCustomiser.contents().find("#watchStrap_1_ image#bezel").attr( "xlink:href", take_code_source );
    _svgCustomiser.contents().find("#bezelMarkers2 image#bezel").attr( "xlink:href", take_code_source );
    _svgCustomiser.contents().find("#Layer_18 image#bezel").attr( "xlink:href", take_code_source );
    _svgCustomiser.contents().find("#bezelMarkers image:first").attr( "xlink:href", take_code_source );
    var _bezel_type = $(this).text().replace(/^\s+|\s+$/g,'');
    $(".wpuf-fields #bezel_type").val(_bezel_type);
});

$('#diamondsContents #templatesWrapper ul li a').live('click', function() {
    var take_code_source = $(this).children("img").attr("src");
    _svgCustomiser.contents().find("#smallWatch image#diamonds").attr( "xlink:href", take_code_source );
    _svgCustomiser.contents().find("#Layer_18 image#diamonds").attr( "xlink:href", take_code_source );
    _svgCustomiser.contents().find("#bezelMarkers image#diamonds").attr( "xlink:href", take_code_source );
    _svgCustomiser.contents().find("#bigWatch image#diamonds-big").attr( "xlink:href", "http://timeincolors.net/wp-content/themes/theluxury-v1-05/customizer/_templates/daytona/daytona-diamond-dial-3big.png" );
    _svgCustomiser.contents().find("#BIGwatchFace_1_ image#diamonds-big").attr( "xlink:href", "http://timeincolors.net/wp-content/themes/theluxury-v1-05/customizer/_templates/submariner/rounddiamonds-big.png" );
    _svgCustomiser.contents().find("#bezelMarkers2 image#diamonds").attr( "xlink:href", take_code_source );
    _svgCustomiser.contents().find("#smallWatchFace image#diamonds").attr( "xlink:href", "http://timeincolors.net/wp-content/themes/theluxury-v1-05/customizer/_templates/deepsea/rounddiamonds.png" );
    _svgCustomiser.contents().find("#bigWatchFace image#diamonds-big").attr( "xlink:href", "http://timeincolors.net/wp-content/themes/theluxury-v1-05/customizer/_templates/deepsea/rounddiamonds-big.png" );
    _svgCustomiser.contents().find("#Layer_18 image#diamonds-yacht").attr( "xlink:href", "http://timeincolors.net/wp-content/themes/theluxury-v1-05/customizer/_templates/yachtmaster/rounddiamonds.png" );
    _svgCustomiser.contents().find("#BigWatchFace_1_ image#diamonds-big-yacht").attr( "xlink:href", "http://timeincolors.net/wp-content/themes/theluxury-v1-05/customizer/_templates/yachtmaster/rounddiamonds-big.png" );
    _svgCustomiser.contents().find("#BigWatchFace image#diamonds-big").attr( "xlink:href", "http://timeincolors.net/wp-content/themes/theluxury-v1-05/customizer/_templates/gmt-master2/rounddiamonds-big.png" );
    var _diamonds_type = $(this).text().replace(/^\s+|\s+$/g,'');
    $(".wpuf-fields #diamonds_type").val(_diamonds_type);
});


$('#dialContents.clicked ul > li > ul > li > a').live('click', function() {
    $("#dialContents").removeClass("clicked");
    var currentValue = $("#the-watchPrice span").text();
    var newValue = parseInt(currentValue) + 250 ;
    $("#the-watchPrice span").text(newValue);
});


$('#bezelContents.clicked ul > li > ul > li > a').live('click', function() {
    $("#bezelContents").removeClass("clicked");
    $("#removeBezel").addClass("clicked");
    var currentValue = $("#the-watchPrice span").text();
    var newValue = parseInt(currentValue) + 250 ;
    $("#the-watchPrice span").text(newValue);
});

$('#handsContents.clicked ul > li > ul > li > a').live('click', function() {
    $("#handsContents").removeClass("clicked");
    var currentValue2 = $("#the-watchPrice span").text();
    var newValue2 = parseInt(currentValue2) + 250 ;
    $("#the-watchPrice span").text(newValue2);
});

$('#diamondsContents.clicked ul > li > ul > li > a').live('click', function() {
    $("#diamondsContents").removeClass("clicked");
    $("#removeDiamonds").addClass("clicked");
    var currentValue3 = $("#the-watchPrice span").text();
    var newValue3 = parseInt(currentValue3) + 250 ;
    $("#the-watchPrice span").text(newValue3);
});

$('#removeBezel.clicked').live('click', function() {
    $(this).removeClass("clicked");
    _svgCustomiser.contents().find("#watchStrap_1_ image#bezel").attr( "xlink:href", "" );
    _svgCustomiser.contents().find("#bezelMarkers2 image#bezel").attr( "xlink:href", "" );
    _svgCustomiser.contents().find("#Layer_18 image#bezel").attr( "xlink:href", "");
    $("#bezelContents").addClass("clicked");
    var currentValue = $("#the-watchPrice span").text();
    var newValue = parseInt(currentValue) - 250 ;
    $("#the-watchPrice span").text(newValue);
});

$('#removeDiamonds.clicked').live('click', function() {
    $(this).removeClass("clicked");
    _svgCustomiser.contents().find("#smallWatch image#diamonds").attr( "xlink:href", "" );
    _svgCustomiser.contents().find("#bigWatch image#diamonds-big").attr( "xlink:href", "" );
    _svgCustomiser.contents().find("#Layer_18 image#diamonds").attr( "xlink:href", "");
    _svgCustomiser.contents().find("#BIGwatchFace_1_ image#diamonds-big").attr( "xlink:href", "" );
    _svgCustomiser.contents().find("#bigWatchFace image#diamonds-big").attr( "xlink:href", "" );
    _svgCustomiser.contents().find("#bezelMarkers2 image#diamonds").attr( "xlink:href", "" );
    _svgCustomiser.contents().find("#smallWatchFace image#diamonds").attr( "xlink:href", "" );
    _svgCustomiser.contents().find("#Layer_18 image#diamonds-yacht").attr( "xlink:href", "" );
    _svgCustomiser.contents().find("#BigWatchFace_1_ image#diamonds-big-yacht").attr( "xlink:href", "" );
    _svgCustomiser.contents().find("#BigWatchFace image#diamonds-big").attr( "xlink:href", "" );
    $("#diamondsContents").addClass("clicked");
    var currentValue = $("#the-watchPrice span").text();
    var newValue = parseInt(currentValue) - 250 ;
    $("#the-watchPrice span").text(newValue);
});

$('#watch_submit a').live('click', function() {
    var _watch = $("#customiserLeft h2.watchModelName").text();
    var _price = $("#the-watchPrice span").text();
    $(".wpuf-fields #post_title").val(_watch);
    $(".wpuf-fields #_price").val(_price);
});

$(document).ready(function(){
    $(".wpuf-form .wpuf-submit input[type='submit']").val("View Item");
    $("#luminescentIndices li").click(function(){
        var luminescentIndices = $(this).attr("data-colour");
        $(".wpuf-fields #luminescent_indices").val(luminescentIndices);
    });
    $("#bezelMarkers li").click(function(){
        var bezelMarkers = $(this).attr("data-colour");
        $(".wpuf-fields #bezel_markers").val(bezelMarkers);
    });
    $("#dateNumber li").click(function(){
        var dateNumber = $(this).attr("data-colour");
        $(".wpuf-fields #date").val(dateNumber);
    });
    $("#dateWheel li").click(function(){
        var dateWheel = $(this).attr("data-colour");
        $(".wpuf-fields #date_wheel").val(dateWheel);
    });
    $("#dial li").click(function(){
        var dial = $(this).attr("data-colour");
        $(".wpuf-fields #dial").val(dial);
    });
    $("#logo li").click(function(){
        var logo = $(this).attr("data-colour");
        $(".wpuf-fields #logo").val(logo);
    });
    $("#secondHand li").click(function(){
        var secondHand = $(this).attr("data-colour");
        $(".wpuf-fields #second_hand").val(secondHand);
    });
    $("#twentyFourHourHand li").click(function(){
        var twentyFourHourHand = $(this).attr("data-colour");
        $(".wpuf-fields #24hr_hand").val(twentyFourHourHand);
    });
    $("#secondHand li").click(function(){
        var secondHand = $(this).attr("data-colour");
        $(".wpuf-fields #second_hand").val(secondHand);
    });
    $("#daytonaText li").click(function(){
        var daytonaText = $(this).attr("data-colour");
        $(".wpuf-fields #daytona_text").val(daytonaText);
    });
    $("#secondMarkers li").click(function(){
        var secondMarkers = $(this).attr("data-colour");
        $(".wpuf-fields #second_markers").val(secondMarkers);
    });
    $("#minuteMarkers li").click(function(){
        var minuteMarkers = $(this).attr("data-colour");
        $(".wpuf-fields #minute_markers").val(minuteMarkers);
    });

    $("#chronoDials li").click(function(){
        var chronoDials = $(this).attr("data-colour");
        $(".wpuf-fields #chrono_dials").val(chronoDials);
    });
    $("#chronoMarkers li").click(function(){
        var chronoMarkers = $(this).attr("data-colour");
        $(".wpuf-fields #chrono_markers").val(chronoMarkers);
    });
    $("#chronoRings li").click(function(){
        var chronoRings = $(this).attr("data-colour");
        $(".wpuf-fields #chrono_rings").val(chronoRings);
    });
    $("#chronoHands li").click(function(){
        var chronoHands = $(this).attr("data-colour");
        $(".wpuf-fields #chrono_hands").val(chronoHands);
    });
    $("#big369 li").click(function(){
        var big369 = $(this).attr("data-colour");
        $(".wpuf-fields #369").val(big369);
    });
});
