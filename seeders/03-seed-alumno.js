"use strict";
const { Op } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
   async up(queryInterface, Sequelize) {
      await queryInterface.bulkInsert(
         "alumnos",
         [
            {
               nombre: "Jose",
               apellidos: "Palacios",
               edad: 24,
               fecha_nacimiento: "1996-05-01",
               activo: "si",
               id_nacionalidad: 1,
               id_direccion: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nombre: "Marta",
               apellidos: "García",
               edad: 18,
               fecha_nacimiento: "2002-09-10",
               activo: "si",
               id_nacionalidad: 3,
               id_direccion: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nombre: "Ernesto",
               apellidos: "Pérez",
               edad: 54,
               fecha_nacimiento: "1966-07-23",
               activo: "si",
               id_nacionalidad: 2,
               id_direccion: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nombre: "Vicente",
               apellidos: "Ruiz",
               edad: 33,
               fecha_nacimiento: "1987-12-31",
               activo: "si",
               id_nacionalidad: 4,
               id_direccion: 4,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nombre: "Enrrique",
               apellidos: "Cervantes",
               edad: 46,
               fecha_nacimiento: "1974-01-15",
               activo: "no",
               id_nacionalidad: 6,
               id_direccion: 5,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nombre: "Terry",
               apellidos: "Medhurst",
               edad: 50,
               fecha_nacimiento: "2000-12-25",
               activo: "no",
               id_nacionalidad: 4,
               id_direccion: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nombre: "Sheldon",
               apellidos: "Quigley",
               edad: 28,
               fecha_nacimiento: "2003-08-02",
               activo: "si",
               id_nacionalidad: 4,
               id_direccion: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nombre: "Terrill",
               apellidos: "Hills",
               edad: 38,
               fecha_nacimiento: "1992-12-30",
               activo: "si",
               id_nacionalidad: 3,
               id_direccion: 3,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nombre: "Miles",
               apellidos: "Cummerata",
               edad: 49,
               fecha_nacimiento: "1969-01-16",
               activo: "no",
               id_nacionalidad: 6,
               id_direccion: 4,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nombre: "Mavis",
               apellidos: "Schultz",
               edad: 38,
               fecha_nacimiento: "1968-11-03",
               activo: "si",
               id_nacionalidad: 6,
               id_direccion: 5,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nombre: "Alison",
               apellidos: "Reichert",
               edad: 21,
               fecha_nacimiento: "1969-07-21",
               activo: "si",
               id_nacionalidad: 8,
               id_direccion: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nombre: "Oleta",
               apellidos: "Abbott",
               edad: 31,
               fecha_nacimiento: "1982-02-21",
               activo: "no",
               id_nacionalidad: 1,
               id_direccion: 1,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
            {
               nombre: "Ewell",
               apellidos: "Mueller",
               edad: 29,
               fecha_nacimiento: "1964-08-24",
               activo: "no",
               id_nacionalidad: 2,
               id_direccion: 2,
               createdAt: new Date(),
               updatedAt: new Date(),
            },
         ],
         {}
      );
   },

   async down(queryInterface, Sequelize) {
      await queryInterface.bulkDelete("alumnos", {
         [Op.or]: [
            { nombre: "Jose" },
            { nombre: "Marta" },
            { nombre: "Ernesto" },
            { nombre: "Vicente" },
            { nombre: "Enrrique" },
            { nombre: "Terry" },
            { nombre: "Sheldon" },
            { nombre: "Terrill" },
            { nombre: "Miles" },
            { nombre: "Mavis" },
            { nombre: "Alison" },
            { nombre: "Oleta" },
            { nombre: "Ewell" },
         ],
      });
   },
};
