import { connect } from 'react-redux';

import {
  CreateDictionary,
  mapDispatchToProps,
  mapStateToProps
} from './CreateDictionary';


export default connect(mapStateToProps, mapDispatchToProps)(CreateDictionary);
