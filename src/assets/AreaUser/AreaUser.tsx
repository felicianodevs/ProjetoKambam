import { Headerbox } from "./StyleHeader";
import { AreaUser as SilverBox, Container, H5 } from "./StyledUser";
import { StyledBox } from "./styledbox";
function AreaUser() {
  return (
    <>
      <Headerbox />
      <Container>
        <SilverBox>
          <H5>Novo</H5>
          <StyledBox>Alguma coisa </StyledBox>
        </SilverBox>

        <SilverBox>
          <H5>Novo</H5>
        </SilverBox>
                                                        
        <SilverBox>
          <H5>Novo</H5>
        </SilverBox>

        <SilverBox>
          <H5>Novo</H5>
        </SilverBox>
      </Container>
    </>
  );
}
export default AreaUser;
