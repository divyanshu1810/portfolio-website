import React, { FunctionComponent, Suspense, useContext } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import SocialLoader from "./socialLoader";
const renderLoader = () => <SocialLoader />;
const Twitter: FunctionComponent = () => {
  return (
    <Suspense fallback={renderLoader()}>
      <div className="tw-main-div" id="twitter">
        <div className="centerContent">
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
      </div>
    </Suspense>
  );
};
export default Twitter;
