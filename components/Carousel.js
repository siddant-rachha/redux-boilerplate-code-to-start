import { Component, useEffect } from 'react';
import styles from './Carousel.module.css';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Slider from "react-slick";


const Carousel = (props) => {

    let isLoaded = props.carouselData !== null;

    useEffect(() => {
        if (!isLoaded) {
            props.fetchCarouselData();
        }
       
    }, [])

    if (!isLoaded) {
        return null;
    }
    
    const settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        swipeToSlide: true
      };
    return (

            <div>
              <h2> Single Item</h2>
              <Slider {...settings}>
                <div>
                  <img src="https://powerbreakfitness.in/images/banner2.jpg"></img>
                </div>
                <div>
                <img src="https://powerbreakfitness.in/images/banner2.jpg"></img>
                </div>
                <div>
                <img src="https://powerbreakfitness.in/images/banner2.jpg"></img>
                </div>

              </Slider>
            </div>

        // <div className={styles.Container}>
        //     <div id="carouselExampleCaptions" className={"carousel slide " + styles.Carousel} data-ride="carousel" data-pause="hover">

        //         <ol className="carousel-indicators">
        //             {props.carouselData.map((data, index) => {
        //                 let isActive;
        //                 index === 0 ? isActive = "active" : isActive = "";
        //                 return (
        //                     <li key={data.id} data-target="#carouselExampleCaptions"
        //                         data-slide-to={index} className={isActive}></li>
        //                 );
        //             })}
        //         </ol>

        //         <div className="carousel-inner">
        //             {props.carouselData.map((data, index) => {
        //                 let isActive;
        //                 index === 0 ? isActive = "active" : isActive = "";
        //                 return (
        //                     <div key={data.id} data-interval="1000" className={"carousel-item " + isActive}>
        //                         <img src={data.imgUrl}
        //                             className="d-block"
        //                             alt={data.imgTitle}></img>
        //                         <div className="carousel-caption d-none d-md-block">
        //                             <h5>{data.imgTitle}</h5>
        //                         </div>
        //                     </div>
        //                 );
        //             })}
        //         </div>

        //         <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
        //             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        //             <span className="sr-only">Previous</span>
        //         </a>
        //         <a className="carousel-control-next" id="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
        //             <span className="carousel-control-next-icon" aria-hidden="true"></span>
        //             <span className="sr-only">Next</span>
        //         </a>
        //     </div>
        // </div>
    );

}


const mapStateToProps = state => {
    return {
        carouselData: state.carouselData.carouselData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCarouselData: () => dispatch(actions.fetchCarouselData())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);