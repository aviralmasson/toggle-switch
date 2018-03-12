(function() {
  
  var RB;

  $(function() {});

  RB = function() {};

  // switch
  RB.switch = function() {
    $('#updatecheck').attr('checked', 'checked');
    return $("input[type=checkbox]").on('change', function() {
      return $('label').toggleClass('off');
    });
  };

  // doc ready
  $(document).ready(function() {
    return RB.switch();
  });

}).call(this);

