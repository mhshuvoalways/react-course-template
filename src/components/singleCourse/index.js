import React from "react";
import Intro from "./Intro";
import WatchClass from "./WatchClass";
import LessonList from "./LessonList";
import MeetTeacher from "./MeetTeacher";
import Feedback from "./Feedback";

const index = () => {
  return (
    <div>
      <Intro />
      <WatchClass />
      <LessonList />
      <MeetTeacher />
      <Feedback />
    </div>
  );
};

export default index;
