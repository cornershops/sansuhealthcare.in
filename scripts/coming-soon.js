    $(document).ready(function(){
        $('.about-menu').click(function(){
            $('#aboutContent').show(1000);        
            $('#homeContent').hide(1000);
            $('#contactUs').hide(1000);
            $('.menu-item-1').removeClass('active');
            $('.menu-item-2').addClass('active');
            $('.menu-item-3').removeClass('active');
        });
        
        $('.contact-menu').click(function(){
            $('#homeContent').hide(1000);
            $('#aboutContent').hide(1000);
            $('#contactUs').show(1000);
            $('.menu-item-1').removeClass('active');
            $('.menu-item-2').removeClass('active');            
            $('.menu-item-3').addClass('active');            
        })
        
        $('.home-menu').click(function(){
            $('#homeContent').show(1000);
            $('#aboutContent').hide(1000);
            $('#contactUs').hide(1000);
            $('.menu-item-1').addClass('active');            
            $('.menu-item-2').removeClass('active');
            $('.menu-item-3').removeClass('active');            
        })
    })