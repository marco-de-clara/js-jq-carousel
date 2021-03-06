// initializing autoplay index
var autoplayIndex = 0;

// catch click on next
$('.next').click(function() {
    // get active image
    var currentImage = $('img.active');

    // get active bullet
    var currentBullet = $('a.active');

    // remove active from current image
    currentImage.removeClass('active');

    // remove active from current bullet
    currentBullet.removeClass('active');

    // get next image
    var nextImage = currentImage.next('img');

    // get next bullet
    var nextBullet = currentBullet.next('a');

    // check whether there's a following image
    if (nextImage.length != 0) {
        // set active class to next image
        nextImage.addClass('active');

        // set active class to next bullet
        nextBullet.addClass('active');

        // set next image index as current autoplay index
        autoplayIndex = nextImage.index();
    } else {
        // restart from the beginning
        // img
        nextImage = $('img:first-child');
        nextImage.addClass('active');

        // bullet
        nextBullet = $('a:first-child');
        nextBullet.addClass('active');

        // set next image index as current autoplay index
        autoplayIndex = nextImage.index();
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

        // set previous image index as current autoplay index
        autoplayIndex = prevImage.index();
    } else {
        // restart from the beginning (last)
        // img
        prevImage = $('img:last-child');
        prevImage.addClass('active');

        // bullet
        prevBullet = $('a:last-child');
        prevBullet.addClass('active');

        // set previous image index as current autoplay index
        autoplayIndex = prevImage.index();
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

    // set new image index as current autoplay index
    autoplayIndex = newImage.index();
});

// support variable to play/pause autoplay
var playMode;

// support variable to play/pause loading bar
var playBar;

// first autoplay() call
autoplay();

// first loadBar() call
loadBar();

function loadBar() {
    $('.loadingBar').addClass('active');
}

// autoplay function
function autoplay() {
    // slide class selector shorthand
    var slide = $('.slide');

    // bullet class selector shorthand
    var bullet = $('.bullet');

    // remove active class from every slide and bullet
    for (var i = 0; i < slide.length; i++) {
        slide.eq(i).removeClass('active');
        bullet.eq(i).removeClass('active');
    }

    // go to next image in slideshow
    autoplayIndex++;

    // if index exceedes slides number
    if (autoplayIndex > slide.length) {
        // restart
        autoplayIndex = 1;
    }

    // set active class to current slide
    slide.eq(autoplayIndex - 1).addClass('active');

    // set active class to current bullet
    bullet.eq(autoplayIndex - 1).addClass('active');

    // set 2s delay to autoplay function
    playMode = setTimeout(autoplay, 2000);

    // remove active class from loading bar
    $('.loadingBar').removeClass('active');

    // set 0.1s delay to loadBar function
    // transition time is set to 1.9s to start at the same time as autoplay()
    playBar = setTimeout(loadBar, 100);
}

// catch click on Play button
$('button.play').click(function() {
    // start autoplay after 2s
    setTimeout(autoplay, 2000);
    // start loadBar after 0.1s
    setTimeout(loadBar, 100);
    // disable play button
    $(this).prop("disabled", true);
    // enable pause button
    $('button.pause').prop("disabled", false);
});

// catch click on Pause button
$('button.pause').click(function() {
    // stop autoplay
    clearTimeout(playMode);
    // stop loading bar
    clearTimeout(playBar);
    // disable pause button
    $(this).prop("disabled", true);
    // enable play button
    $('button.play').prop("disabled", false);
});
