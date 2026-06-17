import psutil
from datetime import datetime

CPU_THRESHOLD = 80
MEMORY_THRESHOLD = 80
DISK_THRESHOLD = 80

print("\n===== System Health Report =====")
print("Time:", datetime.now())

cpu = psutil.cpu_percent(interval=1)
memory = psutil.virtual_memory().percent
disk = psutil.disk_usage('/').percent

print(f"CPU Usage: {cpu}%")
print(f"Memory Usage: {memory}%")
print(f"Disk Usage: {disk}%")

if cpu > CPU_THRESHOLD:
    print("ALERT: High CPU Usage!")

if memory > MEMORY_THRESHOLD:
    print("ALERT: High Memory Usage!")

if disk > DISK_THRESHOLD:
    print("ALERT: Low Disk Space!")

print("\nSystem Health Check Completed")