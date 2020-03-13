<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Parisienne&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Fredoka+One&display=swap"
      rel="stylesheet"
    />
    <b-container>
      <b-card>
        <h1 class="header-title">My Simple</h1>
        <h1 class="header-title">Notebook</h1>
        <h4 class="header-subtitle">
          A markdown and localStorage featured notebook. Made with Vue.js
        </h4>
      </b-card>
    </b-container>
    <br />
  </div>
</template>

<script>
export default { name: 'Header' };
</script>

<style>
.header-title {
  font-family: 'Parisienne', cursive;
  font-size: 62px;
}
.header-subtitle {
  font-family: 'Fredoka One', cursive;
}
</style>
