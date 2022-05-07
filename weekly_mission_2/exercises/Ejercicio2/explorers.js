const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

// Imprimir nombre y stack de los explorers
console.log("Nombre de los explorers")
explorers.forEach(explorers => console.log(explorers.name));
console.log("Stack de los explorers")
explorers.forEach(explorers => console.log(explorers.stack));

// Nueva lista del stack de los explorers
console.log("Creando nueva lista del stack de los explorers")
const stack = explorers.map((explorers) => explorers.stack);
console.log(stack)

// Filtrar la lista de stack
console.log("Filtrar lista con 'js' ")
const listFilter = explorers.filter(explorer => explorer.stack.includes('js'));
console.log(listFilter)

// Buscar explorer de CDMX
console.log("Encontrar el primer resultado de una lista")
const cityFilter = explorers.find(explorer => explorer.city == 'CDMX');
console.log(cityFilter)

// Obtener la suma de los ejercicios completos
console.log("Obtner la suma de los ejercicios resueltos")
const result = explorers.reduce(explorers => explorers.exercises_completed++);
console.log(result)

// Validacion frontend
console.log("Filtrar ejercicios finalizados de frontend")
const areTrue = explorers.some(frontend => frontend.exercisesFinished == true);
console.log(areTrue)

// Validacion Onboarding
console.log("Validacion del onboarding")
const intro = explorers.every(onboarding => onboarding.isFinished === true);
console.log(intro)