import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: 'history.page.html',
  styleUrls: ['history.page.scss']
})
export class History {

  constructor() {}

  newLegends = [
    {
      id: 1, 
      name: "El justo juez de la noche", 
      description: "La leyenda nace en El Salvador, especificamente en el departamento de ...",
      country: "El Salvador",
      reads: 13632,
      createdAt: new Date(),
      updatedAt: null
    },
    {
      id: 2, 
      name: "Las poquianchis", 
      description: "En la ciudad de Queretaro allá por el año ...",
      country: "Mexico",
      reads: 5830,
      createdAt: new Date(),
      updatedAt: null
    },
    {
      id: 3, 
      name: "El Cadejo", 
      description: "La leyenda nace en El Salvador, especificamente en el departamento de ...",
      country: "El Salvador",
      reads: 13632,
      createdAt: new Date(),
      updatedAt: null
    },
    {
      id: 4, 
      name: "Los duendes", 
      description: "des des des ...",
      country: "Guatemala",
      reads: 13632,
      createdAt: new Date(),
      updatedAt: null
    }
  ]

  recommendedLegends = [
    {
      id: 1, 
      name: "Historias de rios", 
      description: "des des des ...",
      country: "Honduras",
      reads: 13632,
      createdAt: new Date(),
      updatedAt: null
    },
    {
      id: 2, 
      name: "Las cantareras", 
      description: "des des des ...",
      country: "El Salvador",
      reads: 13632,
      createdAt: new Date(),
      updatedAt: null
    },
    {
      id: 3, 
      name: "La mano peluda", 
      description: "des des des ...",
      country: "Mexico",
      reads: 13632,
      createdAt: new Date(),
      updatedAt: null
    }
  ]

  topLegends = [
    {
      id: 1, 
      name: "El Cipitio", 
      description: "des des des ...",
      country: "El Salvador",
      reads: 13632,
      createdAt: new Date(),
      updatedAt: null
    },
    {
      id: 2, 
      name: "La cihunaba", 
      description: "des des des ...",
      country: "El Salvador",
      reads: 13632,
      createdAt: new Date(),
      updatedAt: null
    },
    {
      id: 3, 
      name: "El chupacabras", 
      description: "des des des ...",
      country: "Puerto Rico",
      reads: 13632,
      createdAt: new Date(),
      updatedAt: null
    }
  ]

}
