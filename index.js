

$(document).ready(function(){

    console.log('DOM Ready');


    $.ajax({
        type: 'GET',
        url: 'https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=1',
        dataType: 'json',
        success: function(response, textStatus){
            response.tasks.forEach(function(task){
                $('#todo-list').append('<p>' + task.content + '</p>');
            })
        },
        error: function(request, textStatus, errorMessage){
            console.log(errorMessage);
        }
    })


})


