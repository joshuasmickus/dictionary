import { connect } from 'react-redux';

import {
  EditDictionaryItem,
  mapDispatchToProps,
  mapStateToProps
} from './EditDictionaryItem';

export default connect(mapStateToProps, mapDispatchToProps)(EditDictionaryItem);
