<template>
  <div id="layer_tree">

    <!-- layer tree -->
    <b-card-group deck>
      <b-card title="Layers:" header-tag="header" footer-tag="footer">
        <!-- <h6 slot="header" class="mb-0">My header slot</h6> -->
        <b-card-text>

          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitches">
            <label class="custom-control-label" for="customSwitches">OpenStreetMap</label>
          </div>
          <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="customSwitches1" checked="">
            <label class="custom-control-label" for="customSwitches1">Google Satellite</label>
          </div>

          </b-card-text>
        <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
        <!-- <em slot="footer"> my footer Slot</em> -->
      </b-card>
    </b-card-group>

  </div>
</template>

<script>
</script>

<style>
#layer_tree {
  width: 200px;
  /* position: absolute; */
  /* overflow: auto; */
}
</style>
