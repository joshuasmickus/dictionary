import { connect } from 'react-redux';

import {
  CreateDictionaryItem,
  mapDispatchToProps,
  mapStateToProps
} from './CreateDictionaryItem';

import './CreateDictionaryItem.css';

export default connect(mapStateToProps, mapDispatchToProps)(CreateDictionaryItem);
