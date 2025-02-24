export async function checkLocalClient(): Promise<boolean> {
  try {
    const response = await fetch('http://localhost:5000/status', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    return false;
  }
}
