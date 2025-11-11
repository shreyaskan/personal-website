import LandingPage from "./LandingPage";
import WorkHistory from "./Components/WorkHistory";
import "./index.css"
import { useRef } from "react";
import Personal from "./Components/Personal";


function App() {
  const timelineRef = useRef(null)
  const landingPageRef = useRef(null);
  const personalPageRef = useRef(null);
  return (
    <>
      <LandingPage timelineRef={timelineRef} landingPageRef={landingPageRef} />
      <WorkHistory timelineRef={timelineRef} personalPageRef={personalPageRef} />
      <Personal landingPageRef={landingPageRef} personalPageRef={personalPageRef} />
    </>
  );
}

export default App