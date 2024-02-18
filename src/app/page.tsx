import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <section id="header" className="min-h-screen min-w-screen flex items-end">
        <Header/>
      </section>
      <section>
        <About/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
    </main>
  );
}
