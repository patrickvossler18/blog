$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    });

    $(".topbar").click(function () {

    $header = $(this);

    var currenttext = $header.text();
    //getting the next element
    $content = $header.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(200);
    // if($header.text().search('Close') != -1){
    //    $header.text('Show '+ currenttext);
    // } else {
    //    $header.text('Close ' + currenttext);
    // }
    // $content.slideToggle(200, function () {
    //     //execute this after slideToggle is done
    //     //change text of header based on visibility of content div
    //     var currenttext = $header.text();

    //     $('.showpanel').slideToggle('slow');
    //    if($(this).text() == 'close'){
    //        $(this).text('Show');
    //    } else {
    //        $(this).text('close');
    //    }
    //     // console.log(currenttext)
    //     // if(currenttext == "Show Calendar"){
    //     //     $header.html("Hide Calendar");
    //     //     $content.hide();
    //     // } elseif{
    //     //     $header.html("Hide Calendar");
    //     //      $header.show();            
    //     // } else{
    //     //     $header.html("Show Calendar");
    //     //      $header.hide();  
    //     // }
    //     // $header.text(function () {
    //     //     //change text based on condition
    //     //     return $content.is(":visible") ? "Collapse" + currenttext : "Expand" + currenttext;
    //     //     // return $content.is(":visible");
    //     //     });
    //     });

    });

});
