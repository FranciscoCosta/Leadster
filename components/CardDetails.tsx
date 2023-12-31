"use client";
import React from "react";

import Image from "next/image";
import CustomDowloadBtn from "./CustomDowloadBtn";
import ReactPlayer from "react-player";


import { AiOutlineClose } from "react-icons/ai";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { mockDataItem } from "@/types";

interface CardDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  card: mockDataItem;
}

const CardDetails = ({ isOpen, closeModal, card }: CardDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 overflow-hidden" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center overflow-hidden">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-[110%] max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white py-6 text-left shadow-xl transition-all flex flex-col gap-5 border-t-4 border-blue-500 overflow-hidden">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2rounded-full "
                    onClick={closeModal}
                  >
                    <AiOutlineClose />
                  </button>
                  <div className="flex-1 flex flex-col gap-3 text-center">
                    <h2 className="text-custom-dark font-normal md:text-2xl sm:text-xs w-[80%] self-center overflow-hidden md:leading-8 sm:leading-3 min-h-[70px] sm:mb-0 md:mb-6">
                      <span className="text-custom-blue font-bold md:text-2xl sm:text-xs overflow-hidden">Webinar: </span>
                      {card.title}
                    </h2>
                    <div className="h-[300px] md:h-[400px]">
                      <ReactPlayer url={card.link} width='100%' height='100%' />
                    </div>
                    <div className="Description px-4">
                      <h4 className="Modal__title text-color-black font-bold text-lg">Descrição</h4>
                      <div className="line__modal" />
                      <p className="Description__text text-base text-color-black text-start">{card.description}</p>
                    </div>
                    <div className="Dowloads px-4 h-max">
                      <h4 className="Modal__title text-color-black font-bold text-lg overflow-hidden" >Downloads</h4>
                      <div className="line__modal" />
                      <div className="Dowload__container-btn">
                        <CustomDowloadBtn
                          title="Spreadsheet.xls"
                          containerStyles="Green__container"
                        />
                        <CustomDowloadBtn
                          title="Document.doc"
                          containerStyles="Blue__container"
                        />
                        <CustomDowloadBtn
                          title="Presentation.ppt"
                          containerStyles="Yellow__container"
                        />
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CardDetails;
