import { connect } from 'react-redux';

import {
  DictionaryItemList,
  mapDispatchToProps,
  mapStateToProps
} from './DictionaryItemList';

export default connect(mapStateToProps, mapDispatchToProps)(DictionaryItemList);
