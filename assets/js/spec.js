$(document).ready(function() {

    /* Collapsible examples */
    $('#specification blockquote > h6 + ul').addClass('collapse in').collapse('hide');
    $('#specification blockquote > h6').addClass('collapsed').click(function() {
        $(this).toggleClass('collapsed')
        $(this).next().collapse('toggle');
    });

});
