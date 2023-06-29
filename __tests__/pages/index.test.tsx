import { render, screen } from '@testing-library/react';
import React from "react";
import 'intersection-observer';

import "@testing-library/jest-dom"
import Page from "@/app/page"

describe("Testing if main page is render correctly", () => {
    beforeEach(() => {
        render(<Page />)
    })
    it("Should render all custom filter btns", () => {
        const AgenciasBtn = screen.getByTestId("filter-btn-Agências")
        const ChatbotBtn = screen.getByTestId("filter-btn-Chatbot")
        const MarketingBtn = screen.getByTestId("filter-btn-Marketing Digital")
        const GeraçaoBtn = screen.getByTestId("filter-btn-Geração de Leads")
        const MidiaBtn = screen.getByTestId("filter-btn-Mídia Paga")

        expect(AgenciasBtn).toBeInTheDocument()
        expect(ChatbotBtn).toBeInTheDocument()
        expect(MarketingBtn).toBeInTheDocument()
        expect(GeraçaoBtn).toBeInTheDocument()
        expect(MidiaBtn).toBeInTheDocument()
    })

    it("Should render select custom filter", () => {
        const select = screen.getByTestId("filter-select")
        expect(select).toBeInTheDocument()
    })
})