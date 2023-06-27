import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__header">
        <Image
          src="/images/logo.png"
          height={42}
          width={194}
          alt="leadster"
          className="logo"
        />
        <p>Transformando visitantes em clientes.</p>
      </div>
      <div className="Footer__body">
        <div className="Footer__collum">
          <div className="Footer__titles">
            <h3>Links Principais</h3>
          </div>
          <div className="Footer__links">
            <a href="/">Home</a>
            <a href="/">Ferramenta</a>
            <a href="/">Preços</a>
            <a href="/">Contato</a>
          </div>
        </div>
        <div className="Footer__collum">
        <div className="Footer__titles">
            <h3>Cases</h3>
          </div>
          <div className="Footer__links">
            <a href="/">Geração de Leads B2B</a>
            <a href="/">Geração de Leads em Software</a>
            <a href="/">Geração de Leads em Imobiliária</a>
            <a href="/">Cases de Sucesso</a>
          </div>
        </div>
        <div className="Footer__collum">
        <div className="Footer__titles">
            <h3>Materiais</h3>
          </div>
          <div className="Footer__links">
            <a href="/">Blog</a>
            <a href="/">Parceria com Agências</a>
            <a href="/">Guia Definitivo do Marketing</a>
            <a href="/">Materiais Gratuitos</a>
          </div>
        </div>
        <div className="Footer__socials">

        </div>
      </div>
      <div className="Footer__copyrights"></div>
    </div>
  );
};

export default Footer;
