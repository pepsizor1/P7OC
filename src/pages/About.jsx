import Banner from "../components/Banner";

import Dropdown from "../components/Dropdown";
import imageBanner from "../assets/aboutbannerDesktop.png";

const About = () => {
  
  const content = (title) => {
    switch (title) {
      case "fiability":
        return "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
      case "respect":
        return "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
      case "service":
        return "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
      case "sécurity":
        return "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
      
    }
  };

  return (
    <div className="about">
      <Banner image={imageBanner} />
      <div className="about__dropdowns">
        <Dropdown title="fiabilité" content={content("fiability")} />
        <Dropdown title="respect" content={content("respect")} />
        <Dropdown title="service" content={content("service")} />
        <Dropdown title="sécurité" content={content("sécurity")} />
      </div>
    </div>
  );
};

export default About;