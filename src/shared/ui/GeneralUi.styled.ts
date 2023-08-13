import styled from "@emotion/styled";

interface Props {
  fontSize?: string;
  color?: string;
  marginBottom?: string;
}

export const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  width: 50%;
  margin: 0 auto;
  @media (max-width: 1100px) {
    width: 90%;
    max-width: 400px;
  }
`;

export const SearchInput = styled.input`
  padding: 10px;
  width: 80%;
  margin: 0px 5px 10px 0px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
  @media (max-width: 1100px) {
    width: 95%;
  }
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
  @media (max-width: 1100px) {
    width: 100%;
  }
`;
export const FormStyled = styled.form`
  margin-bottom: 20px;
`;

export const UserContainer = styled.div`
  width: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 80%;
    max-width: 300px;
  }
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const TextStyled = styled.p<Props>`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

export const LinkStyled = styled.a`
  display: inline-block;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;

export const LoaderStyled = styled.div`
  border: 6px solid transparent;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
  transition: border-top-color 0.3s ease-in-out;
  margin: 0 auto;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
