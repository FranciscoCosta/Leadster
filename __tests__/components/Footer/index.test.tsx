import { render, screen } from "@testing-library/react";
import React from "react";
import "intersection-observer";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Testing if Footer component is render correctly", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("Should render Footer main Title", () => {
    const mainTitle = screen.getByTestId("Footer-Title");
    expect(mainTitle).toBeInTheDocument();
  });
  it("Should render Footer Title Links", () => {
    const titleLinks = screen.getByTestId("Footer-Title-Links");
    expect(titleLinks).toBeInTheDocument();
  });
  it("Should render Footer link Home", () => {
    const linkHome = screen.getByTestId("Footer-link-Home");
    expect(linkHome).toBeInTheDocument();
  });
  it("Should render Footer link Tools", () => {
    const linkTools = screen.getByTestId("Footer-link-Tools");
    expect(linkTools).toBeInTheDocument();
  });
  it("Should render Footer link Price", () => {
    const linkPrice = screen.getByTestId("Footer-link-Price");
    expect(linkPrice).toBeInTheDocument();
  });
  it("Should render Footer link Contact", () => {
    const linkContact = screen.getByTestId("Footer-link-Contact");
    expect(linkContact).toBeInTheDocument();
  });
  it("Should render Footer Title Cases", () => {
    const titleCases = screen.getByTestId("Footer-Title-Cases");
    expect(titleCases).toBeInTheDocument();
  });
  it("Should render Footer link B2B", () => {
    const linkB2B = screen.getByTestId("Footer-link-B2B");
    expect(linkB2B).toBeInTheDocument();
  });
  it("Should render Footer link Imo", () => {
    const linkImo = screen.getByTestId("Footer-link-Imo");
    expect(linkImo).toBeInTheDocument();
  });
  it("Should render Footer link Success", () => {
    const linkSuccess = screen.getByTestId("Footer-link-Success");
    expect(linkSuccess).toBeInTheDocument();
  });
  it("Should render Footer Title Materials", () => {
    const titleMaterials = screen.getByTestId("Footer-Title-Materials");
    expect(titleMaterials).toBeInTheDocument();
  });
  it("Should render Footer link Blog", () => {
    const linkBlog = screen.getByTestId("Footer-link-Blog");
    expect(linkBlog).toBeInTheDocument();
  });
  it("Should render Footer link Agencie", () => {
    const linkAgencie = screen.getByTestId("Footer-link-Agencie");
    expect(linkAgencie).toBeInTheDocument();
  });
  it("Should render Footer link Marketing", () => {
    const linkMarketing = screen.getByTestId("Footer-link-Marketing");
    expect(linkMarketing).toBeInTheDocument();
  });
  it("Should render Footer link Free", () => {
    const linkFree = screen.getByTestId("Footer-link-Free");
    expect(linkFree).toBeInTheDocument();
  });
  it("Should render Footer Title Follow", () => {
    const titleFollow = screen.getByTestId("Footer-Title-Follow");
    expect(titleFollow).toBeInTheDocument();
  });
  it("Should render Footer button Linkedin", () => {
    const btnLinkedin = screen.getByTestId("Footer-Linkedin");
    expect(btnLinkedin).toBeInTheDocument();
  });
  it("Should render Footer button Facebook", () => {
    const btnFacebook = screen.getByTestId("Footer-Facebook");
    expect(btnFacebook).toBeInTheDocument();
  });
  it("Should render Footer button Instagram", () => {
    const btnInstagram = screen.getByTestId("Footer-Instagram");
    expect(btnInstagram).toBeInTheDocument();
  });
  it("Should render Footer Copyright", () => {
    const btnCopyright = screen.getByTestId("Footer-Copyright");
    expect(btnCopyright).toBeInTheDocument();
  });
  it("Should render Footer Address", () => {
    const btnAddress = screen.getByTestId("Footer-Address");
    expect(btnAddress).toBeInTheDocument();
  });
});
