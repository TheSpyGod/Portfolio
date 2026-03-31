import "./css/hero.css";

function Hero() {

    return (

 <section className="hero">
  <p className="hero-eyebrow">Computer Science Student — Łódź, Poland</p>
  <h1 className="hero-name">Gabriel<br/><em>Korczyk</em></h1>
  <p className="hero-bio">
    Full-stack developer with a focus on building things that actually work —
    from containerized web applications to open-source contributions at the systems level.
    Driven by genuine curiosity and the belief that good software is a craft.
  </p>
  <div className="hero-tags">
    <span className="tag highlight">React</span>
    <span className="tag highlight">TypeScript</span>
    <span className="tag highlight">C++</span>
    <span className="tag">PostgreSQL</span>
    <span className="tag">Docker</span>
    <span className="tag">PHP</span>
    <span className="tag">Java</span>
    <span className="tag">C#</span>
  </div>
</section>
  );

}


export default Hero;
