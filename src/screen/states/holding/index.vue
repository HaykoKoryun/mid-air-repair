<template>
  <div id="wrapper">
    <div id="title">
      Mid-Air Repair
    </div>
  </div>
</template>
<script>
export default
{ name: 'holding'
}
</script>
<style scoped>
#wrapper
{
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-image: url('./bg.jpg');
  background-size: cover;
}

#title
{
  font-family: 'Sigmar One', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  font-size: 100px;
  height: 164px;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
}
</style>