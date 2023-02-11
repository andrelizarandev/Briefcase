// Modules
import { Grid, Stack } from '@mui/material';

// Components
import CvSection from './components/cv-section';
import ToolsSection from './components/tools-section';
import AboutMeSection from './components/about-me-section';
import HoobiesMeSection from './components/hoobies-section';
import PageContainer from '../../containers/page-container';
import LanguagesSection from './components/languages-section';
import EducationSection from './components/education-section';
import ContactMeSection from './components/contact-me-section';
import GridXS12MD6 from '../../components/_grid/grid-xs12-md6';
import ExperienceSection from './components/experience-section';

export default function HomeScreen () {
  return (
    <PageContainer>

      <Grid container spacing={2}>
        <FirstColumn/>
        <ToolsSection/>
      </Grid>

      <ExperienceSection/>
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