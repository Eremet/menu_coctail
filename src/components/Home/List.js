import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    text: {
       color: 'black',
       textDecoration: 'none'
    },
    cardContent: {
        backgroundColor: 'grey'
    },
    card: {
        border: '10px solid black',
        minWidth: 350,
        borderRadius: '25px',
    },
    img: {
        borderRadius: '25px',
        maxWidth: 200,
        border: '5px solid black'
    }
  });

export default function List(props) {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    return (
        <div>
            {props.data?
                props.data.map(el=>{
                    return(
                        <div>
                        <Grid container className={classes.root} spacing={2}>
                            <Grid item xs={12}>
                                <Grid container justify="center" spacing={spacing}>
                                {[0, 1, 2].map((value) => (
                                    <Grid key={value} item>
                                    <Card
                                    className={classes.card}
                                    >
                                    <CardContent
                                        className={classes.cardContent}
                                        >
                                        <Link to={'/detail/'+el.idDrink} key={el.idDrink}>
                                            <div>
                                                <Typography>
                                                    <h3 
                                                    className={classes.text}
                                                    >{el.strDrink}</h3>
                                                </Typography>
                                                <CardMedia>
                                                    <img 
                                                    className={classes.img}
                                                    src={el.strDrinkThumb}/>
                                                </CardMedia>
                                            </div>
                                        </Link>
                                    </CardContent>
                                </Card>
                                    </Grid>
                                ))}
                                </Grid>
                            </Grid>
                        </Grid>
                        </div>
                    )
                }) 
                : <h5>Loading...</h5>
            }
        </div>
    )
}
