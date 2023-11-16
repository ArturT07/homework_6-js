async function findLocation() {
    try {
      const ipResponse = await fetch('https://api64.ipify.org?format=json');
      const { ip } = await ipResponse.json();
  
      const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
      const locationData = await locationResponse.json();
  
      displayLocation(locationData);
    } catch (error) {
      console.error('Помилка:', error);
    }
  }
  
  function displayLocation(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p><strong>Континент:</strong> ${data.continent_name || data.continent || 'Невідомий'}</p>
      <p><strong>Країна:</strong> ${data.country_name || 'Невідома'}</p>
      <p><strong>Регіон:</strong> ${data.region || 'Невідомий'}</p>
      <p><strong>Місто:</strong> ${data.city || 'Невідоме'}</p>
      <p><strong>Район:</strong> ${data.region_code || 'Невідомий'}</p>
    `;
  }
  
  