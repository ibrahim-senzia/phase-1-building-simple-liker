// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//Listeners to send back the request given
document.addEventListener('DOMContentLoaded', () => {
  const emptyHearts = document.querySelectorAll('.like-glyph');
  const errorModal = document.getElementById('modal');

  //adding a .hidden to remove the ERROR! heading visible after clicking the like icon
  emptyHearts.forEach(emptyHeart => {
    emptyHeart.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          emptyHeart.innerText = FULL_HEART;
          emptyHeart.classList.add('activated-heart');
          errorModal.classList.add('hidden');
        })
        .catch(() => {
          errorModal.querySelector('#modal-message').innerText = 'Server Error';
          errorModal.classList.remove('hidden');
          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 3000);
        });
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
