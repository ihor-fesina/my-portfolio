const Hero = () => {
  const differenceInMilliseconds: number =
      new Date().getTime() - new Date(2022, 11, 1).getTime();
  const millisecondsInYear: number = 365.25 * 24 * 60 * 60 * 1000;
  const yearsOfExperience: number = Math.ceil(
      differenceInMilliseconds / millisecondsInYear
  );

  return (
      <div
          id="about"
          className="scroll-mt-24 flex flex-col gap-6 text-md text-grey-normal [&>p]:leading-normal [&>p>span]:text-grey-light [&>p>span]:font-bold"
      >
        <h3
            className="
          z-10
          block lg:hidden text-md sm:text-xl mb-4 text-grey-light uppercase font-bold
          sticky top-0 -mx-6 sm:-mx-12 w-screen bg-primary-darkBlue px-6 sm:px-12 py-3 backdrop-blur bg-opacity-60
        "
        >
          About
        </h3>
        <p>
          I&apos;m <span>Ihor Fesina</span>, a Frontend Developer based in Prague, Czechia.
          I specialize in building performant, accessible, and scalable web applications.
          With over {yearsOfExperience}+ years of experience in industries like finance, healthcare, and consumer goods,
          I bring both technical expertise and business understanding to every project.
        </p>
        <p>
          Currently, I&apos;m working at <span>Publicis Groupe</span> where I build and maintain web apps for various clients using modern tech stack including Next.js, Gatsby.js and React,
          I focus on code quality, testing (Jest, RTL), and team collaboration, contributing to internal tooling to boost developer efficiency.
        </p>
        <p>
          Previously at <span>Česká Spořitelna</span>, I developed banking apps, led frontend improvements, and collaborated with analysts and backend developers to deliver reliable and well-tested solutions that supported cards, ATMs, and refund operations.
        </p>
        <p>
          My toolkit includes React, TypeScript, and many complementary tools and libraries. I&apos;m always eager to work in teams that value quality, innovation, and user-first design.
        </p>
        <p>
          Outside of tech, I&apos;m passionate about psychology, natural science, fitness, and travel.
          I believe that great products start with understanding people—and I strive to create experiences that are both meaningful and impactful.
        </p>
      </div>
  );
};

export default Hero;
