import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { LoadingLayout } from "./Styles";

const LoadingAnimation = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 8);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <LoadingLayout>
      <motion.svg
        width="100%"
        height="auto"
        viewBox="0 0 253 181"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        <rect width="253" height="181" fill="white" />
        
        {/* 빨간색 블록 */}
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          d={
            step <= 1
              ? "M22 24H92V157H22V24Z"
              : step === 2 || step === 3
              ? "M92 24H22V57.2556L65 52L22 133.057V157H92V24Z"
              : step >=4
              ? "M22 24H92V82L52 126L92 123.471V157H22V133.057L65 52L22 57.2556V24Z"
              : ""
          }
              fill="#E94435"
              transition={{ duration: 0.1 }}
          />

        {/* 파란색 블록 */}
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          d={
            step <= 1
              ? "M102 24H150V157H102V24Z"
              : step === 2 || step === 3
              ? "M103.086 24L112.429 83.5L102 157H151.429V24H103.086Z"
              : step >=4
              ? "M112.429 83.5L103.086 24H151L143.5 91.5L147.27 157H102L112.429 83.5Z"
              : ""
          }
          fill="#537DBE"
          transition={{ duration: 0.1 }}
        />

        {/* 노란색 블록 */}
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          d={
            step <= 0
              ? "M160 24H230V157H160V24Z"
              : step === 1
              ? "M230 24H160V157H188.089L195 118L201.183 157H230V24Z"
              : step === 2
              ? "M230 24H160V157H188.089L195 118L201.183 157H230V24Z"
              : step === 3 || step === 4
              ? "M160 111.403L195 90.5L230 115.5V157H201.183L195 118L188.089 157H160V111.403ZM160 78.5L202 87V24H160V78.5ZM208.528 24L212 87H230V24H208.528Z"
              : step >= 5
              ? "M195 90.5L160 111.403V157H188.089L195 118L201.183 157H230V115.5L195 90.5ZM180.995 82.749L160 78.5V53.5C175.947 54.995 180.47 57.7299 180.995 82.749ZM180.995 82.7491L202 87V53.5C182.563 52.3099 180.83 72.6583 180.995 82.7491ZM202 52V24H181H160V52C179.855 51.5157 180.48 36.4919 180.954 25.0987C180.969 24.7284 180.984 24.362 181 24C181 47.5 188 50.5 202 52ZM212 87L208.528 24H230V87H212Z"
              : ""
          }
          fill="#F7AA1A"
          transition={{ duration: 0.1 }}
        />

        {/* 추가 애니메이션 블록 */}
        {step >= 6 && (
          <>
            <motion.path
              d="M160 52.9166V78.6896L180.999 82.8446C180.966 61.1563 177.231 54.4106 160 52.9166Z"
              fill="#537DBE"
              transition={{ duration: 0.1 }}
            />
            <motion.path
              d="M180.988 24H160V52.2064C176.767 50.7528 180.755 44.3259 180.988 24Z"
              fill="#E94435"
              transition={{ duration: 0.1 }}
            />
            <motion.path
              d="M202 52.2064V24H181.012C181.245 44.3259 185.234 50.7528 202 52.2064Z"
              fill="#F7AA1A"
              transition={{ duration: 0.1 }}
            />
            <motion.path
              d="M202 52.9166C184.769 54.4106 181.034 61.1568 181.001 82.845L202 87V52.9166Z"
              fill="#32A851"
              transition={{ duration: 0.1 }}
            />
            <motion.path
              d="M181 83.1346C181 83.0371 181.001 82.942 181.001 82.845L181 82.8455C181 82.942 181 83.0371 181 83.1346Z"
              fill="white"
              transition={{ duration: 0.1 }}
            />
            <motion.path
              d="M230 24H208.5L212 87H230V24Z"
              fill="#32A851"
              transition={{ duration: 0.1 }}
            />
          </>
        )}
      </motion.svg>
    </LoadingLayout>
  );
};

export default LoadingAnimation;