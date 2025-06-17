$(document).ready(function() {
    const $balloon = $('#balloon');
    const $message = $('#message');
    let size = 200;
    const colors = ['red', 'green', 'blue'];
    let colorIndex = 0;
    let currentColor = colors[colorIndex];

    function updateBalloon() {
        $balloon.css({
            'width': size + 'px',
            'height': size + 'px',
            'background-color': currentColor
        });
    }

    function showExplosion() {
        $message.css('opacity', 1);
        
        setTimeout(() => {
            $message.css('opacity', 0);
            updateBalloon();
        }, 1000);
    }

    $balloon.on('click', function() { 
        size += 10;
        
        if (size > 420) {
            size = 200;
            colorIndex = 0;
            showExplosion();
        } else {
            colorIndex = (colorIndex + 1) % colors.length;
        }
        
        currentColor = colors[colorIndex];
        updateBalloon();
    });

    $balloon.on('mouseout', function() {
        size = Math.max(200, size - 5);
        colorIndex = (colorIndex - 1 + colors.length) % colors.length;
        currentColor = colors[colorIndex];
        updateBalloon();
    });
});
