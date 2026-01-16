#Time Complexity 
# it isn't a measure of how many seconds a program takes to run.
# Instead, it measures how the runtime of an algorithm increases as the size of the input data increases.
# Time complexity tells us the relationship between n  and the number of operations the CPU has to perform.
'''
Notation,    Name,           Description,                                                      Example
O(1),        Constant,       Time stays the same regardless of input size.                     Accessing an element in an array by index.
O(logn),     Logarithmic,    Time increases slowly; the input is usually halved each step.,    Binary Search.
O(n),        Linear,         Time increases proportionally to the input size.,                 Finding an item in an unsorted list (looping once).
O(nlogn),    Linearithmic,   Often seen in efficient sorting algorithms.,                      Merge Sort or Quick Sort.
O(n2),       Quadratic,      Time increases exponentially (n squared).,                        Nested loops (checking every pair in a list).
'''

#easy 
'''Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.'''
#Time Complexity: O(n) (Linear).
#  We visit each number in the list exactly once.
#Space Complexity: O(n) because, in the worst case, we store every number in the set.
def contains_duplicate(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False

# num is the argument we define and then call num is just arg 
# like in this code rather than num we called test_list it act as num and performed the program
#In Python, enumerate() is a built-in function that makes it easier to keep track of both the index (the position) and the value of items in a list while you are looping through it.
#I used enumerate because I wanted to show you exactly which Step Number ($i+1$) we were on while we were checking the number. It makes debugging and understanding the flow much easier.

def contains_duplicate_explained(nums):
    seen = set()
    print(f"Starting search in list: {nums}")
    print(f"Initial set 'seen' is empty: {seen}\n")

    for i, num in enumerate(nums):
        print(f"Step {i+1}: Checking number {num}")
        
        if num in seen:
            print(f"  --> FOUND IT! {num} is already in our set {seen}.")
            print("  --> Result: True (Duplicate exists)")
            return True
        
        seen.add(num)
        print(f"  --> {num} wasn't there. Adding it. Current set: {seen}")
        print("-" * 30)

    print("\nFinished loop. No duplicates found.")
    print("Result: False")
    return False

# Test the function
test_list = [1, 5, 3, 5]
contains_duplicate_explained(test_list)

#The reason this is a "DSA" solution is because you chose to use a Set instead of a second List.
#output
'''Starting search in list: [1, 5, 3, 5]
Initial set 'seen' is empty: set()

Step 1: Checking number 1
  --> 1 wasn't there. Adding it. Current set: {1}
------------------------------
Step 2: Checking number 5
  --> 5 wasn't there. Adding it. Current set: {1, 5}
------------------------------
Step 3: Checking number 3
  --> 3 wasn't there. Adding it. Current set: {1, 3, 5}
------------------------------
Step 4: Checking number 5
  --> FOUND IT! 5 is already in our set {1, 3, 5}.
  --> Result: True (Duplicate exists)
  '''
_____________________________________________________________________

'''Given an array of integers numbers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.'''

def two_sum_explained(numbers, target):
    left = 0
    right = len(numbers) - 1

    '''left = 0: Represents the smallest available value.
        right = len(numbers) - 1: Represents the largest available value. 
        (We use - 1 because Python lists are 0-indexed; if a list has 4 items, the last index is 3).'''
    
    print(f"Target: {target} | Initial List: {numbers}\n")

    while left < right:
        current_sum = numbers[left] + numbers[right]
        print(f"Checking: numbers[{left}]({numbers[left]}) + numbers[{right}]({numbers[right]}) = {current_sum}")

        if current_sum == target:
            print(f"  --> MATCH! Found {target}. Returning indices.")
            # Note: Adding +1 because some problems ask for 1-based indexing
            return [left + 1, right + 1]
        
        elif current_sum < target:
            print(f"  --> {current_sum} is TOO SMALL. Moving the 'left' pointer up to get a bigger number.")
            left += 1
        
        else: # current_sum > target
            print(f"  --> {current_sum} is TOO BIG. Moving the 'right' pointer down to get a smaller number.")
            right -= 1
        print("-" * 20)
    
    return []

two_sum_explained([2, 7, 11, 15], 18)


'''Output:

Target: 18 | Initial List: [2, 7, 11, 15]

Checking: numbers[0](2) + numbers[3](15) = 17
  --> 17 is TOO SMALL. Moving the 'left' pointer up to get a bigger number.
--------------------
Checking: numbers[1](7) + numbers[3](15) = 22
  --> 22 is TOO BIG. Moving the 'right' pointer down to get a smaller number.
--------------------
Checking: numbers[1](7) + numbers[2](11) = 18
  --> MATCH! Found 18. Returning indices.
'''