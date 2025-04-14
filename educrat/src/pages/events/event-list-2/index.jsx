import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";

import EventsTwo from "@/components/events/EventsTwo";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
import React from "react";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Lista de Eventos 2 || Educrat - Template Profissional de LMS para Cursos Online em ReactJS",
  description: "Eleve seu conteúdo de e-learning com o Educrat, o template LMS mais impressionante para cursos online, educação e plataformas LMS.",
};

export default function EventListPage2() {
  return (
    <div className="main-content">
      <MetaComponent meta={metadata} />
      <Preloader />

      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />
        <EventsTwo />
        <FooterOne />
      </div>
    </div>
  );
}
