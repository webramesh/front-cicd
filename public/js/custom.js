$(document).ready(function() {
    $('.menu-icon__line').click(function() {
        $('.nav-links').toggleClass('visible');
        $('.menu-icon').toggleClass('clicked')
    });
})
const header = document.querySelector('.main-header');
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

$(function() {
    $(".item-box").slice(0, 9).show();
    $("#loadMore").on('click', function(e) {
        e.preventDefault();
        $(".item-box:hidden").slice(0, 3).slideDown();
        if ($(".item-box:hidden").length == 0) {
            // $("#load").fadeOut('slow');
            $("#loadMore").hide();
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
    $(".app-box").slice(0, 8).show();
    $("#loadMore").on('click', function(e) {
        e.preventDefault();
        $(".app-box:hidden").slice(0, 4).slideDown();
        if ($(".app-box:hidden").length == 0) {
            // $("#load").fadeOut('slow');
            $("#loadMore").hide();
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
    // add more input
    "use strict";

    var itemTemplate = $('.example-template').detach(),
        editArea = $('.social-input'),
        itemNumber = 1;

    $(document).on('click', '.add_field_btn', function(event) {
        var item = itemTemplate.clone();
        item.find('[id]').attr('id', function() {
            return $(this).attr('id') + '_' + itemNumber;
        });
        ++itemNumber;
        item.appendTo('.social-input');
        $('.save-btn').addClass('d-block');

    });
    // delet added inpute field
    // $(document).on('click', '.social-input .del', function(event) {
    //     var target = $(event.target),
    //         row = target.closest('.example-template');
    //     row.remove();
    // });
});