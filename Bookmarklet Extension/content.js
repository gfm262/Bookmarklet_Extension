chrome.runtime.onMessage.addListener(
    function (request) {
        if (request.message === "clicked_browser_action") {
            $('p').click(function() {
                fColor = $(this).css('color'); // This function is executed every time someone clicks on a P element
                  //var paragraphText = $(this).css({'background-color': fColor});
                  
                    var paragraphText = $(this).css({'background-color': fColor});
                    $('img').remove()
                });
                
                $(document).ready(function() {
                  $('button').attr('disabled', true);
                })



        }
    }
)