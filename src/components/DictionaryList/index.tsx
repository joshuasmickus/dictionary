import { connect } from 'react-redux';

import {
  DictionaryList,
  mapDispatchToProps,
  mapStateToProps
} from './DictionaryList';

export default connect(mapStateToProps, mapDispatchToProps)(DictionaryList);
