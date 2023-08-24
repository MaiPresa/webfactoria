const BASE_URL = "http://localhost/PHPprojects/webfactoria/";

const codersEndpoint = "coders.php";


export const codersAPI = async () => {
    let jsonData = {};

    try {
        const response = await fetch(`${BASE_URL}${codersEndpoint}`);
        jsonData = await response.json();

      } catch (error) {
        console.error('Error fetching data:', error);
      }

return (
    jsonData
)};