import type { ImportSchemaEmailJsEnv } from "../types/types";

export const VerifyEnvSchema = (envMeta: any) => {

    if (!envMeta.PUBLIC_EMAIL_JS_API_REST_URL) {
        throw new Error('Url base de Email.js no definido');
    }

    if (!envMeta.PUBLIC_USER_ID) {
        throw new Error('Clave publica del usuario no definida');
    }

    if (!envMeta.PUBLIC_ACCESS_TOKEN) {
        throw new Error('Clave privada del usuario no definida');
    }

    if (!envMeta.PUBLIC_SERVICE_ID) {
        throw new Error('Identificador de servicio de correo no definido');
    }

    if (!envMeta.PUBLIC_TEMPLATE_ID) {
        throw new Error('Identificador de plantilla no definido');
    }

    const envImport: ImportSchemaEmailJsEnv = {
        EMAIL_JS_API_REST_URL: envMeta.PUBLIC_EMAIL_JS_API_REST_URL,
        USER_ID: envMeta.PUBLIC_USER_ID,
        ACCESS_TOKEN: envMeta.PUBLIC_ACCESS_TOKEN,
        SERVICE_ID: envMeta.PUBLIC_SERVICE_ID,
        TEMPLATE_ID: envMeta.PUBLIC_TEMPLATE_ID
    };

    return envImport;
};
