import * as Styled from './styled.ts';
import { Section } from '../View/styled.ts';

const Plants = () => {
  return (
    <Section name="plants">
      <Styled.Plants>
        <div className="plant">
          <div className="leaves plant-1"/>
        </div>
        <div className="plant">
          <div className="leaves plant-3"/>
        </div>
        <div className="plant plant-2">
          <div className="leaves plant-2"/>
        </div>
        <div className="plant plant-2">
          <div className="leaves plant-4"/>
        </div>
      </Styled.Plants>
    </Section>
  );
};

export default Plants;
