import About from '../About';
import Skills from '../Skills';
import Demos from '../Demos';
import Avatar from '../Info/avatar.tsx';
import Contact from '../Info/contact.tsx';
import Plants from '../Plants';
import { Container, Content, Wrapper } from './styled.ts';

const View = () => {
  return (
    <Wrapper>
      <Container>
        <Avatar/>
        <Contact/>
        <Content>
          <About />
          <Skills />
          <Demos />
        </Content>
        <Plants />
      </Container>
    </Wrapper>
  );
};

export default View;
