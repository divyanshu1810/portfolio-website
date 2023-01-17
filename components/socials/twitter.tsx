import React, { FunctionComponent, Suspense, useContext } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import SocialLoader from "./socialLoader";
const renderLoader = () => <SocialLoader />;
const Twitter: FunctionComponent = () => {
  return (
    <Suspense fallback={renderLoader()}>
      <div className="lg:mx-80 md:mx-36">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Devyansh18_"
          options={{ height: 500 }}
          placeholder={renderLoader()}
          autoHeight={false}
          borderColor="#fff"
          //   key={isDark ? "1" : "2"}
          //   theme={isDark ? "dark" : "light"}
          theme={"dark"}
          noFooter={true}
          //   onload={timeOut()}
        />
      </div>
    </Suspense>
  );
};
export default Twitter;
