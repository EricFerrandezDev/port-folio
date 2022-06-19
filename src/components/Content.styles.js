import { makeStyles } from '@material-ui/core/styles';

const options = theme => ({
  container: {
    width: '100%',
    maxWidth: '768px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: '25px auto',
    padding: '25px',
    backgroundColor: '#2c3e50',
    borderRadius: '12px',
    boxShadow: '0px 5px 15px #FFFFFF',
  },
});
const useStyles = makeStyles(options);

export default useStyles;
