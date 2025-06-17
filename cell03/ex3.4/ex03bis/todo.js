$(function() {
    if(document.cookie) {
        JSON.parse(getCookie('todos')).forEach(t => $('#ft_list').prepend(`<div class="todo">${t}</div>`));
    }

    $('#newBtn').click(() => {
        const task = prompt("New task:");
        if(task) {
            $('#ft_list').prepend(`<div class="todo">${task}</div>`);
            saveToCookie();
        }
    });

    $(document).on('click', '.todo', function() {
        if(confirm("Delete this?")) {
            $(this).remove();
            saveToCookie();
        }
    });

    function getCookie(name) {
        return document.cookie.split('; ').find(row => row.startsWith(name+'=')).split('=')[1];
    }
    
    function saveToCookie() {
        const tasks = [];
        $('.todo').each(function() { tasks.push($(this).text()); });
        document.cookie = `todos=${JSON.stringify(tasks)}; max-age=604800`; 
    }
});