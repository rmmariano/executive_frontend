<template>
  <div id="left-side-bar" class="ms3-page-content" style="height: 100%;">

    <div id="ol-sb-sidebar" class="ol-sb-sidebar ol-sb-collapsed">
        <!-- Nav tabs -->
        <div class="ol-sb-sidebar-tabs">
            <ul role="tablist">
                <li><a href="#home" role="tab"><i class="fa fa-bars"></i></a></li>
                <li><a href="#profile" role="tab"><i class="fa fa-user"></i></a></li>
                <li class="ol-sb-disabled"><a href="#messages" role="tab"><i class="fa fa-envelope"></i></a></li>
                <li><a href="https://github.com/Turbo87/sidebar-v2" role="tab" target="_blank"><i class="fa fa-github"></i></a></li>
            </ul>

            <ul role="tablist">
                <li><a href="#settings" role="tab"><i class="fa fa-gear"></i></a></li>
            </ul>
        </div>

        <!-- Tab panes -->
        <div class="ol-sb-sidebar-content">
            <div class="ol-sb-sidebar-pane" id="home">
                <h1 class="ol-sb-sidebar-header">
                    sidebar-v2
                    <span class="ol-sb-sidebar-close"><i class="fa fa-caret-left"></i></span>
                </h1>

                <p>A responsive sidebar for mapping libraries like <a href="http://leafletjs.com/">Leaflet</a> or <a href="http://openlayers.org/">OpenLayers</a>.</p>

                <p class="lorem">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

                <p class="lorem">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

                <p class="lorem">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

                <p class="lorem">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>

            <div class="ol-sb-sidebar-pane" id="home">
                <h1 class="ol-sb-sidebar-header">
                    sidebar-v2
                    <span class="ol-sb-sidebar-close"><i class="fa fa-caret-left"></i></span>
                </h1>

                <left-side-bar-layer-tree v-bind:olmap="olmap"/>
            </div>

            <div class="ol-sb-sidebar-pane" id="profile">
                <h1 class="ol-sb-sidebar-header">Profile<span class="ol-sb-sidebar-close"><i class="fa fa-caret-left"></i></span></h1>
            </div>

            <div class="ol-sb-sidebar-pane" id="messages">
                <h1 class="ol-sb-sidebar-header">Messages<span class="ol-sb-sidebar-close"><i class="fa fa-caret-left"></i></span></h1>
            </div>

            <div class="ol-sb-sidebar-pane" id="settings">
                <h1 class="ol-sb-sidebar-header">Settings<span class="ol-sb-sidebar-close"><i class="fa fa-caret-left"></i></span></h1>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import LeftSideBarLayerTree from '@/components/Explore/LeftSideBarLayerTree.vue'


/*
          Source: https://github.com/rmmariano/sidebar-v2/blob/master/js/ol3-sidebar.js
*/
import { Control } from 'ol/control.js'
import { inherits } from 'ol'

function Sidebar (settings) {

    var defaults = {
        element: null,
        position: 'left'
    }, i, child;

    this._options = Object.assign({}, defaults, settings);

    Control.call(this, {
        element: document.getElementById(this._options.element),
        target: this._options.target
    });

    // Attach .ol-sb-sidebar-left/right class
    this.element.classList.add('ol-sb-sidebar-' + this._options.position);

    // Find ol-sb-sidebar > div.ol-sb-sidebar-content
    for (i = this.element.children.length - 1; i >= 0; i--) {
        child = this.element.children[i];
        if (child.tagName === 'DIV' &&
                child.classList.contains('ol-sb-sidebar-content')) {
            this._container = child;
        }
    }

    // Find ol-sb-sidebar ul.ol-sb-sidebar-tabs > li, ol-sb-sidebar .ol-sb-sidebar-tabs > ul > li
    this._tabitems = this.element.querySelectorAll('ul.ol-sb-sidebar-tabs > li, .ol-sb-sidebar-tabs > ul > li');
    for (i = this._tabitems.length - 1; i >= 0; i--) {
        this._tabitems[i]._sidebar = this;
    }

    // Find ol-sb-sidebar > div.ol-sb-sidebar-content > div.ol-sb-sidebar-pane
    this._panes = [];
    this._closeButtons = [];
    for (i = this._container.children.length - 1; i >= 0; i--) {
        child = this._container.children[i];
        if (child.tagName == 'DIV' &&
                child.classList.contains('ol-sb-sidebar-pane')) {
            this._panes.push(child);

            var closeButtons = child.querySelectorAll('.ol-sb-sidebar-close');
            for (var j = 0, len = closeButtons.length; j < len; j++) {
                this._closeButtons.push(closeButtons[j]);
            }
        }
    }
}

inherits(Sidebar, Control)

Sidebar.prototype.setMap = function(map) {
    var i, child;

    for (i = this._tabitems.length - 1; i >= 0; i--) {
        child = this._tabitems[i];
        var sub = child.querySelector('a');
        if (sub.hasAttribute('href') && sub.getAttribute('href').slice(0,1) == '#') {
            sub.onclick = this._onClick.bind(child);
        }
    }

    for (i = this._closeButtons.length - 1; i >= 0; i--) {
        child = this._closeButtons[i];
        child.onclick = this._onCloseClick.bind(this);
    }
}

Sidebar.prototype.open = function(id) {
    var i, child;

    // hide old ol-sb-active contents and show new content
    for (i = this._panes.length - 1; i >= 0; i--) {
        child = this._panes[i];
        if (child.id == id)
            child.classList.add('ol-sb-active');
        else if (child.classList.contains('ol-sb-active'))
            child.classList.remove('ol-sb-active');
    }

    // remove old ol-sb-active highlights and set new highlight
    for (i = this._tabitems.length - 1; i >= 0; i--) {
        child = this._tabitems[i];
        if (child.querySelector('a').hash == '#' + id)
            child.classList.add('ol-sb-active');
        else if (child.classList.contains('ol-sb-active'))
            child.classList.remove('ol-sb-active');
    }

    // open ol-sb-sidebar (if necessary)
    if (this.element.classList.contains('ol-sb-collapsed')) {
        this.element.classList.remove('ol-sb-collapsed');
    }

    return this;
}

Sidebar.prototype.close = function() {
    // remove old ol-sb-active highlights
    for (var i = this._tabitems.length - 1; i >= 0; i--) {
        var child = this._tabitems[i];
        if (child.classList.contains('ol-sb-active'))
            child.classList.remove('ol-sb-active');
    }

    // close ol-sb-sidebar
    if (!this.element.classList.contains('ol-sb-collapsed')) {
        this.element.classList.add('ol-sb-collapsed');
    }

    return this;
}

Sidebar.prototype._onClick = function(evt) {
    evt.preventDefault();
    if (this.classList.contains('ol-sb-active')) {
        this._sidebar.close();
    } else if (!this.classList.contains('ol-sb-disabled')) {
        this._sidebar.open(this.querySelector('a').hash.slice(1));
    }
}

Sidebar.prototype._onCloseClick = function() {
    this.close();
}

//

export default {
  name: 'LeftSideBar2',
  props: ['olmap'],
  data () {
    return {
    }
  },
  methods: {
    initComponent: function () {
      var sidebar = new Sidebar({ element: 'ol-sb-sidebar', position: 'left' })
      this.olmap.addControl(sidebar)      
    }
  },
  mounted: function () {
    this.initComponent()
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

/*
          Source: https://github.com/rmmariano/sidebar-v2/blob/master/css/ol3-sidebar.css
*/
.ol-sb-sidebar {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  z-index: 2000;
}
.ol-sb-sidebar.ol-sb-collapsed {
  width: 40px;
}
@media (min-width: 768px) {
  .ol-sb-sidebar {
    top: 6px;
    bottom: 6px;
    transition: width 500ms;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .ol-sb-sidebar {
    width: 305px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .ol-sb-sidebar {
    width: 390px;
  }
}
@media (min-width: 1200px) {
  .ol-sb-sidebar {
    width: 460px;
  }
}

.ol-sb-sidebar-left {
  left: 0;
}
@media (min-width: 768px) {
  .ol-sb-sidebar-left {
    left: 6px;
  }
}

.ol-sb-sidebar-right {
  right: 0;
}
@media (min-width: 768px) {
  .ol-sb-sidebar-right {
    right: 6px;
  }
}

.ol-sb-sidebar-tabs {
  top: 0;
  bottom: 0;
  height: 100%;
  background-color: rgba(0, 60, 136, 0.5);
}
.ol-sb-sidebar-left .ol-sb-sidebar-tabs {
  left: 0;
}
.ol-sb-sidebar-right .ol-sb-sidebar-tabs {
  right: 0;
}
.ol-sb-sidebar-tabs, .ol-sb-sidebar-tabs > ul {
  position: absolute;
  width: 40px;
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.ol-sb-sidebar-tabs > li, .ol-sb-sidebar-tabs > ul > li {
  width: 100%;
  height: 40px;
  color: #fff;
  font-size: 12pt;
  overflow: hidden;
  transition: all 80ms;
}
.ol-sb-sidebar-tabs > li:hover, .ol-sb-sidebar-tabs > ul > li:hover {
  color: #fff;
  background-color: rgba(0, 60, 136, 0.6);
}
.ol-sb-sidebar-tabs > li.ol-sb-active, .ol-sb-sidebar-tabs > ul > li.ol-sb-active {
  color: #fff;
  background-color: #0074d9;
}
.ol-sb-sidebar-tabs > li.ol-sb-disabled, .ol-sb-sidebar-tabs > ul > li.ol-sb-disabled {
  color: rgba(255, 255, 255, 0.4);
}
.ol-sb-sidebar-tabs > li.ol-sb-disabled:hover, .ol-sb-sidebar-tabs > ul > li.ol-sb-disabled:hover {
  background: transparent;
}
.ol-sb-sidebar-tabs > li.ol-sb-disabled > a, .ol-sb-sidebar-tabs > ul > li.ol-sb-disabled > a {
  cursor: default;
}
.ol-sb-sidebar-tabs > li > a, .ol-sb-sidebar-tabs > ul > li > a {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 40px;
  color: inherit;
  text-decoration: none;
  text-align: center;
}
.ol-sb-sidebar-tabs > ul + ul {
  bottom: 0;
}

.ol-sb-sidebar-content {
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.95);
  overflow-x: hidden;
  overflow-y: auto;
}
.ol-sb-sidebar-left .ol-sb-sidebar-content {
  left: 40px;
  right: 0;
}
.ol-sb-sidebar-right .ol-sb-sidebar-content {
  left: 0;
  right: 40px;
}
.ol-sb-sidebar.ol-sb-collapsed > .ol-sb-sidebar-content {
  overflow-y: hidden;
}

.ol-sb-sidebar-pane {
  display: none;
  left: 0;
  right: 0;
  box-sizing: border-box;
  padding: 10px 20px;
}
.ol-sb-sidebar-pane.ol-sb-active {
  display: block;
}
@media (min-width: 768px) and (max-width: 991px) {
  .ol-sb-sidebar-pane {
    min-width: 265px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .ol-sb-sidebar-pane {
    min-width: 350px;
  }
}
@media (min-width: 1200px) {
  .ol-sb-sidebar-pane {
    min-width: 420px;
  }
}

.ol-sb-sidebar-header {
  margin: -10px -20px 0;
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  font-size: 14.4pt;
  color: #fff;
  background-color: #0074d9;
}
.ol-sb-sidebar-right .ol-sb-sidebar-header {
  padding-left: 40px;
}

.ol-sb-sidebar-close {
  position: absolute;
  top: 0;
  width: 40px;
  height: 40px;
  text-align: center;
  cursor: pointer;
}
.ol-sb-sidebar-left .ol-sb-sidebar-close {
  right: 0;
}
.ol-sb-sidebar-right .ol-sb-sidebar-close {
  left: 0;
}

.ol-sb-sidebar {
  background-color: rgba(255, 255, 255, 0.4);
}
@media (min-width: 768px) {
  .ol-sb-sidebar {
    border: 3px solid transparent;
    border-radius: 4px;
  }
}

.ol-sb-sidebar-left {
  border-right: 3px solid transparent;
}

.ol-sb-sidebar-right {
  border-left: 3px solid transparent;
}

.ol-sb-sidebar-tabs {
  overflow: hidden;
}
@media (min-width: 768px) {
  .ol-sb-sidebar-tabs {
    border-radius: 2px 0 0 2px;
  }
  .ol-sb-collapsed .ol-sb-sidebar-tabs {
    border-radius: 2px;
  }
}

@media (min-width: 768px) {
  .ol-sb-sidebar-content {
    border-radius: 0 2px 2px 0;
  }
}

.ol-sb-sidebar-left ~ .ol-sb-sidebar-map .ol-zoom, .ol-sb-sidebar-left ~ .ol-sb-sidebar-map .ol-scale-line {
  margin-left: 46px;
}
@media (min-width: 768px) {
  .ol-sb-sidebar-left ~ .ol-sb-sidebar-map .ol-zoom, .ol-sb-sidebar-left ~ .ol-sb-sidebar-map .ol-scale-line {
    transition: margin-left 500ms;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .ol-sb-sidebar-left ~ .ol-sb-sidebar-map .ol-zoom, .ol-sb-sidebar-left ~ .ol-sb-sidebar-map .ol-scale-line {
    margin-left: 317px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .ol-sb-sidebar-left ~ .ol-sb-sidebar-map .ol-zoom, .ol-sb-sidebar-left ~ .ol-sb-sidebar-map .ol-scale-line {
    margin-left: 402px;
  }
}
@media (min-width: 1200px) {
  .ol-sb-sidebar-left ~ .ol-sb-sidebar-map .ol-zoom, .ol-sb-sidebar-left ~ .ol-sb-sidebar-map .ol-scale-line {
    margin-left: 472px;
  }
}
@media (min-width: 768px) {
  .ol-sb-sidebar-left.ol-sb-collapsed ~ .ol-sb-sidebar-map .ol-zoom, .ol-sb-sidebar-left.ol-sb-collapsed ~ .ol-sb-sidebar-map .ol-scale-line {
    margin-left: 52px;
  }
}

.ol-sb-sidebar-right ~ .ol-sb-sidebar-map .ol-rotate,
.ol-sb-sidebar-right ~ .ol-sb-sidebar-map .ol-attribution,
.ol-sb-sidebar-right ~ .ol-sb-sidebar-map .ol-full-screen {
  margin-right: 46px;
}
@media (min-width: 768px) {
  .ol-sb-sidebar-right ~ .ol-sb-sidebar-map .ol-rotate,
.ol-sb-sidebar-right ~ .ol-sb-sidebar-map .ol-attribution,
.ol-sb-sidebar-right ~ .ol-sb-sidebar-map .ol-full-screen {
    transition: margin-right 500ms;
  }
}
@media (min-width: 768px) and (max-width: 991px) {
  .ol-sb-sidebar-right ~ .ol-sb-sidebar-map .ol-rotate,
.ol-sb-sidebar-right ~ .ol-sb-sidebar-map .ol-attribution,
.ol-sb-sidebar-right ~ .ol-sb-sidebar-map .ol-full-screen {
    margin-right: 317px;
  }
}
@media (min-width: 992px) and (max-width: 1199px) {
  .ol-sb-sidebar-right ~ .ol-sb-sidebar-map .ol-rotate,
.ol-sb-sidebar-right ~ .ol-sb-sidebar-map .ol-attribution,
.ol-sb-sidebar-right ~ .ol-sb-sidebar-map .ol-full-screen {
    margin-right: 402px;
  }
}
@media (min-width: 1200px) {
  .ol-sb-sidebar-right ~ .ol-sb-sidebar-map .ol-rotate,
.ol-sb-sidebar-right ~ .ol-sb-sidebar-map .ol-attribution,
.ol-sb-sidebar-right ~ .ol-sb-sidebar-map .ol-full-screen {
    margin-right: 472px;
  }
}
@media (min-width: 768px) {
  .ol-sb-sidebar-right.ol-sb-collapsed ~ .ol-sb-sidebar-map .ol-rotate,
.ol-sb-sidebar-right.ol-sb-collapsed ~ .ol-sb-sidebar-map .ol-attribution,
.ol-sb-sidebar-right.ol-sb-collapsed ~ .ol-sb-sidebar-map .ol-full-screen {
    margin-right: 52px;
  }
}

/*# sourceMappingURL=ol3-sidebar.css.map */
</style>
