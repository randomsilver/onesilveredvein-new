// Cache selectors
var lastId,
    topMenu = $("#osv-navbar .nav"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
  $('html, body').stop().animate({
  scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }
});
function gallery(){
  $('#dog1').click(function() { bootbox.alert('<img src="templates/img/dog1.jpg"><h4>Dog ipsum dolor sit amet</h4>'); });
  $('#cat1').click(function() { bootbox.alert('<img src="templates/img/cat1.jpg"><h4>Cat ipsum dolor sit amet</h4>'); });
  $('#bird1').click(function() { bootbox.alert('<img src="templates/img/bird1.jpg"><h4>Bird ipsum dolor sit amet</h4>'); });
  $('#dog2').click(function() { bootbox.alert('<img src="templates/img/dog2.jpg"><h4>Dog ipsum dolor sit amet</h4>'); });
  $('#cat2').click(function() { bootbox.alert('<img src="templates/img/cat2.jpg"><h4>Cat ipsum dolor sit amet</h4>'); });
  $('#bird2').click(function() { bootbox.alert('<img src="templates/img/bird2.jpg"><h4>Bird ipsum dolor sit amet</h4>'); });
  $('#dog3').click(function() { bootbox.alert('<img src="templates/img/dog3.jpg"><h4>Dog ipsum dolor sit amet</h4>'); });
  $('#cat3').click(function() { bootbox.alert('<img src="templates/img/cat3.jpg"><h4>Cat ipsum dolor sit amet</h4>'); });
  $('#bird3').click(function() { bootbox.alert('<img src="templates/img/bird3.jpg"><h4>Bird ipsum dolor sit amet</h4>'); });
  $('#dog4').click(function() { bootbox.alert('<img src="templates/img/dog4.jpg"><h4>Dog ipsum dolor sit amet</h4>'); });
  $('#cat4').click(function() { bootbox.alert('<img src="templates/img/cat4.jpg"><h4>Cat ipsum dolor sit amet</h4>'); });
  $('#bird4').click(function() { bootbox.alert('<img src="templates/img/bird4.jpg"><h4>Bird ipsum dolor sit amet</h4>'); });
  $('#dog5').click(function() { bootbox.alert('<img src="templates/img/dog5.jpg"><h4>Dog ipsum dolor sit amet</h4>'); });
  $('#cat5').click(function() { bootbox.alert('<img src="templates/img/cat5.jpg"><h4>Cat ipsum dolor sit amet</h4>'); });
  $('#bird5').click(function() { bootbox.alert('<img src="templates/img/bird5.jpg"><h4>Bird ipsum dolor sit amet</h4>'); });
}
var $itemsHolder = $('#gallery ul.thumbnails');
var $itemsClone = $itemsHolder.clone(); 
var $filterClass = "";
$('#gallery ul.filter li').click(function(e) {
e.preventDefault();
$filterClass = $(this).attr('data-value');
    if($filterClass == 'all'){ var $filters = $itemsClone.find('li'); }
    else { var $filters = $itemsClone.find('li[data-type='+ $filterClass +']'); }
    $itemsHolder.quicksand(
      $filters,
      { duration: 1000 },
      gallery
      );
});
$(document).ready(gallery);
