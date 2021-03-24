import Head from "next/head";
import Header from "../components/header/header";
import CoursesIntro from "../components/coursesIntro/coursesIntro";
import PopularComponent from "../components/popular/popular";
import ProfileInfo from "../components/profileInfo/profileInfo";
import Footer from "../components/footer/footer";

export default function Home() {
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
        <div className="main_container">
          <Header />
        </div>
        <CoursesIntro />
        <PopularComponent />
        <ProfileInfo />
        <Footer />
      </div>
    </div>
  );
}
