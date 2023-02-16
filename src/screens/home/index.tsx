// Modules
import { Grid, Stack } from '@mui/material';

// Components
import CvSection from './sections/cv-section';
import ToolsSection from './sections/tools-section';
import AboutMeSection from './sections/about-me-section';
import ProjectsSection from './sections/projects-section';
import HoobiesMeSection from './sections/hoobies-section';
import PageContainer from '../../containers/page-container';
import LanguagesSection from './sections/languages-section';
import EducationSection from './sections/education-section';
import ContactMeSection from './sections/contact-me-section';
import ExperienceSection from './sections/experience-section';
import GridXS12MD6 from '../../components/_grid/grid-xs12-md6';

export default function HomeScreen () {
  return (
    <PageContainer>
      <Grid container spacing={2}>
        <FirstColumn/>
        <ToolsSection/>
      </Grid>
      <ExperienceSection/>
      <ProjectsSection/>
      <ContactMeSection/>
    </PageContainer>
  )
}

function FirstColumn () {
  return (
    <GridXS12MD6>
      <Stack rowGap={2}>
        <AboutMeSection/>
        <HoobiesMeSection/>
        <EducationSection/>
        <LanguagesSection/>
        <CvSection/>
      </Stack>
    </GridXS12MD6>
  )
}