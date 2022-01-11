weaponsWithNoises = [
  {name: 'Phaser', noise: 'bssszzsssss', universe: 'Star Trek'},
	{name: 'Blaster', noise: 'Pew Pew', universe: 'Star Wars'},
	{name: 'Sonic Screwdriver', noise: 'Pew Pew', universe: 'Dr. Who'},
	{name: 'Lightsaber', noise: 'Pew Pew', universe: 'Star Wars'},
	{name: 'Noisy Cricket', noise: 'Pew Pew', universe: 'Men in Black'}
]

//

function weaponsFromUniverse(universe) {
	return function (name) {
		const found = weaponsWithNoises.find(item => item.name===name)
		if(found.universe===universe){

			return `used ${name} : ${found.noise}`
		}
		return `${name} is not a part of the Star Wars universe`
	}
}
// to es 6 ...
function wfu(universe){
	return name => {
		const found = weaponsWithNoises.find(item => item.name===name)

		if(found.universe===universe) `used ${name} : ${found.noise}`
		return `${name} is not a part of the Star Wars universe`
	}
}

// USAGE
const useStarWarsWeapon = wfu('Star Wars')

//useStarWarsWeapon('Blaster') // console logs 'used Blaster: Pew Pew'
//useStarWarsWeapon('Noisy Cricket') // console logs 'Noisy Cricket is not a part of the Star Wars universe'
console.log(useStarWarsWeapon('Blaster'))
console.log(useStarWarsWeapon('Noisy Cricket') )