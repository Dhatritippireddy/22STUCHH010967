import axios from 'axios';

export async function Log(stack: string, level: string, packageName: string, message: string) {
  const logData = {
    stack,
    level,
    package: packageName,
    message
  };

  try {
    
    await axios.post('', logData);
    console.log('Log sent successfully:', logData);
  } catch (error) {
    console.error('Error sending log:', error);
  }
}
