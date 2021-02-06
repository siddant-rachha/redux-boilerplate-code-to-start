import { connect } from "react-redux";
import * as actions from '../../store/actions/index';
import { useEffect } from "react";

const Banner = (props) => {

    let isLoaded = props.bannerData !== null;

    useEffect(() => {
        if (!isLoaded) {
            console.log("banner fetch request sent to server")
            props.fetchBanner();
        }
    }, []);

    if(!isLoaded){
        return null;
    }
    if(!(props.bannerData.length > 0)){
        return null;
    }

    return (
        <>
            <div className="jumbotron jumbotron-fluid" style={{ padding: "20px 0 20px 0", margin: "20px 0 20px 0" }} >
                <img style={{ maxWidth: "100%" }} className="card-img-top "
                    src={props.bannerData[0].url} alt="Card image" ></img>
            </div >
        </>
    );
}


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