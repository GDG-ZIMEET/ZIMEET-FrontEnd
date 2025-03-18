export const getBoothColor = (category: string) => {
  const categoryColors: { [key: string]: string } = {
    'DATE': '#ffcccb',
    'FOOD': 'rgba(66, 133, 244, 0.1)',
    'GOODS': 'rgba(0, 128, 0, 0.1)',
    'EVENT': 'rgba(249, 171, 0, 0.2)',
  };
  return categoryColors[category] || 'gray';
};

export const getTextColor = (category: string) => {
  const textColors: { [key: string]: string } = {
    'DATE': 'red', 
    'FOOD': '#4285f4',
    'GOODS': 'green',
    'EVENT': '#f9ab00',
  };
  return textColors[category] || 'black';
};
