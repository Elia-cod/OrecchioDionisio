$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active")
    });
});
const button = $('menu-btn')
const overlay = $('#overlay')
overlay.scrollableOverlay()
 
const close = $('#close')
const body = $('body')
button.on('click', () => {
  overlay.removeClass('hidden');
  overlay.trigger('show')
})
 
close.on('click', () => {
  overlay.addClass('hidden');
  overlay.trigger('hide')
})




