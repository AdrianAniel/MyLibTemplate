import type { FC } from "react";

interface TitleProps {
    titulo: string;
    texto: string;
}

export const TitleExample: FC<TitleProps> = ({ titulo, texto }) => {
    return (
        <div>
            <h1>{titulo}</h1>
            <h3>{texto}</h3>
        </div>
    );
};