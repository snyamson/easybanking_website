import { useEffect, useState } from "react";
import ArticleItem from "../components/articleItem";
import Banner from "../components/banner";
import FeaturedArticles from "../components/featuredArticles";
import Features from "../components/features";
import RequestInviteBtn from "../components/requestInviteBtn";

export default function Home() {
  return (
    <main className="box-border w-screen overflow-hidden font-public_sans">
      <Banner />
      <Features />
      <FeaturedArticles />
    </main>
  );
}
