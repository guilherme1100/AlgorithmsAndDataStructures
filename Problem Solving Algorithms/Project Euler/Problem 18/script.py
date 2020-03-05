def compute(triangle):
	for i in reversed(range(len(triangle) - 1)):
		for j in range(len(triangle[i])):
			triangle[i][j] += max(triangle[i + 1][j], triangle[i + 1][j + 1])
	return str(triangle[0][0])

with open('data.txt','r') as f:
    content = f.read()

RAW_CONTENT = [array.split(' ') for array in content.splitlines()]
CONTENT = [list(map(int, number)) for number in RAW_CONTENT]


if __name__ == "__main__":
	print(compute(CONTENT))
