import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "../../components/button";

export function NotFound() {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate(-1);
  }

  const digitVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
    }),
  };

  return (
    <motion.div
      className="min-h-screen bg-darkGray flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="w-full max-w-md bg-midGray rounded-2xl p-8 flex flex-col items-center"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      >
        <div className="flex gap-2">
          {["4", "0", "4"].map((digit, index) => (
            <motion.h1
              key={index}
              className={`text-9xl font-extrabold ${
                digit !== "0" ? "text-midPurple" : "text-white"
              }`}
              custom={index}
              variants={digitVariants}
              initial="hidden"
              animate="visible"
            >
              {digit}
            </motion.h1>
          ))}
        </div>
        <motion.p
          className="text-base text-gray-400 mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Ops! Parece que esta página não existe.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="w-full"
        >
          <Button title="Voltar" onClick={handleButtonClick} height="w-full" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
