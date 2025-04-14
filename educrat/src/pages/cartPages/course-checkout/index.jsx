import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";

import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";

import React from "react";
import CourseCheckOut from "@/components/cartsAndCheckout/CourseCheckout";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Finalizar Curso || Educrat - Template Profissional de LMS para Cursos Online em ReactJS",
  description: "Eleve seu conteúdo de e-learning com o Educrat, o template LMS mais impressionante para cursos online, educação e plataformas LMS.",
};
export default function CourseCheckoutPage() {
  return (
    <div className="main-content  ">
      <MetaComponent meta={metadata} />
      <Preloader />

      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />

        <CourseCheckOut />

        <FooterOne />
      </div>
    </div>
  );
}
