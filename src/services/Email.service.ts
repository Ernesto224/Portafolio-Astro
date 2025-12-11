import ky from 'ky';
import { Env } from '../config/Env';
import type { EmailTemplateParams } from "../types/types";

class EmailService {
    private httpClient = ky;
    private baseUrl = new URL(Env.EMAIL_JS_API_REST_URL);
    private userId = Env.USER_ID;
    private accessToken = Env.ACCESS_TOKEN;
    private service = Env.SERVICE_ID;
    private template = Env.TEMPLATE_ID;

    public sendEmail = async (params: EmailTemplateParams): Promise<boolean> => {

        try {

            const body = {
                service_id: this.service,
                template_id: this.template,
                user_id: this.userId,
                accessToken: this.accessToken,
                template_params: params
            };

            const response = await this.httpClient.post<string>('send', { prefixUrl: this.baseUrl, json: body });

            return response.ok.valueOf();

        } catch (error) {

            throw new Error("Error to send a request. Try again later.");
        }
    };

}

export default EmailService
