import { useEffect, useState } from "react";
import { connect } from 'react-redux';
import styles from './SideBar.module.css';
import NavBar2 from '../NavBar2/NavBar2';
import Spinner from '../Spinner/Spinner';
import * as actions from "../../store/actions/index";
import { NavLink, withRouter } from 'react-router-dom';


const Sidebar = (props) => {

    const [isNavOpen, updateIsNavOpen] = useState(false);
    const [isDesktop, updateIsDesktop] = useState(false);

    useEffect(() => {
        if (props.categories === null) {
            props.fetchCategories();
        }
        if (window.innerWidth > 768) {
            updateIsNavOpen(true);
            updateIsDesktop(true);
        }
    }, [])

    useEffect(() => {
        if (window.innerWidth < 768) {
            const scrollHandler = () => {
                console.log(document.documentElement.scrollTop)
                if (document.documentElement.scrollTop > 200) {
                    if (isNavOpen === true) {
                        updateIsNavOpen(prevState => false)
                    }
                }
            };
            window.addEventListener('scroll', scrollHandler)

            return () => window.removeEventListener('scroll', scrollHandler)
        }
    }, [isNavOpen])

    const navHandler = () => {
        updateIsNavOpen((prevState) => {
            return !prevState;
        })
    }

    const closeNav = () => {
        //automatically closes nav for mobile on click
        if (isDesktop === false) {
            updateIsNavOpen(false)
        }
    }

    let length = "0px"
    if (isNavOpen === true) {
        length = "200px";
    }
    return (
        <>
            <div className={styles.sidebar} style={{ width: length }}>
                <span className={styles.closebtn} onClick={() => navHandler()}><i className='fa fa-angle-double-left'></i></span>
                <h6 style={{ marginLeft: "30px", marginTop: "20px" }}>Browse Categories</h6>
                {/* creates categories or shows loading */}
                {props.loading ?
                    <div className={styles.Spinner}><Spinner size="small" /></div>
                    : props.categories !== null ?
                        props.categories.map((category) => {
                            let _categoryName = category.categoryName.replace(/\s/g, "").toLowerCase()
                            let url = ("/category/" + _categoryName + "/" + props.categoryType)
                            return (
                                <NavLink
                                    onClick={() => { closeNav(); props.updateCategoryName(_categoryName); }}
                                    key={category.id} exact
                                    to={url}
                                    activeClassName={styles.Active}>
                                    {category.categoryName}
                                </NavLink>
                            )
                        }) : null}
            </div>

            {/* provides marginLeft when desktop */}
            {isDesktop === true ?
                <div id={styles.main} style={{ marginLeft: length }}>
                    <NavBar2 navHandler={navHandler} />
                    {props.children}
                </div> :
                <>
                    <NavBar2 navHandler={navHandler} />
                    {props.children}
                </>
            }
        </>
    );
}

const mapStateToProps = state => {
    return {
        categories: state.sidebarCategory.categories,
        loading: state.sidebarCategory.loading,
        categoryType: state.categoryProducts.categoryType
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchCategories: () => dispatch(actions.fetchCategories()),
        updateCategoryName: (categoryName) => dispatch(actions.updateCategoryName(categoryName))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Sidebar));