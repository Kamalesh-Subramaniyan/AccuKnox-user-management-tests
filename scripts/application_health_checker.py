import requests
from datetime import datetime

URL = "https://opensource-demo.orangehrmlive.com"

print("\n===== Application Health Check =====")
print("Time:", datetime.now())

try:
    response = requests.get(URL, timeout=10)

    print("Status Code:", response.status_code)

    if response.status_code == 200:
        print("Application Status: UP")
    else:
        print("Application Status: DOWN")

except requests.exceptions.RequestException as e:
    print("Application Status: DOWN")
    print("Error:", e)