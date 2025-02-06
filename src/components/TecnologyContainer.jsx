import { 
  DiHtml5, 
  DiCss3, 
  DiJsBadge, 
  DiNodejsSmall, 
  DiReact, 
  DiPhp, 
  DiWordpress, 
  DiSass 
} from "react-icons/di";

import "../styles/components/technologycontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Utilizo HTML5 para estruturar páginas web de forma semântica e acessível." },
  { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Domino CSS3 para estilização avançada, incluindo animações, transições e design responsivo." },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "Desenvolvendo funcionalidades dinâmicas e interativas. Implementação de animações para melhorar a experiência do usuário." },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: "Utilizo Node.js para desenvolvimento de aplicações backend escaláveis e eficientes." },
  { id: "react", name: "React", icon: <DiReact />, description: "Trabalho com React para construir interfaces de usuário reutilizáveis e performáticas." },
  { id: "php", name: "PHP", icon: <DiPhp />, description: "Desenvolvo soluções em PHP para criação de sites dinâmicos e integração com bancos de dados." },
  { id: "wordpress", name: "WordPress", icon: <DiWordpress />, description: "Desenvolvo sites e lojas virtuais personalizadas, utilizando práticas de SEO. Sou experiente na customização de temas, plugins e solução de bugs." },
  { id: "sass", name: "Sass", icon: <DiSass />, description: "Utilizo Sass para escrever CSS de forma organizada e eficiente. Com o uso de variáveis, mixins e funções, facilitando a escalabilidade de projetos maiores." },
];


const TecnologyContainers = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p> {/* Aqui está a descrição sendo exibida */}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


export default TecnologyContainers
