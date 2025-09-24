// Converts a file size in bytes into a human-readable format (e.g., "1.25 MB")
export const formatSize = (bytes: number): string => {
  // If the value is 0, return immediately
  if (bytes === 0) return '0 Bytes';

  // Base for size conversion (1 KB = 1024 Bytes)
  const k = 1024;

  // Units to represent file sizes
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

  // Determine which unit to use (e.g., KB, MB, GB...)
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  // Convert the size to the chosen unit and format with 2 decimal places
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export const generateUUID = () => crypto.randomUUID();