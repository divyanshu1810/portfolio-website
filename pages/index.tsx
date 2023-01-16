import Header from "@/components/layouts/header";
import { NextPage } from "next";
import Main from "@/components/home/home";
import { MAIN } from "@/utils/constants";
const Home: NextPage = () => {
  return (
    <>
      <Main
        name={MAIN.NAME}
        image={MAIN.IMAGE}
        lineonered={MAIN.LINEONERED}
        lineonewhiteleft={MAIN.LINEONEWHITELEFT}
        lineonewhiteright={MAIN.LINEONEWHITERIGHT}
        linetwowhite={MAIN.LINETWOWHITE}
        linetworedleft={MAIN.LINETWOREDLEFT}
        linetworedright={MAIN.LINETWOREDRIGHT}
        linetwodot={MAIN.LINETWODOT}
      />
    </>
  );
};

export default Home;
