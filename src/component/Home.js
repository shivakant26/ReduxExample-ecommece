import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { connect } from "react-redux";
import { addtoCart } from '../container/Action/action';

class Home extends React.Component {
    constructor(props) {
        super(props);


    }
    render() {
        console.warn("123155", this.props.cardData)
        return (
            <div className="container">
                <div className="center_wr">
                    <p>{this.props.data}</p>
                    <h1>Home Component</h1>
                    <div className="cart-icon">
                        <p>{this.props.cardData.quantity}</p>
                        <span><i className="fa fa-shopping-cart" ></i></span>
                    </div>
                    <div className="card">
                        <div className="clearfix">
                            <div className="image">
                                <img src="https://rukminim1.flixcart.com/image/416/416/kn22m4w0/mobile/a/q/8/galaxy-f12-sm-f127gzgiins-samsung-original-imagftmjw3xqg4yk.jpeg?q=70" />
                            </div>
                            <div className="content">
                                <p><strong>Price:</strong>10000</p>
                                <p><strong>Color:</strong>Black</p>
                            </div>
                            <div className="button">
                                <button onClick={() => { this.props.addToCartHandler({quantity:1, price: 1000 }) }}>addtoCart</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    console.log("state:", state);
    return {
        cardData:state.reducer.cardData
    }
}

const mapDispatchToProps = dispatch => {
    // console.log("dispathched",dispatch)
    return { addToCartHandler: data => dispatch(addtoCart(data)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);