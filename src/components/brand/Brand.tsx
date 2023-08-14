import { brandData } from "./";
import { GetBrandDataRes } from "../../services";
import * as S from "./Brand.styled";

export function Brand({ groupSize }: { groupSize: number }) {
  const mapDataInGroups = (data: GetBrandDataRes[], groupSize: number) => {
    const groups = [];
    for (let i = 0; i < data.length; i += groupSize) {
      groups.push(data.slice(i, i + groupSize));
    }
    return groups;
  };

  const data = mapDataInGroups(brandData, groupSize);
  console.log(data);
  return (
    <S.Container>
      {data.map((group, groupIndex) => (
        <S.BrandGroup key={groupIndex}>
          {group.map((brand: GetBrandDataRes, idx: number) => (
            <S.Brand key={idx} brandImgUrl={brand.brandImgUrl}></S.Brand>
          ))}
        </S.BrandGroup>
      ))}
    </S.Container>
  );
}
