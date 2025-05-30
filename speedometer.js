


        
    function calculateSpeed() {
      const distance = parseFloat(document.getElementById("km").value);
      const hr = parseFloat(document.getElementById("hr").value);
      const min = parseFloat(document.getElementById("min").value);
      const unit = document.getElementById("distanceUnit").value;
    
      if (!isNaN(distance) && (!isNaN(hr) || !isNaN(min))) {
        const timeInSeconds = ((hr || 0) * 3600) + ((min || 0) * 60);
        const timeInHours = timeInSeconds / 3600;
    
        let speed;
        let result = "";
    
        if (unit === "m") {
          speed = distance / timeInSeconds; // in m/s
          result = `Speed is ${speed.toFixed(2)} m/s`;
        } else {
          speed = distance / timeInHours; // in km/h
          result = `Speed is ${speed.toFixed(2)} km/h`;
        }
    
        document.getElementById("resultSpeed").innerHTML = result;
      } else {
        document.getElementById("resultSpeed").innerHTML = `Please enter valid values.`;
      }
    }
    
  
      function calculateDistance() {
        const speedInput = parseFloat(document.getElementById("dspeed").value);
        const hr = parseFloat(document.getElementById("dhr").value);
        const min = parseFloat(document.getElementById("dmin").value);
        const unit = document.getElementById("speedUnit").value;
  
        if (!isNaN(speedInput) && (!isNaN(hr) || !isNaN(min))) {
          const time = ((hr || 0) * 60 + (min || 0)) / 60; // time in hours
          const finalSpeed = unit === 'm/s' ? speedInput * 3.6 : speedInput;
          const distance = finalSpeed * time;
          
          resultUnit = unit === 'm/s' ? `${(distance*1000).toFixed(2)} meters` : `${distance} kilometers`;
  
          document.getElementById("resultDistance").innerHTML = `Distance is ${resultUnit} `;
  
  
        } else {
          document.getElementById("resultDistance").innerHTML = `Please enter valid values.`;
        }
      }
      function calculateTime() {
        const distance = parseFloat(document.getElementById("tkm").value);
        const speed = parseFloat(document.getElementById("tspeed").value);
        const unit = document.getElementById("timeDistanceUnit").value;
      
        if (!isNaN(distance) && !isNaN(speed) && speed > 0) {
          // Convert distance to kilometers if it’s in meters
          const distanceInKm = unit === "m" ? distance / 1000 : distance;
      
          const time = (distanceInKm / speed) * 60; // Time in minutes
          const hr = Math.floor(time / 60);
          const min = Math.round(time % 60);
      
          document.getElementById("resultTime").innerHTML = `Time is ${hr} hour(s) and ${min} minute(s)`;
        } else {
          document.getElementById("resultTime").innerHTML = `Please enter valid values.`;
        }
      }
      
  
      function clearSpeed() {
        document.getElementById("km").value = "";
        document.getElementById("hr").value = "";
        document.getElementById("min").value = "";
        document.getElementById("resultSpeed").innerHTML = "";
      }
  
      function clearDistance() {
        document.getElementById("dspeed").value = "";
        document.getElementById("dhr").value = "";
        document.getElementById("dmin").value = "";
        document.getElementById("resultDistance").innerHTML = "";
      }
  
      function clearTime() {
        document.getElementById("tkm").value = "";
        document.getElementById("tspeed").value = "";
        document.getElementById("resultTime").innerHTML = "";
      }