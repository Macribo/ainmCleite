//jshint esversion:6
$(document).ready(function() {
  $('#output').hover(function() {
    $('#bearla').text('Manifesto');
    $(this).css('color', '#e35ee5');
  });
  $('#output').mouseout(function() {
    $('#bearla').text('');
    $(this).css('color', '#730a0a');
  });
  document.querySelector('#bckBtn').onmouseenter = event => {
    document.querySelector('#bearla').innerHTML = 'back';
  };
  document.querySelector('#fwdBtn').onmouseenter = event => {
    document.querySelector('#bearla').innerHTML =
      'Mouseover Irish text to translate';
  };
  //    $('#button').hover(function(){
  //                   $('#bearla').text('push');
  //    });

  $('#fwdBtn').click(function() {
    $('#output2 span').hover(function() {
      $('#bearla').text($(this).attr('id'));
      $(this).css('color', '#e35ee5');
      //  $('div').slidedown();
    });

    $('#output2 span').mouseout(function() {
      $('#bearla').text('');
      $(this).css('color', '#000');
    });
  });

  $('#bckBtn').click(function() {
    $('#output2 span').hover(function() {
      $('#bearla').text($(this).attr('id'));
      $(this).css('color', '#e35ee5');
      //  $('div').slidedown();
    });

    $('#output2 span').mouseout(function() {
      $('#bearla').text('');
      $(this).css('color', '#000');
    });
  });

  $('#play').click(function() {
    $('#output2 span').hover(function() {
      $('#bearla').text($(this).attr('id'));
      $(this).css('color', '#e35ee5');
      //  $('div').slidedown();
    });

    $('#output2 span').mouseout(function() {
      $('#bearla').text('');
      $(this).css('color', '#000');
    });
  });

  $('#output2 span').hover(function() {
    $('#bearla').text($(this).attr('id'));
    $(this).css('color', '#e35ee5');
  });

  $('#output2 span').mouseout(function() {
    $('#bearla').text('');
    $(this).css('color', '#000');
  });

  $('#deirGeaga1').hover(function() {
    $('#bearla').text('The Other Land');
    $(this).css('color', '#e35ee5');
  });

  $('#deirGeaga1').mouseout(function() {
    $('#bearla').text('');
    $(this).css('color', '#730a0a');
  });

  $('#btnTalk').click(function() {
    $('#deirGeaga2 span').hover(function() {
      console.log('hovvrin!');

      $('#bearla').text($(this).attr('id'));
      $(this).css('color', '#e35ee5');
    });

    $('#deirGeaga2 span').mouseout(function() {
      $('#bearla').text('');
      $(this).css('color', '#fff');
    });
  });

  /*    
       $('#deirGeaga2').hover(function(){
     $('#bearla').text('Welcome');
        
           $(this).css('color','#e35ee5');
    });

        $('#deirGeaga2').mouseout(function(){
            $('#bearla').text('');
            $(this).css('color','#fff');


    });*/
});
