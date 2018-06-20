$(function () {
    $('#submit-button').click(function(event){
        event.preventDefault();
        var burgerName = $('#burger-text').val().trim();
        $.ajax("/api/burgers/", {
            type: "POST",
            data: { 'name': burgerName}
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $('.devour-button').click(function(event){
        event.preventDefault();
        var id = $(this).attr('data-id');
        $.ajax("/api/burgers/" + id, {
            type:"PUT"
        }).then(
            function () {
                console.log("Item devoured!");
                location.reload();
            }
        );
    });
});