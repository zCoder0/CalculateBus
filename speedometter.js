
    let lastPosition = null;
    let lastTime = null;

    function toRadians(deg) {
      return deg * Math.PI / 180;
    }

    function calculateDistance(lat1, lon1, lat2, lon2) {
      const R = 6371e3;
      const φ1 = toRadians(lat1);
      const φ2 = toRadians(lat2);
      const Δφ = toRadians(lat2 - lat1);
      const Δλ = toRadians(lon2 - lon1);

      const a = Math.sin(Δφ / 2) ** 2 +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ / 2) ** 2;
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      return R * c;
    }

    function updateSpeed(position) {
      const currentTime = Date.now();
      const currentPos = position.coords;

      if (lastPosition && lastTime) {
        const timeDiff = (currentTime - lastTime) / 1000;
        const distance = calculateDistance(
          lastPosition.latitude,
          lastPosition.longitude,
          currentPos.latitude,
          currentPos.longitude
        );

        const speed_mps = distance / timeDiff;
        const speed_kmph = speed_mps * 3.6;

        document.getElementById("speedText").textContent = `Speed: ${speed_kmph.toFixed(2)} km/h`;

        // Rotate needle (0 to 180 deg max for 0 to 180 km/h)
        const angle = Math.min(speed_kmph, 180); // Cap at 180
        document.getElementById("needle").style.transform = `rotate(${angle}deg)`;
      }

      lastPosition = currentPos;
      lastTime = currentTime;
    }

    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(updateSpeed, err => {
        document.getElementById("speedText").textContent = "Error accessing GPS.";
      }, {
        enableHighAccuracy: true,
        maximumAge: 1000
      });
    } else {
      document.getElementById("speedText").textContent = "Geolocation not supported.";
    }