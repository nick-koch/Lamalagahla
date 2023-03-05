// init Masonry
var grid = document.querySelector(".grid");
console.log(grid);

var enlarged_image_item;

var msnry = new Masonry(grid, {
  itemSelector: ".grid-item",
  columnWidth: ".grid-sizer",
  percentPosition: true,
  stagger: 30,
});

imagesLoaded(grid).on("progress", function () {
  // layout Masonry after each image loads
  msnry.layout();
});

grid.addEventListener("click", function (event) {
  if (enlarged_image_item) {
    enlarged_image_item.classList.remove("grid-item-max-width");
  }
  var image_parent = event.target.parentElement;
  enlarged_image_item = image_parent;
  if (!matchesSelector(image_parent, ".grid-item")) {
    return;
  }
  // change size of item via class
  image_parent.classList.toggle("grid-item-max-width");
  // trigger layout
  msnry.layout();
});
