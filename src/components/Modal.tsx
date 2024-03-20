"use client";
import "../styles/components/Modal.css";
import { useContext } from "react";
import {
  ModalContext,
  ModalContextProps,
} from "@luzDeShiva/app/contexts/ModalContext";
import news from "../../public/img/news.jpg";
import Image from "next/image";
import { Dialog } from "primereact/dialog";
import { Avatar } from "primereact/avatar";
import Link from "next/link";

const Modal = () => {
  const { visible, setVisible } = useContext<ModalContextProps>(ModalContext);

  return (
    <Dialog
      style={{ width: "24vw" }}
      breakpoints={{ "1024px": "50vw", "960px": "75vw", "640px": "90vw" }}
      visible={visible}
      focusOnShow={false}
      header={
        <div className="flex align-items-center">
          <Link
            target="_blank"
            className="no-underline"
            href={"https://www.instagram.com/espacoluzdeshiva/"}
          >
            <Avatar
              image={"/logo.png"}
              shape="circle"
              style={{ background: "#000" }}
              className="py-1 cursor-pointer"
            />
          </Link>
          <Link
            target="_blank"
            className="no-underline"
            href={"https://www.instagram.com/espacoluzdeshiva/"}
          >
            <span className="insta-user ml-2 font-semibold cursor-pointer">
              espacoluzdeshiva
            </span>
          </Link>
        </div>
      }
      onHide={() => setVisible(false)}
      draggable={false}
      contentClassName="p-0"
      headerClassName="p-2 text-white bg-white border-1"
      headerStyle={{
        borderColor: "#d8d8db",
        filter: "drop-shadow(0 2px 16px rgba(32, 52, 89, .2))",
      }}
    >
      <Link target="_blank" href={"https://www.instagram.com/p/C2pNG6BuUso/"}>
        <Image
          src={news}
          alt="instagram-post"
          style={{ objectFit: "cover", width: "100%", height: "auto" }}
        />
      </Link>
    </Dialog>
  );
};

export default Modal;
