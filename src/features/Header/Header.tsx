import styled from "styled-components";
import { CircleHelp, Settings, ChartColumnBig, SunMoon } from "lucide-react";
import { IconSize } from "../../constants";

import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import DialogComponent from "../../components/Dialog";
import IconButton from "../../components/IconButton";

interface Props {
  updateTheme: () => void;
}

const Header = ({ updateTheme }: Props) => {
  return (
    <Wrapper>
      <Side> </Side>
      <Title>Wordle</Title>
      <Side>
        <DialogComponent
          trigger={
            <IconButton as="div">
              <CircleHelp size={IconSize.md} />
            </IconButton>
          }
          title="Help"
          description="This is a help dialog."
        >
          <p>Additional content for the dialog can go here.</p>
        </DialogComponent>

        <IconButton onClick={() => updateTheme()}>
          <StyledSunMoon size={IconSize.md} />
          <VisuallyHidden.Root>Change Theme</VisuallyHidden.Root>
        </IconButton>
      </Side>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  grid-area: header;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray6};
  padding: 16px;
`;

const Side = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.h1`
  display: grid;
  place-items: center;
`;

const StyledSunMoon = styled(SunMoon)`
  color: ${({ theme }) => theme.iconColor};
`;

export default Header;
