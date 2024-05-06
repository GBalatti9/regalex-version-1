import { motion } from "framer-motion"

export const FinalMessage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <h3>Gracias por completar!</h3>
        </motion.div>
    )
}
