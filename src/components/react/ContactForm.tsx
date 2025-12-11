import { useState } from "react";
import ValidatedInput from "./ValidatedInput";
import ValidatedTextArea from "./ValidatedTextArea";
import EmailService from "../../services/Email.service";

const ContactForms = () => {
    const emailService = new EmailService();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });
    const [validity, setValidity] = useState({});
    const [submitState, setSubmitState] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const handleFieldChange = (fieldId: string, value: string, isValid: boolean) => {
        setFormData(prev => ({ ...prev, [fieldId]: value }));
        setValidity(prev => ({ ...prev, [fieldId]: isValid }));
    };

    const validatedName = (value: string): boolean => {

        if (!/^(\s*\S[\s\S]{0,59})$/.test(value)) {
            setErrors(prev => ({ ...prev, ['name']: "El nombre no puede estar vacío." }));
            return false;
        }

        setErrors(prev => ({ ...prev, ['name']: "" }));
        return true;
    };

    const validatedEmail = (value: string): boolean => {

        if (/^\s*$/.test(value)) {
            setErrors(prev => ({ ...prev, ['email']: "El correo no puede estar vacío." }));
            return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            setErrors(prev => ({ ...prev, ['email']: "Formato de correo inválido, ejemplo: ejemplo@gmail.com." }));
            return false;
        }

        setErrors(prev => ({ ...prev, ['email']: "" }));
        return true;
    };

    const validatedMessage = (value: string): boolean => {

        if (!/^(\s*\S[\s\S]{0,499})$/.test(value)) {
            setErrors(prev => ({ ...prev, ['message']: "El mensaje no puede estar vacío." }));
            return false;
        }

        setErrors(prev => ({ ...prev, ['message']: "" }));
        return true;
    };

    const clearForm = () => {
        setFormData({ name: '', email: '', message: '' })
        setValidity({});
        setErrors({ name: '', email: '', message: '' });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.stopPropagation();
        e.preventDefault();

        console.log('Validity:', validity);

        const allValid = Object.values(validity).every(value => value === true);

        if (allValid) {

            const params = {
                title: "Correo de consulta desde el portafolio.",
                name: formData.name,
                email: formData.email,
                message: formData.message,
                time: new Date().toDateString()
            };

            setSubmitState('loading');
            setErrorMessage('');

            const response = await emailService.sendEmail(params);

            if (response) {
                setSubmitState('success');
            } else {
                setSubmitState('error');
            }

            clearForm();
        }

    };

    const handleRetry = () => {
        setSubmitState('idle');
        setErrorMessage('');
    };

    if (submitState === 'loading') {
        return (
            <div className="flex flex-col items-center justify-center py-16 space-y-6">
                <div className="relative w-20 h-20">
                    <div className="absolute inset-0 border-4 border-enlaces-iconos opacity-20 rounded-full"></div>

                    <div className="absolute inset-0 border-4 border-transparent border-t-azul-nebulosa rounded-full animate-spin"></div>
                </div>

                <p className="text-texto-claro-principal text-lg font-medium">Enviando su mensaje...</p>

                <p className="text-texto-principal-suave text-sm">Espere un momento</p>
            </div>
        );
    }

    if (submitState === 'success') {
        return (
            <div className="flex flex-col items-center justify-center py-16 space-y-6 animate-fade-in">
                <div className="relative w-24 h-24">
                    <div className="absolute inset-0 bg-verde-suave opacity-20 rounded-full animate-pulse"></div>

                    <div className="absolute inset-0 flex items-center justify-center">
                        <i className={`icon-[simple-line-icons--check] w-16 h-16 text-verde-suave animate-scale-in`} />
                    </div>
                </div>

                <div className="text-center space-y-2">
                    <h3 className="text-texto-claro-principal text-2xl font-bold">¡Mensaje enviado exitosamente!</h3>

                    <p className="text-texto-principal-suave text-base max-w-md">Gracias por contactarme. Me pondré en contacto contigo lo antes posible.</p>
                </div>
            </div>
        );
    }

    if (submitState === 'error') {
        return (
            <div className="flex flex-col items-center justify-center py-16 space-y-6 animate-fade-in">
                <div className="relative w-24 h-24">
                    <div className="absolute inset-0 bg-rojo-suave opacity-20 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <i className={`icon-[simple-line-icons--close] w-16 h-16 text-rojo-suave  animate-scale-in`} />
                    </div>
                </div>

                <div className="text-center space-y-2">
                    <h3 className="text-texto-claro-principal text-2xl font-bold">¡Ups! Algo salió mal</h3>

                    <p className="text-texto-principal-suave text-base max-w-md">No se pudo enviar el mensaje. Inténtelo más tarde.</p>
                </div>

                <button
                    onClick={handleRetry}
                    className="flex items-center gap-2 px-6 py-3 bg-fondo-primario-tarjeta cursor-pointer border 
                    border-enlaces-iconos text-enlaces-iconos hover:border-azul-nebulosa 
                    hover:text-azul-nebulosa focus:border-estado-clic focus:text-estado-clic rounded-lg transition-colors hvr-float"
                >
                    Intentar otra vez
                </button>
            </div>
        );
    }

    return (
        <form id="contact-form" className="space-y-4" onSubmit={handleSubmit}>
            <ValidatedInput
                id="name"
                label="Nombre"
                type="text"
                placeholder="Ingrese su nombre"
                value={formData.name}
                error={errors.name}
                maxLength={60}
                validation={validatedName}
                onChange={(val, valid) => handleFieldChange('name', val, valid)}
            />

            <ValidatedInput
                id="email"
                label="Correo"
                type="email"
                placeholder="ejemplo@correo.com"
                value={formData.email}
                error={errors.email}
                validation={validatedEmail}
                onChange={(val, valid) => handleFieldChange('email', val, valid)}
            />

            <ValidatedTextArea
                id="message"
                label="Mensaje"
                type="message"
                placeholder="Ingrese su mensaje"
                value={formData.message}
                error={errors.message}
                maxLength={500}
                validation={validatedMessage}
                onChange={(val, valid) => handleFieldChange('message', val, valid)}
            />

            <button
                type="submit"
                className="flex w-full gap-2 px-6 mt-4 py-2 text-center bg-fondo-primario-tarjeta cursor-pointer border 
                    border-enlaces-iconos text-enlaces-iconos
                    hover:border-azul-nebulosa hover:text-azul-nebulosa
                    focus:border-estado-clic focus:text-estado-clic rounded-lg hvr-float"
            >
                Enviar
            </button>
        </form>
    );
};

export default ContactForms;
