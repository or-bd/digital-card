import * as Styled from './styled.ts';

const Social = () => {
  return (
    <Styled.Social title="Social">
      <a href="https://www.linkedin.com/in/or-ben-dahan-81a74ba5/" target="_blank" rel="noopener">
        <img src="/logos/linkedin.svg"/>
        <span>Linkedin</span>
      </a>
      <a href="https://www.instagram.com/or_ben_dahan/" target="_blank" rel="noopener">
        <img src="/logos/instagram.svg"/>
        <span>Instagram</span>
      </a>
      <a href="https://github.com/or-bd?tab=repositories" target="_blank" rel="noopener">
        <img src="/logos/github.svg"/>
        <span>Github</span>
      </a>
    </Styled.Social>
  );
};

export default Social;
