import { VerifyEnvSchema } from "./Env.schema";

const validateEnv = () => {
    try {
        const envConfig = VerifyEnvSchema(import.meta.env);
        return envConfig;
    } catch (error) {
        console.error('❌ Variables de entorno inválidas:');
        throw error;
    }
};

export const Env = validateEnv(); 