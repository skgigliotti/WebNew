import React from 'react';
class PhotoDisplay extends React.Component {

  constructor(props) {
    super(props);

  }

    render() {
      return (
        <div className="Page-all">
          <div className="Photos">
            {this.props.images.map((p) => (<img src={p} alt={p}/>))}
            </div>
        </div>
      )
    }

}
export default PhotoDisplay
