import React from 'react';
import firebase from '../base.js';
import {storage} from '../base.js';
import met from '../photos/met.jpg';

class Wander extends React.Component {

  constructor() {
    super();
    this.state = {
      title: '',
      story: '',
      entries: [],
      image: null,
      url: ''
    }

    this.handleChange = this.handleChange.bind(this);
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
    if(this.state.title !== '' && this.state.story !== ''){
    const entry = {
      title: this.state.title,
      story: this.state.story
    }
    entryList.push(entry);
    this.setState({
      title: '',
      story: ''
    });
  }

  }

  handleImgChange(e){
    console.log(e);
    if(e.target.files[0]){
      const img = e.target.files[0]; 
      this.setState({image: img});
    }
  }

  handleUpload(e){
    e.preventDefault();
    console.log(e);
    
    const img = this.state.image;
    console.log(img);

    if(img != null){
    
    console.log(img.name);
    const imgUpload = storage.ref('images/'+ img.name).put(img);
    imgUpload.on('state_changed', 
    (snapshot) => {

    }, (error) => {
      console.log(error);
    }, 
    () => {
      storage.ref('images').child(img.name).getDownloadURL().then(url => {
        this.setState({url});
      })
    });
}
  }

  componentDidMount(){
    const entryList = firebase.database().ref('entries');
    entryList.on('value', (snapshot) => {
      let entries = snapshot.val();
      let newState = [];
      for(let e in entries){
        newState.push({
          id: e,
          title: entries[e].title,
          story: entries[e].story,
        });
      }
      this.setState({
        entries: newState,
        image: null
      });
    });
  }

  render(){
    

    return (
      <div className="Page-all">
        <form onSubmit={this.handleSubmit}>
        <div className="Text-background-2">
        <div className= "Entry-title">
        
          <input type="text" name="title" placeholder="Título" cols="50" onChange={this.handleChange} value={this.state.title} />
          </div>

          <div className = "Entry-body">
          <textarea name="story" placeholder="Historia del día" rows="25" cols="100" onChange={this.handleChange} value={this.state.story} />
        </div>
        <input type='file' id='multi' onChange={this.handleImgChange} />
        <button onClick={this.handleUpload}>Upload</button>
        </div>
        <button>Publicar</button>
        </form>

        
          {this.state.entries.map((entry) =>{
            return (
              <div className= "Posts Text-background-2">
                <h1>{entry.title}</h1>
                {entry.story}
              </div>
            )
          })}
        

      </div>
    );
    
  }
  
}
export default Wander
