import Content from '../View/content.tsx';
import * as Styled from './styled.ts';
import Skill, { skills } from './Skill';
import { Section } from '../View/styled.ts';

const Skills = () => {
  return (
    <Section name="skills">
      <Content title="Mostly use">
        <Styled.Slider>
          <Styled.Skills>
            {skills.map((skill) => <Skill key={skill} service={skill}/> )}
            {skills.map((skill) => <Skill key={skill} service={skill}/> )}
          </Styled.Skills>
        </Styled.Slider>
      </Content>
    </Section>
  );
};

export default Skills;
