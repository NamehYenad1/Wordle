import styled from "styled-components";
import { CircleHelp, Settings, ChartColumnBig, SunMoon } from "lucide-react";
import { IconSize } from "../../constants";

interface Props {
  updateTheme: () => void;
}

const Header = ({ updateTheme }: Props) => {
  return (
    <Wrapper>
      <Side> </Side>
      <Title>Wordle</Title>
      <Side></Side>
      <button onClick={() => updateTheme()}>
        <StyledSunMoon size={IconSize} />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  grid-area: header;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray6};
`;

const Side = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  display: grid;
  place-items: center;
`;

const StyledSunMoon = styled(SunMoon)`
  color: ${({ theme }) => theme.iconColor};
`;

export default Header;
