jQuery(function ($) {

    var isSafari = navigator.userAgent.indexOf('Safari') > -1;

    var loadScript = function (src, loadCallback) {
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = src;
        s.onload = loadCallback;
        document.body.appendChild(s);
    };


    var scrollTo = getParameterByName('scrollTo');
    if (scrollTo != '') {
        jQuery('html, body').animate({
            scrollTop: jQuery("div#" + scrollTo).offset().top - 80
        }, 800);
    }

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

    $.getJSON("src/dummy/parts.json", function (obj) {
        $.each(obj, function (key, value) {

            if (key.toLowerCase() === "categories") {
                console.log(obj);
            }

            $(".watch-container").append('<img class="watch-images" src="src/images/' + '"')
            // $("ul").append("<li>" + value.name + "'s age is : " + value.age + "</li>");
        });
    });


    $('.target').click

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

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


var stColours = {
    black:'000000',
    white:'FFFFFF',
    red:'9C1000',
    navy:'222C9B',
    yellow:'F0EC0D',
    green:'006600',
    aqua:'6DA2C4',
    pink:'CC175A',
    purple:'5700A0',
    orange:'F04E10',
    originalOrange:'E66B32',
    grey:'A2A1A0',
    lightGrey:'CCCCCC',
    darkGrey:'333333',
    racingGreen:'004225',
    stdGreen:'C7E1AF',
    ivory:'FFFFCC',
    daytonaRed:'591725',
    metallic:'A2A1A0',
    olive:'4D6527'
};

basketWatches = {};
accountWatches = {};

function colourToHex(colour) {
    try {
        return stColours[colour];
    }
    catch(err) {
        return '000000';	
    }
}

function hexToColour(hex) {
    for (var key in stColours) {
        if (stColours[key].toUpperCase() == hex.toUpperCase()) {
            return key;
            break;
        }
    }
}

function formatForTouchDevice() {
    if (touchDevice) {
        $('#topBasket,#siteLogo,#topBreak,#navHorizontal,#footer,.bottomShareIcons').remove();
        $('#outer').css({'paddingBottom':'0px'});
        $('#touchMenuToggle').show();
        $(document).on(clickEvent,'#touchMenuToggle a',function() {
            if ($('#touchMenu').is(':hidden')) {
                $('#touchMenu').show('slide', {direction: 'right'}, 500);
                $('#touchMenuToggle a img').attr('src','images/arrow_right.png');
            } else {
                $('#touchMenu').hide('slide', {direction: 'right'}, 500);
                $('#touchMenuToggle a img').attr('src','images/arrow_left.png');
            }
        });
    }
}

function handleColourOptionClick(event) {
    $('.customiserItemColourOptions').hide();
    var $item = $(event.currentTarget).parent().parent();
    $item.find('.customiserItemColourOptions').show();
}

function populateWatches(watchID,populateType) {
    switch (populateType) {
        case 'myDesigns':
            var watchObj = watches["watch_"+watchID];
            switch (watchObj.model.toLowerCase()) {
                case 'rolex_explorer-i':
                    populateMyDesignsExplorerI(watchID);
                    break;
                case 'rolex_submariner':
                    populateMyDesignsSubmariner(watchID);
                    break;
                case 'rolex_submariner-nodate':
                    populateMyDesignsSubmarinerNoDate(watchID);
                    break;
                case 'rolex_yachtmaster':
                    populateMyDesignsYachtmaster(watchID);
                    break;
                case 'rolex_gmtmaster-ii':
                    populateMyDesignsGMTMasterII(watchID);
                    break;
                case 'rolex_daytona':
                    populateMyDesignsDaytona(watchID);
                    break;
                case 'rolex_explorer-ii':
                    populateMyDesignsExplorerII(watchID);
                    break;
                case 'tag_monaco':
                    populateMyDesignsMonaco(watchID);
                    break;
                case 'rolex_deepsea-sea-dweller':
                    populateMyDesignsDeepseaSeaDweller(watchID);
                    break;
                case 'rolex_milgauss-bf':
                    populateMyDesignsMilgaussBF(watchID);
                    break;
                case 'rolex_milgauss-wf':
                    populateMyDesignsMilgaussWF(watchID);
                    break;
                case 'panerai_luminor-marina':
                    populateMyDesignsPaneraiLuminorMarina(watchID);
                    break;
                default:
                    console.log(watchObj);
            }
            break;
        case 'account':
            var watchObj = accountWatches["watch_"+watchID];
            switch (watchObj.model.toLowerCase()) {
                case 'rolex_explorer-i':
                    populateAccountExplorerI(watchID);
                    break;
                case 'rolex_submariner':
                    populateAccountSubmariner(watchID);
                    break;
                case 'rolex_submariner-nodate':
                    populateAccountSubmarinerNoDate(watchID);
                    break;
                case 'rolex_yachtmaster':
                    populateAccountYachtmaster(watchID);
                    break;
                case 'rolex_gmtmaster-ii':
                    populateAccountGMTMasterII(watchID);
                    break;
                case 'rolex_daytona':
                    populateAccountDaytona(watchID);
                    break;
                case 'rolex_explorer-ii':
                    populateAccountExplorerII(watchID);
                    break;
                case 'tag_monaco':
                    populateAccountMonaco(watchID);
                    break;
                case 'rolex_deepsea-sea-dweller':
                    populateAccountDeepseaSeaDweller(watchID);
                    break;
                case 'rolex_milgauss-bf':
                    populateAccountMilgaussBF(watchID);
                    break;
                case 'rolex_milgauss-wf':
                    populateAccountMilgaussWF(watchID);
                    break;
                case 'panerai_luminor-marina':
                    populateAccountPaneraiLuminorMarina(watchID);
                    break;
                default:
                    console.log(watchObj);
            }
            break;
        case 'basket':
            var watchObj = basketWatches["watch_"+watchID];
            switch (watchObj.model.toLowerCase()) {
                case 'rolex_explorer-i':
                    populateBasketExplorerI(watchID);
                    break;
                case 'rolex_submariner':
                    populateBasketSubmariner(watchID);
                    break;
                case 'rolex_submariner-nodate':
                    populateBasketSubmarinerNoDate(watchID);
                    break;
                case 'rolex_yachtmaster':
                    populateBasketYachtmaster(watchID);
                    break;
                case 'rolex_gmtmaster-ii':
                    populateBasketGMTMasterII(watchID);
                    break;
                case 'rolex_daytona':
                    populateBasketDaytona(watchID);
                    break;
                case 'rolex_explorer-ii':
                    populateBasketExplorerII(watchID);
                    break;
                case 'tag_monaco':
                    populateBasketMonaco(watchID);
                    break;
                case 'rolex_deepsea-sea-dweller':
                    populateBasketDeepseaSeaDweller(watchID);
                    break;
                case 'rolex_milgauss-bf':
                    populateBasketMilgaussBF(watchID);
                    break;
                case 'rolex_milgauss-wf':
                    populateBasketMilgaussWF(watchID);
                    break;
                case 'panerai_luminor-marina':
                    populateBasketPaneraiLuminorMarina(watchID);
                    break;
                default:
                    console.log(watchObj);
            }
            break;
                
        case 'enquiry':
            switch (objWatch.model.toLowerCase()) {
                case 'rolex_explorer-i':
                    populateEnquiryExplorerI(objWatch);
                    break;
                case 'rolex_submariner':
                    populateEnquirySubmariner(objWatch);
                    break;
                case 'rolex_submariner-nodate':
                    populateEnquirySubmarinerNoDate(objWatch);
                    break;
                case 'rolex_yachtmaster':
                    populateEnquiryYachtmaster(objWatch);
                    break;
                case 'rolex_gmtmaster-ii':
                    populateEnquiryGMTMasterII(objWatch);
                    break;
                case 'rolex_daytona':
                    populateEnquiryDaytona(objWatch);
                    break;
                case 'rolex_explorer-ii':
                    populateEnquiryExplorerII(objWatch);
                    break;
                case 'tag_monaco':
                    populateEnquiryMonaco(objWatch);
                    break;
                case 'rolex_deepsea-sea-dweller':
                    populateEnquiryDeepseaSeaDweller(objWatch);
                    break;
                case 'rolex_milgauss-bf':
                    populateEnquiryMilgaussBF(objWatch);
                    break;
                case 'rolex_milgauss-wf':
                    populateEnquiryMilgaussWF(objWatch);
                    break;
                case 'panerai_luminor-marina':
                    populateEnquiryPaneraiLuminorMarina(objWatch);
                    break;
                default:
                    console.log(objWatch);	
            }
            
            break;
    }
    
}



function populateMyDesignsExplorerI(watchID) {
    var objWatch = watches["watch_"+watchID];
    var $watchDoc = $('#myDesigns_'+watchID).contents();
    //indices
    $watchDoc.find('#indices_15_,#faceIndices_1_ path,#indices_24_,#indices_23_,#indices_22_,#indices_21_,#indices_20_,#indices_14_').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand,#littleHourHand,#littleMinuteHand,#littleSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //3 6 9
    $watchDoc.find('#big369_1_ path').attr({'fill':'#'+colourToHex(objWatch.big369)});
    // SecondMarkers
    $watchDoc.find('#secondMarkers_1_ path').attr({'fill':'#'+colourToHex(objWatch.secondMarkers)});
    // Dial
    $watchDoc.find('#dial_1_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#secondHand_3_ path').first().attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo_1_ path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Dial Text
    $watchDoc.find('#dialText_1_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_1_').text(objWatch.dialText);			
}

function populateEnquiryExplorerI(objWatch) {
    var $watchDoc = $('#enquiryWatch').contents();
    //indices
    $watchDoc.find('#indices_15_,#faceIndices_4_ path,#faceIndices_1_ path,#indices_24_,#indices_23_,#indices_22_,#indices_21_,#indices_20_,#indices_14_').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand,#littleHourHand,#littleMinuteHand,#littleSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //3 6 9
    $watchDoc.find('#big369_4_ path,#big369_1_ path').attr({'fill':'#'+colourToHex(objWatch.big369)});
    // SecondMarkers
    $watchDoc.find('#secondMarkers_4_ path,#secondMarkers_1_ path').attr({'fill':'#'+colourToHex(objWatch.secondMarkers)});
    // Dial
    $watchDoc.find('#dial_4_,#dial_2_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#secondHand_3_ path').first().attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo_1_ path,#logo_4_ path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Dial Text
    $watchDoc.find('#dialText_1_,#dialText_4_').attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_1_,#dialText_4_').text(objWatch.dialText);		
}

function populateBasketExplorerI(watchID) {
    var objWatch = basketWatches["watch_"+watchID];
    var $thisWatchDoc = $('#basketWatch_'+watchID).contents();
    //console.log($thisWatchDoc);
    //indices
    $thisWatchDoc.find('#indices_15_,#faceIndices_1_ path,#indices_24_,#indices_23_,#indices_22_,#indices_21_,#indices_20_,#indices_14_').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $thisWatchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand,#littleHourHand,#littleMinuteHand,#littleSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //3 6 9
    $thisWatchDoc.find('#big369_1_ path').attr({'fill':'#'+colourToHex(objWatch.big369)});
    // SecondMarkers
    $thisWatchDoc.find('#secondMarkers_1_ path').attr({'fill':'#'+colourToHex(objWatch.secondMarkers)});
    // Dial
    $thisWatchDoc.find('#dial_1_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $thisWatchDoc.find('#secondHand_3_ path').first().attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $thisWatchDoc.find('#logo_1_ path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Dial Text
    $thisWatchDoc.find('#dialText_1_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $thisWatchDoc.find('#dialText_1_').text(objWatch.dialText);
    // background
    
    $thisWatchDoc.find('#bgRect').attr({'fill':'#D3E2EF'});
    //console.log($thisWatchDoc.find('#bgRect').attr('fill'));
}

function populateAccountExplorerI(watchID) {
    var objWatch = accountWatches["watch_"+watchID];
    var $watchDoc = $('#accountWatch_'+watchID).contents();
    //indices
    $watchDoc.find('#indices_15_,#faceIndices_1_ path,#indices_24_,#indices_23_,#indices_22_,#indices_21_,#indices_20_,#indices_14_').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand,#littleHourHand,#littleMinuteHand,#littleSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //3 6 9
    $watchDoc.find('#big369_1_ path').attr({'fill':'#'+colourToHex(objWatch.big369)});
    // SecondMarkers
    $watchDoc.find('#secondMarkers_1_ path').attr({'fill':'#'+colourToHex(objWatch.secondMarkers)});
    // Dial
    $watchDoc.find('#dial_1_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#secondHand_3_ path').first().attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo_1_ path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Dial Text
    $watchDoc.find('#dialText_1_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_1_').text(objWatch.dialText);
    // background
    if (objWatch.oddWatch) {
        $watchDoc.find('#Layer_6 rect').attr({'fill':'#E5E5E5'});
    } else {
        $watchDoc.find('#Layer_6 rect').attr({'fill':'#FFFFFF'});	
    }
}

function populateMyDesignsSubmariner(watchID) {
    var objWatch = watches["watch_"+watchID];
    var $watchDoc = $('#myDesigns_'+watchID).contents();
    //console.log($watchDoc);
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').text(currentDay);
    //indices
    $watchDoc.find('#indices circle,#indices polygon,#indices path,#indices rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //bezelMarkers
    $watchDoc.find('#bezelMarkers path,#bezelMarkers polygon').attr({'fill':'#'+colourToHex(objWatch.bezelMarkers)});
    // Dial
    $watchDoc.find('#dial_4_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path,#logo rect, #whitelines_1_').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel_2_ path').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);
    // background		
    $watchDoc.find('#bgRect').attr({'fill':'#D3E2EF'});
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M92,122h15'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M46,128h50'});
    }
}

function populateEnquirySubmariner(objWatch) {
    var $watchDoc = $('#enquiryWatch').contents();
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').text(currentDay);
    //indices
    $watchDoc.find('#indices_1_ circle,#indices_1_ polygon,#indices_1_ path,#indices_1_ rect,#indices_2_ circle,#indices_2_ polygon,#indices_2_ path,,#indices_2_ rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand,#littleHourHand,#littleMinuteHand,#littleSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //bezelMarkers
    $watchDoc.find('#bezelMarkers path,#bezelMarkers polygon').attr({'fill':'#'+colourToHex(objWatch.bezelMarkers)});
    // Dial
    $watchDoc.find('#dial_2_,#dial_4_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_ path').first().attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path,#logo_1_ path,#logo rect,#logo_1_ rect,#whitelines_2_,#whitelines_1_').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel_1_ path,#dateWheel_2_ path').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_,#dialText_5_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_,#dialText_5_').text(objWatch.dialText);	
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M323,129h12'});
        $watchDoc.find('#largeDatePath').attr({'d':'M175,137h40'});
        $watchDoc.find('#smallDialTextPath').attr({'d':'M290,136h20'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M81,152h75'});
    }
}

function populateBasketSubmariner(watchID) {
    var objWatch = basketWatches["watch_"+watchID];
    var $watchDoc = $('#basketWatch_'+watchID).contents();
    //console.log($watchDoc);
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').text(currentDay);
    //indices
    $watchDoc.find('#indices circle,#indices polygon,#indices path,#indices rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    // Dial
    $watchDoc.find('#dial_2_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path,#whitelines_1_').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel_1_ path').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);
    // background		
    $watchDoc.find('#bgRect').attr({'fill':'#D3E2EF'});
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M66,50h25'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M35,57h30'});
    }
}

function populateAccountSubmariner(watchID) {
    var objWatch = accountWatches["watch_"+watchID];
    var $watchDoc = $('#accountWatch_'+watchID).contents();
    //console.log($watchDoc);
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').text(currentDay);
    //indices
    $watchDoc.find('#indices circle,#indices polygon,#indices path,#indices rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    // Dial
    $watchDoc.find('#dial_2_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_ path').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path,#whitelines_1_').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel_1_ path').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);		
    // background
    if (objWatch.oddWatch) {
        $watchDoc.find('#bgRect').attr({'fill':'#E5E5E5'});
    } else {
        $watchDoc.find('#bgRect').attr({'fill':'#FFFFFF'});	
    }
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M66,50h25'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M35,57h30'});
    }
}

function populateMyDesignsSubmarinerNoDate(watchID) {
    var objWatch = watches["watch_"+watchID];
    var $watchDoc = $('#myDesigns_'+watchID).contents();
    //console.log($watchDoc);
    //indices
    $watchDoc.find('#indices circle,#indices polygon,#indices path,#indices rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //bezelMarkers
    $watchDoc.find('#bezelMarkers path,#bezelMarkers polygon').attr({'fill':'#'+colourToHex(objWatch.bezelMarkers)});
    // Dial
    $watchDoc.find('#dial_4_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path,#logo rect, #whitelines_1_').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);
    // background		
    $watchDoc.find('#bgRect').attr({'fill':'#D3E2EF'});
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#largeDialTextPath').attr({'d':'M46,128h50'});
    }
}

function populateEnquirySubmarinerNoDate(objWatch) {
    var $watchDoc = $('#enquiryWatch').contents();
    //indices
    $watchDoc.find('#indices_1_ circle,#indices_1_ polygon,#indices_1_ path,#indices_1_ rect,#indices_2_ circle,#indices_2_ polygon,#indices_2_ path,,#indices_2_ rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand,#littleHourHand,#littleMinuteHand,#littleSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //bezelMarkers
    $watchDoc.find('#bezelMarkers path,#bezelMarkers polygon').attr({'fill':'#'+colourToHex(objWatch.bezelMarkers)});
    // Dial
    $watchDoc.find('#dial_2_,#dial_4_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_ path').first().attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path,#logo_1_ path,#logo rect,#logo_1_ rect,#whitelines_2_,#whitelines_1_').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Dial Text
    $watchDoc.find('#dialText_2_,#dialText_5_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_,#dialText_5_').text(objWatch.dialText);	
    if (BrowserDetect.browser=='Firefox') {
    
        $watchDoc.find('#smallDialTextPath').attr({'d':'M290,136h20'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M81,152h75'});
    }
}

function populateBasketSubmarinerNoDate(watchID) {
    var objWatch = basketWatches["watch_"+watchID];
    var $watchDoc = $('#basketWatch_'+watchID).contents();
    //console.log($watchDoc);
    //indices
    $watchDoc.find('#indices circle,#indices polygon,#indices path,#indices rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    // Dial
    $watchDoc.find('#dial_2_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path,#whitelines_1_').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);
    // background		
    $watchDoc.find('#bgRect').attr({'fill':'#D3E2EF'});
    if (BrowserDetect.browser=='Firefox') {
        
        $watchDoc.find('#largeDialTextPath').attr({'d':'M35,57h30'});
    }
}

function populateAccountSubmarinerNoDate(watchID) {
    var objWatch = accountWatches["watch_"+watchID];
    var $watchDoc = $('#accountWatch_'+watchID).contents();
    //console.log($watchDoc);
    //indices
    $watchDoc.find('#indices circle,#indices polygon,#indices path,#indices rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    // Dial
    $watchDoc.find('#dial_2_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_ path').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path,#whitelines_1_').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);		
    // background
    if (objWatch.oddWatch) {
        $watchDoc.find('#bgRect').attr({'fill':'#E5E5E5'});
    } else {
        $watchDoc.find('#bgRect').attr({'fill':'#FFFFFF'});	
    }
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#largeDialTextPath').attr({'d':'M35,57h30'});
    }
}

function populateMyDesignsYachtmaster(watchID) {
    var objWatch = watches["watch_"+watchID];
    var $watchDoc = $('#myDesigns_'+watchID).contents();
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').text(currentDay);
    //indices
    $watchDoc.find('#indices_3_ circle,#indices_3_ polygon,#indices_3_ path,#indices_4_ circle,#indices_4_ polygon,#indices_4_ path,#indicesBorders circle,#indicesBorders polygon,#indicesBorders path,#indices_2_ circle,#indices_2_ polygon,#indices_2_ path').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand,#littleHourHand,#littleMinuteHand,#littleSecondHand,#bigTwentyFourHourHand,#littleTwentyFourHourHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //bezelMarkers
    $watchDoc.find('#bezelMarkers path,#bezelMarkers polygon,#bezelMarkers circle').attr({'fill':'#'+colourToHex(objWatch.bezelMarkers)});
    if (objWatch.bezelMarkers != 'white') {
        $watchDoc.find('#metalRing').hide();
    }
    // 24 HOUR HAND
    $watchDoc.find('#_x32_4hourhand path').attr({'fill':'#'+colourToHex(objWatch.twentyFourHourHand)});
    // Dial
    $watchDoc.find('#dial_2_,#dial_1_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_ path').first().attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path,#logo_1_ path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel_2_ path,#dateWheel_3_ path').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_,#dialText_5_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_,#dialText_5_').text(objWatch.dialText);	
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M90,125h15'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M46,132h50'});
    }
}

function populateEnquiryYachtmaster(objWatch) {
    var $watchDoc = $('#enquiryWatch').contents();
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').text(currentDay);
    //indices
    $watchDoc.find('#indices circle,#indices polygon,#indices path,#indices rect,#indices_1_ circle,#indices_1_ polygon,#indices_1_ path,#indices_1_ rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand,#littleHourHand,#littleMinuteHand,#littleSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    // Dial
    $watchDoc.find('#dial_1_,#dial_3_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path,#logo_1_ path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel_2_ path,#dateWheel_4_ path').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_,#dialText_5_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_,#dialText_5_').text(objWatch.dialText);	
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M322,134h13'});
        $watchDoc.find('#largeDatePath').attr({'d':'M181,138h40'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M90,155h70'});
        
    }
}

function populateBasketYachtmaster(watchID) {
    var objWatch = basketWatches["watch_"+watchID];
    var $watchDoc = $('#basketWatch_'+watchID).contents();
    
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText').text(currentDay);
    //indices
    $watchDoc.find('#indices polygon,#indices path,#indices circle,#indices rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    // Dial
    $watchDoc.find('#dial_2_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path,').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel_2_ path').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);
    $watchDoc.find('#bgRect').attr({'fill':'#D3E2EF'});
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M64.5,50h25'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M33.5,57h30'});
    }
}

function populateAccountYachtmaster(watchID) {
    var objWatch = accountWatches["watch_"+watchID];
    var $watchDoc = $('#accountWatch_'+watchID).contents();
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText').text(currentDay);
    //indices
    $watchDoc.find('#indices circle,#indices polygon,#indices path,#indices rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    // Dial
    $watchDoc.find('#dial_2_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel_2_ path').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);
    if (objWatch.oddWatch) {
        $watchDoc.find('#bgRect').attr({'fill':'#E5E5E5'});
    } else {
        $watchDoc.find('#bgRect').attr({'fill':'#FFFFFF'});	
    }
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M64.5,50h25'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M33.5,57h30'});
    }
}

function populateMyDesignsGMTMasterII(watchID) {
    var objWatch = watches["watch_"+watchID];
    var $watchDoc = $('#myDesigns_'+watchID).contents();
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').text(currentDay);
    //indices
    $watchDoc.find('#indices circle,#indices polygon,#indices path,#indices rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand,#bigTwentyFourHourHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //bezelMarkers
    $watchDoc.find('#bezelMarkers path,#bezelMarkers polygon,#bezelMarkers circle').attr({'fill':'#'+colourToHex(objWatch.bezelMarkers)});
    if (objWatch.bezelMarkers != 'white') {
        $watchDoc.find('#metalRing').hide();
    }
    // 24 HOUR HAND
    $watchDoc.find('#x32_4hourhand_1').attr({'fill':'#'+colourToHex(objWatch.twentyFourHourHand)});
    //$watchDoc.find('#_x32_4hourhand polygon').removeAttr('style');
    // Dial
    $watchDoc.find('#dial_1_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel_1_ path').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);	
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M92,120.5h15'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M45,127h50'});
    }
}

function populateEnquiryGMTMasterII(objWatch) {
    var $watchDoc = $('#enquiryWatch').contents();
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').text(currentDay);
    //indices
    $watchDoc.find('#indices circle,#indices polygon,#indices path,#indices rect,#indices_1_ polygon,#indices_1_ path,#indices_1_ circle,#indices_1_ rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand,#littleHourHand,#littleMinuteHand,#littleSecondHand,#bigTwentyFourHourHand,#littleTwentyFourHourHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //bezelMarkers
    $watchDoc.find('#bezelMarkers path,#bezelMarkers polygon,#bezelMarkers circle').attr({'fill':'#'+colourToHex(objWatch.bezelMarkers)});
    if (objWatch.bezelMarkers != 'white') {
        $watchDoc.find('#metalRing').hide();
    }
    // 24 HOUR HAND
    $watchDoc.find('#_x32_4hourhand polygon').attr({'fill':'#'+colourToHex(objWatch.twentyFourHourHand)});
    // Dial
    $watchDoc.find('#dial_2_,#dial_1_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    //console.log($watchDoc.find('#SECONDHAND_2_'));
    // Logo
    $watchDoc.find('#logo path,#logo_1_ path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel_1_ path,#dateWheel_2_ path').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_,#dialText_5_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_,#dialText_5_').text(objWatch.dialText);	
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M323,130h13'});
        $watchDoc.find('#largeDatePath').attr({'d':'M179,137h40'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M85,154h70'});
        
    }
}

function populateBasketGMTMasterII(watchID) {
    var objWatch = basketWatches["watch_"+watchID];
    var $watchDoc = $('#basketWatch_'+watchID).contents();
    
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText').text(currentDay);
    //indices
    $watchDoc.find('#indices circle,#indices polygon,#indices path,#indices rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand,#bigTwentyFourHourHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //bezelMarkers
    $watchDoc.find('#bezelMarkers path,#bezelMarkers polygon,#bezelMarkers circle').attr({'fill':'#'+colourToHex(objWatch.bezelMarkers)});
    if (objWatch.bezelMarkers != 'white') {
        $watchDoc.find('#metalRing').hide();
    }
    // 24 HOUR HAND
    $watchDoc.find('#_x32_4hourhand polygon').attr({'fill':'#'+colourToHex(objWatch.twentyFourHourHand)});
    // Dial
    $watchDoc.find('#dial_3_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').first().attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel_2_ path').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);
    $watchDoc.find('#bgRect').attr({'fill':'#D3E2EF'});
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M65,50h25'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M35,57h30'});
    }
}

function populateAccountGMTMasterII(watchID) {
    var objWatch = accountWatches["watch_"+watchID];
    var $watchDoc = $('#accountWatch_'+watchID).contents();
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').text(currentDay);
    //indices
    $watchDoc.find('#indices circle,#indices polygon,#indices path,#indices rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand,#bigTwentyFourHourHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //bezelMarkers
    $watchDoc.find('#bezelMarkers path,#bezelMarkers polygon,#bezelMarkers circle').attr({'fill':'#'+colourToHex(objWatch.bezelMarkers)});
    if (objWatch.bezelMarkers != 'white') {
        $watchDoc.find('#metalRing').hide();
    }
    // 24 HOUR HAND
    $watchDoc.find('#_x32_4hourhand polygon').attr({'fill':'#'+colourToHex(objWatch.twentyFourHourHand)});
    // Dial
    $watchDoc.find('#dial_3_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').first().attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel_2_ path').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);
    if (objWatch.oddWatch) {
        $watchDoc.find('#bgRect').attr({'fill':'#E5E5E5'});
    } else {
        $watchDoc.find('#bgRect').attr({'fill':'#FFFFFF'});	
    }
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M65,50h25'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M35,57h30'});
    }
}

function populateMyDesignsDaytona(watchID) {
    var objWatch = watches["watch_"+watchID];
    var $watchDoc = $('#myDesigns_'+watchID).contents();
    //indices
    $watchDoc.find('#indices path').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#littleHourHand,#littleMinuteHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    
    //daytonaText
    $watchDoc.find('#daytonaText_2_ path').attr({'fill':'#'+colourToHex(objWatch.daytonaText)});
    //chronoRings
    $watchDoc.find('#chronoRings path').attr({'fill':'#'+colourToHex(objWatch.chronoRings)});
    if (objWatch.chronoRings != 'metallic') {
        $watchDoc.find('#chronoRingsMetallic').hide();
    }
    //chronoHands
    $watchDoc.find('#chronoHands path').attr({'fill':'#'+colourToHex(objWatch.chronoHands)});
    //chronoDials
    $watchDoc.find('#chronoDials circle').attr({'fill':'#'+colourToHex(objWatch.chronoDials)});
    //chronoMarkers
    $watchDoc.find('#chronoMarkers_2_').attr({'fill':'#'+colourToHex(objWatch.chronoMarkers)});
    // SecondMarkers
    $watchDoc.find('#secondMarkers_2_').attr({'fill':'#'+colourToHex(objWatch.secondMarkers)});
    // MinuteMarkers
    $watchDoc.find('#fiveMinuteMarkers path').attr({'fill':'#'+colourToHex(objWatch.minuteMarkers)});
    if (objWatch.minuteMarkers != 'metallic') {
        $watchDoc.find('#fiveMinuteMarkersMetallic').hide();
    }
    // Dial
    $watchDoc.find('#dial_5_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    if (objWatch.dial != 'black') {
        $watchDoc.find('#chronoRingsMetallic').hide();
    }
    // Second Hand
    $watchDoc.find('#secondHand path').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    if (objWatch.logo != 'white') {
        $watchDoc.find('#logoMetallic_2_').hide();
    }
    // Dial Text
    $watchDoc.find('#dialText_4_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    $watchDoc.find('#dialText_1_').text(objWatch.dialText);
    // background		
    $watchDoc.find('#bgRect').attr({'fill':'#D3E2EF'});
    
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDialTextPath').attr({'d':'M59,105h20'});
    }		
}

function populateEnquiryDaytona(objWatch) {
    var $watchDoc = $('#enquiryWatch').contents();
    var chronoDialOn = true;
    //indices
    $watchDoc.find('#indices_1_ path,#indices path').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#littleHourHand,#littleMinuteHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    
    //daytonaText
    $watchDoc.find('#daytonaText_1_ path,#daytonaText_2_ path').attr({'fill':'#'+colourToHex(objWatch.daytonaText)});
    //chronoRings
    $watchDoc.find('#chronoRings_1_ path,#chronoRings path').attr({'fill':'#'+colourToHex(objWatch.chronoRings)});
    if (objWatch.chronoRings != 'metallic') {
        chronoDialOn = false;
    }
    //chronoHands
    $watchDoc.find('#chronoHands_1_ path,#chronoHands path').attr({'fill':'#'+colourToHex(objWatch.chronoHands)});
    if (objWatch.chronoHands != 'metallic') {
        chronoDialOn = false;	
    }
    //chronoDials
    $watchDoc.find('#chronoDials_1_ circle,#chronoDials circle,#chronoDials_1_ path').attr({'fill':'#'+colourToHex(objWatch.chronoDials)});
    if (objWatch.chronoDials != 'black') {
        chronoDialOn = false;
    }
    //chronoMarkers
    $watchDoc.find('#chronoMarkers_1_,#chronoMarkers_2_').attr({'fill':'#'+colourToHex(objWatch.chronoMarkers)});
    if (objWatch.chronoMarkers != 'black') {
        chronoDialOn = false;
    }
    // SecondMarkers
    $watchDoc.find('#secondMarkers_2_,#secondMarkers_1_').attr({'fill':'#'+colourToHex(objWatch.secondMarkers)});
    // MinuteMarkers
    $watchDoc.find('#fiveMinuteMarkers path,#fiveMinuteMarkers_1_ path').attr({'fill':'#'+colourToHex(objWatch.minuteMarkers)});
    if (objWatch.minuteMarkers != 'metallic') {
        $watchDoc.find('#fiveMinuteMarkersMetallic_1_,#fiveMinuteMarkersMetallic').hide();
    }
    // Dial
    $watchDoc.find('#dial_1_,#dial_5_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    if (objWatch.dial != 'black') {
        chronoDialOn = false;
    }
    // Second Hand
    $watchDoc.find('#secondHand path').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo_2_ path,#logo path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    if (objWatch.logo != 'white') {
        $watchDoc.find('#logoMetallic_1_,#logoMetallic_2_').hide();
    }
    if (!chronoDialOn) {
        $watchDoc.find('#chronoRingsMetallic_1_,#chronoRingsMetallic').hide();
    }
    // Dial Text
    $watchDoc.find('#dialText_4_,#dialText_1_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    $watchDoc.find('#dialText_1_,#dialText_4_').text(objWatch.dialText);
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDialTextPath').attr({'d':'M293,115h20'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M103,99h45'});
    }
}

function populateBasketDaytona(watchID) {
    var objWatch = basketWatches["watch_"+watchID];
    var $watchDoc = $('#basketWatch_'+watchID).contents();
    //indices
    $watchDoc.find('#indices path').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#littleHourHand,#littleMinuteHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //daytona Text
    $watchDoc.find('#daytonaText_2_ path').attr({'fill':'#'+colourToHex(objWatch.daytonaText)});
    // SecondMarkers
    $watchDoc.find('#secondMarkers_2_').attr({'fill':'#'+colourToHex(objWatch.secondMarkers)});
    //chronoRings
    $watchDoc.find('#chronoRings_1_ path').attr({'fill':'#'+colourToHex(objWatch.chronoRings)});
    if (objWatch.chronoRings != 'metallic') {
        $watchDoc.find('#chronoRingsMetallic').hide();
    }
    //chronoHands
    $watchDoc.find('#chronoHands path').attr({'fill':'#'+colourToHex(objWatch.chronoHands)});
    //chronoDials
    $watchDoc.find('#chronoDials circle').attr({'fill':'#'+colourToHex(objWatch.chronoDials)});
    //chronoMarkers
    $watchDoc.find('#chronoMarkers_2_').attr({'fill':'#'+colourToHex(objWatch.chronoMarkers)});
    // MinuteMarkers
    $watchDoc.find('#fiveMinuteMarkers_1_ path').attr({'fill':'#'+colourToHex(objWatch.minuteMarkers)});
    if (objWatch.minuteMarkers != 'metallic') {
        $watchDoc.find('#fiveMinuteMarkersMetallic').hide();
    }
    // Dial
    $watchDoc.find('#dial_1_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    if (objWatch.dial != 'metallic') {
        $watchDoc.find('#chronoRingsMetallic').hide();
    }
    // Second Hand
    $watchDoc.find('#secondHand path').first().attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Dial Text
    $watchDoc.find('#dialText_4_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = '';
    }
    $watchDoc.find('#dialText_4_').text(objWatch.dialText);
    // background		
    $watchDoc.find('#bgRect').attr({'fill':'#D3E2EF'});
    //console.log($thisWatchDoc.find('#bgRect').attr('fill'));
}

function populateAccountDaytona(watchID) {
    var objWatch = accountWatches["watch_"+watchID];
    var $watchDoc = $('#accountWatch_'+watchID).contents();
    //indices
    $watchDoc.find('#indices path').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#littleHourHand,#littleMinuteHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //daytona Text
    $watchDoc.find('#daytonaText_2_ path').attr({'fill':'#'+colourToHex(objWatch.daytonaText)});
    // SecondMarkers
    $watchDoc.find('#secondMarkers_2_').attr({'fill':'#'+colourToHex(objWatch.secondMarkers)});
    //chronoRings
    $watchDoc.find('#chronoRings_1_ path').attr({'fill':'#'+colourToHex(objWatch.chronoRings)});
    if (objWatch.chronoRings != 'metallic') {
        $watchDoc.find('#chronoRingsMetallic').hide();
    }
    //chronoHands
    $watchDoc.find('#chronoHands path').attr({'fill':'#'+colourToHex(objWatch.chronoHands)});
    //chronoDials
    $watchDoc.find('#chronoDials circle').attr({'fill':'#'+colourToHex(objWatch.chronoDials)});
    //chronoMarkers
    $watchDoc.find('#chronoMarkers_2_').attr({'fill':'#'+colourToHex(objWatch.chronoMarkers)});
    // MinuteMarkers
    $watchDoc.find('#fiveMinuteMarkers_1_ path').attr({'fill':'#'+colourToHex(objWatch.minuteMarkers)});
    if (objWatch.minuteMarkers != 'metallic') {
        $watchDoc.find('#fiveMinuteMarkersMetallic').hide();
    }
    // Dial
    $watchDoc.find('#dial_1_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    if (objWatch.dial != 'metallic') {
        $watchDoc.find('#chronoRingsMetallic').hide();
    }
    // Second Hand
    $watchDoc.find('#secondHand path').first().attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Dial Text
    $watchDoc.find('#dialText_4_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = '';
    }
    $watchDoc.find('#dialText_4_').text(objWatch.dialText);
    // background
    if (objWatch.oddWatch) {
        $watchDoc.find('#bgRect').attr({'fill':'#E5E5E5'});
    } else {
        $watchDoc.find('#bgRect').attr({'fill':'#FFFFFF'});	
    }
}

function populateMyDesignsExplorerII(watchID) {
    var objWatch = watches["watch_"+watchID];
    var $watchDoc = $('#myDesigns_'+watchID).contents();
    //console.log($watchDoc);
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').text(currentDay);
    //indices
    $watchDoc.find('#indices circle,#indices polygon,#indices path,#indices rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand,#bigTwentyFourHourHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //bezelMarkers
    $watchDoc.find('#bezelMarkers path').attr({'fill':'#'+colourToHex(objWatch.bezelMarkers)});
    // 24 HOUR HAND
    $watchDoc.find('#_x32_4hourhand path').attr({'fill':'#'+colourToHex(objWatch.twentyFourHourHand)});
    // Dial
    $watchDoc.find('#dial_1_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_ path').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo_1_ path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel path,#dateWheel_1_ path').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    $watchDoc.find('#explorerIIText path').attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);
    // background		
    $watchDoc.find('#bgRect').attr({'fill':'#D3E2EF'});
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M96,120h15'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M50,131h50'});
    }
}

function populateEnquiryExplorerII(objWatch) {
    var $watchDoc = $('#enquiryWatch').contents();
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').text(currentDay);
    //indices
    $watchDoc.find('#indices circle,#indices polygon,#indices path,#indices rect,#indices_2_ rect,#indices_2_ circle,#indices_2_ polygon,#indices_2_ path').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigTwentyFourHourHand,#bigSecondHand,#littleHourHand,#littleMinuteHand,#littleTwentyFourHourHand,#littleSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //bezelMarkers
    $watchDoc.find('#bezelMarkers path').attr({'fill':'#'+colourToHex(objWatch.bezelMarkers)});
    // 24 HOUR HAND
    $watchDoc.find('#_x32_4hourhand path').attr({'fill':'#'+colourToHex(objWatch.twentyFourHourHand)});
    // Dial
    $watchDoc.find('#dial_3_,#dial_2_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_ path').first().attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo_3_ path,#logo_1_ path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel_1_ path,#dateWheel_3_ path').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_,#dialText_5_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    $watchDoc.find('#explorerIIText path,#explorerIIText_1_ path').attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_,#dialText_5_').text(objWatch.dialText);	
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M331,130h13'});
        $watchDoc.find('#largeDatePath').attr({'d':'M178,136h40'});
    }
}

function populateBasketExplorerII(watchID) {
    var objWatch = basketWatches["watch_"+watchID];
    var $watchDoc = $('#basketWatch_'+watchID).contents();
    //console.log($watchDoc);
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').text(currentDay);
    //indices
    $watchDoc.find('#indices_2_ circle,#indices_2_ polygon,#indices_2_ path,#indices_2_ rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand,#bigTwentyFourHourHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //bezelMarkers
    $watchDoc.find('#bezelMarkers path').attr({'fill':'#'+colourToHex(objWatch.bezelMarkers)});
    // 24 HOUR HAND
    $watchDoc.find('#_x32_4hourhand path').attr({'fill':'#'+colourToHex(objWatch.twentyFourHourHand)});
    // Dial
    $watchDoc.find('#dial_2_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_ path').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo_1_ path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel path,#dateWheel_1_ path').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    $watchDoc.find('#explorerIIText path').attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);
    // background		
    $watchDoc.find('#bgRect').attr({'fill':'#D3E2EF'});
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M65,50h25'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M35,60h30'});
    }
}

function populateAccountExplorerII(watchID) {
    var objWatch = accountWatches["watch_"+watchID];
    var $watchDoc = $('#accountWatch_'+watchID).contents();
    //console.log($watchDoc);
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').text(currentDay);
    //indices
    $watchDoc.find('#indices_2_ circle,#indices_2_ polygon,#indices_2_ path,#indices_2_ rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand,#bigTwentyFourHourHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //bezelMarkers
    $watchDoc.find('#bezelMarkers path').attr({'fill':'#'+colourToHex(objWatch.bezelMarkers)});
    // 24 HOUR HAND
    $watchDoc.find('#_x32_4hourhand path').attr({'fill':'#'+colourToHex(objWatch.twentyFourHourHand)});
    // Dial
    $watchDoc.find('#dial_2_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_ path').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo_1_ path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel path,#dateWheel_1_ path').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    $watchDoc.find('#explorerIIText path').attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);		
    // background
    if (objWatch.oddWatch) {
        $watchDoc.find('#bgRect').attr({'fill':'#E5E5E5'});
    } else {
        $watchDoc.find('#bgRect').attr({'fill':'#FFFFFF'});	
    }
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M65,50h25'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M35,60h30'});
    }
}


function populateMyDesignsMonaco(watchID) {
    var objWatch = watches["watch_"+watchID];
    var $watchDoc = $('#myDesigns_'+watchID).contents();
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').text(currentDay);
    $watchDoc.find('#littleHourHand,#littleMinuteHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //chronoHands
    $watchDoc.find('#chronoHands path').attr({'fill':'#'+colourToHex(objWatch.chronoHands)});
    //chronoMarkers
    $watchDoc.find('#chronoMarkers_2_').attr({'fill':'#'+colourToHex(objWatch.chronoMarkers)});
    // SecondMarkers
    $watchDoc.find('#secondMarkers_2_').attr({'fill':'#'+colourToHex(objWatch.secondMarkers)});
    // Dial
    $watchDoc.find('#dial_1_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#secondHand path').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // background		
    $watchDoc.find('#bgRect').attr({'fill':'#D3E2EF'});
    // Date Wheel
    $watchDoc.find('#dateWheel').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    
    // stitching
    $watchDoc.find('#stitching path').attr({'fill':'#'+colourToHex(objWatch.strapStitching)});
    
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDialTextPath').attr({'d':'M59,105h20'});
    }		
}

function populateEnquiryMonaco(objWatch) {
    var $watchDoc = $('#enquiryWatch').contents();
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').text(currentDay);
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#littleHourHand,#littleMinuteHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //chronoHands
    $watchDoc.find('#chronoHands_1_ path,#chronoHands path').attr({'fill':'#'+colourToHex(objWatch.chronoHands)});
    //chronoMarkers
    $watchDoc.find('#chronoMarkers,#chronoMarkers_1_').attr({'fill':'#'+colourToHex(objWatch.chronoMarkers)});
    // MinuteMarkers
    $watchDoc.find('#secondMarkers path,#secondMarkers_1_ path').attr({'fill':'#'+colourToHex(objWatch.minuteMarkers)});
    // Dial
    $watchDoc.find('#dial_1_,#dial_2_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#secondHand path').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo,#logo_1_').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel_1_ path,#dateWheel path').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // stitching
    $watchDoc.find('#stitch path').attr({'fill':'#'+colourToHex(objWatch.strapStitching)});
    
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M296,163h15'});
        $watchDoc.find('#largeDatePath').attr({'d':'M117,209h30'});
    }
}

function populateBasketMonaco(watchID) {
    var objWatch = basketWatches["watch_"+watchID];
    var $watchDoc = $('#basketWatch_'+watchID).contents();
    $watchDoc.find('#littleHourHand,#littleMinuteHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    // MinuteMarkers
    $watchDoc.find('#secondMarkers path').attr({'fill':'#'+colourToHex(objWatch.minuteMarkers)});
    //chronoHands
    $watchDoc.find('#chronoHands path').attr({'fill':'#'+colourToHex(objWatch.chronoHands)});
    //chronoMarkers
    $watchDoc.find('#chronoMarkers').attr({'fill':'#'+colourToHex(objWatch.chronoMarkers)});
    // Dial
    $watchDoc.find('#dial_2_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#secondHand_1_').first().attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // background		
    $watchDoc.find('#bgRect').attr({'fill':'#D3E2EF'});
    // Date Wheel
    $watchDoc.find('#dateWheel_1_ path').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    
    //console.log($thisWatchDoc.find('#bgRect').attr('fill'));
    // stitching
    $watchDoc.find('#stitch path').attr({'fill':'#'+colourToHex(objWatch.strapStitching)});
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M39,79h25'});
        
    }
    
}

function populateAccountMonaco(watchID) {
    var objWatch = accountWatches["watch_"+watchID];
    var $watchDoc = $('#accountWatch_'+watchID).contents();
    //indices
    $watchDoc.find('#indices path').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#littleHourHand,#littleMinuteHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    // SecondMarkers
    $watchDoc.find('#secondMarkers_2_').attr({'fill':'#'+colourToHex(objWatch.secondMarkers)});
    //chronoHands
    $watchDoc.find('#chronoHands path').attr({'fill':'#'+colourToHex(objWatch.chronoHands)});
    //chronoMarkers
    $watchDoc.find('#chronoMarkers_2_').attr({'fill':'#'+colourToHex(objWatch.chronoMarkers)});
    // Dial
    $watchDoc.find('#dial_1_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#secondHand path').first().attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel_1_').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // stitching
    $watchDoc.find('#stitching path').attr({'fill':'#'+colourToHex(objWatch.strapStitching)});
    
    // background
    if (objWatch.oddWatch) {
        $watchDoc.find('#bgRect').attr({'fill':'#E5E5E5'});
    } else {
        $watchDoc.find('#bgRect').attr({'fill':'#FFFFFF'});	
    }
}



function populateMyDesignsDeepseaSeaDweller(watchID) {
    var objWatch = watches["watch_"+watchID];
    var $watchDoc = $('#myDesigns_'+watchID).contents();
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText').text(currentDay);
    //indices
    $watchDoc.find('#indices circle,#indices polygon,#indices path,#indices rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //bezelMarkers
    $watchDoc.find('#bezelMarkers path,#bezelMarkers polygon,#bezelMarkers circle').attr({'fill':'#'+colourToHex(objWatch.bezelMarkers)});
    if (objWatch.bezelMarkers != 'white') {
        $watchDoc.find('#metalRing').hide();
    }
    // Dial
    $watchDoc.find('#dial_2_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path,#logo polygon').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);	
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M92,121h15'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M48,128h50'});
    }
}

function populateEnquiryDeepseaSeaDweller(objWatch) {
    var $watchDoc = $('#enquiryWatch').contents();
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').text(currentDay);
    //indices
    $watchDoc.find('#indices circle,#indices polygon,#indices path,#indices rect,#indices_1_ circle,#indices_1_ polygon,#indices_1_ path,#indices_1_ rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand,#littleHourHand,#littleMinuteHand,#littleSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //bezelMarkers
    $watchDoc.find('#bezelMarkers path,#bezelMarkers polygon,#bezelMarkers circle').attr({'fill':'#'+colourToHex(objWatch.bezelMarkers)});
    if (objWatch.bezelMarkers != 'white') {
        $watchDoc.find('#metalRing').hide();
    }
    // Dial
    $watchDoc.find('#dial_2_,#dial_1_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path,#logo_1_ path,#logo polygon,#logo_1_ polygon').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel_1_,#dateWheel').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_,#dialText_5_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_,#dialText_5_').text(objWatch.dialText);	
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M325,128h13'});
        $watchDoc.find('#largeDatePath').attr({'d':'M181,134h40'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M90,154h70'});
        $watchDoc.find('#smallDialTextPath').attr({'d':'M290,134h30'});
        
    }
}

function populateBasketDeepseaSeaDweller(watchID) {
    var objWatch = basketWatches["watch_"+watchID];
    var $watchDoc = $('#basketWatch_'+watchID).contents();
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText').text(currentDay);
    //indices
    $watchDoc.find('#indices circle,#indices polygon,#indices path,#indices rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    // Dial
    $watchDoc.find('#dial_3_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path,#logo polygon').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel_1_').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);
    $watchDoc.find('#bgRect').attr({'fill':'#D3E2EF'});
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M71.5,49.5h10'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M32.5,57h30'});
    }
}

function populateAccountDeepseaSeaDweller(watchID) {
    var objWatch = accountWatches["watch_"+watchID];
    var $watchDoc = $('#accountWatch_'+watchID).contents();
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText').text(currentDay);
    //indices
    $watchDoc.find('#indices circle,#indices polygon,#indices path,#indices rect').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#bigSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    // Dial
    $watchDoc.find('#dial_3_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path,#logo polygon').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel_1_').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);
    if (objWatch.oddWatch) {
        $watchDoc.find('#bgRect').attr({'fill':'#E5E5E5'});
    } else {
        $watchDoc.find('#bgRect').attr({'fill':'#FFFFFF'});	
    }
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M71.5,49.5h10'});
        $watchDoc.find('#largeDialTextPath').attr({'d':'M32.5,57h30'});
    }
}

function populateMyDesignsMilgaussBF(watchID) {
    var objWatch = watches["watch_"+watchID];
    var $watchDoc = $('#myDesigns_'+watchID).contents();
    //indices
    $watchDoc.find('#indices_2_').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#littleHourHand,#littleMinuteHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //minute marker
    $watchDoc.find('#fiveMinuteMarkers_3_').attr({'fill':'#'+colourToHex(objWatch.minuteMarkers)});
    // SecondMarkers
    $watchDoc.find('#secondMarkers_1_ path').attr({'fill':'#'+colourToHex(objWatch.secondMarkers)});
    // Dial
    $watchDoc.find('#dial_2_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo_1_ path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    if (objWatch.logo == 'white') {
        $watchDoc.find('#logoMetallic_1_').show();
    } else {
        $watchDoc.find('#logoMetallic_1_').hide();	
    }
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    $watchDoc.find('#milgaussText path').attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);	
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#largeDialTextPath').attr({'d':'M49,133h50'});
    }
}

function populateEnquiryMilgaussBF(objWatch) {
    var $watchDoc = $('#enquiryWatch').contents();
    //indices
    $watchDoc.find('#indices_1_ path,#indices_2_ path,').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#littleHourHand,#littleMinuteHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //minute marker
    $watchDoc.find('#fiveMinuteMarkers_3_,#fiveMinuteMarkers_1_').attr({'fill':'#'+colourToHex(objWatch.minuteMarkers)});
    // SecondMarkers
    $watchDoc.find('#secondMarkers path,#secondMarkers_2_ path').attr({'fill':'#'+colourToHex(objWatch.secondMarkers)});
    // Dial
    $watchDoc.find('#dial_4_,#dial_2_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo_1_ path, #logo_2_ path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    if (objWatch.logo == 'white') {
        $watchDoc.find('#logoMetallic_3_,#logoMetallic_1_').show();
    } else {
        $watchDoc.find('#logoMetallic_3_,#logoMetallic_1_').hide();	
    }
    // Dial Text
    $watchDoc.find('#dialText_2_,#dialText_5_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    $watchDoc.find('#milgaussText path,#milgaussText_1_ path').attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_,#dialText_5_').text(objWatch.dialText);
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#largeDialTextPath').attr({'d':'M104,160h40'});
        $watchDoc.find('#smallDialTextPath').attr({'d':'M295,142h20'});
    }
}

function populateBasketMilgaussBF(watchID) {
    var objWatch = basketWatches["watch_"+watchID];
    var $thisWatchDoc = $('#basketWatch_'+watchID).contents();
    //console.log($thisWatchDoc);
    //indices
    $thisWatchDoc.find('#indices_2_').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $thisWatchDoc.find('#littleHourHand,#littleMinuteHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //minute marker
    $thisWatchDoc.find('#fiveMinuteMarkers_3_').attr({'fill':'#'+colourToHex(objWatch.minuteMarkers)});
    // SecondMarkers
    $thisWatchDoc.find('#secondMarkers_1_ path').attr({'fill':'#'+colourToHex(objWatch.secondMarkers)});
    // Dial
    $thisWatchDoc.find('#dial_1_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $thisWatchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $thisWatchDoc.find('#logo_1_ path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    if (objWatch.logo == 'white') {
        $thisWatchDoc.find('#logoMetallic_1_').show();
    } else {
        $thisWatchDoc.find('#logoMetallic_1_').hide();	
    }
    // Dial Text
    $thisWatchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    $thisWatchDoc.find('#milgaussText path').attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $thisWatchDoc.find('#dialText_2_').text(objWatch.dialText);
    // background
    
    $thisWatchDoc.find('#bgRect').attr({'fill':'#D3E2EF'});
    //console.log($thisWatchDoc.find('#bgRect').attr('fill'));
}

function populateAccountMilgaussBF(watchID) {
    var objWatch = accountWatches["watch_"+watchID];
    var $watchDoc = $('#accountWatch_'+watchID).contents();
    //indices
    $watchDoc.find('#indices_2_').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#littleHourHand,#littleMinuteHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //minute marker
    $watchDoc.find('#fiveMinuteMarkers_3_').attr({'fill':'#'+colourToHex(objWatch.minuteMarkers)});
    // SecondMarkers
    $watchDoc.find('#secondMarkers_1_ path').attr({'fill':'#'+colourToHex(objWatch.secondMarkers)});
    // Dial
    $watchDoc.find('#dial_1_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo_1_ path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    if (objWatch.logo == 'white') {
        $watchDoc.find('#logoMetallic_1_').show();
    } else {
        $watchDoc.find('#logoMetallic_1_').hide();	
    }
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    $watchDoc.find('#milgaussText path').attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);
    // background
    if (objWatch.oddWatch) {
        $watchDoc.find('#bgRect').attr({'fill':'#E5E5E5'});
    } else {
        $watchDoc.find('#bgRect').attr({'fill':'#FFFFFF'});	
    }
}

function populateMyDesignsMilgaussWF(watchID) {
    var objWatch = watches["watch_"+watchID];
    var $watchDoc = $('#myDesigns_'+watchID).contents();
    //indices
    $watchDoc.find('#indices_1_').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#littleHourHand,#littleMinuteHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //minute marker
    $watchDoc.find('#fiveMinuteMarkers path').attr({'fill':'#'+colourToHex(objWatch.minuteMarkers)});
    // SecondMarkers
    $watchDoc.find('#secondMarkers_1_ path').attr({'fill':'#'+colourToHex(objWatch.secondMarkers)});
    // Dial
    $watchDoc.find('#dial_3_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    if (objWatch.logo == 'black') {
        $watchDoc.find('#logoMetallic').show();
    } else {
        $watchDoc.find('#logoMetallic').hide();	
    }
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    $watchDoc.find('#milgaussText path').attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);	
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#largeDialTextPath').attr({'d':'M49,133h50'});
    }
}

function populateEnquiryMilgaussWF(objWatch) {
    var $watchDoc = $('#enquiryWatch').contents();
    //indices
    $watchDoc.find('#indices_1_,#indices_4_').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#littleHourHand,#littleMinuteHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //minute marker
    $watchDoc.find('#fiveMinuteMarkers_1_ path,#fiveMinuteMarkers_2_ path').attr({'fill':'#'+colourToHex(objWatch.minuteMarkers)});
    // SecondMarkers
    $watchDoc.find('#secondMarkers_1_ path,#secondMarkers_2_ path').attr({'fill':'#'+colourToHex(objWatch.secondMarkers)});
    // Dial
    $watchDoc.find('#dial_3_,#dial_5_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path, #logo_1_ path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    if (objWatch.logo == 'black') {
        $watchDoc.find('#logoMetallic,#logoMetallic_1_').show();
    } else {
        $watchDoc.find('#logoMetallic,#logoMetallic_1_').hide();	
    }
    // Dial Text
    $watchDoc.find('#dialText_2_,#dialText_5_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    $watchDoc.find('#milgaussText path,#milgaussText_1_ path').attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_,#dialText_5_').text(objWatch.dialText);
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#largeDialTextPath').attr({'d':'M104,160h40'});
        $watchDoc.find('#smallDialTextPath').attr({'d':'M295,142h20'});
    }
}

function populateBasketMilgaussWF(watchID) {
    var objWatch = basketWatches["watch_"+watchID];
    var $thisWatchDoc = $('#basketWatch_'+watchID).contents();
    //console.log($thisWatchDoc);
    //indices
    $thisWatchDoc.find('#indices_1_').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $thisWatchDoc.find('#littleHourHand,#littleMinuteHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //minute marker
    $thisWatchDoc.find('#fiveMinuteMarkers path').attr({'fill':'#'+colourToHex(objWatch.minuteMarkers)});
    // SecondMarkers
    $thisWatchDoc.find('#secondMarkers_1_ path').attr({'fill':'#'+colourToHex(objWatch.secondMarkers)});
    // Dial
    $thisWatchDoc.find('#dial_2_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $thisWatchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $thisWatchDoc.find('#logo path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    if (objWatch.logo == 'black') {
        $thisWatchDoc.find('#logoMetallic').show();
    } else {
        $thisWatchDoc.find('#logoMetallic').hide();	
    }
    // Dial Text
    $thisWatchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    $thisWatchDoc.find('#milgaussText path').attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $thisWatchDoc.find('#dialText_2_').text(objWatch.dialText);
    // background
    
    $thisWatchDoc.find('#bgRect').attr({'fill':'#D3E2EF'});
    //console.log($thisWatchDoc.find('#bgRect').attr('fill'));
}

function populateAccountMilgaussWF(watchID) {
    var objWatch = accountWatches["watch_"+watchID];
    var $watchDoc = $('#accountWatch_'+watchID).contents();
    //indices
    $watchDoc.find('#indices_1_').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#littleHourHand,#littleMinuteHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //minute marker
    $watchDoc.find('#fiveMinuteMarkers path').attr({'fill':'#'+colourToHex(objWatch.minuteMarkers)});
    // SecondMarkers
    $watchDoc.find('#secondMarkers_1_ path').attr({'fill':'#'+colourToHex(objWatch.secondMarkers)});
    // Dial
    $watchDoc.find('#dial_2_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#SECONDHAND_2_').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    if (objWatch.logo == 'black') {
        $watchDoc.find('#logoMetallic').show();
    } else {
        $watchDoc.find('#logoMetallic').hide();	
    }
    // Dial Text
    $watchDoc.find('#dialText_2_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    $watchDoc.find('#milgaussText path').attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    // Dial Text Entry
    if (objWatch.dialText=='') {
        objWatch.dialText = 'BAMFORD';
    }
    $watchDoc.find('#dialText_2_').text(objWatch.dialText);
    // background
    if (objWatch.oddWatch) {
        $watchDoc.find('#bgRect').attr({'fill':'#E5E5E5'});
    } else {
        $watchDoc.find('#bgRect').attr({'fill':'#FFFFFF'});	
    }
}



function populateMyDesignsPaneraiLuminorMarina(watchID) {
    var objWatch = watches["watch_"+watchID];
    var $watchDoc = $('#myDesigns_'+watchID).contents();
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').text(currentDay);
    $watchDoc.find('#littleHourHand,#littleMinuteHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    //chronoHands
    $watchDoc.find('#chronoHands path').attr({'fill':'#'+colourToHex(objWatch.chronoHands)});
    //chronoMarkers
    $watchDoc.find('#chronoMarkers_2_').attr({'fill':'#'+colourToHex(objWatch.chronoMarkers)});
    // SecondMarkers
    $watchDoc.find('#secondMarkers_2_').attr({'fill':'#'+colourToHex(objWatch.secondMarkers)});
    // Dial
    $watchDoc.find('#dial_1_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#secondHand path').attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // background		
    $watchDoc.find('#bgRect').attr({'fill':'#D3E2EF'});
    // Date Wheel
    $watchDoc.find('#dateWheel').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    
    // stitching
    $watchDoc.find('#stitching path').attr({'fill':'#'+colourToHex(objWatch.strapStitching)});
    
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDialTextPath').attr({'d':'M59,105h20'});
    }		
}

function populateEnquiryPaneraiLuminorMarina(objWatch) {
    var $watchDoc = $('#enquiryWatch').contents();
    var currentDate = new Date();
    var currentDay = currentDate.getDate();
    
    $watchDoc.find('#dateNumberText,#dateNumberText_1_').text(currentDay);
    //hands
    $watchDoc.find('#secondHand path').first().attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    $watchDoc.find('#minuteHand path').eq(2).attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    $watchDoc.find('#hourHand path').last().attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Indices
    $watchDoc.find('#luminescentIndices path, #luminescentIndices ellipse, #luminescentIndices_1_ path,#luminescentIndices_1_ ellipse').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#luminescentIndices line, #luminescentIndices_1_ line').attr({'stroke':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigHourHand,#bigMinuteHand,#littleHourHand,#littleMinuteHand').attr({'style':'stroke:#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#bigSecondHand,#littleSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    // Dial
    $watchDoc.find('#dial_1_,#dial').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Five Minute Markers
    $watchDoc.find('#fiveMinuteMarkers path,#fiveMinuteMarkers_1_ path').attr({'fill':'#'+colourToHex(objWatch.fiveMinuteMarkers)});
    $watchDoc.find('#fiveMinuteMarkers line,#fiveMinuteMarkers_1_ line').attr({'stroke':'#'+colourToHex(objWatch.fiveMinuteMarkers)});

    // Logo
    $watchDoc.find('#logo path,#logo_1_ path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel,#dateWheel_1_').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText_1_,#dateNumberText').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // Dial Text
    $watchDoc.find('#dialText_2_,#dialText_4_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    $watchDoc.find('#dialText_2_,#dialText_4_').text(objWatch.dialText);
    
    // stitching
    $watchDoc.find('#strapStitching path').attr({'fill':'#'+colourToHex(objWatch.strapStitching)});
    
    if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M296,163h15'});
        $watchDoc.find('#largeDatePath').attr({'d':'M117,209h30'});
    }
}

function populateBasketPaneraiLuminorMarina(watchID) {
    var objWatch = basketWatches["watch_"+watchID];
    var $watchDoc = $('#basketWatch_'+watchID).contents();
    $watchDoc.find('#littleHourHand,#littleMinuteHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    // Hands
    $watchDoc.find('#secondHand path').first().attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    $watchDoc.find('#minuteHand path').eq(2).attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    $watchDoc.find('#hourHand path').last().attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    
    // Five Minute Markers
    $watchDoc.find('#fiveMinuteMarkers path').attr({'fill':'#'+colourToHex(objWatch.fiveMinuteMarkers)});
    $watchDoc.find('#fiveMinuteMarkers line').attr({'stroke':'#'+colourToHex(objWatch.fiveMinuteMarkers)});
    // indices
    $watchDoc.find('#luminescentIndices path, #luminescentIndices ellipse').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#luminescentIndices line').attr({'stroke':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#littleHourHand,#littleMinuteHand').attr({'style':'stroke:#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#littleSecondHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    
    // Dial
    $watchDoc.find('#dial').attr({'fill':'#'+colourToHex(objWatch.dial)});
    
    // Logo
    $watchDoc.find('#logo path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // background		
    $watchDoc.find('#bgRect').attr({'fill':'#D3E2EF'});
    // Date Wheel
    $watchDoc.find('#dateWheel_1_').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // dial text
    $watchDoc.find('#dialText_4_').text(objWatch.dialText);
    $watchDoc.find('#dialText_4_').parent().attr({'fill':'#'+colourToHex(objWatch.dialTextColour)});
    
    //console.log($thisWatchDoc.find('#bgRect').attr('fill'));
    // stitching
    /*if (BrowserDetect.browser=='Firefox') {
        $watchDoc.find('#smallDatePath').attr({'d':'M39,79h25'});
        
    }*/
    
}

function populateAccountPaneraiLuminorMarina(watchID) {
    var objWatch = accountWatches["watch_"+watchID];
    var $watchDoc = $('#accountWatch_'+watchID).contents();
    //indices
    $watchDoc.find('#indices path').attr({'fill':'#'+colourToHex(objWatch.indices)});
    $watchDoc.find('#littleHourHand,#littleMinuteHand').attr({'style':'fill:#'+colourToHex(objWatch.indices)});
    // SecondMarkers
    $watchDoc.find('#secondMarkers_2_').attr({'fill':'#'+colourToHex(objWatch.secondMarkers)});
    //chronoHands
    $watchDoc.find('#chronoHands path').attr({'fill':'#'+colourToHex(objWatch.chronoHands)});
    //chronoMarkers
    $watchDoc.find('#chronoMarkers_2_').attr({'fill':'#'+colourToHex(objWatch.chronoMarkers)});
    // Dial
    $watchDoc.find('#dial_1_').attr({'fill':'#'+colourToHex(objWatch.dial)});
    // Second Hand
    $watchDoc.find('#secondHand path').first().attr({'fill':'#'+colourToHex(objWatch.secondHand)});
    // Logo
    $watchDoc.find('#logo path').attr({'fill':'#'+colourToHex(objWatch.logo)});
    // Date Wheel
    $watchDoc.find('#dateWheel_1_').attr({'fill':'#'+colourToHex(objWatch.dateWheel)});
    // Date Number
    $watchDoc.find('#dateNumberText').parent().attr({'fill':'#'+colourToHex(objWatch.dateNumber)});
    // stitching
    $watchDoc.find('#stitching path').attr({'fill':'#'+colourToHex(objWatch.strapStitching)});
    
    // background
    if (objWatch.oddWatch) {
        $watchDoc.find('#bgRect').attr({'fill':'#E5E5E5'});
    } else {
        $watchDoc.find('#bgRect').attr({'fill':'#FFFFFF'});	
    }
}





function alterRotate(currentValue,newValue) {
    var arrValues = currentValue.split('\) ');
    for (var i=0;i<arrValues.length;i++) {
        if (arrValues[i].search('rotate') != -1) {
            arrValues[i]='rotate('+newValue+')';
        }
    }
    return arrValues.join(') ');
}

function convertRGB(rgbString) {
    if (rgbString != 'transparent') {
        var arrColours = rgbString.split('\(')[1].split('\)')[0].split(', ');
        return rgbToHex(arrColours[0],arrColours[1],arrColours[2]);
    } else {
        return 'transparent';	
    }
    
}

function rgbToHex(R,G,B) {return(toHex(R)+toHex(G)+toHex(B))}
function toHex(n) {
     n = parseInt(n,10);
     if (isNaN(n)) return "00";
     n = Math.max(0,Math.min(n,255));
     return "0123456789ABCDEF".charAt((n-n%16)/16)
          + "0123456789ABCDEF".charAt(n%16);
}
var copyWatch = "";
function showOriginal(event) {
    if (event.currentTarget.id != 'compareLink') {
        //
    } else {
        $('#compareLink').addClass('down');
    }
    copyWatch('currentWatch','tempWatch');
    copyWatch('defaultWatch','currentWatch');
    populateWatch();
}

function showNew() {
    
        $('#compareLink').removeClass('down');
    
    copyWatch('tempWatch','currentWatch');
    populateWatch();
}

function toggleOriginal() {
    if (showOriginalState) {
        showOriginalState = false;
        showNew();
        $('#compareLink').text('compare design to original');
    } else {
        showOriginalState = true;
        evt = {
                currentTarget: {
                    id: 'compareLink'	
                }
        };
        showOriginal(evt);
        $('#compareLink').text('compare design to new');
    }
}

function handleDesignClick(event) {
    var watchObj = watches["watch_"+event.currentTarget.URL.split('=').pop()];
    window.location.href='/customise_'+watchObj.model+'.cfm?watch='+watchObj.watch_ident;
}
function handleAccountDesignClick(event) {
    var watchObj = accountWatches["watch_"+event.currentTarget.URL.split('=').pop()];
    window.location.href='/customise_'+watchObj.model+'.cfm?watch='+watchObj.watch_ident;
}

function useTemplate(event) {
    var template = $(event.currentTarget).data('template');
    copyWatch('currentWatch','tempWatch');
    copyWatch('watch_'+template,'currentWatch');
    populateWatch();
}

function viewPort() {
    return { width:$(window).width(), height:$(window).height(), left:$(document).scrollLeft(), top:$(document).scrollTop() };
}

/*$(window).load(function() {
    $('.basketWatch').each(function() {
        //var $iframedoc = $(this).contents();
        var watchID = $(this).attr('id').split('_')[1];
        populateWatches(watchID,'basket');
    });	
    
});*/

function rolloverPalette(event) {
    var target = $(event.currentTarget);
    var colour = target.parent().data('colour');
    var img = $('img',target);
    var action = 'off';
    if (event.type=='mouseenter') {
        action = 'on';	
    }
    img.attr('src','http://eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/colourButtons/'+colour+'_'+action+'.png');
}

function expandPalette(event) {
    var target = $(event.currentTarget);
    var parent = target.parent();
    var topParent = parent.parent();
    if (!$('.colourPalette',parent).is(':visible').length) {
        // close other items
        $('>li .colourPalette',topParent).filter(':visible').each(function() {
            $(this).slideUp('fast');
        });
        $('.colourPalette',parent).slideDown('fast');
    }
}

/*	function expandPullOutItems(event) {
    var trigger = $(event.currentTarget);
    var section = trigger.data('section');
    var target = $('#'+section+'Contents');
    var otherSection = '';
    if (!target.is(':visible')) {
        //close other sections
        $('.customiserPullOut').filter(':visible').each(function() {
            $('.colourPalette').filter(':visible').each(function() {
                $(this).hide();
            });
            $(this).slideUp('fast');
            otherSection = $(this).data('section');
            $('#'+otherSection+'Title img').attr('src','http://eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/arrow_closed.png');
        });
        target.slideDown('fast');
        $('img',trigger).attr('src','http://eugeniucozac.com/luxurywatches/wp-content/themes/theluxury-v1-05/customizer/images/arrow_open.png');
        
    }		
} */


/*  function expandPullOutItems() {
    var allPanels = $('#customiserForm .customiserPullOut').hide();

    $('#customiserForm .button').on( 'click' , function() {
        allPanels.slideUp();
        $(this).next().slideDown();
        return false;
    });
} */

function handleCaseTextDirectionChange(event) {
    var target = $(event.currentTarget);
    var direction = target.data('direction');
    $('#caseTextDirectionCurved,#caseTextDirectionHorizontal').removeClass('selected');
    target.addClass('selected');
    $('#caseTextDirection').val(direction);
    
    handleCaseTextChange();
}


function setupTemplatesSlider() {
    globals.templates = {};
    globals.templates.templatesWrapper = $('#templatesWrapper');
    globals.templates.slider = $('>ul',globals.templates.templatesWrapper);	
    globals.templates.slides = $('>li',globals.templates.slider);
    globals.templates.slideWidth = globals.templates.slides.eq(0).outerWidth();
    if (globals.templates.slides.length > 1) {
        var firstSlide = globals.templates.slides.first().clone();
        var lastSlide = globals.templates.slides.last().clone();
        globals.templates.sliderTrueLength = globals.templates.slides.length;
        globals.templates.slider.prepend(lastSlide);
        globals.templates.slider.append(firstSlide);
        globals.templates.slider.css({'marginLeft':(0-globals.templates.slideWidth),'width':globals.templates.slideWidth*(globals.templates.sliderTrueLength+2)});
    } else {
        globals.templates.slider.width(globals.templates.slideWidth);
        $('.sliderArrow').parent().remove();
    }	
}

function setupSavedDesignsSlider() {
    globals.templates = {};
    globals.templates.templatesWrapper = $('#savedDesignsWrapper');
    globals.templates.slider = $('>ul',globals.templates.templatesWrapper);	
    globals.templates.slides = $('>li',globals.templates.slider);
    globals.templates.slideWidth = globals.templates.slides.eq(0).outerWidth();
    if (globals.templates.slides.length > 1) {
        var firstSlide = globals.templates.slides.first().clone();
        var lastSlide = globals.templates.slides.last().clone();
        globals.templates.sliderTrueLength = globals.templates.slides.length;
        globals.templates.slider.prepend(lastSlide);
        globals.templates.slider.append(firstSlide);
        globals.templates.slider.css({'marginLeft':(0-globals.templates.slideWidth),'width':globals.templates.slideWidth*(globals.templates.sliderTrueLength+2)});
    } else {
        globals.templates.slider.width(globals.templates.slideWidth);
        $('.sliderArrow').parent().remove();
    }	
}

function handleMoveSlide(event) {
    var target = $(event.currentTarget);
    var direction = target.data('direction');
    if (direction == 'left') {
        $(document).off('click','.sliderArrow',handleMoveSlide);
        globals.templates.slider.animate({'marginLeft':'-='+globals.templates.slideWidth+'px'},600,'easeInOutExpo',handleAfterSlideMove);
    } else {
        $(document).off('click','.sliderArrow',handleMoveSlide);
        globals.templates.slider.animate({'marginLeft':'+='+globals.templates.slideWidth+'px'},600,'easeInOutExpo',handleAfterSlideMove);
    }
}





function handleAfterSlideMove() {
    $(document).on('click','.sliderArrow',handleMoveSlide);
    checkSliderPos();
}

function checkSliderPos() {
    var pos = parseInt(globals.templates.slider.css('marginLeft'),10);
    if (!pos) {
        globals.templates.slider.css('marginLeft',(0-(globals.templates.slideWidth*globals.templates.sliderTrueLength)));
    } else if (pos == (0-(globals.templates.slideWidth*(globals.templates.sliderTrueLength+1)))) {
        globals.templates.slider.css('marginLeft',(0-globals.templates.slideWidth));
    }
}

function closeFBOverlay() {
    globals.fbSharer.overlays.BG.fadeOut('fast');
    globals.fbSharer.overlays.main.fadeOut('fast');
    globals.fbSharer.isOpen = false;
}

function setupFacebookSharer() {
    globals.fbSharer = {};
    globals.fbSharer.overlays = {};
    globals.fbSharer.overlays.BG = $('#fbOverlayBG');
    globals.fbSharer.overlays.BG.bind(clickEvent,closeFBOverlay);
    globals.fbSharer.overlays.main = $('#fbOverlayWrapper');
    globals.fbSharer.colours = $('li',globals.fbSharer.overlays.main);
    globals.fbSharer.img = $('#fbImage',globals.fbSharer.overlays.main);
    globals.fbSharer.colour = 'black';
    globals.fbSharer.isOpen = false;
    globals.fbSharer.user = {
        loggedIn:false,
        authResponse:{}
    }
    globals.fbSharer.action='';
    $('li a[data-colour="'+globals.fbSharer.colour+'"]',globals.fbSharer.overlays.main).addClass('selected');
}

function showFacebookSharer() {
    if (!globals.fbSharer.isOpen) {
        globals.fbSharer.overlays.BG.height($(document).height());
        var vp = viewPort();
        globals.fbSharer.overlays.BG.show();
        globals.fbSharer.overlays.main.css({top:vp.top+50,left:Math.round(vp.width/2)-350}).fadeIn('fast');
        globals.fbSharer.isOpen = true;
    }
}

function changeFacebookSharerColour(event) {
    var target = $(event.currentTarget);
    if (globals.fbSharer.colour != target.data('colour')) {
        globals.fbSharer.colour = target.data('colour');
        $('li a',globals.fbSharer.overlays.main).removeClass('selected');
        target.addClass('selected');
        openFacebookShareWatch();
    }
}
