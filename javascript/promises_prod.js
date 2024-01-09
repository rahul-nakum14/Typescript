//Method - 1


function fetchWeatherData() {
    return fetch(`https://api.weatherapi.com/v1/current.json?key=334e4dd6c2ff4e0fb15114551240901&q=London`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  }
  
  function processWeatherData(data) {
    const weatherInfo = {
      location: data.location.name,
      temperature: data.current.temp_c,
      description: data.current.condition.text,
    };
    return weatherInfo;
  }
  
  function fetchCityDetails(cityName) {
    return fetch(`https://api.teleport.org/api/cities/?search=${cityName}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  }
  
  fetchWeatherData()
    .then(processWeatherData) // Process the weather data
    .then(weatherInfo => {
      return fetchCityDetails('London, England, United Kingdom'); // Fetch additional city details
    })
    .then(cityDetails => {
      console.log('Weather Information:', cityDetails);
      // Update UI with weather and city details
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle errors
    });
  

    //Method - 2

    function fetchWeatherData() {
      return new Promise((resolve, reject) => {
        fetch(`https://api.weatherapi.com/v1/current.json?key=334e4dd6c2ff4e0fb15114551240901&q=London`)
          .then(response => {
            if (!response.ok) {
              reject(new Error('Network response was not ok'));
            }
            return response.json();
          })
          .then(data => {
            resolve(data);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
    
    function processWeatherData(data) {
      return new Promise((resolve, reject) => {
        try {
          const weatherInfo = {
            location: data.location.name,
            temperature: data.current.temp_c,
            description: data.current.condition.text,
          };
          resolve(weatherInfo);
        } catch (error) {
          reject(error);
        }
      });
    }
    
    function fetchCityDetails(cityName) {
      return new Promise((resolve, reject) => {
        fetch(`https://api.teleport.org/api/cities/?search=${cityName}`)
          .then(response => {
            if (!response.ok) {
              reject(new Error('Network response was not ok'));
            }
            return response.json();
          })
          .then(data => {
            resolve(data);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
    
    fetchWeatherData()
      .then(processWeatherData)
      .then(weatherInfo => {
        return fetchCityDetails('London, England, United Kingdom');
      })
      .then(cityDetails => {
        console.log('Weather Information:', cityDetails);
        // Update UI with weather and city details
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle errors
      });
    
