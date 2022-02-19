// init Masonry
var grid = document.querySelector('.grid');
console.log(grid);

var msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true,
    stagger: 30,
});

imagesLoaded(grid).on('progress', function () {
    // layout Masonry after each image loads
    msnry.layout();
});