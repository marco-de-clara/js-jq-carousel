var imagesTotal = 5;

// catch click on next
$('.next').click(function() {
    // get active image
    var currentImage = $('img.active');

    // get active bullet
    var currentBullet = $('a.active');

    // remove active from current image
    currentImage.removeClass('active');

    //remove active from current bullet
    currentBullet.removeClass('active');

    // get next image
    var nextImage = currentImage.next('img');

    // get next bullet
    var nextBullet = currentBullet.next('a');

    // check whether there's a following image
    if (nextImage.length != 0) {
        // set active class to next image
        nextImage.addClass('active');

        //set active class to next bullet
        nextBullet.addClass('active');

    } else {
        // restart from the beginning
        // img
        nextImage = $('img:first-child');
        nextImage.addClass('active');

        // bullet
        nextBullet = $('a:first-child');
        nextBullet.addClass('active');
    }
});

// catch click on prev
$('.prev').click(function() {
    // get active image
    var currentImage = $('img.active');

    // get active bullet
    var currentBullet = $('a.active');

    // remove active from current image
    currentImage.removeClass('active');

    //remove active from current bullet
    currentBullet.removeClass('active');

    // get previous image
    var prevImage = currentImage.prev('img');

    // get previous bullet
    var prevBullet = currentBullet.prev('a');

    // check whether there's a following image
    if (prevImage.length != 0) {
        // set active class to previous image
        prevImage.addClass('active');

        //set active class to previous bullet
        prevBullet.addClass('active');

    } else {
        // restart from the beginning (last)
        // img
        prevImage = $('img:last-child');
        prevImage.addClass('active');

        // bullet
        prevBullet = $('a:last-child');
        prevBullet.addClass('active');
    }
});

// catch click on bullet to change image
$('.bullet').click(function() {
    // new bullet shorthand
    var newBullet = $(this);

    // get new bullet index
    var bulletIndex = newBullet.index();

    // get current image
    var currentImage = $('img.active');

    // get current bullet
    var currentBullet = $('a.active');

    // get new image linked to new bullet
    var newImage = currentImage.parent().children().eq(bulletIndex);

    //remove active from current bullet
    currentBullet.removeClass('active');

    // add active class to new bullet
    newBullet.addClass('active');

    // remove active from current image
    currentImage.removeClass('active');

    // add active class to new image
    newImage.addClass('active');
});
