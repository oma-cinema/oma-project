//= require jquery
//= require jquery_ujs




jQuery(document).ready(function($){
  var contentSections = $('.cd-section'),
    navigationItems = $('#cd-vertical-nav a');

  updateNavigation();
  $(window).on('scroll', function(){
    updateNavigation();
  });

  //smooth scroll to the section
  navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
      $('.touch #cd-vertical-nav').toggleClass('open');

    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
      $('.touch #cd-vertical-nav').removeClass('open');
    });

  function updateNavigation() {
    contentSections.each(function(){
      $this = $(this);
      var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
      if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
        navigationItems.eq(activeSection).addClass('is-selected');
      }else {
        navigationItems.eq(activeSection).removeClass('is-selected');
      }
    });
  }

  function smoothScroll(target) {
        $('body,html').animate(
          {'scrollTop':target.offset().top},
          600
        );
  }
});


    // Icons Filling Effect - by CodyHouse.co

(function(){
    // Icons Filling Effect - by CodyHouse.co
  function IconsFilling( element ) {
    this.element = element;
    this.blocks = this.element.getElementsByClassName("js-cd-service");
    this.update();
  };

  IconsFilling.prototype.update = function() {
    if ( !"classList" in document.documentElement ) {
      return;
    }
    this.selectBlock();
    this.changeBg();
  };

  IconsFilling.prototype.selectBlock = function() {
    for(var i = 0; i < this.blocks.length; i++) {
      ( this.blocks[i].getBoundingClientRect().top < window.innerHeight/2 ) ? this.blocks[i].classList.add("cd-service--focus") : this.blocks[i].classList.remove("cd-service--focus");
    }
  };

  IconsFilling.prototype.changeBg = function() {
    removeClassPrefix(this.element, 'cd-icons-filling--new-color-');
    this.element.classList.add('cd-icons-filling--new-color-' + (Number(this.element.getElementsByClassName("cd-service--focus").length) - 1));
  };

  var iconsFillingContainer = document.getElementsByClassName("js-cd-icons-filling"),
    iconsFillingArray = [],
    scrolling = false;
  if( iconsFillingContainer.length > 0 ) {
    for( var i = 0; i < iconsFillingContainer.length; i++) {
      (function(i){
        iconsFillingArray.push(new IconsFilling(iconsFillingContainer[i]));
      })(i);
    }

    //update active block on scrolling
    window.addEventListener("scroll", function(event) {
      if( !scrolling ) {
        scrolling = true;
        (!window.requestAnimationFrame) ? setTimeout(checkIconsFilling, 250) : window.requestAnimationFrame(checkIconsFilling);
      }
    });
  }

  function checkIconsFilling() {
    iconsFillingArray.forEach(function(iconsFilling){
      iconsFilling.update();
    });
    scrolling = false;
  };

  function removeClassPrefix(el, prefix) {
    //remove all classes starting with 'prefix'
        var classes = el.className.split(" ").filter(function(c) {
            return c.indexOf(prefix) < 0;
        });
        el.className = classes.join(" ");
  };
})();


    // Menu pour index cinema

$(document).ready(function(){
  $('div.article:not(#tab1)').hide();
  var tab = $('li');

  $(tab).each(function(){
    $(this).on('click', function(){
      $(tab).not(this).removeClass('active');
      $(this).addClass('active');
      var anchor = $(this).find('a').attr('href');
      $('.article:not('+anchor+')').hide();
      $(anchor).fadeIn();
    });
  });
});

 // Fog for coming soon


