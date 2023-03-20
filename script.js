// Wait for the DOM to load before running the code
$(document).ready(function() {
  // Animate the start button on hover
  $('#start-form input[type="submit"]').hover(function() {
    $(this).animate({
      backgroundColor: '#ffbd59'
    }, 200);
  }, function() {
    $(this).animate({
      backgroundColor: '#ffa000'
    }, 200);
  });

  // Animate the start form on submit
  $('#start-form').submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Animate the container to shrink and fade out
    $('.container').animate({
      width: '50%',
      height: '50%',
      marginTop: '10%',
      opacity: 0
    }, 500, function() {
      // Redirect to the game page after the animation is complete
      window.location.href = 'game.html';
    });
  });
});
