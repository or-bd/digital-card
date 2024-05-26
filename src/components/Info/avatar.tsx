import { Section } from '../View/styled.ts';
import * as Styled from './styled.ts';

const Avatar = () => {
  return (
    <Section name="avatar">
      <Styled.Avatar title="Hello World &#128075;">
        <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png'/>
        <Styled.Position>
          <a href="https://www.credly.com/badges/528aad6e-d34f-4eeb-8119-9eb615f2fac9/public_url" target="_blank"
             rel="noopener">
            <img src='/logos/aws-cert.png'/>
          </a>
          <div>
            <h1>Or Ben Dahan</h1>
            <span>Software Architect</span>
          </div>
        </Styled.Position>
      </Styled.Avatar>
    </Section>
  );
};

export default Avatar;
