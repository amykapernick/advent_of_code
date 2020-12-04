finances = open('input.txt', 'r').read()
values = list(map(int, filter(None, finances.split('\n'))))

def step_1():
	solution = ''
	for i in values:
		for j in values:
			if i + j == 2020:
				solution = i * j


	return solution

def step_2():
	solution = ''
	for i in values:
		for j in values:
			for z in values:
				if i + j + z == 2020:
					solution = i * j * z


	return solution



print('step 1', step_1())
print('step 2', step_2())