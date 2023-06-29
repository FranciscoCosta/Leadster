import { render, screen } from '@testing-library/react';
import React from "react";
import 'intersection-observer';

import "@testing-library/jest-dom"
import Hero from "@/components/Hero"

describe("Testing if Hero section is render correctly", () => {
    beforeEach(() => {
        render(<Hero />)
    })

    it("Should render Hero logo", () => {
        const logo = screen.getByTestId("hero-logo")
        expect(logo).toBeInTheDocument()
    })
    it("Should render Hero bubble", () => {
        const bubble = screen.getByTestId("hero-bubble")
        expect(bubble).toBeInTheDocument()
    })
    it("Should render Hero sub-title", () => {
        const subTitle = screen.getByTestId("hero-sub-title")
        expect(subTitle).toBeInTheDocument()
    })
    it("Should render Hero title", () => {
        const title = screen.getByTestId("hero-title")
        expect(title).toBeInTheDocument()
    })
    it("Should render Hero asset", () => {
        const asset = screen.getByTestId("hero-asset")
        expect(asset).toBeInTheDocument()
    })
    it("Should render Hero hero-line", () => {
        const heroLine = screen.getByTestId("hero-line")
        expect(heroLine).toBeInTheDocument()
    })
    it("Should render Hero hero-cta", () => {
        const cta = screen.getByTestId("hero-cta")
        expect(cta).toBeInTheDocument()
    })
});
