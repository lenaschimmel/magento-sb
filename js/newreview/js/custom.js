// Add here all your JS customizations

jQuery(function ($) {
  //  $(".style-checkbox input, .style-radio input").styler();
    $(".max-lenght-s textarea, .max-lenght-s input").bind('textchange', function (event, previousText) {
        var maxcount = $(this).attr("maxlength");
        var count = $(this).val().length;
        $(this).parent().find(".counter-symbols span").text(count);
    });
    $(".edit-link").click(function() {
        var form = $(this).next();
        $(this).toggleClass("active");
        if($(this).hasClass("active")) {
            form.css('z-index', '30');
            form.animate(
                {
                    height: form.get(0).scrollHeight
                },
                500, function() {
                    form.css('overflow', 'visible');
            });
        }
        else {

            form.animate(
                {
                    height: 0
                },
                500, function() {
                    form.css('overflow', 'hidden');
                    form.css('z-index', '0');
                });
        }
    });
    $(".rateit").bind('rated', function (event, value) {
            var val = value - 1;
            var text_val = $(".rait-select option:eq(" + val + ")").text();
            $(this).parent().parent().find(".rait-name").text(text_val);
            $(this).parent().parent().find(".h-val").val(text_val);
    });
    $(".rateit").bind('hover', function (event, value) {
        old_var = $(this).parent().parent().find(".h-val").val();
        if(value>0) {
            var val = value - 1;
            var text_val = $(".rait-select option:eq(" + val + ")").text();
            $(this).parent().parent().find(".rait-name").text(text_val);
        }
        else if(value === null){
            $(this).parent().parent().find(".rait-name").text(old_var);
        }
    });


});
