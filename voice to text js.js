const button = document.getElementById('start');
const textarea = document.getElementById('textarea');
let recognition;

   button.addEventListener('click', function() {
   button.classList.toggle('clicked');
   button.innerText = button.classList.contains('clicked') ? 'Stop Listening' : 'Start Listening';

       if (button.classList.contains('clicked')) {
           recognition = new webkitSpeechRecognition();
           recognition.lang = 'en-GB';
            recognition.onresult = (TextResult) => {
            textarea.value = TextResult.results[0][0].transcript;
                }
                recognition.onerror = (event) => {
                    console.error('Recognition error:', event.error);
                }
                recognition.start();
            } else {
                recognition.stop();
                textarea.value = '';
            }
        });