import numpy as np
import pandas as pd
import sys
import tensorflow as tf
import matplotlib.pyplot as plt
from tensorflow import keras

img_width = 180
img_height = 180

data_train_path = "./shapes/train/square"

data_train = tf.keras.utils.image_dataset_from_directory(data_train_path,
                                                         shuffle=True,
                                                         image_size=(img_width,img_height),
                                                         batch_size=32,
                                                         validation_split=False )
data_cat = data_train.class_names


image = sys.argv[1]
image = tf.keras.utils.load_img(image,target_size=(img_height,img_width))
img_arr = tf.keras.utils.array_to_img(image)
img_bat = tf.expand_dims(img_arr,0)

new_model = keras.models.load_model("square_cnn_model.h5")
predict_new = new_model.predict(img_bat)

new_score = tf.nn.softmax(predict_new)

print("Shape is {} with accuracy of {:0.2f}".format(data_cat[np.argmax(new_score)],np.max(new_score*100)))
type = data_cat[np.argmax(new_score)]

if(type == "good_triangle" or type == "good_circle" or type == "good_square"):
    print(" No chances of fine motor skill developmental delay")
else:
    print("Chances of fine motor skill developmental delay")
