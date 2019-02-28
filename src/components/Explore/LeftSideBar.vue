<template>
  <div id="left-side-bar">
    <!-- minha barra -->
    <div class="container">
      <div class="row">
        <!-- <div class="sidebar-tabs">
                <ul role="tablist">
                    <li><a href="#home" role="tab"><i class="fa fa-search"></i></a></li>
                    <li class="disabled"><a href="#download" role="tab"><i class="fa fa-download"></i></a></li>
                    <li><a href="#maestro" role="tab"><i class="fa fa-calendar"></i></a></li>
                    <li class="disabled"><a href="#statistic" role="tab"><i class="fa fa-area-chart"></i></a></li>
                </ul>
                <ul role="tablist">
                    <li><a href="#notifications" role="tab"><i class="fa fa-envelope-o"></i></a></li>
                    <li><a href="#login" role="tab"><i class="fa fa-user"></i></a></li>
                    <!- - {% if current_user.has_role('admin') %} - ->
                    <li><a href="#settings" role="tab"><i class="fa fa-gear"></i></a></li>
                    <!- - {% endif %} - ->
                </ul>
            </div> -->

        <!-- tags -->
        <div class="list-group">
          <button role="button" class="btn list-group-item-light" data-toggle="collapse" data-target="#button-left-side-bar-layer-tree">
            01
          </button>
          <button role="button" class="btn list-group-item-light" data-toggle="collapse" data-target="#button02">
            02
          </button>
          <button role="button" class="btn list-group-item-light" data-toggle="collapse" data-target="#button03">
            03
          </button>
          <button role="button" class="btn list-group-item-light" data-toggle="collapse" data-target="#button04">
            04
          </button>
        </div>
        <!-- content -->
        <div class="col-md-6">
          <div id="button-left-side-bar-layer-tree" class="collapse width"> <!-- you can put ' class="show" ' to show the box automatically-->
            <div style="width:400px;">
              <left-side-bar-layer-tree/>
            </div>
          </div>
          <div id="button02" class="collapse width">
            <div style="width:400px;">
              <p>2</p>
              <p>Works smoother when element has defined width. Egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </div>
          </div>
          <div id="button03" class="collapse width">
            <div style="width:400px;">
              <p>3</p>
              <p>Works smoother when element has defined width. Egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </div>
          </div>
          <div id="button04" class="collapse width">
            <div style="width:400px;">
              <p>4</p>
              <p>Works smoother when element has defined width. Egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </div>
          </div>        
        </div>

        <!-- vertical collapse -->
        <!-- 
        <div class="col-md-6">
            <button role="button" class="btn btn-danger" data-toggle="collapse" data-target="#demo">
                horizontal collapse
            </button>
            <div id="demo" class="collapse show width">
                <div style="width:400px;">
                    <p>Works smoother when element has defined width. Egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <button role="button" class=" btn btn-danger" data-toggle="collapse" data-target="#demo2">
                vertical collapse
            </button>
            <div id="demo2" class="collapse show">
                <div>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                </div>
            </div>
        </div>
        -->

      </div>
    </div>
  </div>
</template>

<script>
import LeftSideBarLayerTree from '@/components/Explore/LeftSideBarLayerTree.vue'

export default {
  name: 'LeftSideBar',

  data () {
    return {
    }
  },
  components: {
    LeftSideBarLayerTree
  }
}
</script>

<style>
#left-side-bar{
  position: absolute;
  z-index: 1500;
}
.collapse {
  visibility: hidden;
}
.collapse.show {
  visibility: visible;
  display: block;
}
.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition-property: height, visibility;
  transition-property: height, visibility;
  -webkit-transition-duration: 0.35s;
  transition-duration: 0.35s;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
}
.collapsing.width {
  -webkit-transition-property: width, visibility;
  transition-property: width, visibility;
  width: 0;
  height: auto;
}
</style>
