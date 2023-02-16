// Modules
import { Grid, Paper, Stack, Typography } from '@mui/material';

// Components
import GridXS6MD4 from '../../../../components/_grid/grid-xs6-md3';
import SectionContainer from '../../../../containers/section-container';
import GreenFilledButton from '../../../../components/_buttons/green-filled-button';

// Data
import { ContactData, ContactList } from '../../../../data/contact-me';

// Style
import ContactMeSectionStyle from './style';

export default function ContactMeSection () {
  return (
    <SectionContainer title='Contact Me'>
      <Grid container spacing={2}>
        {ContactList.map((data, key) => <ContactCard key={key} {...data}/> )}
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
            <GreenFilledButton endIcon={<props.icon/>}>{props.buttonText}</GreenFilledButton>
          </a>
        </Stack>
      </Paper>
    </GridXS6MD4 >
  )
}
