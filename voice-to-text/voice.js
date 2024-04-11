var startbutton = document.getElementById('Start');
var stopbutton = document.getElementById('Stop');
var resultElement = document.getElementById('convert_text');
var recognition = new webkitSpeechRecognition();

recognition.lang = window.navigator.language;
recognition.interimResults = true;
recognition.continuous = true; // Enable continuous recognition

startbutton.addEventListener('click', () => { 
    recognition.start(); 
});

stopbutton.addEventListener('click', () => { 
    recognition.stop(); 
});

recognition.addEventListener('result', (event) => {
    let interimTranscript = '';
    let finalTranscript ='';
    for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
             finalTranscript += event.results[i][0].transcript +'';
            // resultElement.value += finalTranscript + ' ';
        } else {
            interimTranscript += event.results[i][0].transcript;
        }
    }
    // Display interim results
    resultElement.value = finalTranscript + interimTranscript;
});