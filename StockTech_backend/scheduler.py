import schedule
import time
from transactionManagement.dse import Command

def run_my_task():
    Command().execute()
    Command().executeIPO()
    print("sss")

schedule.every(30).seconds.do(run_my_task)