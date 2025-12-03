import { useState } from "react";
import ValidatedInput from "./ValidatedInput";
import ValidatedTextArea from "./ValidatedTextArea";
import EmailService from "../../services/Email.service";

const ContactForms = () => {
    const emailService = new EmailService();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [validity, setValidity] = useState({});

    const handleFieldChange = (fieldId: string, value: string, isValid: boolean) => {
        setFormData(prev => ({ ...prev, [fieldId]: value }));
        setValidity(prev => ({ ...prev, [fieldId]: isValid }));
    };

    const validatedName = (value: string): boolean => {

        if (!/^(\s*\S[\s\S]{0,59})$/.test(value)) {
            setErrors(prev => ({ ...prev, ['name']: "The name cannot be empty." }));
            return false;
        }

        setErrors(prev => ({ ...prev, ['name']: "" }));
        return true;
    };

    const validatedEmail = (value: string): boolean => {

        if (/^\s*$/.test(value)) {
            setErrors(prev => ({ ...prev, ['email']: "The email cannot be empty." }));
            return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            setErrors(prev => ({ ...prev, ['email']: "Invalid email format, the format must be example@gmail.com." }));
            return false;
        }

        setErrors(prev => ({ ...prev, ['email']: "" }));
        return true;
    };

    const validatedMessage = (value: string): boolean => {

        if (!/^(\s*\S[\s\S]{0,59})$/.test(value)) {
            setErrors(prev => ({ ...prev, ['message']: "The name cannot be empty." }));
            return false;
        }

        setErrors(prev => ({ ...prev, ['message']: "" }));
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.stopPropagation();
        e.preventDefault();
        
        const formData = new FormData();
        console.log(e.target);
        console.log('Form submitted:', formData);
        console.log('Validity:', validity);

    };

    return (
        <form id="contact-form" className="space-y-4" action="https://formspree.io/f/mnnjznkj" method="POST" onSubmit={handleSubmit}>

            <ValidatedInput
                id="name"
                label="Name"
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                error={errors.name}
                validation={validatedName}
                onChange={(val, valid) => handleFieldChange('name', val, valid)}
            />

            <ValidatedInput
                id="email"
                label="Email"
                type="email"
                placeholder="example@email.com"
                value={formData.email}
                error={errors.email}
                validation={validatedEmail}
                onChange={(val, valid) => handleFieldChange('email', val, valid)}
            />

            <ValidatedTextArea
                id="message"
                label="Message"
                type="message"
                placeholder="Enter your message"
                value={formData.message}
                error={errors.message}
                validation={validatedMessage}
                onChange={(val, valid) => handleFieldChange('message', val, valid)}
            />

            <button
                type="submit"
                className="flex w-full px-6 mt-4 py-2 text-center bg-fondo-primario-tarjeta cursor-pointer border 
                    border-enlaces-iconos text-enlaces-iconos
                    hover:border-azul-nebulosa hover:text-azul-nebulosa
                    focus:border-estado-clic focus:text-estado-clic rounded-lg hvr-float"
            >
                Submit
            </button>
        </form>
    );
};

export default ContactForms;