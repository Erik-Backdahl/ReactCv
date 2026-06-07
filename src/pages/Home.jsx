import "./Home.css";

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1 id="logo">Erik Bäckdahl</h1>
        <p>Future fullstack .NET developer</p>
      </section>

      <section className="two-columns">
        <div>
          <h2>Welcome!</h2>
          <p>
            On this site you can read more about me, browse my projects, and
            take a look at my CV.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis laboriosam aliquid vitae repudiandae ipsum consequatur eligendi molestiae est optio hic!
          </p>
        </div>
        <img
          id="profilePic"
          src="images/profilePicture.jpg"
          alt="Portrait of Erik Bäckdahl"
        />
      </section>
    </main>
  );
}
