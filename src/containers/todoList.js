import {addTodo} from '../actions/actions'
import {bindActionCreators} from 'react-redux';

import {connect} from 'react-redux';
import App from '../App'



const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(addTodo,dispatch)
  })

export default connect(mapDispatchToProps)(App);