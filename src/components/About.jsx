import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="about us" className="w-full h-64" />
        <article>
          <SectionTitle text="code & coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            This is the best place where we can come together to share our
            thoughts and experiences in the world of coding.
            <br /> 🚀 Inspiration and Knowledge: Explore the latest development
            trends, learn new things, and immerse yourself in the world of
            technology.
            <br /> 💡 Projects and Sharing: Share your own ideas and let's
            create exciting projects together.
            <br /> ☕ Code and Coffee: Let's discuss the latest developments and
            experiences over a cup of delicious coffee.
            <br />
            Join us and be part of this vibrant developer community! 🖥️☕
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
