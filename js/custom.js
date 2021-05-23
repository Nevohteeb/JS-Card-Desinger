// iife begins:
(function() {

  // updateCardOutput Function Begins:

  function updateCardOutput() {

    // Get elements from the DOM:

    // Inputs from Dom variables:
    var getImageInput = document.querySelector('#image').value;
    var getBackgroundInput = document.querySelector('#background').value;
    var getFontInput = document.querySelector('#font').value;
    var getBorderInput = document.querySelector('#border').value;
    var getMessageInput = document.querySelector('#message').value;

    // Get Card elements that will change form the dom:
    var backgroundDiv = document.querySelector('.card');
    var imageDiv = document.querySelector('#coverImage');
    var borderDiv = document.querySelector('#borderDiv');
    var messageCont = document.querySelector('#msg');

    // Image Switch Begins:
    switch (getImageInput) {
      case 'christmas':
        imageDiv.src = 'assets/christmas.jpg'
        break;
      case 'birthday':
        imageDiv.src = 'assets/birthday.jpg'
        break;
      case 'valentines':
        imageDiv.src = 'assets/valentines.jpg'
        break;
    }
    // Image Switch End:


    // Background Switch Begins:
    switch (getBackgroundInput) {
      case 'celadon':
        backgroundDiv.classList.add('celadonBackground');
        backgroundDiv.classList.remove('graphiteBackground');
        backgroundDiv.classList.remove('roseBackground');
        break;
      case 'graphite':
        backgroundDiv.classList.remove('celadonBackground');
        backgroundDiv.classList.add('graphiteBackground');
        backgroundDiv.classList.remove('roseBackground');
        break;
      case 'rose':
        backgroundDiv.classList.remove('celadonBackground');
        backgroundDiv.classList.remove('graphiteBackground');
        backgroundDiv.classList.add('roseBackground');
        break;
    }
    // Background Switch End:


    // Font Switch Begins:
    switch (getFontInput) {
      case 'handwriting':
        messageCont.classList.add('handwriting');
        messageCont.classList.remove('sketch');
        messageCont.classList.remove('print');
        break;
      case 'sketch':
        messageCont.classList.remove('handwriting');
        messageCont.classList.add('sketch');
        messageCont.classList.remove('print');
        break;
      case 'print':
        messageCont.classList.remove('handwriting');
        messageCont.classList.remove('sketch');
        messageCont.classList.add('print');
        break;

    }
    // Font Switch End:


    // Border Switch Begins:
    switch (getBorderInput) {
      case 'none':
        borderDiv.classList.add('noneBorder');
        borderDiv.classList.remove('smallBorder');
        borderDiv.classList.remove('bigBorder');
        borderDiv.classList.remove('filledBorder');
        break;
      case 'thin':
        borderDiv.classList.remove('noneBorder');
        borderDiv.classList.add('smallBorder');
        borderDiv.classList.remove('bigBorder');
        borderDiv.classList.remove('filledBorder');
        break;
      case 'thick':
        borderDiv.classList.remove('noneBorder');
        borderDiv.classList.remove('smallBorder');
        borderDiv.classList.add('bigBorder');
        borderDiv.classList.remove('filledBorder');
        break;
      case 'filled':
        borderDiv.classList.remove('noneBorder');
        borderDiv.classList.remove('smallBorder');
        borderDiv.classList.remove('bigBorder');
        borderDiv.classList.add('filledBorder');
        break;
      default:

    }
    // Border Switch Ends


    // Message content update:
    messageCont.textContent = getMessageInput;
  };
  // updateCardOutput Function Ends

  // OnClick Beigns:
  $('#submit').click(function() {
    updateCardOutput();
  });
  // OnClick Ends

}());
// iife ends
