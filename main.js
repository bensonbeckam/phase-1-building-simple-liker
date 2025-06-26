// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Hide error modal on load
const modal = document.getElementById('modal');
modal.classList.add('hidden');

// Add click listeners to all hearts
document.querySelectorAll('.like-glyph').forEach(glyph => {
  glyph.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        // Toggle heart state on success
        if (glyph.textContent === EMPTY_HEART) {
          glyph.textContent = FULL_HEART;
          glyph.classList.add('activated-heart');
        } else {
          glyph.textContent = EMPTY_HEART;
          glyph.classList.remove('activated-heart');
        }
      })
      .catch(error => {
        // Show error message
        modal.querySelector('#modal-message').textContent = error;
        modal.classList.remove('hidden');

        // Hide after 3 seconds
        setTimeout(() => modal.classList.add('hidden'), 3000);
      });
  });
});





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
