import { connect } from 'react-redux';
import styles from './HomeProducts.module.css';
import * as actions from '../../store/actions/index';
import Spinner from '../Spinner/Spinner';
import { useEffect } from 'react';

const Cards = (props) => {

    let isLoaded = props.productData !== null;

    useEffect(() => {
        if (!isLoaded) {
            console.log("home products request sent to server")
            props.fetchHomeProducts();
        }
    }, [])

    if (props.loading) {
        return (<div className={styles.Spinner}>
            <Spinner />
        </div>)
    }

    if (!isLoaded) {
        return null;
    }

    return (
        <div className="container container-md" style={{ padding: "20px" }}>
            <div className="row">

                {props.productData.map((product) => {
                    return (
                        <div key={product.id} className={"col-6 col-sm-6 col-md-4 mt-3 mb-3 " + styles.Card}>
                            <div className="card">
                                <img className="card-img-top " src={product.productImgUrl} alt="product image" ></img>
                                <div className={"card-body " + styles.CardBody}>
                                    <h6 className="card-title">{product.productTitle}</h6>
                                    <p className="card-text">{product.productDesc}</p>
                                    <button className="btn btn-warning" >Add to Cart</button>
                                    <span className="badge badge-primary" style={{float:"right"}}>{product.productPrice}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        productData: state.homeProducts.productData,
        loading: state.homeProducts.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchHomeProducts: () => dispatch(actions.fetchHomeProducts())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cards);

