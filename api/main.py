from fastapi import FastAPI, File, UploadFile, requests
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
import base64
from PIL import Image
import tensorflow as tf
from keras.models import load_model
from keras.applications.inception_v3 import preprocess_input
from keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.utils import load_img, img_to_array
import re
import meta
app = FastAPI(debug=True)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

print("loading model.")

options = tf.saved_model.LoadOptions(experimental_io_device='/job:localhost')
# model = tf.saved_model.load("",  options=options)
model = load_model(
    "C:/Users/Null/Desktop/project-final/api/saved_model/new_model.h5")

print("Finished loading model.")


@app.post("/predict")
async def classify(file: UploadFile = File(...)):
    image = await file.read()

    predicted_class, confidence, info = predict(model, image)

    return returnInfo(predicted_class, confidence, info);

def convert_base64_to_file(base64_data):
    # Decode the base64 data
    image_data = base64.b64decode(base64_data)

    # Open the image using PIL (Pillow) library
    image = Image.open(BytesIO(image_data))

    return image


@app.post("/d/base")
async def classifyBase64(file):
    # Convert base64 to image
    print("Image string",file)
    image = convert_base64_to_file(file)
    print("Image:", image)
    predicted_class, confidence, info = predict(model, image)
    return returnInfo(predicted_class, confidence, info)

def returnInfo(predicted_class, confidence, info):
    '''
    paramaters:
      - info: Disease info
      - predicted_class: Disease predicted class
      - confidence: The confidence level
    Returns: Object
    '''
    print("Predicted class:", predicted_class)
    print("Confidence:", confidence)
    return {
        'infection': predicted_class,
        'confidence': confidence,
        'info': info
    }

def convertFromBase64(imageStr: str):
    print("[In ConvertFromBase64]Original Imagestr:",imageStr)
    imageStr = imageStr.split("data:image/jpeg;base64,")[1]
    print("Trimed Imagestr:",imageStr)
    if(is_base64(imageStr)):
      image_data = base64.b64decode(image_base64)
      image = Image.open(BytesIO(imageStr)).convert('RGB')

      return image
    else:
      return


def predict(model, img):
    SIZE = 100
    img = Image.open(BytesIO(img)).convert('RGB')
    img = img.resize((SIZE, SIZE))
    image = tf.image.resize(img, [SIZE, SIZE])

    img_array = tf.keras.preprocessing.image.img_to_array(img)
    img_array = tf.expand_dims(img_array, 0)

    predictions = model(img_array)
    y_pred_prob = np.around(predictions, 3)
    y_pred = np.argmax(y_pred_prob, axis=1)
    # predictions_array = np.array(predictions.numpy())
    # predictions_list = predictions_array[0].tolist()

    print("Predictions", predictions.numpy()[0].tolist())

    predicted_class = meta.CLASS_NAMES[np.argmax(predictions)]
    info = meta.diseaseInfo[np.argmax(predictions)]
    confidence = round(100 * np.max(predictions), 2)

    return predicted_class, confidence, info


def is_base64(s):
    # Regular expression to check if the string is in base64 format
    pattern = re.compile(r'^[A-Za-z0-9+/]*={0,2}$')

    return bool(pattern.match(s))


if __name__ == "__main__":
    print("Launching server...... on http://localhost:8000/")
    uvicorn.run(app, host='localhost', port=8000,)
