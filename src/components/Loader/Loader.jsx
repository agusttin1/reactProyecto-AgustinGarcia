import { ContLoader, Pulse, TextLoader } from "../../styles/components/Loader.Elements";
const Loader = () => {
  return (
    <ContLoader>
      <Pulse></Pulse>
      <TextLoader>Cargando...</TextLoader>
    </ContLoader>
  );
};



export default Loader;
