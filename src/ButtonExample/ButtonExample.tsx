import type { FC } from "react";

interface ButtonProps {
    texto: string;
}

export const ButtonExample: FC<ButtonProps> = ({ texto }) => {
    return (
        <button>{texto}</button>
    );
};