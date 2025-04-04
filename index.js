$(function() { 
    // Fix onload on div
    $('div[onload]').trigger('onload');
    
    // Load page
    let queryString = window.location.search.substring(1);
    let page_load = queryString.split('&')[0] === 'thiepmoionline' ? 'nhatrai.html' :  'nhagai.html';
    $("body").load(page_load, function() {
    });
});
