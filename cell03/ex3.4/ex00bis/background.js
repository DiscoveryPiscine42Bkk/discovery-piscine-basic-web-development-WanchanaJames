$(document).ready(function() {
    $('#colorButton').click(function() {
        
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
         
        $('body').css('background-color', `rgb(${r}, ${g}, ${b})`);
        
        console.log(`color (jQuery): rgb(${r}, ${g}, ${b})`);
    });
});