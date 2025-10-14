import { useEffect, useRef, useState } from "react";

type TextTypeProps = {
  text: string[];
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  reverseMode?: boolean;
  variableSpeed?: boolean;
  onSentenceComplete?: () => void;
  className?: string;
};

export default function TextType({
  text,
  typingSpeed = 60,
  initialDelay = 0,
  pauseDuration = 900,
  deletingSpeed = 40,
  showCursor = true,
  cursorCharacter = "|",
  reverseMode = false,
  variableSpeed = false,
  onSentenceComplete,
  className = "",
}: TextTypeProps) {
  const [output, setOutput] = useState("");
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    const current = text[idx % text.length] ?? "";

    if (phase === "typing") {
      if (output.length < current.length) {
        const delay = variableSpeed ? Math.max(20, typingSpeed - Math.random() * 25) : typingSpeed;
        timeoutRef.current = setTimeout(
          () => setOutput(current.slice(0, output.length + 1)),
          delay
        );
      } else {
        setPhase("pausing");
        onSentenceComplete?.();
      }
    } else if (phase === "pausing") {
      timeoutRef.current = setTimeout(
        () => setPhase(reverseMode ? "deleting" : "typing"),
        Math.max(initialDelay, pauseDuration)
      );
      if (!reverseMode) {
        timeoutRef.current = setTimeout(() => setIdx((i) => i + 1), pauseDuration);
      }
    } else if (phase === "deleting") {
      if (output.length > 0) {
        timeoutRef.current = setTimeout(
          () => setOutput(output.slice(0, -1)),
          deletingSpeed
        );
      } else {
        setPhase("typing");
        setIdx((i) => i + 1);
      }
    }

    return clearTimer;
  }, [
    text,
    idx,
    phase,
    output,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    variableSpeed,
    reverseMode,
    onSentenceComplete,
    initialDelay,
  ]);

  return (
    <span className={className}>
      {output}
      {showCursor ? <span>{cursorCharacter}</span> : null}
    </span>
  );
}
