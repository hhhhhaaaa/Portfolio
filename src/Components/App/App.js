import Footer from "./../footer";
import Header from "./../header";
import About from "./../about";
import Project from "./../project";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <div id="work" class="p-0 d-inline-flex row justify-content-center">
        <Project
          title="willWeather"
          name="Will Weather Project"
          link="https://hhhhhaaaa.github.io/WillWeather/"
        />
        <Project
          title="workday"
          name="Workday Scheduler"
          link="https://hhhhhaaaa.github.io/WorkDayScheduler/"
        />
        <Project
          title="treat-yo-shelf"
          name="Treat Yo Shelf"
          link="https://treatyourshelf.herokuapp.com/"
        />
        <Project
          title="hearthLibrary"
          name="Hearth Library"
          link="https://hearth-library.herokuapp.com/"
        />
        <Project title="talent" name="Talent Project" link="" />
        <Project
          title="EmployeeDirectory"
          name="Employee Directory"
          link="https://hhhhhaaaa.github.io/EmployeeDirectory/"
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
