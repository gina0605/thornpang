from PIL import Image

img = Image.open("./logo-original.jpeg")
img = img.convert("RGBA")
data = img.getdata()

threshold = 120

newData = []
for item in data:
    if item[0] < threshold and item[1] < threshold and item[2] < threshold:
        newData.append((255, 255, 255, 0))
    else:
        newData.append((255, 255, 255, 255))

img.putdata(newData)
img.save("logo.png", "PNG")
