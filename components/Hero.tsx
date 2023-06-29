"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__top py-4">
        <Image src="/images/logo.png" height={42} width={194} alt="leadster" className="logo" />
      </div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.2 }}
        className="hero__bottom">
        <p className="bubble border-custom-blue text-custom-blue">Webinar exclusivos</p>
        <h3 className="hero__sub-title">Menos conversinha ,</h3>

        <div className="hero__title">
          <h1 className="text-gradient-title title">Mais Conversão</h1>
          <Image src="/images/asset-header.png" height={49} width={32} alt="header-asset" className="hero__asset" />
          <div className="line" />
        </div>
        <p className="hero__cto">
          Conheça as estratégias que <span className="hero__bold">mudaram o jogo </span> e como
          aplicá-las no seu negócio
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
