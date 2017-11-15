<html>
<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
.navbar {
    overflow: hidden;
    background-color: blue;
    font-family: Arial;
}

.navbar a {
    float: left;
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.dropdown {
    float: left;
    overflow: hidden;
}

.dropdown .dropbtn {
    font-size: 16px;    
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
}

.navbar a:hover, .dropdown:hover .dropbtn {
    background-color: red;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
}

.dropdown-content a:hover {
    background-color: pink;
}

.dropdown:hover .dropdown-content {
    display: block;
}
</style>
</head>
<body>

<div class="navbar">
  <div class="dropdown">
    <button class="dropbtn">Info 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Employment</a>
      <a href="#">Manager</a>
      <a href="#">Access</a>
    </div>
  </div> 
	<div class="dropdown">
    <button class="dropbtn">Rides 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Map</a>
      <a href="#">Attractions</a>
      <a href="#">Most Common</a>
    </div>
  </div> 
  <div class="dropdown">
    <button class="dropbtn">Prices
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Season Pass</a>
      <a href="#">Tickets</a>
      <a href="#">Portraits</a>
    </div>
  </div> 
</div>

<h3></h3>
<p></p>

</body>
</html>                            
