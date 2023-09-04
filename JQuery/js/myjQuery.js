$(document).ready(function () {
    console.log('I am a new file now')
    //your jquery code here
    console.log("We are using jQuery");
    //jQuery syntax look like this
    //$('selector').action()

    //click on all the p Elements. this is an example of an element selector
    //$('p').click();  //click on p
        //$('p').click(function () {
        //console.log('you clicked on p', this);
        //$(this).hide();
        //$('#id').hide();
        //$('.class').hide();

    //});   //do this when we click on p

    //$('p').dblclick(function () {
        //console.log('you double clicked on p', this);
        //$(this).hide();
        //$('#id').hide();
        //$('.class').hide();

    //});

    //$('p').mouseenter(function () {
      //  console.log('you entered', this);
        //$(this).hide();
        //$('#id').hide();
        //$('.class').hide();

    //});

    //there are three main types of selectors in jQuery
    // 1. element selector
    // 2. id selector
    // 3. class selector

    // 1. element selector - This is an example of element selector which clicks on all p
    // $('p').click();

    // 2. Id selector - this is an example of id selector 
    //$('#second').click();

    // 3. class selector - this is an example of id selector 
    //$('#odd').click();

    // other selector
    //$('*').click()          // clicks on all the elements

    //$('p.odd').click()     //click on all the elements
    //$('p:first').click()     //click on all the elements

    //Events in jQuery
    // Mouse events = click, dbclick, mouseenter, mouseleave
    // keyboardEvent = keypress, keydown, MediakeyStatusMap
    // form events = submit, change, focus, blur
    // document/window events = load, resize, scroll, unload

    $('p').on(
        {
            click: function(){
                console.log('Thanks for clicking', this)
            },
            mouseleave: function(){
                console.log('mouseleave')
            }
        }
    )

    // $('#wiki').hide(1000, function(){
    //     console.log("hidden")
    // });
    // $('#wiki').show(1000, function(){
    //     console.log("show")
    // });

    // $('#but').click(function(){
    //     $('#wiki').fadeToggle(1000)
    // });
    // fadeIn(), fadeOut(), fadeToggle(), fadeTo()

    // $('#wiki').slideUp(1000);
    // $('#wiki').slideDown(1000);
    // $('#wiki').slideToggle(1000);

    // $('#wiki').animate({
    //     opacity: 0.3,
    //     height: '150px',
    //     width: '350px'
    // }, 3000);

    $('#wiki').animate({opacity:0.3}, 4000);
    $('#wiki').animate({opacity:0.9}, 1000);
    $('#wiki').animate({width: '350px'}, 1000);
});