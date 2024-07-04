// Definición de la clase
let a = 0;
class CZooAnimal {
    //Creo el constructor de la clase
    constructor(IdAnimal, name, cageNumber, IdTypeAnimal, weight) {
        this.IdAnimal = IdAnimal;
        this.name = name;
        this.cageNumber = cageNumber;
        this.IdTypeAnimal = IdTypeAnimal;
        this.weight = weight;
    }
  }
  
  const animales = [
    new CZooAnimal(79, "Tigre", 5, 1, 150),
    new CZooAnimal(530, "Leon", 2, 1, 180),
    new CZooAnimal(88, "Aguila", 3, 2, 2),
    new CZooAnimal(202, "Serpiente", 4, 3, 80),
    new CZooAnimal(707, "Pantera", 5, 1, 100),
    new CZooAnimal(707, "Mono", 5, 6, 2),
  ];
  
  const tbody = document.querySelector('#tabla-animales tbody');
  const tbody1 = document.querySelector('#tabla-animales1 tbody');
  const tbody2 = document.querySelector('#tabla-animales2 tbody');
  const tbody3 = document.querySelector('#tabla-animales3 tbody');

animales.forEach(animal => {
    //tabla principal
    const fila = document.createElement('tr');

    const celdaIdAnimal = document.createElement('td');
    celdaIdAnimal.textContent = animal.IdAnimal;
    fila.appendChild(celdaIdAnimal);

    const celdaNombre = document.createElement('td');
    celdaNombre.textContent = animal.name;
    fila.appendChild(celdaNombre);

    const celdaJaula = document.createElement('td');
    celdaJaula.textContent = animal.cageNumber;
    fila.appendChild(celdaJaula);

    const celdaTipo = document.createElement('td');
    celdaTipo.textContent = animal.IdTypeAnimal;
    fila.appendChild(celdaTipo);

    const celdaPeso = document.createElement('td');
    celdaPeso.textContent = animal.weight;
    fila.appendChild(celdaPeso);
    // La tabla para animales en la jaula 5 con peso menor a 3kg
    tbody.appendChild(fila);
    if((animal.cageNumber == 5) && (animal.weight <3)){
      const fila2 = document.createElement('tr');

      const celdaIdAnimal = document.createElement('td');
      celdaIdAnimal.textContent = animal.IdAnimal;
      fila2.appendChild(celdaIdAnimal);

      const celdaNombre = document.createElement('td');
      celdaNombre.textContent = animal.name;
      fila2.appendChild(celdaNombre);

      const celdaJaula = document.createElement('td');
      celdaJaula.textContent = animal.cageNumber;
      fila2.appendChild(celdaJaula);

      const celdaTipo = document.createElement('td');
      celdaTipo.textContent = animal.IdTypeAnimal;
      fila2.appendChild(celdaTipo);

      const celdaPeso = document.createElement('td');
      celdaPeso.textContent = animal.weight;
      fila2.appendChild(celdaPeso);

      tbody1.appendChild(fila2);
    }
    // Animales de tipo felino que estan en las jaulas 2 y 5
    if((animal.IdTypeAnimal == 1) && (animal.cageNumber <=5) && (animal.cageNumber >=2)){
      const fila3 = document.createElement('tr');

      const celdaIdAnimal = document.createElement('td');
      celdaIdAnimal.textContent = animal.IdAnimal;
      fila3.appendChild(celdaIdAnimal);

      const celdaNombre = document.createElement('td');
      celdaNombre.textContent = animal.name;
      fila3.appendChild(celdaNombre);

      const celdaJaula = document.createElement('td');
      celdaJaula.textContent = animal.cageNumber;
      fila3.appendChild(celdaJaula);

      const celdaTipo = document.createElement('td');
      celdaTipo.textContent = animal.IdTypeAnimal;
      fila3.appendChild(celdaTipo);

      const celdaPeso = document.createElement('td');
      celdaPeso.textContent = animal.weight;
      fila3.appendChild(celdaPeso);

      tbody2.appendChild(fila3);
    }
    //Aca el animal que esta en la jaula 4 con un peso menor a 120kg
    if((animal.cageNumber ==4) && (animal.weight < 120)){
      const fila4 = document.createElement('tr');

      const celdaIdAnimal = document.createElement('td');
      celdaIdAnimal.textContent = animal.IdAnimal;
      fila4.appendChild(celdaIdAnimal);

      const celdaNombre = document.createElement('td');
      celdaNombre.textContent = animal.name;
      fila4.appendChild(celdaNombre);

      const celdaJaula = document.createElement('td');
      celdaJaula.textContent = animal.cageNumber;
      fila4.appendChild(celdaJaula);

      const celdaTipo = document.createElement('td');
      celdaTipo.textContent = animal.IdTypeAnimal;
      fila4.appendChild(celdaTipo);

      const celdaPeso = document.createElement('td');
      celdaPeso.textContent = animal.weight;
      fila4.appendChild(celdaPeso);

      tbody3.appendChild(fila4);
    }

  })