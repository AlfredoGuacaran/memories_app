import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';
export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    flexWrap: 'wrap',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
    [theme.breakpoints.down('xs')]: {
      fontSize: '50px',
    },
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    flexGrow: '1',
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  userName: {
    margin: '0 15px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px',
    },
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
