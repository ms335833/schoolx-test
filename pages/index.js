import { useState } from "react";
import Head from "next/head";
import Header from "../components/header/header";
import CourseSelection from "../components/largestPlatform/largestPlatform";
import CoursesIntro from "../components/coursesIntro/coursesIntro";
import PopularComponent from "../components/popular/popular";
import ProfileInfo from "../components/profileInfo/profileInfo";
import Footer from "../components/footer/footer";
import StartLearningInfo from "../components/startLearning/startLearning";
import Popup from "../components/modal/modal";
import LargestPLatformComponent from "../components/largestPlatform/largestPlatform";

export default function Home() {
  const [openCloseModal, setOpenCloseModal] = useState(false);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div>
        {/* popup */}
        <Popup
          openCloseModal={openCloseModal}
          setOpenCloseModal={setOpenCloseModal}
        />
        <div className="main_container">
          <Header />
        </div>
        <LargestPLatformComponent setOpenCloseModal={setOpenCloseModal} />
        <CoursesIntro />
        <PopularComponent />
        <StartLearningInfo />
        <ProfileInfo />
        <Footer />
      </div>
    </div>
  );
}
