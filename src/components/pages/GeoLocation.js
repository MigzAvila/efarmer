import React from 'react'
import Controls from "../../components/Controls/Control";



class Geolocation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latitude : null,
            longitude : null,
            userAddress : null
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
    }

    getLocation(){
        console.log("geo")

        if(navigator.geolocation){

            navigator.geolocation.getCurrentPosition(this.getCoordinates,this.handleError);

        } else {

            alert("Geolocatioj is not supported by this Broswer")
        }

    }

    getCoordinates(position){
       this.setState({
           latitude: position.coords.latitude,
           longitude : position.coords.longitude
       })
    }

    handleError(error) {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.")
            break;
          case error.POSITION_UNAVAILABLE:
             alert("Location information is unavailable.")
            break;
          case error.TIMEOUT:
            alert( "The request to get user location timed out.")
            break;
          case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.")
            break;
           default:
               alert("An unknown error occurred.")
        }
      }

    render(){
        return(
            <div> 
                <Controls.Button onClick={this.getLocation()} text="Get Location - Field Map"/>
                {
                    this.state.latitude && this.state.longitude ?
                    <div>
                         <iframe src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyDnvIp3NSKcdxTH1-ZvLoX5j3o4inw-768&center=${this.state.latitude},${this.state.longitude}&zoom=18&maptype=satellite`}/>
                    </div>

                    :
                    null
                }
            </div>
            
            

        )

        
    }
}

export default Geolocation;