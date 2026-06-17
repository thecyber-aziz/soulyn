import { useState } from "react";
import RobotScene from "./RobotScene";
import VoiceAssistant from "./VoiceAssistant";

export default function AIWidget() {
  const [text, setText] = useState("");
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = (msg) => {
    setText(msg);
    setIsSpeaking(true);

    const speech = new SpeechSynthesisUtterance(msg);
    speech.onend = () => setIsSpeaking(false);

    window.speechSynthesis.speak(speech);
  };

  return (
    <>
      {/* 3D Robot */}
      <RobotScene isSpeaking={isSpeaking} />

      {/* Voice Button */}
      <VoiceAssistant onSpeak={handleSpeak} />

      {/* Chat bubble */}
      {text && (
        <div className="fixed bottom-28 left-6 bg-black text-cyan-300 px-4 py-2 rounded-xl border border-cyan-500 max-w-xs">
          🤖 {text}
        </div>
      )}
    </>
  );
}