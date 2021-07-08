import React from 'react';
import accounting from 'accounting';
import { Button, makeStyles } from '@material-ui/core';
import { getBasketTotal } from '../reducer';
import {useStateValue} from '../StateProvider'; 
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme)=> ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "20vh"
    },
    button:{
        marginTop: "2rem",
        backgroundColor: 'blue',
    },
    linkline: {
        textDecorationLine:'none'
    }
}))

const Total = () => {
    const classes = useStyles()
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className={classes.root}>
            <h5>Total items: {basket?.length}</h5>
            <h5>{accounting.formatMoney(getBasketTotal(basket))}</h5>
            <Link to="checkout" className={classes.linkline}>
                <Button className={classes.button} variant="contained" color="secondary">Comprar</Button>
            </Link>
        </div>
    )
}

export default Total;
