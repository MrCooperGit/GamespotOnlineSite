console.log("js");

$(document).ready(function(){

  $('#newsSection').hide();
  $('#reviewsSection').hide();
  // $('#shopSection').hide();
  $('#overwatch2Article').hide();
  $('.hamburgerOverlay').hide();
  $('#cart').hide();

  $('#gamespotLogo').click(function(){
    $('#newsSection').hide();
    $('#reviewsSection').hide();
    $('#shopSection').hide();
    $('#overwatch2Article').hide();
    $('#homeSection').show();
  });
      $('#gamespotLogo').click(function(){
        document.documentElement.scrollTop = 0;
      });
  $('#newsButton').click(function(){
    $('#homeSection').hide();
    $('#reviewsSection').hide();
    $('#shopSection').hide();
    $('#overwatch2Article').hide();
    $('#newsSection').show();
  });
      $('#newsButton').click(function(){
        document.documentElement.scrollTop = 0;
      });
  $('#reviewsButton').click(function(){
    $('#newsSection').hide();
    $('#homeSection').hide();
    $('#shopSection').hide();
    $('#overwatch2Article').hide();
    $('#reviewsSection').show();
  });
      $('#reviewsButton').click(function(){
        document.documentElement.scrollTop = 0;
      });
  $('#shopButton').click(function(){
    $('#newsSection').hide();
    $('#reviewsSection').hide();
    $('#homeSection').hide();
    $('#overwatch2Article').hide();
    $('#shopSection').show();
  });
      $('#shopButton').click(function(){
        document.documentElement.scrollTop = 0;
      });
  $('#overwatch2Banner').click(function(){
    $('#newsSection').hide();
    $('#reviewsSection').hide();
    $('#shopSection').hide();
    $('#homeSection').hide();
    $('#overwatch2Article').show();
  });
      $('#overwatch2Banner').click(function(){
        document.documentElement.scrollTop = 0;
      });
// Hamburger Overlay
  $('#hamburgerMenu').click(function(){
    $('.hamburgerOverlay').toggle();
  });
// Hide shopping cart
  $('#hoodie, #mensTshirt, #womensTshirt, #dadHat, #faceMask, #skateboard').click(function(){
    $('#cart').show();
  });

// Shopping Cart
  document.getElementById('dadHat').addEventListener('click',function(){
  document.getElementById('cart').innerHTML += '<div class="bodyTxt"><br><strong>Dad Hat</strong> - $30</div>';
  });
  document.getElementById('hoodie').addEventListener('click',function(){
  document.getElementById('cart').innerHTML += '<div class="bodyTxt"><br><strong>Hoodie</strong> - $50</div>';
  });
  document.getElementById('mensTshirt').addEventListener('click',function(){
  document.getElementById('cart').innerHTML += '<div class="bodyTxt"><br><strong>Mens T Shirt</strong> - $25</div>';
  });
  document.getElementById('womensTshirt').addEventListener('click',function(){
  document.getElementById('cart').innerHTML += '<div class="bodyTxt"><br><strong>Womens T Shirt</strong> - $25</div>';
  });
  document.getElementById('faceMask').addEventListener('click',function(){
  document.getElementById('cart').innerHTML += '<div class="bodyTxt"><br><strong>Face Mask</strong> - $14</div>';
  });
  document.getElementById('skateboard').addEventListener('click',function(){
  document.getElementById('cart').innerHTML += '<div class="bodyTxt"><br><strong>Skateboard</strong> - $80</div>';
  });

});
