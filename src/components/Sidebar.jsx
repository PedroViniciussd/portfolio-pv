import SocialNetworks from "./SocialNetworks";

import Avatar from "../img/perfil linkedin.jpeg";

import Curriculo from "../docs/Pedro_Vinicius_Silva_de_Santana_-_Desenvolvedor_Front-end_JR (1).pdf";

import "../styles/components/sidebar.sass";
import InformationContainer from "./InformationContainer";


const Sidebar = () => {
  return (
   <aside id="sidebar">
  <img src={Avatar} alt="Pedro Vinicius"></img>
<p className="title">Desenvolvedor Front end JR</p>
  <SocialNetworks />
 <InformationContainer />
  <a href={Curriculo} className="btn" target="_blank">Download Currículo</a>
   </aside>
  );
}

export default Sidebar
