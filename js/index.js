;(function($, undefined) {

    var count = 0;
    var new_items = [];
    $('#add').on('click', function() {
        if ($('#inp').val()) {
            count += 1;
            $('div .message').css('margin-top', '10px').ready(function() {
            $('div .message').css('opacity', '1');
            });
            setTimeout(function() {$('div .message').css('opacity', '0')}, 2000);
            setTimeout(function() {$('div .message').css('margin-top', '-60px')}, 2000); 
            
            let text = $('#inp').val();
            let item = $('<div>').attr({'id':`id${count}`, 'class':'row justify-content-between align-items-start'});
            let ready = $('<div class="block col-2"><i class="true fa-solid fa-check ml-2"></i></div>');
            $(item).append(ready);
            $(item).append($(`<div class="text-start block col-10"><p>Задание №${count}: ${text}</p></div>`));
            $(item).css({'margin-top': '-100px', 'transition': 'all 1s', 'padding-left': '15%', 'opacity': '0', 
            'position': 'relative', 'z-index': '-20'});
            $('#list').append(item);
            $('#inp').val('');
            new_items.push(`#id${count}`);        
        }
        else 
            alert('Введите что-то в поле!')            
    });

    $('#show').on('click', function() {
        new_items.forEach(element => {
            $(element).css('margin-top', '10px').ready(function() {
                $(element).css({'opacity': '1', 'z-index': '1'});
                $(`${element} i`).css('opacity', '0');
            });
        new_items = [];
        });
    });

    $('#res').on('click', function() {
        if ($('#list').html()) {
            let check = prompt('Укажите номер исполненного мероприятия');
            $(`#id${check} i`).css('opacity', '1');
        }   
    });
})(jQuery)
