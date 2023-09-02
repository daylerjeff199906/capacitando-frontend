async function getYouTubeVideoDuration(videoUrl) {
  try {
    // Extraer el ID del video desde la URL
    const videoId = extractVideoId(videoUrl);

    // Hacer una solicitud a la API de YouTube para obtener detalles del video
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=contentDetails&key=API_KEY`
    );

    if (!response.ok) {
      throw new Error("Error al obtener detalles del video.");
    }

    const data = await response.json();

    if (!data || !data.items || data.items.length === 0) {
      throw new Error("No se encontraron detalles del video.");
    }

    // Obtener la duración del video
    const duration = parseDuration(data.items[0].contentDetails.duration);

    return duration;
  } catch (error) {
    console.error("Error al obtener la duración del video:", error);
    return null;
  }
}

// Función para extraer el ID del video de una URL de YouTube
function extractVideoId(url) {
  const match = url.match(/[?&]v=([^?&]+)/);
  return match ? match[1] : null;
}

// Función para analizar la duración proporcionada por la API de YouTube
function parseDuration(duration) {
  const matches = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  const hours = parseInt(matches[1]) || 0;
  const minutes = parseInt(matches[2]) || 0;
  const seconds = parseInt(matches[3]) || 0;

  return `${hours} horas ${minutes} minutos ${seconds} segundos`;
}

export default getYouTubeVideoDuration;
