import React from 'react';
import firebase from '../base.js';
import { storage } from '../base.js';

require('dotenv').config();

const pass = process.env.REACT_APP_WRITE_PASS;

class Wander extends React.Component {

  constructor() {
    super();
    this.state = {
      title: '',
      story: '',
      entries: [],
      image: null,
      url: '',
      passcode: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImgChange = this.handleImgChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {

    e.preventDefault();
    const entryList = firebase.database().ref('entries');
    if (this.state.title !== '' && this.state.story !== '') {
      const entry = {
        title: this.state.title,
        story: this.state.story,
        url: this.state.url
      }
      entryList.push(entry);
      this.setState({
        title: '',
        story: ''
      });
    }

  }

  renderCreatePost(me) {
    if (me) {
      return (
        <form onSubmit={this.handleSubmit}>
          <div className="Text-background">
            <div className="Entry-title">

              <input type="text" name="title" placeholder="Título" cols="50" onChange={this.handleChange} value={this.state.title} />
            </div>

            <div className="Entry-body">
              <textarea name="story" placeholder="Historia del día" rows="25" cols="100" onChange={this.handleChange} value={this.state.story} />
            </div>
            <input type='file' className="Upload" id='multi' onChange={this.handleImgChange} />
            <button onClick={this.handleUpload}>Upload</button>
            <button>Publicar</button>
          </div>

        </form>
      )
    }
  }

  handleImgChange(e) {
    if (e.target.files[0]) {
      const img = e.target.files[0];
      this.setState({ image: img });
    }
  }

  handlePassChange(e) {
    this.setState({ passcode: e.target.value });
  }

  handleUpload(e) {
    console.log(this.state.url);
    e.preventDefault();

    const img = this.state.image;

    if (img != null) {

      const imgUpload = storage.ref('images/' + img.name).put(img);
      imgUpload.on('state_changed',
        (snapshot) => {

        }, (error) => {
          console.log(error);
        },
        () => {
          storage.ref('images').child(img.name).getDownloadURL().then(url => {
            this.setState({ url });
          })
        });
    }
  }

  componentDidMount() {
    const entryList = firebase.database().ref('entries');
    entryList.on('value', (snapshot) => {
      let entries = snapshot.val();
      let newState = [];
      for (let e in entries) {
        newState.push({
          id: e,
          title: entries[e].title,
          story: entries[e].story,
          url: entries[e].url
        });
      }
      this.setState({
        entries: newState,
        image: null
      });
    });
  }

  render() {


    return (
      <div className="Page-all">

        <h1>Wander</h1>

        <p>Welcome! Here I will attempt to reflect on my travel experiences and share some of my favorite photos.</p>



        {this.state.entries.reverse().map((entry) => {
          return (
            <div>
              <div className="Posts">
                <h2>{entry.title}</h2>
                <div className="Wander">
                  <img alt="perdon, no hay nada aquí" src={entry.url} />
                  <ul>
                    <li class="sgLi">
                      {entry.story}
                    </li>

                  </ul>

                </div>
              </div>
              <hr />
            </div>
          )
        })}


      </div>
    );

  }

}
export default Wander