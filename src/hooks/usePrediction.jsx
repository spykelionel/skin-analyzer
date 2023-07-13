import { useState, useEffect } from 'react';

function usePrediction(image) {
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPrediction() {
      setIsLoading(true);
      setError(null);

      try {
        const formData = new FormData();
        formData.append('file', image);

        const response = await fetch('http://127.0.0.1:8000/predict', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to fetch prediction');
        }

        const { infection, confidence }= await response.json();
        setPrediction({ infection, confidence });
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    if (image) {
      fetchPrediction();
    }
  }, [image]);

  return [prediction, isLoading, error];
}

export default usePrediction