import { makeStyles } from '@material-ui/core/styles';

const options = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '194px',
  },
  headerText: {
    fontSize: '40px',
    fontWeight: 600,
    color: 'lightblue',
  },
});
const useStyles = makeStyles(options);

export default useStyles;
