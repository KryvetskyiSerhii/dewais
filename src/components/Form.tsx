import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../hooks/useTyped";
import { fetchUser } from "../store/usersSlice";
import {
  FormStyled,
  SearchButton,
  SearchInput,
} from "../shared/ui/GeneralUi.styled";

export const Form = () => {
  const dispatch = useAppDispatch();
  const [userName, setUserName] = useState<string>("");

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>): void => {
    setUserName(e.target.value);
  };

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchUser(userName));
  };

  return (
    <FormStyled onSubmit={handleSubmitForm}>
      <SearchInput
        value={userName}
        onChange={handleInputValue}
        placeholder="Search user"
      />
      <SearchButton type="submit">Submit</SearchButton>
    </FormStyled>
  );
};
