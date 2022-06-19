import { makeStyles } from '@material-ui/core/styles';

const options = theme => ({
  container: {
    width: '100%',
    maxWidth: '768px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '25px auto',
  },
  headerText: {
    fontSize: '40px',
    fontWeight: 600,
    color: '#2c3e50',
  },
  menuBox: {
    width: '100%',
    maxWidth: '768px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    margin: '0 auto',
  },
});
const useStyles = makeStyles(options);

export default useStyles;
