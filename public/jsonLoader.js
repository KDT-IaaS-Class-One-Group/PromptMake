// jsonLoader.js
export async function loadJsonData(jsonFilePath) {
  try {
      const response = await fetch(jsonFilePath);
      const jsonData = await response.json();
      return jsonData;
  } catch (error) {
      console.error('Error loading JSON file:', error);
      return null;
  }
}
