import styles from "./App.module.css";

function App() {
  return (
    <>
      <header className={styles.header}>
        <h1>Anil Timalsina</h1>
        <nav>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a href="#about">About</a>
            </li>
            <li className={styles.li}>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className={styles.li}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <section id="about" className={styles.section}>
        <h2>About Me</h2>
        <p>
          Hi! this is Anil. I am soon gonna be a professional Frontend
          developer. Currently, I am learning HTML, CSS, JavaScript and React.
          Learning never ends and this is awesome.
        </p>
      </section>
      <section id="portfolio" className={styles.section}>
        <h2>Portfolio</h2>
        <p>
          You can watch my projects going to my{" "}
          <a href="https://github.com/aniltimalsina?tab=repositories">
            GitHub repo
          </a>
        </p>
      </section>
      <section id="contact" className={styles.section}>
        <h2>Contact Me</h2>
        <p>
          My Contacts are <a href="#">here</a>
        </p>
      </section>
    </>
  );
}

export default App;
