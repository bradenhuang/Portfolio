import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import HomeSection from "./components/HomeSection"
import Projects from "./components/Projects"

export default function Home() {
    return(
        <main>
          <HomeSection/>
          <About/>
          <Experience/>
          <Projects/>
          <Contact/>
        </main>
    )
}