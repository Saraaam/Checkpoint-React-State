import React, { Component } from 'react';
import './App.css';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Initial state with a person object and a boolean to show/hide the profile
    this.state = {
      person: {
        fullName: 'Sara AAMOUM',
        bio: 'A passionate software developer.',
        imgSrc: 'https://media.istockphoto.com/id/2014684899/vector/placeholder-avatar-female-person-default-woman-avatar-image-gray-profile-anonymous-face.jpg?s=612x612&w=0&k=20&c=D-dk9ek0_jb19TiMVNVmlpvYVrQiFiJmgGmiLB5yE4w=',
        profession: 'Software Developer',
      },
      shows: false,
      timeInterval: 0,
    };
  }

  // Method to toggle the visibility of the profile
  toggleProfile = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  // Set up the interval to calculate the time since the component was mounted
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000); // Increment the time every second
  }

  // Clean up the interval when the component unmounts
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, timeInterval } = this.state;

    return (
      <div className="App bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-6">Profile</h1>
        
        <button 
          onClick={this.toggleProfile}
          className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-green-700 transition-all mb-6"
        >
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        
        {shows && (
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
            <img 
              src={imgSrc} 
              alt={fullName} 
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">{fullName}</h2>
            <p className="text-gray-700 mb-2">{bio}</p>
            <p className="text-gray-500">{profession}</p>
          </div>
        )}

        <div className="mt-6">
          <h3 className="text-xl font-semibold">
            Time since component mounted: {timeInterval} seconds
          </h3>
        </div>
      </div>
    );
  }
}

export default App;
