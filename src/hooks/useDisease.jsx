import { useState, useEffect } from "react";

const diseaseInfo = [
  {
    id: 0,
    name: "Melanocytic nevi",
    description:
      "Melanocytic nevi, commonly known as moles, are noncancerous growths on the skin that develop when pigment cells (melanocytes) grow in clusters.",
    causes: ["Genetics", "Exposure to UV light"],
    symptoms: [
      "Small, dark brown spots on the skin",
      "Raised or flat appearance",
      "Typically round or oval shape",
    ],
    treatments: [
      "No treatment necessary in most cases",
      "Surgical removal if necessary for cosmetic reasons or if the mole changes in size or appearance",
    ],
    references: [
      "https://www.mayoclinic.org/diseases-conditions/moles/symptoms-causes/syc-20375200",
      "https://www.aad.org/public/diseases/bumps-and-growths/moles",
    ],
  },
  {
    id: 1,
    name: "Melanoma",
    description:
      "Melanoma is a type of skin cancer that develops from pigment-containing cells called melanocytes.",
    causes: ["Exposure to UV light", "Genetics", "Weakened immune system"],
    symptoms: [
      "A mole that changes in size, shape, or color",
      "Dark, blackish spots on the skin",
      "Itching or bleeding from a mole",
    ],
    treatments: [
      "Surgical removal",
      "Immunotherapy",
      "Targeted therapy",
      "Radiation therapy",
    ],
    references: [
      "https://www.mayoclinic.org/diseases-conditions/melanoma/symptoms-causes/syc-20374884",
      "https://www.aad.org/public/diseases/skin-cancer/melanoma",
    ],
  },
  {
    id: 2,
    name: "Benign keratosis-like lesions",
    description:
      "Benign keratosis-like lesions are growths on the skin that are not cancerous but may resemble skin cancer.",
    causes: ["Aging", "Sun exposure"],
    symptoms: [
      "Rough, scaly patches on the skin",
      "May be brown, black, or light tan in color",
      "Usually appear on the face, chest, or back",
    ],
    treatments: [
      "No treatment necessary in most cases",
      "Surgical removal for cosmetic reasons or if the lesion changes in size or appearance",
    ],
    references: [
      "https://www.mayoclinic.org/diseases-conditions/seborrheic-keratosis/symptoms-causes/syc-20353878",
      "https://www.aad.org/public/diseases/bumps-and-growths/seborrheic-keratoses",
    ],
  },
  {
    id: 3,
    name: "Basal cell carcinoma",
    description:
      "Basal cell carcinoma is a type of skin cancer that begins in the basal cells, which produce new skin cells as old ones die off.",
    causes: ["Exposure to UV light", "Genetics", "Weakened immune system"],
    symptoms: [
      "A pearly or waxy bump on the skin",
      "A flat, flesh-colored or brown scar-like lesion",
      "A bleeding or scabbing sore that heals and returns",
    ],
    treatments: [
      "Surgical removal",
      "Curettage and electrodesiccation",
      "Mohs surgery",
      "Radiation therapy",
      "Topical medications",
    ],
    references: [
      "https://www.mayoclinic.org/diseases-conditions/basal-cell-carcinoma/symptoms-causes/syc-20354187",
      "https://www.aad.org/public/diseases/skin-cancer/basal-cell-carcinoma",
    ],
  },
  {
    id: 4,
    name: "Actinic keratoses",
    description:
      "Actinic keratoses are scaly, crusty growths (lesions) caused by damage from exposure to ultraviolet (UV) radiation.",
    causes: ["Exposure to UV light", "Age", "Fair skin"],
    symptoms: [
      "Rough, scaly patches on the skin",
      "May be red, pink, brown, or flesh-colored",
      "May itch or burn",
    ],
    treatments: [
      "Cryotherapy",
      "Topical medications",
      "Photodynamic therapy",
      "Chemical peels",
      "Surgical removal",
    ],
    references: [
      "https://www.mayoclinic.org/diseases-conditions/actinic-keratosis/symptoms-causes/syc-20354969",
      "https://www.aad.org/public/diseases/scaly-skin/actinic-keratosis",
    ],
  },
  {
    id: 5,
    name: "Squamous cell carcinoma",
    description:
      "Squamous cell carcinoma is a type of skin cancer that begins in the squamous cells, which are found in the upper layer of the skin.",
    causes: [
      "Exposure to UV light",
      "Previous radiation therapy",
      "Weakened immune system",
    ],
    symptoms: [
      "A firm, red nodule",
      "A flat lesion with a scaly, crusted surface",
      "A new sore or raised area on an old scar or ulcer",
    ],
    treatments: [
      "Surgical removal",
      "Curettage and electrodesiccation",
      "Mohs surgery",
      "Radiation therapy",
      "Topical medications",
      "Chemotherapy",
    ],
    references: [
      "https://www.mayoclinic.org/diseases-conditions/squamous-cell-carcinoma/symptoms-causes/syc-20352487",
      "https://www.aad.org/public/diseases/skin-cancer/squamous-cell-carcinoma",
    ],
  },
  {
    id: 6,
    name: "Rosacea",
    description:
      "Rosacea is a common skin condition that causes redness, visible blood vessels, and small, red, pus-filled bumps on the face.",
    causes: ["Genetics", "Environmental factors", "Skin mites"],
    symptoms: ["Facial redness", "Swollen red bumps", "Eye problems"],
    treatments: ["Topical medications", "Oral antibiotics", "Laser therapy"],
    references: [
      "https://www.mayoclinic.org/diseases-conditions/rosacea/symptoms-causes/syc-20353815",
      "https://www.aad.org/public/diseases/acne-and-rosacea/rosacea",
    ],
  },
  {
    id: 7,
    name: "Eczema",
    description:
      "Eczema, also known as atopic dermatitis, is a common skin condition characterized by dry, red, itchy, and inflamed skin.",
    causes: ["Genetics", "Environmental factors", "Abnormal immune system"],
    symptoms: [
      "Dry, scaly skin",
      "Redness and inflammation",
      "Intense itching",
    ],
    treatments: ["Topical medications", "Oral medications", "Light therapy"],
    references: [
      "https://www.mayoclinic.org/diseases-conditions/atopic-dermatitis-eczema/symptoms-causes/syc-20353273",
      "https://www.aad.org/public/diseases/eczema",
    ],
  },
  {
    id: 8,
    name: "Psoriasis",
    description:
      "Psoriasis is a chronic autoimmune condition that causes skin cells to grow too quickly, resulting in red, scaly, and sometimes painful patches on the skin.",
    causes: ["Genetics", "Environmental factors", "Abnormal immune system"],
    symptoms: [
      "Red patches of skin",
      "Silvery scales on the skin",
      "Dry and cracked skin",
    ],
    treatments: ["Topical medications", "Oral medications", "Light therapy"],
    references: [
      "https://www.mayoclinic.org/diseases-conditions/psoriasis/symptoms-causes/syc-20355840",
      "https://www.aad.org/public/diseases/scaly-skin/psoriasis",
    ],
  },
];

function useDisease(id) {
  const [disease, setDisease] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setIsLoading(true);
      const singleDisease = diseaseInfo.filter((dis) => dis.id == id);
      setDisease(singleDisease);
      console.log("useDisease ",disease,singleDisease, ",id:", id)
      setIsLoading(false);
    } catch (error) {
      setError(error);
    }
  }, []);

  return [disease, isLoading, error];
}

export default useDisease;
