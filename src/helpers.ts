export const convertBytes = (bytes: number): string => {
  if (bytes < 1000) {
    return bytes.toFixed(2) + " B";
  } else if (bytes < 1000000) {
    return (bytes / 1000).toFixed(2) + " KB";
  } else if (bytes < 1000000000) {
    return (bytes / 1000000).toFixed(2) + " MB";
  } else if (bytes < 1000000000000) {
    return (bytes / 1000000000).toFixed(2) + " GB";
  } else {
    return (bytes / 1000000000000).toFixed(2) + " TB";
  }
};
