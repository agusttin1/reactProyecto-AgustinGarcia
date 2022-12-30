import MiniFlash from "../assets/heroPngs/flashMini.png";
import MiniPiece from "../assets/heroPngs/miniPiece.png";
import MiniTyG from "../assets/heroPngs/kidGoku.png";
import MiniSpider from "../assets/heroPngs/miniSpider.png";
import MiniBtmn from "../assets/heroPngs/miniBtmn.png";
import {
  ContFlash,
  ConBatman,
  ContGoku,
  ContPiece,
  ContSpiderman,
} from "../styles/components/MiniHeroCont.Elements";

const MiniHeroCont = () => {
  return (
    <>
      <ContFlash>
        <img src={`${MiniFlash}`} alt="" />
      </ContFlash>

      <ContPiece>
        <img src={`${MiniPiece}`} alt="" />
      </ContPiece>

      <ContGoku>
        <img src={`${MiniTyG}`} alt="" />
      </ContGoku>
      <ConBatman>
        <img src={`${MiniBtmn}`} alt="" />
      </ConBatman>
      <ContSpiderman>
        <img src={`${MiniSpider}`} alt="" />
      </ContSpiderman>
    </>
  );
};

export default MiniHeroCont;
