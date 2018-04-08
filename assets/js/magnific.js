// Window: https://codepen.io/harconst/pen/ogmOZm
$('.magnific-image').magnificPopup({
  type:'image',
  removalDelay: 300,
  mainClass: 'mfp-fade'
});

$('.magnific-video, .magnific-iframe').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 300,
  preloader: false,
  fixedContentPos: false,
});


// Iframe popups: https://codepen.io/dimsemenov/pen/GtjBb
$('.magnific-iframe').magnificPopup({
  type:'inline',
  midClick: true,
  mainClass: 'custom-popup'
  // Optionally pass markup without attaching it to DOM
  /*items: {
    src: '<div id="popup-with-something" class="mfp-hide"><div class="some-element">Instead of this element you may put anything else and it\'ll scale proportionally (e.g. flash embed object or your custom video player) </div></div>'
  }*/
});


// Caption Video/Audio: https://codepen.io/dimsemenov/pen/zjtbr
$('.magnific-video').magnificPopup({
  type: 'iframe',

  iframe: {
     markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '<div class="mfp-title">Some caption</div>'+
              '</div>'
  },
  callbacks: {
    markupParse: function(template, values, item) {
     values.title = item.el.attr('title');
    }
  }

});
