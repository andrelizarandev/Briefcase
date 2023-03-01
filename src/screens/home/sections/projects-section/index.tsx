// Modules
import { Grid, Paper, Stack, Typography } from '@mui/material';

// Components
import GreenChip from '../../../../components/_chips/green-chip';
import GridXS12MD6LG4 from '../../../../components/_grid/grid-xs12-md6-lg4 copy';
import SectionContainer from '../../../../containers/section-container';

// Data
import { ProjectData, projectsDataArray } from '../../../../data/projects';

// Hooks
import useGeneralData from '../../../../data/general';

// Styles
import ProjectSectionStyle from './style';
import FlexStyle from '../../../../styles/flex';

export default function ProjectsSection () {
  const { projects } = useGeneralData();
  return (
   <SectionContainer title={projects}>
    <Grid container spacing={2}>
      {projectsDataArray.map((data, key) => <ProjectCard {...data} key={key}/>)}
    </Grid>
   </SectionContainer>

  )
}

function ProjectCard (props:ProjectData) {
  const { description, technologies, title } = props;
  return (
    <GridXS12MD6LG4>
      <Paper>
        <Stack sx={ProjectSectionStyle.CardPaddingContainer}>
          <Typography variant='subtitle2' textTransform='uppercase'>{title}</Typography>
          <Typography variant='caption'>{description}</Typography>
          <TechnologiesList technologies={technologies}/>
        </Stack>
      </Paper>
    </GridXS12MD6LG4>
  )
}

function TechnologiesList (props:any) {
  const { technologies } = props;
  return (
    <Stack sx={FlexStyle.HStackJustifyCenter}>
      {technologies.map((tech:string, key:number) => <GreenChip label={tech} key={key}/>)}
    </Stack>
  )
}