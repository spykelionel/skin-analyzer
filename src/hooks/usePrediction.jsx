import { useState, useEffect } from "react";

function usePrediction(image, endpoint) {
  const [prediction, setPrediction] = useState(null);
  const [diseaseInfo, setDiseaseInfo] = useState(null);
  const [id, setId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPrediction() {
      setIsLoading(true);
      setError(null);

      try {
        const formData = new FormData();
        formData.append("file", image);
        console.log(image)
        const response = await fetch(endpoint, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch prediction");
        }

        const { infection, confidence, info } = await response.json();
        setPrediction({ infection, confidence });
        setDiseaseInfo(info);
        console.log(diseaseInfo);
        setId(prediction?.infection?.id);
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

  return [id, prediction, diseaseInfo, isLoading, error];
}

export default usePrediction;
