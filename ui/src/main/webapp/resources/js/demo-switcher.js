/**
 * Bracara v1.0
 * HTML5 & CSS3 Multipurpose Theme
 * http://leaftree.pt/bracaraHTML
 *
 * leaftree 2013
 * @leaftreeInc
 * http://leaftree.pt
 */
 
(function ($) {
  "use strict;"
  
  $(document).ready(function() {
    
    $(".switcher .link").click(function() {

    	if ($(".switcher .themeColors").css("display") === "none") {
    		$(".switcher .themeColors").css("display", "block"); 
    	} else {
    		$(".switcher .themeColors").css("display", "none");
    	}
    	
    })
    
    // Theme color
    $('.themeColors li a').click(function() {
      var themeColor = $(this).attr('class');
      
      $('#themeColor').remove();
      $('body').append('<link rel="stylesheet" href="css/colors/' + themeColor + '.css" id="themeColor">');
    });
    
  });

})(jQuery);