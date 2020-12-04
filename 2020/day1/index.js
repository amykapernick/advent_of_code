const fs = require('file-system'),
finances = fs.readFileSync('./input.txt').toString('utf-8'),
	values = finances.split('\n').map(i => parseInt(i))

const step1 = () => {
	let solution
	values.some(i => {
		return values.some(j => {
			if(i + j === 2020) {
				solution = i * j
				return i * j
			}
		})
	})

	return solution
}

const step2 = () => {
	let solution
	values.some(i => {
		return values.some(j => {
			return values.some(z => {
				if(i + j + z === 2020) {
					solution = i * j * z
					return i * j * z
				}
			})
		})
	})
	
	return solution
}


console.log(`step 1: ${step1()}`)
console.log(`step 2: ${step2()}`)