import type { FC } from "react";

interface ButtonBasicProps {
    texto: string;
}

export const ButtonBasicExample: FC<ButtonBasicProps> = ({ texto }) => {
    return (
        <button>{texto}</button>
    );
};