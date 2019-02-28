<template>
  <div id="explore_main">

    <!-- layer tree -->
    <!-- <ExploreLayerTree v-if="showExploreLayerTree" v-bind:parentMap="map"/> -->



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
            <div class="col-md-1">
                <button role="button" class="btn btn-danger" data-toggle="collapse" data-target="#button01">
                    01
                </button>
                <button role="button" class="btn btn-danger" data-toggle="collapse" data-target="#button02">
                    02
                </button>
                <button role="button" class="btn btn-danger" data-toggle="collapse" data-target="#button03">
                    03
                </button>
                <button role="button" class="btn btn-danger" data-toggle="collapse" data-target="#button04">
                    04
                </button>
            </div>
            <!-- content -->
            <div class="col-md-6">
                <div id="button01" class="collapse width"> <!-- you can put ' class="show" ' to show the box automatically-->
                    <div style="width:400px;">
                        <p>1</p>
                        <p>Works smoother when element has defined width. Egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
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

    <!-- barra da carol -->
    
    <!--
    <div id="sidebar" class="sidebar collapsed">
      <div class="sidebar-tabs">
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
      </div>
      -->

    <!--
      <div class="sidebar-content">

        <!- - {% include 'html/search.html' %} - ->
        <div class="sidebar-pane" id="home" style="padding-right: 0px; padding-bottom: 0px">
          <h1 class="sidebar-header">Catalog Search<span class="sidebar-close"><i class="fa fa-caret-left"></i></span></h1>
          <div class="container-fluid nopadding-left" style="margin-top: 10px">
            <form role="form" id="searchForm">
                <div class="row ">
                    <div class="col-sm-12">
                        <label for="BoundingBox">Bounding Box:</label>
                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div class="col-sm-6 justify-content-md-center">
                        <div class="form-group">
                            <input class="form-control form-control-sm" type="text" placeholder="North (+90)" name="north"
                                id="bboxn">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <input class="form-control form-control-sm" type="text" placeholder="West (-180)" name="west"
                                id="bboxw">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <input class="form-control form-control-sm" type="text" placeholder="East (+180)" name="east"
                                id="bboxe">
                        </div>
                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <input class="form-control form-control-sm" type="text" placeholder="South (-90)" name="south"
                                id="bboxs">
                        </div>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label for="path">Path:</label>
                            <input class="form-control form-control-sm" type="number" placeholder="220" name="path" id="path">
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="form-group">
                            <label for="row">Row:</label>
                            <input class="form-control form-control-sm" type="number" placeholder="63" name="row" id="row">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="band">Band:</label>
                            <select class="custom-select" name="band" id="bandSelect">
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="start">From:</label>
                            <input class="form-control form-control-sm datepicker-start" type="text" placeholder="2015-01-01"
                                name="start" id="startPicker" data-bind="">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="end">To:</label>
                            <input class="form-control form-control-sm datepicker-end" type="text" placeholder="2015-12-30"
                                name="end" id="endPicker" data-bind="">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="start">Type:</label>
                            <select class="custom-select" name="type" id="typeSelect">
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="radiometricProcessing">Radiometric Processing:</label>
                            <select class="custom-select" name="radiometricProcessing" id="radiometricProcessingSelect">
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="count">Count:</label>
                            <input class="form-control form-control-sm" type="number" value="10" name="count" id="count">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="startIndex">Start Index:</label>
                            <input class="form-control form-control-sm" type="number" placeholder="1" name="startIndex" id="startIndex">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="collectionId">Collection ID:</label>
                            <select class="custom-select" name="dataset" id="collectionIdSelect">
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-group">
                            <label for="cloud">Cloud Coverage:</label>
                            <input class="form-control form-control-sm" type="number" value="100" name="cloud" id="cloud">
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <label for="providers">Providers:</label>
                        <div class="row" style="margin-bottom: 10px">
                            <div class="col-sm-12" id="providersCheck"></div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <button type="submit" class="btn btn-primary base-color" name="search" id="searchSubmit">Search
                            &nbsp;<span class="fa fa-search"></span></button>
                    </div>
                </div>
            </form>
            <br/>
            <div class="row">
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="satellitePoints">Satellite:</label>
                        <select class="custom-select" name="satellitePoints" id="satellitePoints">
                            <option value=""></option>
                            <option value="L8">L8</option>
                            <option value="LC8">LC8</option>
                            <option value="S2">S2</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <button class="btn btn-primary base-color" id="getgcps">Extract Points &nbsp;<i class="fa fa-map-marker"></i></button>
                    <button class="btn btn-primary base-color" id="getwrss">Show WRSS &nbsp;<i class="fa fa-th"></i></button>
                </div>
            </div>
          </div>
          <div class="container-fluid nopadding-left" style="margin-top: 15px">
            <div class="accordion" id="accordion-results">
            </div>
          </div>
        </div>

        <!- - {% include 'html/executive.html' %} - ->
        <div class="sidebar-pane" id="maestro">
          <h1 class="sidebar-header">Production Manager<span class="sidebar-close"><i class="fa fa-caret-left"></i></span></h1>
          <div class="container-fluid nopadding-left" style="margin-top: 10px">
              <form role="form" id="execForm">
                  <div class="row">
                      <div class="col-sm-6">
                          <div class="form-group">
                              <label for="satellite">Satellite:</label>
                              <div class="row" style="margin-bottom: 10px">
                                  <div class="col-sm-12" id="satellite">
                                      <div class="form-check ">
                                          <input class="form-check-input" type="checkbox" value="" id="CBERS4" checked>
                                          <label class="form-check-label" for="CBERS4">CBERS4</label>
                                      </div>
                                      <div class="form-check">
                                          <input class="form-check-input" type="checkbox" value="" id="LANDSAT5" checked>
                                          <label class="form-check-label" for="LANDSAT5">LANDSAT5</label>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-sm-6">
                          <div class="form-group">
                              <label for="instrument">Instrument:</label>
                              <div class="row" style="margin-bottom: 10px">
                                  <div class="col-sm-12" id="instrument">
                                      <div class="form-check">
                                          <input class="form-check-input" type="checkbox" value="" id="AWFI" checked>
                                          <label class="form-check-label" for="AWFI">AWFI</label>
                                      </div>
                                      <div class="form-check">
                                          <input class="form-check-input" type="checkbox" value="" id="MUX" checked>
                                          <label class="form-check-label" for="MUX">MUX</label>
                                      </div>
                                      <div class="form-check">
                                          <input class="form-check-input" type="checkbox" value="" id="PAN5M" checked>
                                          <label class="form-check-label" for="PAN5M">PAN5M</label>
                                      </div>
                                      <div class="form-check">
                                          <input class="form-check-input" type="checkbox" value="" id="PAN10M" checked>
                                          <label class="form-check-label" for="PAN10M">PAN10M</label>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-sm-6">
                          <div class="form-group">
                              <label for="start">From:</label>
                              <input class="form-control form-control-sm datepicker-start" type="text" placeholder="2015-01-01"
                                  name="start" id="startPicker2" data-bind="2">
                          </div>
                      </div>
                      <div class="col-sm-6">
                          <div class="form-group">
                              <label for="end">To:</label>
                              <input class="form-control form-control-sm datepicker-end" type="text" placeholder="2015-12-30"
                                  name="end" id="endPicker2" data-bind="2">
                          </div>
                      </div>
                      <div class="col-sm-12">
                          <div class="form-group">
                              <label for="drd">DRD:</label>
                              <div class="input-group mb-3">
                                  <input class="form-control form-control-sm" type="text" placeholder="" name="drd" id="drd">
                                  <div class="input-group-append">
                                      <button class="btn btn-outline-secondary" type="button" id="showdrds"><i
                                              class="fa fa-search" aria-hidden="true"></i></button>
                                  </div>
                              </div>
                          </div>
                          <div class="collapse" id="collapseTree">
                              <div class="col-sm-12" style="overflow-x: scroll;height: 60vh;">
                                  <div id="jstreeContainer"></div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row" style="margin-top: 10px">
                      <div class="col">
                          <button type="submit" class="btn btn-primary base-color" name="exec" id="execSubmit">Start&nbsp;<span
                                  class="fa fa-play"></span></button>
                      </div>
                  </div>
              </form>
          </div>
        </div>

        <!- - {% include 'html/statistics.html' %} - ->
        <div class="sidebar-pane" id="statistics">
          <h1 class="sidebar-header">Statistics<span class="sidebar-close"><i class="fa fa-caret-left"></i></span></h1>
          <div class="container-fluid nopadding-left" style="margin-top: 10px">
              <h3>Under Development :)</h3>
          </div>
        </div>

        <!- - {% include 'html/notifications.html' %} - ->
        <div class="sidebar-pane" id="notifications">
          <h1 class="sidebar-header">Notifications<span class="sidebar-close"><i class="fa fa-caret-left"></i></span></h1>
          <div class="row">
              <div class="col-sm-12">
                  <div id="notifyList" class="container-fluid nopadding" style="margin-top: 5px"></div>
              </div>
          </div>
        </div>

        <!- - {% include 'html/download.html' %} - ->
        <div class="sidebar-pane" id="download">
          <h1 class="sidebar-header">Download<span class="sidebar-close"><i class="fa fa-caret-left"></i></span></h1>
          <div class="container-fluid nopadding-left" style="margin-top: 10px">
              <h3>Under Development :)</h3>
          </div>
        </div>

        <!- - login - ->
        <div class="sidebar-pane" id="login">
        <!- - {% if current_user.is_authenticated %}
            {% include 'html/user_profile.html' %}
        {% else %}
            {% include 'security/login_user.html' %}
        {% endif %} - ->
        </div>

        <!- - {% include 'html/settings.html' %} - ->
        <div class="sidebar-pane" id="settings">
          <h1 class="sidebar-header">Settings<span class="sidebar-close"><i class="fa fa-caret-left"></i></span></h1>
          <div class="container-fluid nopadding-left" style="margin-top: 10px">
            <h3>Under Development :)</h3>
          </div>
        </div>

      </div>
    </div>

    <div id="modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"
        style="z-index:3000">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header modal-header-download">
                    <h5 class="modal-title">Downloads</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body" id="modalBody"></div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary base-color">Save Download Links</button>
                </div>
            </div>
        </div>
    </div>
    -->

    <!-- barra da carol  / -->

    <!-- <div class="wrapper">
        <!- - Sidebar Holder - ->
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>Bootstrap Sidebar</h3>
            </div>

            <ul class="list-unstyled components">
                <p>Dummy Heading</p>
                <li class="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
                    <ul class="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a href="#">Home 1</a>
                        </li>
                        <li>
                            <a href="#">Home 2</a>
                        </li>
                        <li>
                            <a href="#">Home 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">About</a>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                        <li>
                            <a href="#">Page 1</a>
                        </li>
                        <li>
                            <a href="#">Page 2</a>
                        </li>
                        <li>
                            <a href="#">Page 3</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Portfolio</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>

            <ul class="list-unstyled CTAs">
                <li>
                    <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Download source</a>
                </li>
                <li>
                    <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Back to article</a>
                </li>
            </ul>
        </nav>

        <!- - Page Content Holder - ->
        <div id="content">

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">

                    <button type="button" id="sidebarCollapse" class="navbar-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav ml-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Page</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <h2>Collapsible Sidebar Using Bootstrap 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div class="line"></div>

            <h2>Lorem Ipsum Dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div class="line"></div>

            <h2>Lorem Ipsum Dolor</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <div class="line"></div>

            <h3>Lorem Ipsum Dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </div> -->

    <!--  -->

    <!-- <div class="alert alert-primary" role="alert">
      Um simples alerta primary. Olha só!
    </div> -->

    <!--  -->

    <!-- <div>
      <b-button v-b-toggle.collapse1 variant="primary">Toggle Collapse</b-button>
      <b-collapse id="collapse1" class="mt-2">
        <b-card>

          <p class="card-text">Collapse contents Here</p>

          <b-button v-b-toggle.collapse1_inner size="sm">Toggle Inner Collapse</b-button>
          <b-collapse id="collapse1_inner" class="mt-2">
            <b-card>Hello!</b-card>
          </b-collapse>

        </b-card>
      </b-collapse>
    </div> -->

    <!-- <div>
      <b-card no-body>
        <b-tabs pills card vertical>
          <b-tab title="Tab 1" active>Tab Contents 1</b-tab>
          <b-tab title="Tab 2">Tab Contents 2</b-tab>
          <b-tab title="Tab 3">Tab Contents 3</b-tab>
        </b-tabs>
      </b-card>
    </div> -->

    <!--  -->

    <!-- <div id="left-vertical-menu">
      <b-nav vertical class="w-25">
        <b-nav-item active>Active</b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
    </div> -->

    <!--  -->

    <div id="layer-tree2">

      <!-- layer tree -->
      <b-card-group id="id1" deck>
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

    <!-- where the map is ploted -->
    <div id="map" class="map"></div>

  </div>
</template>

<script>
import $ from 'jquery'

import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'

import Overlay from 'ol/Overlay.js'
import { fromLonLat } from 'ol/proj.js'

// @ is an alias to /src
import { layerGroupBaseMap } from '@/assets/js/Explorer/Layer'
// import ExploreLayerTree from '@/components/Explore/LayerTree.vue'

export default {
  name: 'Explore',

  data () {
    return {
      map: {},
      showExploreLayerTree: false
    }
  },
  methods: {
    initMap: function () {
      // eslint-disable-next-line
      this.map = new Map({
        target: 'map',
        layers: [
          layerGroupBaseMap
        ],
        view: new View({
          projection: 'EPSG:4326',
          center: [0, 0],
          zoom: 5
        })
      })

      // console.log('\n\n this.map: ', this.map, '\n\n')

      // var layerTree = new Overlay({
      //   element: document.getElementById('layer-tree'),
      //   position: fromLonLat([0, 0], 'EPSG:4326', 'EPSG:3857')
      // })

      // this.map.addOverlay(layerTree)

      // this.showExploreLayerTree = true
      // console.log('\n>>> Showing the layer tree \n')
    }
  },
  mounted: function () {
    this.initMap()
  }
  // mounted () {
  //   this.$nextTick(function () {
  //     initMap()
  //   })
  // }
  // components: {
  //   ExploreLayerTree
  // }
}

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});
</script>

<style>
/* these CSS do the horizontal collapse works */
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

/* these CSS are mine */
#map {
  height: calc(100vh - 60px); /* 100% of the viewport height - navbar height */
}
#left-vertical-menu{
  width: 100px;
  /* position: absolute; */
}
#id1{
  position: absolute;
}
#layer-tree2 {
  width: 200px;
  position: relative;
  /* overflow: auto; */
}

/*  */


/* 
/ *
    DEMO STYLE
* /
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";


body {
    font-family: 'Poppins', sans-serif;
    background: #fafafa;
}

p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.1em;
    font-weight: 300;
    line-height: 1.7em;
    color: #999;
}

a, a:hover, a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

.navbar {
    padding: 15px 10px;
    background: #fff;
    border: none;
    border-radius: 0;
    margin-bottom: 40px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
}

.line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
}

/ * ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- * /

.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
    perspective: 1500px;
}


#sidebar {
    min-width: 250px;
    max-width: 250px;
    background: #7386D5;
    color: #fff;
    transition: all 0.6s cubic-bezier(0.945, 0.020, 0.270, 0.665);
    transform-origin: bottom left;
}

#sidebar.active {
    margin-left: -250px;
    transform: rotateY(100deg);
}

#sidebar .sidebar-header {
    padding: 20px;
    background: #6d7fcc;
}

#sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
}

#sidebar ul p {
    color: #fff;
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
}
#sidebar ul li a:hover {
    color: #7386D5;
    background: #fff;
}

#sidebar ul li.active > a, a[aria-expanded="true"] {
    color: #fff;
    background: #6d7fcc;
}


a[data-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #6d7fcc;
}

ul.CTAs {
    padding: 20px;
}

ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
}

a.download {
    background: #fff;
    color: #7386D5;
}

a.article, a.article:hover {
    background: #6d7fcc !important;
    color: #fff !important;
}



/ * ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- * /
#content {
    width: 100%;
    padding: 20px;
    min-height: 100vh;
    transition: all 0.3s;
}

#sidebarCollapse {
    width: 40px;
    height: 40px;
    background: #f5f5f5;
    cursor: pointer;
}

#sidebarCollapse span {
    width: 80%;
    height: 2px;
    margin: 0 auto;
    display: block;
    background: #555;
    transition: all 0.8s cubic-bezier(0.810, -0.330, 0.345, 1.375);
    transition-delay: 0.2s;
}

#sidebarCollapse span:first-of-type {
    transform: rotate(45deg) translate(2px, 2px);
}
#sidebarCollapse span:nth-of-type(2) {
    opacity: 0;
}
#sidebarCollapse span:last-of-type {
    transform: rotate(-45deg) translate(1px, -1px);
}


#sidebarCollapse.active span {
    transform: none;
    opacity: 1;
    margin: 5px auto;
}


/ * ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- * /
@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
        transform: rotateY(90deg);
    }
    #sidebar.active {
        margin-left: 0;
        transform: none;
    }
    #sidebarCollapse span:first-of-type,
    #sidebarCollapse span:nth-of-type(2),
    #sidebarCollapse span:last-of-type {
        transform: none;
        opacity: 1;
        margin: 5px auto;
    }
    #sidebarCollapse.active span {
        margin: 0 auto;
    }
    #sidebarCollapse.active span:first-of-type {
        transform: rotate(45deg) translate(2px, 2px);
    }
    #sidebarCollapse.active span:nth-of-type(2) {
        opacity: 0;
    }
    #sidebarCollapse.active span:last-of-type {
        transform: rotate(-45deg) translate(1px, -1px);
    }

} */

</style>
