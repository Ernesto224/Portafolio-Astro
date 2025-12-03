import { useState, type ChangeEvent } from "react";
import type { InputInfo } from "../../types/types";

const ValidatedTextArea = ({
    id,
    label,
    placeholder,
    type = 'text',
    value,
    error,
    required = true,
    validation,
    onChange
}: InputInfo) => {

    const [isValid, setIsValid] = useState(true);

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const value: string = event.target.value;
        setIsValid(validation?.(value) ?? true);
        onChange(value, isValid);
    };

    return (
        <div className="mb-4">
            <label htmlFor={id} className={isValid ? '' : 'text-rojo-suave'}>{label} <span>{required ? '*' : ''}</span> </label>
            <textarea
                id={id}
                name={id}
                placeholder={placeholder}
                value={value}
                onBlur={handleChange}
                onChange={handleChange}
                required={required}
                className={`mt-1 block w-full h-32 rounded-md bg-fondo-primario-tarjeta p-2 text-texto-claro-principal resize-none
                    border border-enlaces-iconos outline-enlaces-iconos focus-visible:outline-1 focus-visible:outline-offset-2 
                    ${isValid ? '' : 'border-rojo-suave outline-rojo-suave'}`}
            />
            {error && <span className="mt-1 text-rojo-suave">{error}</span>}
        </div>
    );
};

export default ValidatedTextArea;