$(window).load(function () {
    $svg = $('#svgCustomiser').contents();
    $('.customiserItemColourOptions ul li a').bind('click', handleColourChangeClick);
    watches = {};
    arrDesigns = [];
    isPOA = false;

    watches.currentWatch = {
        indices: 'white',
        secondMarkers: 'metallic',
        minuteMarkers: 'metallic',
        dial: 'black',
        secondHand: 'lightGrey',
        logo: 'white',
        dialTextColour: 'white',
        dialText: '',
        caseText: '',
        caseTextDirection: 'horizontal',
        daytonaText: 'daytonaRed',
        chronoRings: 'metallic',
        chronoDials: 'black',
        chronoMarkers: 'black',
        chronoIndices: 'metallic',
        chronoHands: 'metallic'
    };

    watches.defaultWatch = {
        indices: 'white',
        secondMarkers: 'metallic',
        minuteMarkers: 'metallic',
        dial: 'black',
        secondHand: 'lightGrey',
        logo: 'white',
        dialTextColour: 'white',
        dialText: '',
        caseText: '',
        caseTextDirection: 'horizontal',
        daytonaText: 'daytonaRed',
        chronoRings: 'metallic',
        chronoDials: 'black',
        chronoMarkers: 'black',
        chronoIndices: 'metallic',
        chronoHands: 'metallic'
    };
    watches.tempWatch = {
        indices: '',
        secondMarkers: '',
        dial: '',
        minuteMarkers: '',
        secondHand: '',
        logo: '',
        dialTextColour: '',
        dialText: '',
        caseText: '',
        caseTextDirection: 'horizontal',
        daytonaText: '',
        chronoRings: '',
        chronoDials: '',
        chronoMarkers: '',
        chronoIndices: '',
        chronoHands: ''
    };

    watches.watch_2 = {
        indices: 'black',
        secondMarkers: 'navy',
        minuteMarkers: 'navy',
        dial: 'black',
        secondHand: 'aqua',
        logo: 'aqua',
        dialTextColour: 'navy',
        dialText: '',
        caseText: '',
        caseTextDirection: 'horizontal',
        daytonaText: 'navy',
        chronoRings: 'black',
        chronoDials: 'black',
        chronoMarkers: 'aqua',
        chronoIndices: '',
        chronoHands: 'aqua'
    };

    watches.watch_3 = {
        indices: 'white',
        secondMarkers: 'black',
        minuteMarkers: 'black',
        dial: 'aqua',
        secondHand: 'black',
        logo: 'white',
        dialTextColour: 'black',
        dialText: '',
        caseText: '',
        caseTextDirection: 'horizontal',
        daytonaText: 'white',
        chronoRings: 'black',
        chronoDials: 'black',
        chronoMarkers: 'aqua',
        chronoIndices: '',
        chronoHands: 'aqua'
    };

    watches.watch_4 = {
        indices: 'black',
        secondMarkers: 'black',
        minuteMarkers: 'white',
        dial: 'green',
        secondHand: 'black',
        logo: 'black',
        dialTextColour: 'black',
        dialText: '',
        caseText: '',
        caseTextDirection: 'horizontal',
        daytonaText: 'red',
        chronoRings: 'black',
        chronoDials: 'green',
        chronoMarkers: 'green',
        chronoIndices: '',
        chronoHands: 'red'
    };

    watches.watch_5 = {
        indices: 'black',
        secondMarkers: 'black',
        minuteMarkers: 'white',
        dial: 'red',
        secondHand: 'black',
        logo: 'black',
        dialTextColour: 'white',
        dialText: '',
        caseText: '',
        caseTextDirection: 'horizontal',
        daytonaText: 'black',
        chronoRings: 'black',
        chronoDials: 'black',
        chronoMarkers: 'red',
        chronoIndices: '',
        chronoHands: 'white'
    }

    $secondHand = $svg.find('#littleSecondHand');
    $minuteHand = $svg.find('#littleMinuteHand');
    $hourHand = $svg.find('#littleHourHand');
    $bigSecondHand = $svg.find('#bigSecondHand');
    $bigMinuteHand = $svg.find('#bigMinuteHand');
    $bigHourHand = $svg.find('#bigHourHand');
    currentDate = new Date();
    var currentSeconds = currentDate.getSeconds();
    var secondsDegrees = 0 - (180 + (currentSeconds * 6));
    var currentTransform = $secondHand.attr('transform');
    $secondHand.attr({
        'transform': alterRotate(currentTransform, secondsDegrees)
    });
    currentTransform = $bigSecondHand.attr('transform');
    $bigSecondHand.attr({
        'transform': alterRotate(currentTransform, secondsDegrees)
    });
    currentMinutes = currentDate.getMinutes();
    var minutesDegrees = 60 - (currentMinutes * 6);
    currentTransform = $minuteHand.attr('transform');
    $minuteHand.attr({
        'transform': alterRotate(currentTransform, minutesDegrees)
    });
    currentTransform = $bigMinuteHand.attr('transform');
    minutesDegrees = 60 - (currentMinutes * 6);
    $bigMinuteHand.attr({
        'transform': alterRotate(currentTransform, minutesDegrees)
    });
    currentHours = currentDate.getHours();
    if (currentHours > 12) {
        currentHours -= 12;
    }
    var hoursDegrees = 0 - (60 + ((currentHours * 30) + Math.round(currentMinutes / 2)));
    currentTransform = $hourHand.attr('transform');
    $hourHand.attr({
        'transform': alterRotate(currentTransform, hoursDegrees)
    });
    currentTransform = $bigHourHand.attr('transform');
    $bigHourHand.attr({
        'transform': alterRotate(currentTransform, hoursDegrees)
    });
    littleSecondsAnimation = document.createElementNS('//www.w3.org/2000/svg', 'animateTransform');
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
    bigSecondsAnimation = document.createElementNS('//www.w3.org/2000/svg', 'animateTransform');
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
    watchInterval = window.setInterval('checkTime()', 1000);
    populateWatch();
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
        $minuteHand.attr({
            'transform': alterRotate(currentTransform, minutesDegrees)
        });
        currentTransform = $bigMinuteHand.attr('transform');
        minutesDegrees = 60 - (newMinutes * 6);
        $bigMinuteHand.attr({
            'transform': alterRotate(currentTransform, minutesDegrees)
        });
    }
    if (newHours != currentHours) {
        currentHours = newHours;
        var hoursDegrees = 0 - (60 + ((newHours * 30) + Math.round(currentMinutes / 2)));
        currentTransform = $hourHand.attr('transform');
        $hourHand.attr({
            'transform': alterRotate(currentTransform, hoursDegrees)
        });
        currentTransform = $bigHourHand.attr('transform');
        $bigHourHand.attr({
            'transform': alterRotate(currentTransform, hoursDegrees)
        });
    }
}

function handleColourChangeClick(event) {
    var $item = $(event.currentTarget).parent();
    var topParent = $item.parent().parent();
    var changeArea = topParent.attr('id');
    var classVal = $item.data('colour');
    var colour = stColours[classVal];
    var newColour = colour;
    var img = $('.currentColour img', topParent);
    img.attr('src', '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/colourButtons/' + classVal + '_off.png');

    switch (changeArea) {
        case 'secondHand':
            $svg.find('#secondHand path').attr({
                'fill': '#' + newColour
            });
            watches.currentWatch.secondHand = classVal;
            break;
        case 'luminescentIndices':
            $svg.find('#indices path,#indices_3_ path').attr({
                'fill': '#' + newColour
            });
            $svg.find('#bigHourHand,#bigMinuteHand,#littleHourHand,#littleMinuteHand').attr({
                'style': 'fill:#' + newColour
            });
            watches.currentWatch.indices = classVal;
            break;
        case 'minuteMarkers':
            $svg.find('#fiveMinuteMarkers path,#fiveMinuteMarkers_1_ path').attr({
                'fill': '#' + newColour
            });
            watches.currentWatch.minuteMarkers = classVal;
            if (hexToColour(newColour) == 'metallic') {
                $svg.find('#fiveMinuteMarkersMetallic,#fiveMinuteMarkersMetallic_1_').show();
            } else {
                $svg.find('#fiveMinuteMarkersMetallic,#fiveMinuteMarkersMetallic_1_').hide();
            }
            break;
        case 'daytonaText':
            $svg.find('#daytonaText path,#daytonaText_2_ path').attr({
                'fill': '#' + newColour
            });
            watches.currentWatch.daytonaText = classVal;
            break;
        case 'chronoDials':
            $svg.find('#chronoDials circle,#chronoDials_1_ circle').attr({
                'fill': '#' + newColour
            });
            watches.currentWatch.chronoDials = classVal;
            break;
        case 'chronoRings':
            $svg.find('#chronoRings path,#chronoRings_1_ path').attr({
                'fill': '#' + newColour
            });
            watches.currentWatch.chronoRings = classVal;
            break;
        case 'chronoHands':
            $svg.find('#chronoHands path,#chronoHands_1_ path').attr({
                'fill': '#' + newColour
            });
            watches.currentWatch.chronoHands = classVal;
            break;
        case 'chronoMarkers':
            $svg.find('#chronoMarkers,#chronoMarkers_2_').attr({
                'fill': '#' + newColour
            });
            watches.currentWatch.chronoMarkers = classVal;
            break;
        case 'secondMarkers':
            $svg.find('#secondMarkers_2_,#secondMarkers').attr({
                'fill': '#' + newColour
            });
            watches.currentWatch.secondMarkers = classVal;
            break;
        case 'dial':
            $svg.find('#dial,#dial_3_').attr({
                'fill': '#' + newColour
            });
            watches.currentWatch.dial = classVal;
            break;
        case 'logo':
            $svg.find('#logo path,#logo_6_ path').attr({
                'fill': '#' + newColour
            });
            watches.currentWatch.logo = classVal;
            if (hexToColour(newColour) == 'metallic') {
                $svg.find('#logoMetallic,#logoMetallic_2_').show();
            } else {
                $svg.find('#logoMetallic,#logoMetallic_2_').hide();
            }
            break;
        case 'dialText':
            $svg.find('#dialText_4_,#dialText_1_').parent().attr({
                'fill': '#' + newColour
            });
            watches.currentWatch.dialTextColour = classVal;
            break;
    }
    if (watches.currentWatch.dial == watches.defaultWatch.dial && watches.currentWatch.chronoRings == watches.defaultWatch.chronoRings && watches.currentWatch.chronoHands == watches.defaultWatch.chronoHands && watches.currentWatch.chronoDial == watches.defaultWatch.chronoDial && watches.currentWatch.chronoMarkers == watches.defaultWatch.chronoMarkers) {
        $svg.find('#chronoRingsMetallic,#chronoRingsMetallic_1_').show();
    } else {
        $svg.find('#chronoRingsMetallic,#chronoRingsMetallic_1_').hide();
    }
    $('.customiserItemColour', topParent).removeClass('black white red navy yellow green aqua pink purple orange grey originalOrange lightGrey darkGrey britishRacingGreen ivory daytonaRed metallic').addClass(classVal);
    checkPrice();
}

function determineText(textItemToUse) {
    if (textItemToUse == 'caseTextEntry') {
        if (!$('#caseTextEntry').val().length) {
            return 'BAMFORD';
        } else {
            return $('#caseTextEntry').val().toUpperCase();
        }
    } else {
        if (!$('#dialTextEntry').val().length) {
            return 'BAMFORD';
        } else {
            return $('#dialTextEntry').val().toUpperCase();
        }
    }
}

function handleCaseTextChange() {}

function handleDialTextChange() {}

function checkCaseTextLength(event) {
    if ($('#caseTextEntry').val().length < 20 || (event.keyCode == 8 || event.keyCode == 48)) {
        //$('#caseTextEntry').val($('#caseTextEntry').val().toUpperCase());
        return true
    } else {
        return false
    }
}

function checkDialTextLength(event) {
    //console.log(event);
    if ($('#dialTextEntry').val().length < 9 || (event.keyCode == 8 || event.keyCode == 48)) {
        //$('#dialTextEntry').val($('#dialTextEntry').val().toUpperCase());
        return true
    } else {
        return false
    }
}

function checkPrice() {
    var defaultPrice = '&pound;15,500';
    var customPrice = '&pound;16,500';
    var isDefault = true;
    if (watches.currentWatch.indices != watches.defaultWatch.indices) {
        isDefault = false;
    }
    if (watches.currentWatch.daytonaText != watches.defaultWatch.daytonaText) {
        isDefault = false;
    }
    if (watches.currentWatch.minuteMarkers != watches.defaultWatch.minuteMarkers) {
        isDefault = false;
    }
    if (watches.currentWatch.secondMarkers != watches.defaultWatch.secondMarkers) {
        isDefault = false;
    }
    if (watches.currentWatch.dial != watches.defaultWatch.dial) {
        isDefault = false;
    }
    if (watches.currentWatch.secondHand != watches.defaultWatch.secondHand) {
        isDefault = false;
    }
    if (watches.currentWatch.chronoRings != watches.defaultWatch.chronoRings) {
        isDefault = false;
    }
    if (watches.currentWatch.chronoMarkers != watches.defaultWatch.chronoMarkers) {
        isDefault = false;
    }
    if (watches.currentWatch.chronoDials != watches.defaultWatch.chronoDials) {
        isDefault = false;
    }
    if (watches.currentWatch.chronoHands != watches.defaultWatch.chronoHands) {
        isDefault = false;
    }
    if (watches.currentWatch.logo != watches.defaultWatch.logo) {
        isDefault = false;
    }
    if (watches.currentWatch.dialTextColour != watches.defaultWatch.dialTextColour) {
        isDefault = false;
    }
    if (watches.currentWatch.dialText != watches.defaultWatch.dialText) {
        isDefault = false;
    }
    if (watches.currentWatch.caseText != watches.defaultWatch.caseText) {
        isDefault = false;
    }
    if (watches.currentWatch.caseTextDirection != watches.defaultWatch.caseTextDirection) {
        isDefault = false;
    }
    if (isPOA) {
        $('#watchPrice').html('POA');
    } else if (!isDefault) {
        $('#watchPrice').html(customPrice);
    } else {
        $('#watchPrice').html(defaultPrice);
    }

}
//function copyWatch(sourceWatch,targetWatch) {
//    watches[targetWatch] = {indices:watches[sourceWatch].indices, daytonaText:watches[sourceWatch].daytonaText, secondMarkers:watches[sourceWatch].secondMarkers,minuteMarkers:watches[sourceWatch].minuteMarkers, dial:watches[sourceWatch].dial, secondHand:watches[sourceWatch].secondHand, logo:watches[sourceWatch].logo, dialTextColour:watches[sourceWatch].dialTextColour, dialText:watches[sourceWatch].dialText, caseText:watches[sourceWatch].caseText, caseTextDirection:watches[sourceWatch].caseTextDirection,chronoHands:watches[sourceWatch].chronoHands,chronoDials:watches[sourceWatch].chronoDials,chronoMarkers:watches[sourceWatch].chronoMarkers,chronoRings:watches[sourceWatch].chronoRings};
//}
function populateWatch() {
    var colour = '';
    var newColour = '';
    var img = '';
    //INDICES
    colour = stColours[watches.currentWatch.indices];
    img = $('#luminescentIndices .currentColour img');
    img.attr('src', '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/colourButtons/' + watches.currentWatch.indices + '_off.png');
    $svg.find('#indices path,#indices_3_ path').attr({
        'fill': '#' + colour
    });
    $svg.find('#bigHourHand,#bigMinuteHand,#littleHourHand,#littleMinuteHand').attr({
        'style': 'fill:#' + colour
    });
    // DAYTONA TEXT
    colour = stColours[watches.currentWatch.daytonaText];
    img = $('#daytonaText .currentColour img');
    img.attr('src', '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/colourButtons/' + watches.currentWatch.daytonaText + '_off.png');
    $svg.find('#daytonaText path,#daytonaText_2_ path').attr({
        'fill': '#' + colour
    });
    // second Markers
    colour = stColours[watches.currentWatch.secondMarkers];
    img = $('#secondMarkers .currentColour img');
    img.attr('src', '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/colourButtons/' + watches.currentWatch.secondMarkers + '_off.png');
    $svg.find('#secondMarkers_2_,#secondMarkers').attr({
        'fill': '#' + colour
    });
    // minute Markers
    colour = stColours[watches.currentWatch.minuteMarkers];
    img = $('#minuteMarkers .currentColour img');
    img.attr('src', '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/colourButtons/' + watches.currentWatch.minuteMarkers + '_off.png');
    $svg.find('#fiveMinuteMarkers path,#fiveMinuteMarkers_1_ path').attr({
        'fill': '#' + colour
    });
    if (watches.currentWatch.minuteMarkers == 'metallic') {
        $svg.find('#fiveMinuteMarkersMetallic,#fiveMinuteMarkersMetallic_1_').show();
    } else {
        $svg.find('#fiveMinuteMarkersMetallic,#fiveMinuteMarkersMetallic_1_').hide();
    }
    // dial
    colour = stColours[watches.currentWatch.dial];
    img = $('#dial .currentColour img');
    img.attr('src', '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/colourButtons/' + watches.currentWatch.dial + '_off.png');
    $svg.find('#dial_3_,#dial').attr({
        'fill': '#' + colour
    });
    // second hand
    colour = stColours[watches.currentWatch.secondHand];
    img = $('#secondHand .currentColour img');
    img.attr('src', '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/colourButtons/' + watches.currentWatch.secondHand + '_off.png');
    $svg.find('#secondHand path').first().attr({
        'fill': '#' + colour
    });
    // logo
    colour = stColours[watches.currentWatch.logo];
    img = $('#logo .currentColour img');
    img.attr('src', '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/colourButtons/' + watches.currentWatch.logo + '_off.png');
    $svg.find('#logo path,#logo_6_ path').attr({
        'fill': '#' + colour
    });
    if (watches.currentWatch.logo == 'white') {
        $svg.find('#logoMetallic,#logoMetallic_2_').show();
    } else {
        $svg.find('#logoMetallic,#logoMetallic_2_').hide();
    }
    // chronoRings
    colour = stColours[watches.currentWatch.chronoRings];
    img = $('#chronoRings .currentColour img');
    img.attr('src', '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/colourButtons/' + watches.currentWatch.chronoRings + '_off.png');
    $svg.find('#chronoRings path,#chronoRings_1_ path').attr({
        'fill': '#' + colour
    });
    // chronoDials
    colour = stColours[watches.currentWatch.chronoDials];
    img = $('#chronoDials .currentColour img');
    img.attr('src', '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/colourButtons/' + watches.currentWatch.chronoDials + '_off.png');
    $svg.find('#chronoDials circle,#chronoDials_1_ circle').attr({
        'fill': '#' + colour
    });
    // chronoHands
    colour = stColours[watches.currentWatch.chronoHands];
    img = $('#chronoHands .currentColour img');
    img.attr('src', '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/colourButtons/' + watches.currentWatch.chronoHands + '_off.png');
    $svg.find('#chronoHands path,#chronoHands_1_ path').attr({
        'fill': '#' + colour
    });
    // chronoMarkers
    colour = stColours[watches.currentWatch.chronoMarkers];
    img = $('#chronoMarkers .currentColour img');
    img.attr('src', '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/colourButtons/' + watches.currentWatch.chronoMarkers + '_off.png');
    $svg.find('#chronoMarkers,#chronoMarkers_2_').attr({
        'fill': '#' + colour
    });
    // dial text
    colour = stColours[watches.currentWatch.dialTextColour];
    img = $('#dialText .currentColour img');
    img.attr('src', '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/colourButtons/' + watches.currentWatch.dialTextColour + '_off.png');
    $svg.find('#dialText_4_,#dialText_1_').parent().attr({
        'fill': '#' + colour
    });
    if (watches.currentWatch.dial == watches.defaultWatch.dial && watches.currentWatch.chronoRings == watches.defaultWatch.chronoRings && watches.currentWatch.chronoHands == watches.defaultWatch.chronoHands && watches.currentWatch.chronoDial == watches.defaultWatch.chronoDial && watches.currentWatch.chronoMarkers == watches.defaultWatch.chronoMarkers) {
        $svg.find('#chronoRingsMetallic,#chronoRingsMetallic_1_').show();
    } else {
        $svg.find('#chronoRingsMetallic,#chronoRingsMetallic_1_').hide();
    }
    // dial text entry
    $('#dialTextEntry').val(watches.currentWatch.dialText);
    // case text entry
    $('#caseTextEntry').val(watches.currentWatch.caseText);
    if (watches.currentWatch.caseTextDirection == 'horizontal') {
        $('#caseTextDirectionHorizontal').addClass('selected');
        $('#caseTextDirectionCurved').removeClass('selected');
        $('#caseTextDirection').val('horizontal');
    } else {
        $('#caseTextDirectionHorizontal').removeClass('selected');
        $('#caseTextDirectionCurved').addClass('selected');
        $('#caseTextDirection').val('curved');
    }
    handleCaseTextChange();
    handleDialTextChange();
    checkPrice();
}

function saveWatch() {
    var URLstring = 'index5af8.html?';
    URLstring += '&dial=' + watches.currentWatch.dial;
    URLstring += '&indices=' + watches.currentWatch.indices;
    URLstring += '&daytonaText=' + watches.currentWatch.daytonaText;
    URLstring += '&secondMarkers=' + watches.currentWatch.secondMarkers;
    URLstring += '&minuteMarkers=' + watches.currentWatch.minuteMarkers;
    URLstring += '&dialText=' + watches.currentWatch.dialTextColour;
    URLstring += '&chronoRings=' + watches.currentWatch.chronoRings;
    URLstring += '&chronoMarkers=' + watches.currentWatch.chronoMarkers;
    URLstring += '&chronoHands=' + watches.currentWatch.chronoHands;
    URLstring += '&chronoDials=' + watches.currentWatch.chronoDials;
    URLstring += '&logo=' + watches.currentWatch.logo;
    URLstring += '&secondHand=' + watches.currentWatch.secondHand;
    URLstring += '&caseDirection=' + watches.currentWatch.caseTextDirection;
    URLstring += '&dialsays=' + watches.currentWatch.dialText.toUpperCase();
    URLstring += '&casesays=' + watches.currentWatch.caseText.toUpperCase();
    URLstring += '&watch=' + loadWatch;
    URLstring += '&model=' + watchModel;
    URLstring += '&price=' + $('#watchPrice').text();
    window.location.href = URLstring;
}

function enquireBuyWatch() {
    var URLstring = 'index5af8.html?';
    URLstring += '&dial=' + watches.currentWatch.dial;
    URLstring += '&indices=' + watches.currentWatch.indices;
    URLstring += '&daytonaText=' + watches.currentWatch.daytonaText;
    URLstring += '&secondMarkers=' + watches.currentWatch.secondMarkers;
    URLstring += '&minuteMarkers=' + watches.currentWatch.minuteMarkers;
    URLstring += '&dialText=' + watches.currentWatch.dialTextColour;
    URLstring += '&chronoRings=' + watches.currentWatch.chronoRings;
    URLstring += '&chronoMarkers=' + watches.currentWatch.chronoMarkers;
    URLstring += '&chronoHands=' + watches.currentWatch.chronoHands;
    URLstring += '&chronoDials=' + watches.currentWatch.chronoDials;
    URLstring += '&logo=' + watches.currentWatch.logo;
    URLstring += '&secondHand=' + watches.currentWatch.secondHand;
    URLstring += '&caseDirection=' + watches.currentWatch.caseTextDirection;
    URLstring += '&dialsays=' + watches.currentWatch.dialText.toUpperCase();
    URLstring += '&casesays=' + watches.currentWatch.caseText.toUpperCase();
    URLstring += '&watch=' + loadWatch;
    URLstring += '&model=' + watchModel;
    URLstring += '&price=' + $('#watchPrice').text();
    window.location.href = URLstring;
}

function openFacebookShareWatch(event) {
    $(document).off(clickEvent, '#fbSharerRight ul li a', changeFacebookSharerColour);
    $.getJSON('_ajax/get_facebook_rolex_daytona.cfm', {
        rand: Math.random(),
        dial: watches.currentWatch.dial,
        indices: watches.currentWatch.indices,
        secondMarkers: watches.currentWatch.secondMarkers,
        dialText: watches.currentWatch.dialTextColour,
        logo: watches.currentWatch.logo,
        secondHand: watches.currentWatch.secondHand,
        dialSays: watches.currentWatch.dialText.toUpperCase(),
        daytonaText: watches.currentWatch.daytonaText,
        chronoRings: watches.currentWatch.chronoRings,
        chronoDials: watches.currentWatch.chronoDials,
        chronoMarkers: watches.currentWatch.chronoMarkers,
        chronoIndices: watches.currentWatch.chronoIndices,
        chronoHands: watches.currentWatch.chronoHands,
        colour: globals.fbSharer.colour
    }, function (data) {
        $(document).on(clickEvent, '#fbSharerRight ul li a', changeFacebookSharerColour);
        globals.fbSharer.useImg = data.IMG;
        globals.fbSharer.img.attr('src', '/_temp/' + data.IMG)
        showFacebookSharer();
    });
}

function postToFacebook() {
    FB.login(function (response) {
        if (response.status === 'connected') {
            $('#fbWaitIndicator').animate({
                'left': '0px'
            }, 600, 'easeInOutExpo', function () {
                $.ajax({
                    type: "POST",
                    url: "https://graph.facebook.com/me/photos",
                    data: {
                        message: "I just designed my own Daytona from Bamford Watch Department - //www.bamfordwatchdepartment.com",
                        url: '//www.bamfordwatchdepartment.com/_temp/' + globals.fbSharer.useImg,
                        access_token: response.authResponse.accessToken,
                        format: "json"
                    },
                    dataType: 'json',
                    success: function (data) {
                        $('#fbThanks').animate({
                            'left': '0px'
                        }, 600, 'easeInOutExpo');
                    }
                });
            });
        }
    }, {
        scope: "publish_stream"
    });
}
var showOriginalState = false;
var touchDevice = false;
var clickEvent = 'click';
var loadWatch = '';
var watchModel = 'rolex_daytona';
$(document).ready(function () {
    touchDevice = Modernizr.touch;
    if (touchDevice) {
        clickEvent = 'tap';
        $('#shareWatch').hide();
    }
    var images = {
        leftArrow: {
            on: new Image(),
            off: new Image()
        },
        rightArrow: {
            on: new Image(),
            off: new Image()
        }
    };
    setupTemplatesSlider();
    setupFacebookSharer();
    images.leftArrow.on.src = '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/on_arrowLeft2.png';
    images.leftArrow.off.src = '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/off_arrowLeft2.png';
    images.rightArrow.on.src = '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/on_arrowRight2.gif';
    images.rightArrow.off.src = '//eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/off_arrowRight2.gif';
    $('.arrows').hover(function () {
        var dir = $('img', this).attr('id');
        document.getElementById(dir).src = images[dir].on.src;
    }, function () {
        var dir = $('img', this).attr('id');
        document.getElementById(dir).src = images[dir].off.src;
    });
    //$('.customiserItem a').bind('click',handleColourOptionClick);
    //$('input[name="caseTextDirection"]').bind('click',handleCaseTextChange);
    $('#caseTextEntry').bind('keydown', checkCaseTextLength);
    $('#caseTextEntry').bind('keyup', handleCaseTextChange);
    $('#dialTextEntry').bind('keydown', checkDialTextLength);
    $('#dialTextEntry').bind('keyup', handleDialTextChange);
    $('#resetLink').bind(clickEvent, showOriginal);
    $('#saveLink').bind(clickEvent, saveWatch);
    $('#enquireBuyLink').bind(clickEvent, enquireBuyWatch);
    if (touchDevice) {
        $('#compareLink').bind(clickEvent, toggleOriginal);
    } else {
        $('#compareLink').bind('mousedown', showOriginal);
        $('#compareLink').bind('mouseup', showNew);
    }
    $(".colourPalette li a").click(handleColourChangeClick);

    $(document).on('hover', '.colourPalette li a', rolloverPalette);
    //  $(document).on(clickEvent, '.colourPalette li a',handleColourChangeClick);
    $(document).on(clickEvent, '#caseTextDirectionCurved,#caseTextDirectionHorizontal', handleCaseTextDirectionChange);
    // $(document).on(clickEvent,'.pullOutItems>li .currentColour,.pullOutItems>li>a',expandPalette);
    // $(document).on(click,'.button',expandPullOutItems);
    $(document).on(clickEvent, '#templatesWrapper>ul>li>ul>li a', useTemplate);
    $(document).on(clickEvent, '.sliderArrow', handleMoveSlide);
    $(document).on(clickEvent, '#shareIcon a,#shareText a', openFacebookShareWatch);
    $(document).on(clickEvent, '#fbSharerRight ul li a', changeFacebookSharerColour);
    $(document).on(clickEvent, '#fbOverlayClose a', closeFBOverlay);
    $(document).on(clickEvent, '#fbPost a', postToFacebook);
    //if (!Modernizr.input.placeholder) {
    //    $("input[placeholder]").each(function() {
    //        if ($(this).val()=="" && $(this).attr("placeholder")!="") {
    //            $(this).val($(this).attr("placeholder"));
    //            $(this).focus(function(){
    //                if ($(this).val()==$(this).attr("placeholder")) {
    //                    $(this).val("");
    //                }
    //            });
    //            $(this).blur(function() {
    //                if ($(this).val()=="") {
    //                    $(this).val($(this).attr("placeholder"));
    //                }
    //            });
    //        }
    //    });
    //}
    formatForTouchDevice();
});
$(document).ready(function () {
    // After load
    var metalUrl = $("#metalContents li:last").find("img").attr("src");
    $(".wpuf-fields #metal_url").val(metalUrl);
    var luminescentIndices = $("#luminescentIndices li").attr("data-colour");
    $(".wpuf-fields #luminescent_indices").val("#fff");
    var bezelMarkers = $("#bezelMarkers li").attr("data-colour");
    $(".wpuf-fields #bezel_markers").val(bezelMarkers);
    var dateNumber = $("#dateNumber li").attr("data-colour");
    $(".wpuf-fields #date").val(dateNumber);
    var dateWheel = $("#dateWheel li").attr("data-colour");
    $(".wpuf-fields #date_wheel").val(dateWheel);
    var dial = $("#dial li").attr("data-colour");
    $(".wpuf-fields #dial").val(dial);
    var logo = $("#logo li").attr("data-colour");
    $(".wpuf-fields #logo").val(logo);
    var secondHand = $("#secondHand li").attr("data-colour");
    $(".wpuf-fields #second_hand").val(secondHand);
    var twentyFourHourHand = $("#twentyFourHourHand li").attr("data-colour");
    $(".wpuf-fields #24hr_hand").val(twentyFourHourHand);
    var secondMarkers = $("#secondMarkers li").attr("data-colour");
    $(".wpuf-fields #second_markers").val(secondMarkers);
    var minuteMarkers = $("#minuteMarkers li").attr("data-colour");
    $(".wpuf-fields #minute_markers").val(minuteMarkers);
    var chronoDials = $("#chronoDials li").attr("data-colour");
    $(".wpuf-fields #chrono_dials").val(chronoDials);
    var chronoMarkers = $("#chronoMarkers li").attr("data-colour");
    $(".wpuf-fields #chrono_markers").val(chronoMarkers);
    var chronoRings = $("#chronoRings li").attr("data-colour");
    $(".wpuf-fields #chrono_rings").val(chronoRings);
    var big369 = $("#big369 li").attr("data-colour");
    $(".wpuf-fields #369").val(big369);
    var data_colhex1 = $("#luminescentIndices li a").attr("data-colhex");
    $(".wpuf-fields #color_luminescent_indices").val("#fff");
    var data_colhex2 = $("#secondMarkers li a").attr("data-colhex");
    $(".wpuf-fields #color_second_markers").val("#fff");
    var data_colhex3 = $("#minuteMarkers li a").attr("data-colhex");
    $(".wpuf-fields #color_minute_markers").val("#fff");
    var data_colhex4 = $("#dial li a").attr("data-colhex");
    $(".wpuf-fields #color_dial").val(data_colhex4);
    $(".wpuf-fields #color_logo").val("#fff");
    var data_colhex6 = $("#daytonaText li a").attr("data-colhex");
    $(".wpuf-fields #color_daytona_text").val(data_colhex6);
    var data_colhex7 = $("#secondHand li a").attr("data-colhex");
    $(".wpuf-fields #color_second_hand").val("#fff");
    var data_colhex8 = $("#chronoDials li a").attr("data-colhex");
    $(".wpuf-fields #color_chrono_dials").val(data_colhex8);
    var data_colhex9 = $("#chronoMarkers li a").attr("data-colhex");
    $(".wpuf-fields #color_chrono_markers").val(data_colhex9);
    var data_colhex10 = $("#chronoRings li a").attr("data-colhex");
    $(".wpuf-fields #color_chrono_rings").val(data_colhex10);
    var data_colhex11 = $("#chronoHands li a").attr("data-colhex");
    $(".wpuf-fields #color_chrono_hands").val(data_colhex11);
    var data_colhex12 = $("#bezelMarkers li a").attr("data-colhex");
    $(".wpuf-fields #color_bezel_markers").val(data_colhex12);
    var data_colhex13 = $("#dateNumber li a").attr("data-colhex");
    $(".wpuf-fields #color_date_number").val(data_colhex13);
    var data_colhex14 = $("#dateWheel li a").attr("data-colhex");
    $(".wpuf-fields #color_date_wheel").val(data_colhex14);
    var data_colhex15 = $("#twentyFourHourHand li a").attr("data-colhex");
    $(".wpuf-fields #color_twenty_four_hour_hand").val(data_colhex15);
    var data_colhex16 = $("#big369 li a").attr("data-colhex");
    $(".wpuf-fields #color_big369").val(data_colhex16);
});