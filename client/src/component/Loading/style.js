import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '95vh',
  },
  message: {
    color: theme.palette.secondary.main,
    marginTop: '3%',
  },
}));

export default useStyles;
