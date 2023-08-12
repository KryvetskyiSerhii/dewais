import { useSelector } from "react-redux";
import { Container, TextStyled } from "../shared/ui/GeneralUi.styled";
import { Form } from "./Form";
import { User } from "./User";
import { statusSelector } from "../store/selectors";
import { Loader } from "../shared/components/Loader";

export const UserMain = () => {
  const status = useSelector(statusSelector);

  const handleRenderUser = () => {
    if (status === "fullfiled") return <User />;
    if (status === "pending") return <Loader />;
    if (status === "rejected") return <TextStyled>No user found</TextStyled>;
    else return null;
  };

  return (
    <Container>
      <Form />
      {handleRenderUser()}
    </Container>
  );
};
