import type { ImportSchemaEmailJsEnv } from "../types/types";

export const VerifyEnvSchema = (envMeta: any) => {

    if (!envMeta.EMAIL_JS_API_REST_URL) {
        throw new Error('Url base de Email.js no definido');
    }

    if (!envMeta.USER_ID) {
        throw new Error('Clave publica del usuario no definida');
    }

    if (!envMeta.ACCESS_TOKEN) {
        throw new Error('Clave privada del usuario no definida');
    }

    if (!envMeta.SERVICE_ID) {
        throw new Error('Identificador de servicio de correo no definido');
    }

    if (!envMeta.TEMPLATE_ID) {
        throw new Error('Identificador de plantilla no definido');
    }

    const envImport: ImportSchemaEmailJsEnv = {
        EMAIL_JS_API_REST_URL: envMeta.EMAIL_JS_API_REST_URL,
        USER_ID: envMeta.USER_ID,
        ACCESS_TOKEN: envMeta.ACCESS_TOKEN,
        SERVICE_ID: envMeta.SERVICE_ID,
        TEMPLATE_ID: envMeta.TEMPLATE_ID
    };

    return envImport;
};
