import AppDrawer from "../components/Header/AppDrawer";
import { connect } from "react-redux";
import { changeDrawerStatus } from './../state/actions/drawer'

function mapStateToProps(state) {
    return {isDrawerOpen: state.drawerStatus}
}

function mapDispatchToProps(dispatch) {
    return {
        setDrawerOpen: ()=> dispatch(changeDrawerStatus(true)),
        setDrawerClosed: ()=> dispatch(changeDrawerStatus(false))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppDrawer)