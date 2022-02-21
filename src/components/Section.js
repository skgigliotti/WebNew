import React, { Component } from 'react';
import '../App.css';
import './Components.css';
// import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';



class Section extends Component {
    render() {
        const listItems = this.props.items.map((item) =>
            <Card style={{ maxWidth: 345, margin: "50px" }}>
                <CardActionArea onClick={() => { window.open(item.url, "_blank") }}>
                    <CardMedia
                        image={item.image}
                        style={{
                            height: 140,
                        }}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {item.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card >
        );

        return (

            <Grid container spacing={3}>

                {/* <Typography gutterBottom variant="h4" component="h1">
                    {this.props.title}
                </Typography> */}

                {listItems}


            </Grid >
        );

    }

}
export default Section;
