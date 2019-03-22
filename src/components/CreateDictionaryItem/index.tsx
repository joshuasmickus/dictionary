import { connect } from 'react-redux';

import {
  CreateDictionaryItem,
  mapDispatchToProps,
  mapStateToProps
} from './CreateDictionaryItem';

export default connect(mapStateToProps, mapDispatchToProps)(CreateDictionaryItem);
