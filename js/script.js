// Sensei version
$( document ).ready( function () {

    $( '.main_btna, .main_btn, a[href="#sheldure"]' ).click( function () {
        $( '.overlay' ).fadeIn( 300 )
        $( '.modal' ).slideDown( 300 )
    } )

    $( '.close' ).click( function () {
        $( '.modal' ).slideUp( 300 )
        $( '.overlay' ).fadeOut( 300 )
    } )

    $( '.overlay' ).click( function () {
        $( '.modal' ).slideUp( 300 )
        $( '.overlay' ).fadeOut( 300 )
    } )

} )
// My version
/* $(document).ready(function () {
    $('.main_btna').on('click', function () {
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown('slow');
    });

    $('.main_btn').on('click', function () {
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown('slow');
    });

    $('.main_nav nav li:eq(1)').on('click', function (event) {
        event.preventDefault();
        $('.overlay').fadeIn('slow');
        $('.modal').slideDown('slow');
    });

    $('.close').on('click', function () {
        $('.overlay').fadeOut('slow');
        $('.modal').slideUp('slow');
    });
}); */
