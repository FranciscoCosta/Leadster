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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5 border-t-4 border-blue-500">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2rounded-full"
                    onClick={closeModal}
                  >
                    <AiOutlineClose />
                  </button>
                  <div className="flex-1 flex flex-col gap-3 text-center">
                    <h2 className="text-custom-dark font-normal text-2xl w-[80%] self-center">
                      <span className="text-custom-blue font-bold text-2xl">Webinar: </span>
                      {card.title}
                    </h2>
                    <div>
                      <ReactPlayer url={card.link} />
                    </div>
                    <div className="Description">
                      <h4 className="Modal__title text-color-black font-bold text-lg">Descrição</h4>
                      <div className="line__modal" />
                      <p className="Description__text text-base text-color-black text-start">{card.description}</p>
                    </div>
                    <div className="Dowloads">
                      <h4 className="Modal__title text-color-black font-bold text-lg" >Downloads</h4>
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
