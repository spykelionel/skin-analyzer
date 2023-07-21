CLASS_NAMES = [
    {
        "id": 0,
        "name": "Melanocytic nevi"
    },
    {
        "id": 1,
        "name": "Melanoma"
    },
    {
        "id": 2,
        "name": "Benign keratosis-like lesions"
    },
    {
        "id": 3,
        "name": "Basal cell carcinoma"
    },
    {
        "id": 4,
        "name": "Actinic keratoses"
    },
    {
        "id": 5,
        "name": "Vascular lesions"
    },
    {
        "id": 6,
        "name": "Dermatofibroma"
    },
    {
        "id": 7,
        "name": "Normal Skin"
    }
]

# Disease info
diseaseInfo = [
  {
    "id": 0,
    "name": "Melanocytic nevi",
    "commonName": "Moles",
    "description": "Melanocytic nevi are benign skin growths that arise from melanocytes, the cells that produce pigment in the skin. They can vary in size and color, and may be raised or flat.",
    "causes": [
      "Genetics",
      "Sun exposure",
      "Hormonal changes"
    ],
    "treatments": [
      "Observation",
      "Surgical removal",
      "Laser therapy"
    ],
    "symptoms": [
      "Dark, raised spots on the skin",
      "Flat, brownish spots on the skin",
      "Irregular shape or border"
    ],
    "prevention": [
      "Avoidance of sun exposure",
      "Use of sunscreen",
      "Protective clothing"
    ],
    "references": [
      "American Academy of Dermatology: https://www.aad.org/public/diseases/bumps-and-growths/moles",
      "National Institute of Arthritis and Musculoskeletal and Skin Diseases: https://www.niams.nih.gov/health-topics/moles"
    ]
  },
  {
    "id": 1,
    "name": "Melanoma",
    "commonName": "Skin cancer",
    "description": "Melanoma is a type of skin cancer that develops in the cells that produce pigment in the skin. It can occur anywhere on the body, but is most commonly found on areas that have been exposed to the sun.",
    "causes": [
      "Exposure to ultraviolet (UV) radiation",
      "Genetics",
      "Weakened immune system"
    ],
    "treatments": [
      "Surgical removal",
      "Chemotherapy",
      "Immunotherapy"
    ],
    "symptoms": [
      "New or changing mole",
      "Irregular shape or border",
      "Asymmetrical appearance"
    ],
    "prevention": [
      "Avoidance of sun exposure",
      "Use of sunscreen",
      "Protective clothing"
    ],
    "references": [
      "American Cancer Society: https://www.cancer.org/cancer/melanoma-skin-cancer.html",
      "National Cancer Institute: https://www.cancer.gov/types/skin/patient/melanoma-treatment-pdq"
    ]
  },
  {
    "id": 2,
    "name": "Benign keratosis-like lesions",
    "commonName": "",
    "description": "Benign keratosis-like lesions are non-cancerous growths on the skin that resemble rough, scaly patches or warts. They are typically caused by sun damage and are most commonly found on sun-exposed areas of the skin, such as the face, arms, and hands.",
    "causes": [
      "Sun exposure",
      "Aging"
    ],
    "treatments": [
      "Cryotherapy",
      "Topical medications",
      "Surgical removal"
    ],
    "symptoms": [
      "Rough, scaly patches on the skin",
      "Wart-like growths on the skin",
      "Brownish or grayish color"
    ],
    "prevention": [
      "Avoidance of sun exposure",
      "Use of sunscreen",
      "Protective clothing"
    ],
    "references": [
      "American Academy of Dermatology: https://www.aad.org/public/diseases/bumps-and-growths/seborrheic-keratoses",
      "National Institute of Arthritis and Musculoskeletal and Skin Diseases: https://www.niams.nih.gov/health-topics/keratoses#tab-overview"
    ]
  },
  {
    "id": 3,
    "name": "Basal cell carcinoma",
    "commonName": "",
    "description": "Basal cell carcinoma is the most common type of skin cancer and typically appears as a small, raised, pearly bump on the skin. It is usually caused by long-term sun exposure and is typically slow-growing and rarely spreads to other parts of the body.",
    "causes": [
      "Sun exposure",
      "Weakened immune system",
      "Genetics"
    ],
    "treatments": [
      "Surgical removal",
      "Cryotherapy",
      "Topical medications"
    ],
    "symptoms": [
      "Pearly, raised bump on the skin",
      "Ulceration or bleeding",
      "Irregular blood vessels"
    ],
    "prevention": [
      "Avoidance of sun exposure",
      "Use of sunscreen",
      "Protective clothing"
    ],
    "references": [
      "American Academy of Dermatology: https://www.aad.org/public/diseases/skin-cancer/basal-cell-carcinoma",
      "National Cancer Institute: https://www.cancer.gov/types/skin/patient/basal-cell-treatment-pdq"
    ]
  },
  {
    "id": 4,
    "name": "Actinic keratoses",
    "commonName": "",
    "description": "Actinic keratoses are scaly, crusty growths on the skin that are caused by long-term sun exposure. They typically appear on areas of the skin that have been exposed to the sun, such as the face, hands, and arms, and can become cancerous if left untreated.",
    "causes": [
      "Sun exposure",
      "Weakened immune system"
    ],
    "treatments": [
      "Cryotherapy",
      "Topical medications",
      "Chemical peels"
    ],
    "symptoms": [
      "Scaly, crusty growths on the skin",
      "Rough texture",
      "Brownish or grayish color"
    ],
    "prevention": [
      "Avoidance of sun exposure",
      "Use of sunscreen",
      "Protective clothing"
    ],
    "references": [
      "American Academy of Dermatology: https://www.aad.org/public/diseases/skin-cancer/actinic-keratosis",
      "National Cancer Institute: https://www.cancer.gov/types/skin/patient/actinic-treatment-pdq"
    ]
  },
  {
    "id": 5,
    "name": "Vascular lesions",
    "commonName": "",
    "description": "Vascular lesions are abnormalities of the blood vessels in the skin and can include birthmarks, hemangiomas, and port-wine stains. They can range in size and color and may be raised or flat.",
    "causes": [
      "Genetics",
      "Hormonal changes",
      "Injury"
    ],
    "treatments": [
      "Laser therapy",
      "Surgical removal",
      "Topical medications"
    ],
    "symptoms": [
      "Red, purple, or blue discoloration of the skin",
      "Raised or flat appearance",
      "Pain or itching"
    ],
    "prevention": [
      "None"
    ],
    "references": [
      "American Academy of Dermatology: https://www.aad.org/public/diseases/bumps-and-growths/vascular-lesions",
      "National Organization for Rare Disorders: https://rarediseases.org/rare-diseases/vascular-lesions/"
    ]
  },
  {
    "id": 6,
    "name": "Dermatofibroma",
    "commonName": "",
    "description": "Dermatofibroma is a common benign skin growth that typically appears as a small, firm, reddish-brown bump on the skin. It is usually painless and does not require treatment, but can be removed for cosmetic reasons.",
    "causes": [
      "Unknown"
    ],
    "treatments": [
      "Observation",
      "Surgical removal"
    ],
    "symptoms": [
      "Small, firm, reddish-brown bump on the skin",
      "Painless",
      "May be itchy or tender"
    ],
    "prevention": [
      "None"
    ],
    "references": [
      "American Academy of Dermatology: https://www.aad.org/public/diseases/bumps-and-growths/dermatofibroma",
      "National Library of Medicine: https://medlineplus.gov/ency/article/000836.htm"
    ]
  },
   {
    "id": 7,
    "name": "Normal Skin",
    "commonName": "",
    "description": "Normal Skin.",
    "causes": [
      "None"
    ],
    "treatments": [
      "None"
    ],
    "symptoms": [
      "None"
    ],
    "prevention": [
      "None"
    ],
    "references": [
      "Normal Skin: https://www.google.com/search?q=healthy+skin"
    ]
  }
]