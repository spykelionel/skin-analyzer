import { useState, useEffect } from 'react';

const diseaseInfo = [
  {
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
    name: "Vascular lesions",
    description:
      "Vascular lesions are abnormalities of the blood vessels that can appear as birthmarks, hemangiomas, or port-wine stains.",
    causes: ["Genetics", "Unknown"],
    symptoms: [
      "Red or purple discoloration of the skin",
      "May be flat or raised",
      "May be painful or itchy",
    ],
    treatments: ["Laser therapy", "Surgical removal", "Topical medications"],
    references: [
      "https://www.mayoclinic.org/diseases-conditions/birthmarks/symptoms-causes/syc-20355939",
      "https://www.aad.org/public/diseases/birthmarks/vascular-birthmarks",
    ],
  },
  {
    name: "Dermatofibroma",
    description:
      "Dermatofibroma is a common skin growth that usually appears on the lower legs, but may appear anywhere on the body.",
    causes: ["Unknown"],
    symptoms: [
      "Small, firm, raised bump on the skin",
      "May be red, brown, or pink in color",
      "May itch or be tender",
    ],
    treatments: [
      "No treatment necessary in most cases",
      "Surgical removal if necessary for cosmetic reasons or if the lesion changes in size or appearance",
    ],
    references: [
      "https://www.mayoclinic.org/diseases-conditions/dermatofibroma/symptoms-causes/syc-20371738",
      "https://www.aad.org/public/diseases/bumps-and-growths/dermatofibromas",
    ],
  },
];

function useDisease({name}) {
    const [disease, setDisease] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
        try {
            setIsLoading(true)
            const singleDisease = diseaseInfo.filter((dis)=>dis.name===name)
            setDisease(singleDisease)
            setIsLoading(false)
        } catch (error) {
            setError(error)
        }
    }, disease)    

    return [disease, isLoading, error]
}

export default useDisease;