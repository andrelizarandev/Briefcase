// Modules
import { Grid, Paper, Stack, Typography } from '@mui/material';

// Components
import GridXS6MD4 from '../../../../components/_grid/grid-xs6-md3';
import GreenFilledButton from '../../../../components/_buttons/green-filled-button';

// Data
import { ContactData, ContactList } from '../../../../data/contact-me';

// Style
import ContactMeSectionStyle from './style';

export default function ContactMeSection () {
  return (
    <Stack rowGap={2}>
      <Typography variant='subtitle2' textTransform='uppercase'>Contact Me</Typography>
      <Grid container spacing={2}>
        {ContactList.map((data, key) => <ContactCard key={key} {...data}/> )}
      </Grid>
    </Stack>
  )
}

function ContactCard (props:ContactData)  {
  return (
    <GridXS6MD4>
      <Paper>
        <Stack sx={ContactMeSectionStyle.ContactCardPaddingContainer}>
          <Typography variant='subtitle2' textTransform='uppercase'>{props.title}</Typography>
          <GreenFilledButton endIcon={<props.icon/>}>{props.buttonText}</GreenFilledButton>
        </Stack>
      </Paper>
    </GridXS6MD4 >
  )
}
