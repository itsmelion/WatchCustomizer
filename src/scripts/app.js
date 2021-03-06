jQuery(function ($) {

    var isSafari = navigator.userAgent.indexOf('Safari') > -1;

    var loadScript = function (src, loadCallback) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = src;
        s.onload = loadCallback;
        document.body.appendChild(s);
    };

    if (isSafari) {
        loadScript('//cdnjs.cloudflare.com/ajax/libs/webshim/1.15.10/dev/polyfiller.js', function () {
            webshims.setOptions('forms', {
                overrideMessages: true,
                replaceValidationUI: false
            });
            webshims.setOptions({
                waitReady: true
            });
            webshims.polyfill();
        });
    }

    function toggleIcon(e) {
        $(e.target)
            .prev('.panel-heading')
            .find(".more-less")
            .toggleClass('glyphicon-plus glyphicon-minus');
    }
    $('.panel-group').on('hidden.bs.collapse', toggleIcon);
    $('.panel-group').on('shown.bs.collapse', toggleIcon);

    let categories = [];
    let metalTypes = [];
    let bezelTypes = [];

    $.getJSON("src/dummy/parts.json", function (obj) {
        $.each(obj, function (key, value) {
            if (key.toLowerCase() === "categories") {
                obj[key].forEach(element => {
                    categories.push(element);
                    mapCategories(element.key, element.values);
                });
            }
        });
    });


    function mapCategories(key, values) {
        switch (key) {
            case 'metal-type':
                metalTypes = values;
                break;
            case 'bezel-type':
                bezelTypes = values;
                break;
            default: break;
        }
    }

    function fillOptions() {

    }

    $('.target').click


    // Selecting watch options
    $('.opt-metal-type').click(function (event) {
        var contentPanelId = jQuery(this).attr("id");
        var currentMetalType = metalTypes.filter(x => x.key === contentPanelId)[0];
        $('.metal-type').attr('src', './src/images/' + currentMetalType.image)
        var url = "?metal-type=" + currentMetalType.description;
        // window.history.replaceState(null, null, url);
        if (history.pushState) {
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + url;
            window.history.pushState({ path: newurl }, '', newurl);
        }
    });
    $('.opt-bezel-type').click(function (event) {
        var contentPanelId = jQuery(this).attr("id");
        var currentBezelType = bezelTypes.filter(x => x.key === contentPanelId)[0];
        $('.bezel-type').attr('src', './src/images/' + currentBezelType.image)
        var url = "?bezel-type=" + currentBezelType.description;
        // window.history.replaceState(null, null, url);
        if (history.pushState) {
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + url;
            window.history.pushState({ path: newurl }, '', newurl);
        }
    });


    $(window).load(function () {
        $svg = $('#svgCustomiser').contents();
        // $('.customiserItemColourOptions ul li a').bind('click', handleColourChangeClick);
        watches = new Object();
        arrDesigns = new Array();
        isPOA = false;

        // watches.currentWatch = { indices: 'white', secondMarkers: 'metallic', minuteMarkers: 'metallic', dial: 'black', secondHand: 'lightGrey', logo: 'white', dialTextColour: 'white', dialText: '', caseText: '', caseTextDirection: 'horizontal', daytonaText: 'daytonaRed', chronoRings: 'metallic', chronoDials: 'black', chronoMarkers: 'black', chronoIndices: 'metallic', chronoHands: 'metallic' };

        // watches.defaultWatch = { indices: 'white', secondMarkers: 'metallic', minuteMarkers: 'metallic', dial: 'black', secondHand: 'lightGrey', logo: 'white', dialTextColour: 'white', dialText: '', caseText: '', caseTextDirection: 'horizontal', daytonaText: 'daytonaRed', chronoRings: 'metallic', chronoDials: 'black', chronoMarkers: 'black', chronoIndices: 'metallic', chronoHands: 'metallic' };
        // watches.tempWatch = { indices: '', secondMarkers: '', dial: '', minuteMarkers: '', secondHand: '', logo: '', dialTextColour: '', dialText: '', caseText: '', caseTextDirection: 'horizontal', daytonaText: '', chronoRings: '', chronoDials: '', chronoMarkers: '', chronoIndices: '', chronoHands: '' };

        // watches.watch_2 = { indices: 'black', secondMarkers: 'navy', minuteMarkers: 'navy', dial: 'black', secondHand: 'aqua', logo: 'aqua', dialTextColour: 'navy', dialText: '', caseText: '', caseTextDirection: 'horizontal', daytonaText: 'navy', chronoRings: 'black', chronoDials: 'black', chronoMarkers: 'aqua', chronoIndices: '', chronoHands: 'aqua' };

        // watches.watch_3 = { indices: 'white', secondMarkers: 'black', minuteMarkers: 'black', dial: 'aqua', secondHand: 'black', logo: 'white', dialTextColour: 'black', dialText: '', caseText: '', caseTextDirection: 'horizontal', daytonaText: 'white', chronoRings: 'black', chronoDials: 'black', chronoMarkers: 'aqua', chronoIndices: '', chronoHands: 'aqua' };

        // watches.watch_4 = { indices: 'black', secondMarkers: 'black', minuteMarkers: 'white', dial: 'green', secondHand: 'black', logo: 'black', dialTextColour: 'black', dialText: '', caseText: '', caseTextDirection: 'horizontal', daytonaText: 'red', chronoRings: 'black', chronoDials: 'green', chronoMarkers: 'green', chronoIndices: '', chronoHands: 'red' };

        // watches.watch_5 = { indices: 'black', secondMarkers: 'black', minuteMarkers: 'white', dial: 'red', secondHand: 'black', logo: 'black', dialTextColour: 'white', dialText: '', caseText: '', caseTextDirection: 'horizontal', daytonaText: 'black', chronoRings: 'black', chronoDials: 'black', chronoMarkers: 'red', chronoIndices: '', chronoHands: 'white' }

        $secondHand = $svg.find('#littleSecondHand');
        $minuteHand = $svg.find('#littleMinuteHand');
        $hourHand = $svg.find('#littleHourHand');
        $secondHand = $svg.find('#bigSecondHand');
        $minuteHand = $svg.find('#bigMinuteHand');
        $hourHand = $svg.find('#bigHourHand');
        $bigSecondHand = $svg.find('#bigSecondHand');
        $bigMinuteHand = $svg.find('#bigMinuteHand');
        $bigHourHand = $svg.find('#bigHourHand');

        currentDate = new Date();
        var currentSeconds = currentDate.getSeconds();
        var secondsDegrees = 0 - (180 + (currentSeconds * 6));
        var currentTransform = $secondHand.attr('transform');
        $secondHand.attr({ 'transform': alterRotate(currentTransform, secondsDegrees) });
        currentTransform = $bigSecondHand.attr('transform');
        $bigSecondHand.attr({ 'transform': alterRotate(currentTransform, secondsDegrees) });
        currentMinutes = currentDate.getMinutes();
        var minutesDegrees = 60 - (currentMinutes * 6);
        currentTransform = $minuteHand.attr('transform');
        $minuteHand.attr({ 'transform': alterRotate(currentTransform, minutesDegrees) });
        currentTransform = $bigMinuteHand.attr('transform');
        minutesDegrees = 60 - (currentMinutes * 6);
        $bigMinuteHand.attr({ 'transform': alterRotate(currentTransform, minutesDegrees) });
        currentHours = currentDate.getHours();
        if (currentHours > 12) {
            currentHours -= 12;
        }
        var hoursDegrees = 0 - (60 + ((currentHours * 30) + Math.round(currentMinutes / 2)));
        currentTransform = $hourHand.attr('transform');
        $hourHand.attr({ 'transform': alterRotate(currentTransform, hoursDegrees) });
        currentTransform = $bigHourHand.attr('transform');
        $bigHourHand.attr({ 'transform': alterRotate(currentTransform, hoursDegrees) });
        littleSecondsAnimation = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
        littleSecondsAnimation.setAttributeNS(null, 'attributeName', 'transform');
        littleSecondsAnimation.setAttributeNS(null, 'additive', 'sum');
        littleSecondsAnimation.setAttributeNS(null, 'accumulate', 'sum');
        littleSecondsAnimation.setAttributeNS(null, 'type', 'rotate');
        littleSecondsAnimation.setAttributeNS(null, 'repeatCount', 'indefinite');
        littleSecondsAnimation.setAttributeNS(null, 'fill', 'remove');
        littleSecondsAnimation.setAttributeNS(null, 'dur', '00.2s');
        littleSecondsAnimation.setAttributeNS(null, 'by', '-1.18');
        littleSecondsAnimation.setAttributeNS(null, 'begin', 'indefinite');
        littleSecondsAnimation.setAttributeNS(null, 'id', 'littleSecondsAnimation');
        $secondHand.append(littleSecondsAnimation);
        littleSecondsAnimation.beginElement();
        bigSecondsAnimation = document.createElementNS('http://www.w3.org/2000/svg', 'animateTransform');
        bigSecondsAnimation.setAttributeNS(null, 'attributeName', 'transform');
        bigSecondsAnimation.setAttributeNS(null, 'additive', 'sum');
        bigSecondsAnimation.setAttributeNS(null, 'accumulate', 'sum');
        bigSecondsAnimation.setAttributeNS(null, 'type', 'rotate');
        bigSecondsAnimation.setAttributeNS(null, 'repeatCount', 'indefinite');
        bigSecondsAnimation.setAttributeNS(null, 'fill', 'remove');
        bigSecondsAnimation.setAttributeNS(null, 'dur', '00.2s');
        bigSecondsAnimation.setAttributeNS(null, 'by', '-1.195');
        bigSecondsAnimation.setAttributeNS(null, 'begin', 'indefinite');
        $bigSecondHand.append(bigSecondsAnimation);
        bigSecondsAnimation.beginElement();
        var interval = setInterval(checkTime, 1000);
        // populateWatch();
    });

    function checkTime() {
        var nowDate = new Date();
        var newMinutes = nowDate.getMinutes();
        var newHours = nowDate.getHours();
        if (newHours > 12) {
            newHours -= 12;
        }
        if (newMinutes != currentMinutes) {
            currentMinutes = newMinutes;
            var minutesDegrees = 60 - (newMinutes * 6);
            currentTransform = $minuteHand.attr('transform');
            $minuteHand.attr({ 'transform': alterRotate(currentTransform, minutesDegrees) });
            currentTransform = $bigMinuteHand.attr('transform');
            minutesDegrees = 60 - (newMinutes * 6);
            $bigMinuteHand.attr({ 'transform': alterRotate(currentTransform, minutesDegrees) });
        }
        if (newHours != currentHours) {
            currentHours = newHours;
            var hoursDegrees = 0 - (60 + ((newHours * 30) + Math.round(currentMinutes / 2)));
            currentTransform = $hourHand.attr('transform');
            $hourHand.attr({ 'transform': alterRotate(currentTransform, hoursDegrees) });
            currentTransform = $bigHourHand.attr('transform');
            $bigHourHand.attr({ 'transform': alterRotate(currentTransform, hoursDegrees) });
        }
    }

    function alterRotate(currentValue, newValue) {
        var arrValues = currentValue.replace(/\) /gi, '),').split('\,')
        for (var i = 0; i < arrValues.length; i++) {
            if (arrValues[i].search('rotate') != -1) {
                arrValues[i] = 'rotate(' + newValue + ')';
            }
        }
        return arrValues;
    }

});

isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    iPad: function () {
        return navigator.userAgent.match(/iPad/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
