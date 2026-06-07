import "../pages/Home.css";
export default function About() {
  return (
    <main className="container">
      <h1>About Me</h1>

      <section className="two-columns">
        <div>
          <p>
            I've always been interested in technology and how it makes our
            daily lives better. From a young age I've been following and
            learning, and now I'm pursuing an education in .NET Fullstack
            development.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab deleniti suscipit labore sequi minus laborum quasi est expedita ipsa enim repudiandae, impedit nostrum animi cumque consequatur tenetur? Et?
          </p>
        </div>

        <img
          id="profilePic"
          src="images/profilePicture.jpg"
          alt="Erik Bäckdahl working"
        />
      </section>
    </main>
  );
}
