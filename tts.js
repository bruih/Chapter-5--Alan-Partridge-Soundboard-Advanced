// initialization of the TTS
let twitchTTS = new SpeechSynthesisUtterance();

  function talk() { 
    twitchTTS.text = document.querySelector("textarea").value; //gets the input in the text area.
    window.speechSynthesis.speak(twitchTTS); //starts speaking
  };
