import { useState } from "react";

export default function VoiceAssistant({ onSpeak }) {
  const [listening, setListening] = useState(false);

  const startVoice = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    setListening(true);

    recognition.start();

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      onSpeak(text);
      setListening(false);
    };

    recognition.onerror = () => {
      setListening(false);
    };
  };

  return (
    <button
      onClick={startVoice}
      className="fixed bottom-6 left-6 px-4 py-2 rounded-full bg-black text-white border border-cyan-400"
    >
      🎤 {listening ? "Listening..." : "Talk to AI"}
    </button>
  );
}