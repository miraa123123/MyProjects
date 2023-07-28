import React from "react";
import Header from "./components/Header.jsx";
import MainContent from "./components/MainContent.jsx";
import Section1 from "./components/Section1.jsx";
import cover from "./pics/s1.svg";
import cover2 from "./pics/s2.svg";
import cover3 from "./pics/s3.svg";
import Section2 from "./components/Section2.jsx";
import Section3 from "./components/Section3.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <MainContent />

      <Section1 
        src={cover}
        title="Create an invite-only place where you belong"
        p="Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat."
      />

      <Section2 
      src={cover2}
      title="Where hanging out is easy"
      p="Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call."
      
      />

      <Section1 
      src={cover3}
      title="From few to a fandom"
      p="Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more."
      />

      <Section3 />

      <br /><b><br /><br /><br /><b></b></b> <br /><br /><br /><br />
      <Footer />
    </>
  );
}

export default App;
