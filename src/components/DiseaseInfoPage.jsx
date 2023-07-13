import React from 'react';
import './DiseaseInfoPage.css';

const DiseaseInfoPage = ({ disease }) => {
  return (
    <div className="disease-info-page">
      <h1 className="heading-primary">{disease.name}</h1>
      <h2 className="subheading-primary">What is {disease.name}?</h2>
      <p className="text-primary">{disease.description}</p>
      <h2 className="subheading-primary">Symptoms:</h2>
      <ul className="list-unstyled">
        {disease.symptoms.map((symptom, index) => (
          <li key={index} className="list-unstyled__item">{symptom}</li>
        ))}
      </ul>
      <h2 className="subheading-primary">Causes:</h2>
      <p className="text-primary">{disease.causes}</p>
      <h2 className="subheading-primary">Treatments:</h2>
      <ul className="list-unstyled">
        {disease.treatments.map((treatment, index) => (
          <li key={index} className="list-unstyled__item">{treatment}</li>
        ))}
      </ul>
      <h2 className="subheading-primary">Prevention:</h2>
      <p className="text-primary">{disease.prevention}</p>
      <h2 className="subheading-primary">References:</h2>
      <ul className="list-unstyled">
        {disease.references.map((reference, index) => (
          <li key={index} className="list-unstyled__item">{referenceFD}</li>
        ))}
      </ul>
    </div>
  );
};

export default DiseaseInfoPage;