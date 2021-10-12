import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = () => <div><i  class="fa fa-2x fa-map-marker" aria-hidden="true"></i></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 29.14,
      lng: 71.26
    },
    zoom: 12
  };

  render() {
    return (
      <div style={{ height: '50vh', width: '100%' , marginTop:'150px' }}>
      
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAG8XBFKHqkH3iKweO_y3iC6kYvcwdsKxY' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={29.143470}
            lng={71.263170}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;