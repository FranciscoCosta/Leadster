"use client";

import React from "react";
import Image from "next/image";
import { ImLinkedin2, ImFacebook } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

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
        <p className="Title__text">Transformando visitantes em clientes.</p>
      </div>
      <div className="Footer__body">
        <div className="Footer__collum">
          <div className="Footer__title-container">
            <h3 className="Footer__title">Links Principais</h3>
          </div>
          <div className="Footer__links">
            <a href="/" className="Footer__text">
              Home
            </a>
            <a href="/" className="Footer__text">
              Ferramenta
            </a>
            <a href="/" className="Footer__text">
              Preços
            </a>
            <a href="/" className="Footer__text">
              Contato
            </a>
          </div>
        </div>
        <div className="Footer__collum">
          <div className="Footer__title-container">
            <h3 className="Footer__title">Cases</h3>
          </div>
          <div className="Footer__links">
            <a href="/" className="Footer__text">
              Geração de Leads B2B
            </a>
            <a href="/" className="Footer__text">
              Geração de Leads em Software
            </a>
            <a href="/" className="Footer__text">
              Geração de Leads em Imobiliária
            </a>
            <a href="/" className="Footer__text">
              Cases de Sucesso
            </a>
          </div>
        </div>
        <div className="Footer__collum">
          <div className="Footer__title-container">
            <h3 className="Footer__title">Materiais</h3>
          </div>
          <div className="Footer__links">
            <a href="/" className="Footer__text">
              Blog
            </a>
            <a href="/" className="Footer__text">
              Parceria com Agências
            </a>
            <a href="/" className="Footer__text">
              Guia Definitivo do Marketing
            </a>
            <a href="/" className="Footer__text">
              Materiais Gratuitos
            </a>
          </div>
        </div>
        <div className="Footer__collum">
          <div className="Footer__title-container">
            <h3 className="Footer__title">Siga a Leadster</h3>
          </div>
          <div className="Footer__socials">
            <div
              className="social__container"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/leadster/",
                  "_blank"
                )
              }
            >
              <ImLinkedin2 className="svg-social" />
            </div>
            <div
              className="social__container"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/leadsterplatform",
                  "_blank"
                )
              }
            >
              <ImFacebook className="svg-social" />
            </div>
            <div
              className="social__container"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/leadster.com.br/",
                  "_blank"
                )
              }
            >
              <BsInstagram className="svg-social" />
            </div>
          </div>
          <div className="Footer__contact-info">
            <span className="contact__label">
              E-mail: <p className="Footer__text">contato@leadster.com.br</p>
            </span>
            <span className="contact__label">
              Telefone: <p className="Footer__text"> (42) 98828-9851</p>
            </span>
          </div>
        </div>
      </div>
      <div className="Footer__line" />
      <div className="Footer__copyrights">
        <p>
          Copyright © 2015 - 2022 Todos os direitos reservados|{" "}
          <a
            className="text-custom-blue "
            href="https://www.leadster.com.br"
            target="_blank"
          >
            Leadster{" "}
          </a>
        </p>
        <p>
          Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 |Termos
          de uso |
        </p>
      </div>
    </div>
  );
};

export default Footer;
