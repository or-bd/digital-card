import Content from '../View/content.tsx';
import * as Styled from './styled.ts';
import Skill from './Skill';
import { Section } from '../View/styled.ts';
import List from './list.ts';

const Skills = () => {
  return (
    <Section name="skills">
      <Content title="Mostly use">
        <Styled.Slider>
          <Styled.Skills>
            {List.map((skill) => <Skill key={skill} service={skill}/> )}
            {List.map((skill) => <Skill key={skill} service={skill}/> )}
          </Styled.Skills>
        </Styled.Slider>
      </Content>
    </Section>
  );
};

export default Skills;
