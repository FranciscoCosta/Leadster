import { render, screen } from '@testing-library/react';
import React from "react";
import 'intersection-observer';

import "@testing-library/jest-dom"
import Reviews from "@/components/Reviews"

describe("Testing if Reviews component is render correctly", () => {
    beforeEach(() => {
        render(<Reviews />)
    })

    it("Should render Reviews cta image", () => {
        const cta = screen.getByTestId("Reviews-cta")
        expect(cta).toBeInTheDocument()
    })
    it("Should render Reviews sub-title", () => {
        const subTitle = screen.getByTestId("Reviews-sub-title")
        expect(subTitle).toBeInTheDocument()
    })
    it("Should render Reviews title", () => {
        const Title = screen.getByTestId("Reviews-title")
        expect(Title).toBeInTheDocument()
    })
    it("Should render Reviews text", () => {
        const text = screen.getByTestId("Reviews-text")
        expect(text).toBeInTheDocument()
    })
    it("Should render Reviews line", () => {
        const line = screen.getByTestId("Reviews-line")
        expect(line).toBeInTheDocument()
    })
    it("Should render Reviews button demo", () => {
        const btnDemo = screen.getByTestId("Reviews-btn-demo")
        expect(btnDemo).toBeInTheDocument()
    })
    it("Should render Reviews RD image", () => {
        const RD = screen.getByTestId("Reviews-RD")
        expect(RD).toBeInTheDocument()
    })
    it("Should render Reviews nocard image", () => {
        const noCard = screen.getByTestId("Reviews-nocard")
        expect(noCard).toBeInTheDocument()
    })
    it("Should render Reviews nocard text", () => {
        const noCardTxt = screen.getByTestId("Reviews-nocard-text")
        expect(noCardTxt).toBeInTheDocument()
    })
    it("Should render Reviews slash", () => {
        const slash = screen.getByTestId("Reviews-|")
        expect(slash).toBeInTheDocument()
    })
    it("Should render Reviews rating image", () => {
        const rating = screen.getByTestId("Reviews-rating")
        expect(rating).toBeInTheDocument()
    })
    it("Should render Reviews rating text", () => {
        const ratingTxt = screen.getByTestId("Reviews-rating-txt")
        expect(ratingTxt).toBeInTheDocument()
    })
});
