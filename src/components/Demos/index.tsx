import Content from '../View/content.tsx';
import { Section } from '../View/styled.ts';
import * as Styled from './styled.ts';

interface IDemo {
  title: string;
  logo: string;
  link: string;
}

const demos: IDemo[] = [
  { title: 'Cloudfront A/B', logo: 'cloudfront.svg', link: 'https://d2vlo5pi7cnau.cloudfront.net/' },
  { title: 'Redis sharding', logo: 'redis.svg', link: 'https://redis.sudozone.com/' },
  { title: 'Hez Laor', logo: 'hez-laor.png', link: 'https://hez-laor.com/' },
  { title: 'Garlic Game', logo: 'garlic-game.png', link: 'https://garlic.sudozone.com/' },
  { title: 'Rinat Art', logo: 'rinat_art.jpg', link: 'https://rinatart.sudozone.com/' },
  { title: 'HEED (mobile)', logo: 'heed.png', link: 'https://heedapp.sudozone.com/' },
];

const Demo = ({ title, link, logo }: IDemo) => {
  return (
    <Styled.Demo href={link} target="_blank" rel="noopener">
      <img src={`/logos/${logo}`} />
      <label>{title}</label>
    </Styled.Demo>
  );
};

const Demos = () => {
  return (
    <Section name="demos">
      <Content title="Demos">
        <Styled.Demos>
          {demos.map((demo) => <Demo key={demo.link} {...demo} />)}
        </Styled.Demos>
      </Content>
    </Section>
  );
};

export default Demos;
