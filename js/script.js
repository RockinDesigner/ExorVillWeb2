
var startNum;
//
// $(function anim(n) {
//   $('#countdown').fadeIn("fast", function() {
//     if ($(this).html() == "") {
//       $(this).html(n); // init first time based on n
//       startNum = n; // preserve param
//     }
//     $('#countdown').delay(600).hide('fast', 300, function () {
//       if (n == 1){
//         $('#blocker').remove();
//       }
//       else n--;
//       $(this).html(n);
//       anim(n);
//     }); // end puff
//   });
// })

$(function() {
  anim(10);
  return;
});
$(document).ready(function() {
  $('#glitchImg').mgGlitch({
    destroy: false,
    glitch: true,
    scale: true,
    blend: true,
    blendModeType: 'hue',
    glitch1TimeMin: 200,
    glitch1TimeMax: 400,
    glitch2TimeMin: 10,
    glitch2TimeMax: 100
  });
});
