import {
  Search,
  ContHeaderFilters,
  ContTitulo,
  ContComp,
  ContCategory,
  StyledLink,
} from "../styles/components/SearchComp.Elements";

const SearchComponent = (search, searcher) => {
  return (
    <ContHeaderFilters>
      <ContTitulo>
        <h1>Bienvenido a nuestra tienda</h1>
      </ContTitulo>
      <ContComp>
        <Search value={search} onChange={searcher} type="text" />
        <div>
          <ContCategory>
            <li>
              <StyledLink to="/categoria/Comic Europeo">
                Comic Europeo
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/categoria/Comic Americano">
                Comic Americano
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/categoria/Manga">manga</StyledLink>
            </li>
          </ContCategory>
        </div>
      </ContComp>
    </ContHeaderFilters>
  );
};

export default SearchComponent;
