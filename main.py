import json

def read_data():
    f = open("data.json", "r")
    raw = f.read()
    data = json.loads(raw)
    return data

data = read_data()
print(data['data1'])
print(data['data2'])
print(data['data3'])
print(data['data4'])