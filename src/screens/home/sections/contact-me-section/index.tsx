// Modules
import { Grid, Paper, Stack, Typography } from '@mui/material';

// Components
import GridXS6MD4 from '../../../../components/_grid/grid-xs6-md3';
import SectionContainer from '../../../../containers/section-container';
import IndigoButton from '../../../../components/_buttons/blue-button copy';

// Hooks
import useGeneralData from '../../../../data/general';
import useGetContactMeData, { ContactData } from '../../../../data/contact-me';

// Style
import ContactMeSectionStyle from './style';

export default function ContactMeSection () {
  const { getContactList } = useGetContactMeData();
  const { contactMe } = useGeneralData();
  return (
    <SectionContainer title={contactMe}>
      <Grid container spacing={2}>
        {getContactList().map((data, key) => <ContactCard key={key} {...data}/> )}
      </Grid>
    </SectionContainer>
  )
}

function ContactCard (props:ContactData)  {
  return (
    <GridXS6MD4>
      <Paper>
        <Stack sx={ContactMeSectionStyle.ContactCardPaddingContainer}>
          <Typography variant='subtitle2' textTransform='uppercase'>{props.title}</Typography>
          <a href={props.link} target="_blank">
            <IndigoButton endIcon={<props.icon/>}>{props.buttonText}</IndigoButton>
          </a>
        </Stack>
      </Paper>
    </GridXS6MD4 >
  )
}
