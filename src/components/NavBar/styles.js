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
    flexWrap: 'wrap',
    padding: '10px 50px',
  },
  heading: {
    color: '#6d1b7b',
    textDecoration: 'none',
    fontSize: '2.6rem',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  account: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px',
    marginRight: '10px',
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
