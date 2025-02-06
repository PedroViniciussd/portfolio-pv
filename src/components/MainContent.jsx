import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import TecnologyContainer from './TecnologyContainer';

import '../styles/components/maincontent.sass';

const MainContent = () => {
  return (
  <main id='main-content'>
    <AboutContainer />
    <TecnologyContainer />
    <ProjectsContainer />

  </main>
  )
}

export default MainContent
