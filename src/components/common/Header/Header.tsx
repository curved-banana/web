import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "../Side/Sidebar";
import { Search } from "../Search";
import * as S from "./Header.styled";

export const Header = ({
  logout,
}: {
  isAuthenticated: boolean;
  logout: () => void;
}) => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken");
  const initialData = authToken ? JSON.parse(authToken) : { isAuthenticated: false };
  const [isOpen, setIsOpen] = useState(false);
  const [isBellOpen, setIsBellOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [keyword, setKeyword] = useState<string>("");
  // const getBrandNameExists = useGetBrandNameExists();

  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const toggleSide = () => {
    setIsOpen(true);
  };

  const toggleBell = () => {
    setIsBellOpen(false);

    if (!isBellOpen) {
      alert("알림이 도착했습니다.");
    }
  };

  const toggleSearch = () => {
    console.log("clicked");
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <S.Container>
      <Link to={"/main"}>
        <S.Logo src={`${process.env.PUBLIC_URL}/img/header/logo.svg`} />
      </Link>
      <S.SearchBox>
        <S.InputWrapper>
          <S.Input value={keyword} onChange={onChangeData} />
          <S.Button onClick={toggleSearch}>
            <S.SearchBtn
              src={`${process.env.PUBLIC_URL}/img/header/searchIcon.svg`}
            />
          </S.Button>
        </S.InputWrapper>
        {isSearchOpen && (
          <S.SearchList>
            <Search />
          </S.SearchList>
        )}
      </S.SearchBox>
      <S.SubWrapper>
        {!initialData.isAuthenticated ? (
          <S.Auth>
            <S.Text
              onClick={() => {
                navigate("/login");
              }}
            >
              로그인
            </S.Text>
            <S.Text
              onClick={() => {
                navigate("/join");
              }}
            >
              회원가입
            </S.Text>
          </S.Auth>
        ) : (
          // 로그인 상태에 따라 렌더링
          <S.Auth>
            <S.Text
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              로그아웃
            </S.Text>
          </S.Auth>
        )}
        <S.IconSet>
          {isBellOpen ? null : (
            <S.Icon
              role="button"
              src={`${process.env.PUBLIC_URL}/img/header/bell.svg`}
              onClick={toggleBell}
            />
          )}
          <S.Icon
            role="button"
            src={`${process.env.PUBLIC_URL}/img/header/fav.svg`}
          />
          <S.Icon
            role="button"
            src={`${process.env.PUBLIC_URL}/img/header/profile.svg`}
            onClick={() => {
              navigate("../user/me");
            }}
          />
          <S.Icon
            role="button"
            src={`${process.env.PUBLIC_URL}/img/header/menu.svg`}
            onClick={toggleSide}
          />
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </S.IconSet>
      </S.SubWrapper>
    </S.Container>
  );
};

export default Header;
