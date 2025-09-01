import About from "@/components/about/about";
import Education from "@/components/about/education";
import Skills from "@/components/about/skills";
import Header from "@/components/layouts/header";
import Icon from "@/components/message/icon";
import {
  ABOUT,
  COLLEGE,
  KEYWORDS,
  SCHOOL,
  SKILLS,
  TITLE,
} from "@/utils/constants";
import { NextPage } from "next";
import Head from "next/head";
const about: NextPage = () => {
  return (
    <>
      <Header />
      <div className=" lg:px-24 md:px-14 px-8">
        <Head>
          <title>{TITLE.ABOUT}</title>
        </Head>
        <Icon />
        <About head={ABOUT.HEAD} about={ABOUT.ABOUT} />
        <Skills
          head={SKILLS.HEAD}
          about={SKILLS.ABOUT}
          bulletone={SKILLS.POINTONE}
          bullettwo={SKILLS.POINTTWO}
        />
        <div className=" lg:text-5xl font-semibold md:text-4xl text-2xl">
          {KEYWORDS.EDUCATION}
        </div>
        <Education
          name={SCHOOL.NAME}
          reason={SCHOOL.REASON}
          image={SCHOOL.IMAGE}
          time={SCHOOL.TIME}
          marks={SCHOOL.MARKS}
        />
        <Education
          name={COLLEGE.NAME}
          reason={COLLEGE.REASON}
          image={COLLEGE.IMAGE}
          time={COLLEGE.TIME}
          marks={COLLEGE.MARKS}
        />
      </div>
    </>
  );
};

export default about;
