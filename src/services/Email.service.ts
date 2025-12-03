import ky from 'ky';
import { Env } from '../config/Env';
import type { EmailTemplateParams, ApiResponse } from "../types/types";

class EmailService {
    private baseUrl = Env.EMAIL_JS_API_REST_URL;
    private userId = Env.USER_ID;
    private accessToken = Env.ACCESS_TOKEN;
    private service = Env.SERVICE_ID;
    private template = Env.TEMPLATE_ID;

    public sendEmail = async (params: EmailTemplateParams) => {

        try {

            const body = {
                service_id: this.service,
                template_id: this.template,
                user_id: this.userId,
                accessToken: this.accessToken,
                template_params: params
            };

            const response = await fetch(`${this.baseUrl}/send`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            console.log(response);

            if (!response.ok) {

            }


        } catch (error) {

        }

    }


}

export default EmailService