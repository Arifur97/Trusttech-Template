/*=============================================================
    JS INDEX
    =============================
    01. Owl Carousel Banner For Product
    02. Category Hover Change Image
    03. Range Slider
    04. Filtering Toggle
    	
*=============================================================*/


/*===================================*
    01. Owl Carousel Banner For Product
/*===================================*/
$('.owl-banner-1').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dot: false,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        650: {
            items: 2
        },
        1199: {
            items: 2
        }
    }
});
$('.owl-banner-2').owlCarousel({
    rtl: true,
    loop: true,
    margin: 30,
    nav: true,
    dot: false,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        650: {
            items: 3
        },
        1199: {
            items: 4
        }
    }
});
$('.owl-banner-3').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dot: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        650: {
            items: 3
        },
        1199: {
            items: 3
        }
    }
});

/*===================================*
    02. Category Hover Change Image
/*===================================*/
var categoryWrap = document.getElementById('navCatContent');
var dropdownMenu = categoryWrap.getElementsByClassName('dropdown-menu');
// var a = dropdownMenu[0].getElementsByTagName('a');



// for(let i = 0; i < dropdownMenu.length; i++) {
//     var headerItemBanner = dropdownMenu[i].getElementsByClassName('header-banner2');
//     var headerItemBannerImage = headerItemBanner[0].getElementsByTagName('img');

//     var item = dropdownMenu[i].getElementsByTagName('a');
//     item[0].addEventListener('mouseover', function () {
//         headerItemBannerImage.src = 'assets/images/menu_banner6.jpg';

//         // item[0].innerHTML = "hello"
//     });
// }



$(document).ready(function () {
    var primaryBanner = $('.change-category-banner').attr('src');

    // $('#navCatContent').slideUp();
    // $(".categories_btn").mouseover(function() {
    //     $('#navCatContent').next().slideUp();
    // }).mouseout(function() {
    //     $('#navCatContent').next().slideUp();
    // });

    $("#navCatContent .dropdown-menu li a").mouseover(function () {
        $('.change-category-banner').attr("src", "assets/images/menu_banner6.jpg");
    }).mouseout(function () {
        $('.change-category-banner').attr("src", primaryBanner);
    });
});

/*===================================*
    03. Range Slider
/*===================================*/
$('.nstSlider').nstSlider({
    "crossable_handles": false,
    "left_grip_selector": ".leftGrip",
    "right_grip_selector": ".rightGrip",
    "value_bar_selector": ".bar",
    "value_changed_callback": function (cause, leftValue, rightValue) {
        $(this).parent().find('.leftLabel').text(leftValue);
        $(this).parent().find('.rightLabel').text(rightValue);
    }
});

/*===================================*
    04. Filtering Toggle
/*===================================*/

$('.widget_categories').slideUp();
$('.widget_title.open').next().slideDown();
$('.widget_title.closed').next().slideUp();
$('.widget_title').on('click', function () {
    $(this).next().slideToggle();
    $(this).toggleClass('active');
    $(this).toggleClass('closed');
});