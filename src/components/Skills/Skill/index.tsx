import { Container } from './styled';

const Skill = ({ service }: { service: string }) => {
  return (
    <Container>
      <img src={`/logos/${service}.svg`}/>
    </Container>
  );
};

export default Skill;
