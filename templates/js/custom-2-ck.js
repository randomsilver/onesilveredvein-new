// Cache selectors
function gallery(){$("#dog1").click(function(){bootbox.alert('<img src="templates/img/dog1.jpg"><h4>Dog ipsum dolor sit amet</h4>')});$("#cat1").click(function(){bootbox.alert('<img src="templates/img/cat1.jpg"><h4>Cat ipsum dolor sit amet</h4>')});$("#bird1").click(function(){bootbox.alert('<img src="templates/img/bird1.jpg"><h4>Bird ipsum dolor sit amet</h4>')});$("#dog2").click(function(){bootbox.alert('<img src="templates/img/dog2.jpg"><h4>Dog ipsum dolor sit amet</h4>')});$("#cat2").click(function(){bootbox.alert('<img src="templates/img/cat2.jpg"><h4>Cat ipsum dolor sit amet</h4>')});$("#bird2").click(function(){bootbox.alert('<img src="templates/img/bird2.jpg"><h4>Bird ipsum dolor sit amet</h4>')});$("#dog3").click(function(){bootbox.alert('<img src="templates/img/dog3.jpg"><h4>Dog ipsum dolor sit amet</h4>')});$("#cat3").click(function(){bootbox.alert('<img src="templates/img/cat3.jpg"><h4>Cat ipsum dolor sit amet</h4>')});$("#bird3").click(function(){bootbox.alert('<img src="templates/img/bird3.jpg"><h4>Bird ipsum dolor sit amet</h4>')});$("#dog4").click(function(){bootbox.alert('<img src="templates/img/dog4.jpg"><h4>Dog ipsum dolor sit amet</h4>')});$("#cat4").click(function(){bootbox.alert('<img src="templates/img/cat4.jpg"><h4>Cat ipsum dolor sit amet</h4>')});$("#bird4").click(function(){bootbox.alert('<img src="templates/img/bird4.jpg"><h4>Bird ipsum dolor sit amet</h4>')});$("#dog5").click(function(){bootbox.alert('<img src="templates/img/dog5.jpg"><h4>Dog ipsum dolor sit amet</h4>')});$("#cat5").click(function(){bootbox.alert('<img src="templates/img/cat5.jpg"><h4>Cat ipsum dolor sit amet</h4>')});$("#bird5").click(function(){bootbox.alert('<img src="templates/img/bird5.jpg"><h4>Bird ipsum dolor sit amet</h4>')})}var lastId,topMenu=$("#osv-navbar .nav"),topMenuHeight=topMenu.outerHeight()+15,menuItems=topMenu.find("a"),scrollItems=menuItems.map(function(){var e=$($(this).attr("href"));if(e.length)return e});menuItems.click(function(e){var t=$(this).attr("href"),n=t==="#"?0:$(t).offset().top-topMenuHeight+1;$("html, body").stop().animate({scrollTop:n},300);e.preventDefault()});$(window).scroll(function(){var e=$(this).scrollTop()+topMenuHeight,t=scrollItems.map(function(){if($(this).offset().top<e)return this});t=t[t.length-1];var n=t&&t.length?t[0].id:"";if(lastId!==n){lastId=n;menuItems.parent().removeClass("active").end().filter("[href=#"+n+"]").parent().addClass("active")}});var $itemsHolder=$("#gallery ul.thumbnails"),$itemsClone=$itemsHolder.clone(),$filterClass="";$("#gallery ul.filter li").click(function(e){e.preventDefault();$filterClass=$(this).attr("data-value");if($filterClass=="all")var t=$itemsClone.find("li");else var t=$itemsClone.find("li[data-type="+$filterClass+"]");$itemsHolder.quicksand(t,{duration:1e3},gallery)});$(document).ready(gallery);