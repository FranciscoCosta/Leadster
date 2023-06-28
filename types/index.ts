import { MouseEventHandler } from "react";

export interface CustomFilterProps {
    title: string;
    isActive: boolean;
    handleClick: MouseEventHandler<HTMLButtonElement>;
}

export interface mockDataItem {
    title : string;
    date: string;
    description: string;
    link: string;
    tags: string[];
    tumbnail: string;
}