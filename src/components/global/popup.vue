<template>
  <div class="content-popup">
    <div class="card">
      <h4 class="header text-center"><slot name="header" /></h4>
      <div class="body-popup"><slot name="body" /></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.content-popup {
  background: rgba(0, 0, 0, 0.332);
  height: 100%;
  position: fixed;
  z-index: 99;
  top: 0px;
  width: 82%;
  right: 18%;
  .card {
    margin: auto;
    margin-top: 8%;
    padding: 30px;
    // height: 80vh;
    overflow: auto;
    width: 50%;
    .body-popup {
      min-height: 200px;
    }
  }
}
.title{
  font-size: 25px ;
}
@media screen and (max-width: 1500px) {
  .content-popup {
    width: 100%;
    right: 0px;
    .card {
      margin-top: 20px;
      width: 90%;
      padding:5px !important
    }
  }
}
</style>
<style lang="scss">
.content-popup .buttons {
  width: 100% !important;
  justify-content: center;

  button {
    width: 40% !important;
    margin: 30px 10px 0px !important;
    padding: 10px !important;
  }
}
</style>
