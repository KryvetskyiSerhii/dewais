import { useAppSelector } from "../hooks/useTyped";
import { userSelector } from "../store/selectors";
import {
  Avatar,
  LinkStyled,
  TextStyled,
  UserContainer,
} from "../shared/ui/GeneralUi.styled";

export const User = () => {
  const user = useAppSelector(userSelector);

  return (
    <UserContainer>
      <Avatar src={user?.avatar_url} />
      <TextStyled fontSize="1.2em" marginBottom="5px">
        {user?.name}
      </TextStyled>
      <TextStyled color="#888" marginBottom="15px">
        {user?.location}
      </TextStyled>
      <TextStyled color="#888" fontSize="0.9em" marginBottom="15px">
        Created at: {user?.created_at.slice(0, 10)}
      </TextStyled>
      <TextStyled color="#888" fontSize="0.9em" marginBottom="15px">
        {user?.bio}
      </TextStyled>
      <LinkStyled href={user?.html_url} target="_blank">
        {user?.html_url}
      </LinkStyled>
    </UserContainer>
  );
};
