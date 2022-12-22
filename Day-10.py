#!/bin/python3

import math
import os
import random
import re
import sys



if __name__ == '__main__':
    n = int(input().strip())
    binaryRepresent = [];
    
    while n > 0:
        reminder = n % 2;
        n = n//2
        binaryRepresent.append(reminder)
    
    count, max_count = 0, 0
    
    for n in binaryRepresent:
        if n ==1:
            count +=1
            if max_count<count:
                max_count = count
        else:
            count = 0
    print(max_count)
