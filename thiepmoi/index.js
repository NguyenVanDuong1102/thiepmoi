$(function() { 
    // Fix onload on div
    $('div[onload]').trigger('onload');
    
    // Load page
    let queryString = window.location.search.substring(1);
    let page_load = queryString === '' ? 'nhatrai.html' : queryString.split('&')[0] + '.html';
    $("body").load(page_load, function() {
        // Xóa tham số trên URL sau khi load
        history.replaceState(null, null, window.location.pathname);
    });
});