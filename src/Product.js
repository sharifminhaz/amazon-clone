import React from "react";
import "./Product.css";
//import {Rating} from '@material-ui/lab';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Product({id, title, price, image, rating}) {
    const [value, setValue] = React.useState(rating);
    return <div className="product">
        <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product__rating">
            <Box component="fieldset" borderColor="transparent">
                <Typography component="legend"></Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    size="small"
                />
            </Box>
        </div>
        </div>
        <img src={image} alt="" />
        <button>Add to Cart</button>
    </div>
}

export default Product