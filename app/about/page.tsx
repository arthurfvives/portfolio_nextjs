import Image from "next/image";

const AboutPage = () => {
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-5 p-8 items-center max-w-4xl mx-auto">
        <Image
          src="/merel.jpg"
          alt="Portrait of Merel Vandekerkhove, architect"
          width={500}
          height={600}
          className="shadow-lg m-0 w-full object-cover rounded"
          priority
        />
        <article className="p-3">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg mb-2">
            Hello, I’m Merel Vandekerkhove, an architect passionate about
            creating spaces that inspire and connect people. My approach blends
            creativity with functionality, focusing on sustainable and timeless
            design.
          </p>
          <p className="text-lg mb-2">
            With experience in residential, commercial, and public projects, I
            believe every detail matters. I enjoy collaborating closely with
            clients to bring their visions to life, always striving for harmony
            between aesthetics and practicality.
          </p>
          <p className="text-lg mb-4">
            Let’s build something beautiful together.
          </p>
          <a
            href="/contact"
            className="inline-block mt-2 px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-800 transition">
            Contact Me
          </a>
        </article>
      </section>
    </main>
  );
};

export default AboutPage;
