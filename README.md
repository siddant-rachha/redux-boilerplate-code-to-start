# redux-boilerplate-code-to-start

npm dependencies to install<br/>

npm install react-redux --save<br/>
npm install redux-thunk --save<br/>


# in components import redux

import { connect } from "react-redux";<br/>
import * as actions from '../../store/actions/index';<br/>


# connect the state with store and actions

<pre>
const mapStateToProps = (state) => {
    return {
        bannerData: state.banner.bannerData
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBanner: () => dispatch(actions.fetchBanner())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Banner);
</pre>
