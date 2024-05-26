import Social from './social.tsx';
import Addresses from './addresses.tsx';
import * as Styled from './styled.ts';
import { Section } from '../View/styled.ts';

const Contact = () => {
  return (
    <Section name="contact">
      <Styled.Contact>
        <Addresses />
        <Social />
      </Styled.Contact>
    </Section>
  );
};

export default Contact;
