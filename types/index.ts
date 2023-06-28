import { MouseEventHandler } from "react";

export interface CustomFilterProps {
    title: string;
    isActive: boolean;
    handleClick: MouseEventHandler<HTMLButtonElement>;
}