import RelatedBlogs from "@/components/blogs/RelatedBlogs";
import PageLinks from "@/components/common/PageLinks";

import FooterOne from "@/components/layout/footers/FooterOne";
import Header from "@/components/layout/headers/Header";
import React from "react";
import BlogDetails from "@/components/blogs/BlogDetails";
import Preloader from "@/components/common/Preloader";
import { useParams } from "react-router-dom";
import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Detalhes do Blog || Educrat - Template Profissional de LMS para Cursos Online em ReactJS",
  description: "Eleve seu conteúdo de e-learning com o Educrat, o template LMS mais impressionante para cursos online, educação e plataformas LMS.",
};

export default function BlogdetailsPage() {
  let params = useParams();
  return (
    <div className="main-content  ">
      <MetaComponent meta={metadata} />
      <Preloader />

      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />

        <BlogDetails id={params.id} />

        <RelatedBlogs />

        <FooterOne />
      </div>
    </div>
  );
}
