import { ContLoader, Pulse, TextLoader } from "../styles/components/Loader.js";
const Loader = () => {
  return (
    <ContLoader>
      <Pulse></Pulse>
      <TextLoader>Cargando...</TextLoader>
    </ContLoader>
  );
};

export default Loader;

