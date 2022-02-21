import React from 'react';
import profile from '../photos/profile2.jpg';
import '../App.css';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

const Home = () => {
  return (
    <div className="Page-all">
      <Card style={{ maxHeight: "75%" }}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <CardContent>
              <Typography gutterBottom variant="h2" component="h1" align="center">
                Hello World
              </Typography>
              <Typography variant="body1" color="textSecondary" component="p" align="justify">

                I am a computer scientist, photographer, and a language learner.
                I am passionate about seeking justice and equity through code and otherwise.
                I am determined to involve and empower young students from underrepresented groups to engage with technology creation.


                Professionally, I work as a fullstack Software Engineer at Winnie in San Francisco, CA.

                When I am not programming, you'll find me running, taking photos, knitting
                or reading great Spanish literature.

              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={4} style={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
            <CardMedia
              style={{ height: '100%', width: '100%' }}
              image={profile}
              title="Here I am traveling in Guanajuato, holding my camera incorrectly 🙃"
            />
          </Grid>
        </Grid>
      </Card>


    </div>
  );
}
export default Home