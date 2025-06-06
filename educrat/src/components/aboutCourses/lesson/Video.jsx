import React, { useState } from "react";
import ModalVideoComponent from "../../common/ModalVideo";

export default function Video() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="relative pt-40">
        <img
          className="w-1/1 rounded-16"
          src="/assets/img/lesson-single/1.png"
          alt="image"
        />
        <div className="absolute-full-center d-flex justify-center items-center">
          <span
            style={{ cursor: "pointer" }}
            onClick={() => setIsOpen(true)}
            className="d-flex justify-center items-center size-60 rounded-full bg-white"
          >
            <span className="icon-play text-18"></span>
          </span>
        </div>
      </div>
      <ModalVideoComponent
        videoId={"LlCwHnp3kL4"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
