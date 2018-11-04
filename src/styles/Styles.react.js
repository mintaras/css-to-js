import normalize from './normalize.jss';
import reset from './reset.jss';
import injectSheet from 'react-jss';

const styles = globals => ({
  '@global': {
    ...reset,
    ...normalize(globals),
  },
});

const AppStyles = () => null;

export default injectSheet(styles)(AppStyles);