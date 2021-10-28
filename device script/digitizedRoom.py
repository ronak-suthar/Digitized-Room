import Adafruit_DHT
import time
import drivers
from time import sleep
import pyrebase

DHT_SENSOR = Adafruit_DHT.DHT11
DHT_PIN = 4
display = drivers.Lcd()

config = {
  "apiKey": "Ov70E8SiDyMG5fg7NJCQwIYHeGuiubYIDGEZcwTt",
  "authDomain": "digitized-room.firebaseapp.com",
  "databaseURL": "https://digitized-room-default-rtdb.asia-southeast1.firebasedatabase.app/",
  "storageBucket": "digitized-room.appspot.com"
}

firebase = pyrebase.initialize_app(config)
db = firebase.database()
sensorData={'temp':0,'humidity':0}

try:
    while True:
        humidity, temperature = Adafruit_DHT.read(DHT_SENSOR, DHT_PIN)
        isAvailable = db.child("Status").get().val()
        print("Avaliablity Status : " , isAvailable)

        if (humidity is not None and temperature is not None) and (sensorData['temp']!=temperature or sensorData['humidity']!=humidity):
            print("Writing to cloud")
            sensorData = {'temp':temperature,'humidity':humidity}
            db.child("Sensor Data").set(sensorData)
        else:
            print("Sensor failure. Check wiring.");
        
        if isAvailable['status']==True:
            display.lcd_clear()
            display.lcd_display_string("Hello !", 1)
            display.lcd_display_string("I am Available!",2)
        else:
            display.lcd_clear()
            display.lcd_display_string("Hi Apologies",1)
            display.lcd_display_string("Busy in Meeting", 2)

        #db.child('Status').set(isAvailable)

        time.sleep(5);

except KeyboardInterrupt:
    print("Cleaning up!")
    display.lcd_clear()
                         