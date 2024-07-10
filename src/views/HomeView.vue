<script setup>
import { RouterLink, RouterView } from 'vue-router'</script>

<template>
  <nav class="barra">  
    <h1>INICIO</h1>
  </nav>
  <div class="container">
    <div class="logo">
      <img src="/src/img/logo.jpg" alt="">
    </div>
    <div class="menu">
      <div class="Cliente">
        <h1>CLIENTE</h1>
        <v-btn variant="text"><router-link to="Clientes" >Clientes</router-link></v-btn>
      </div>
      <div class="Cliente">
        <h1>Empleados</h1>
        <v-btn variant="text"><router-link to="Empleados" >Empleados</router-link></v-btn>
      </div>
      <div class="Cliente">
        <h1>Vehiculos</h1>
        <v-btn variant="text"><router-link to="Login" >Empleados</router-link></v-btn>
      </div>
    </div>
  </div>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.barra{
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100px;
  background-color: #7d0100;
  color: white;
  text-align: center;
}

.barra h1{
  padding-top: 20px;
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
}

.logo {
  margin-top: 20px;
}

.logo img {
  width: 150px;
  height: 100px;
}

.menu{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  flex-grow: 1;
}

.Cliente {
  height: 220px;
  width: 220px;
  background-color: #7d0100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: x-small;
  text-align: center;
  border: 4px solid black;
  border-radius: 20%;
  color: white;
}
</style>
