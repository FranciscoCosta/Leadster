"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__top py-4">
        <Image 
        data-testid="hero-logo"
        src="/images/logo.png" height={42} width={194} alt="leadster-logo" className="logo" />
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.2 }}
        className="hero__bottom">
        <p data-testid="hero-bubble" className="bubble border-custom-blue text-custom-blue">Webinar exclusivos</p>
        <h3 data-testid="hero-sub-title" className="hero__sub-title">Menos conversinha ,</h3>

        <div className="hero__title">
          <h1 data-testid="hero-title" className="text-gradient-title title">Mais Conversão</h1>
          <Image data-testid="hero-asset" src="/images/asset-header.png" height={49} width={32} alt="header-asset" className="hero__asset" />
          <div data-testid="hero-line" className="line" />
        </div>
        <p  data-testid="hero-cta" className="hero__cto">
          Conheça as estratégias que <span className="hero__bold">mudaram o jogo </span> e como
          aplicá-las no seu negócio
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
