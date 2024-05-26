import { Container } from './styled';

export const skills: string[] = ['aws', 'docker', 'nodejs', 'golang', 'javascript', 'typescript', 'react', 'vitejs', 'webpack'];

const Skill = ({ service }: { service: string }) => {
  return (
    <Container>
      <img src={`/logos/${service}.svg`}/>
    </Container>
  );
};

export default Skill;
