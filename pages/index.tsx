import Header from "@/components/layouts/header";
import { NextPage } from "next";
import Main from "@/components/home/home";
import { MAIN } from "@/utils/constants";
import Icon from "@/components/message/icon";
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Icon />
      <Main name={MAIN.NAME} image={MAIN.IMAGE} lineonered={MAIN.LINE} />
    </>
  );
};

export default Home;
