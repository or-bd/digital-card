import { Section } from '../View/styled.ts';
import Content from '../View/content.tsx';

const getAge = (birthDate: string) => {
  return Math.floor((new Date().getTime() - new Date(birthDate).getTime()) / 3.15576e+10);
};

const About = () => {
  return (
    <Section name="about">
      <Content title="About">
        <span>
          My name is Or. I'm {getAge('1991-07-28')} years old, happily married to Moran, and father
          to Archi &#128021;. Currently, I hold the position of Software Architect at Rise. Driven by a love for continuous
          learning and exploring new cutting-edge web and infrastructure technologies, including microcontrollers and
          home automation. Outside of my professional endeavors, I go out for
          <span title="paddle boarding">&#127940;</span> and <span title="scuba diving">&#129343;</span> whenever
          time permits.
        </span>
      </Content>
    </Section>
  );
};

export default About;
