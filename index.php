<!DOCTYPE html>
<html>
<head>
	<title>LIVE. DIE. RESPAWN.</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.34.7/css/bootstrap-dialog.min.css">
	<link rel="stylesheet" type="text/css" href="css/style.css?<?php echo rand(0, 1000000)?>"/>
	<link rel="stylesheet" type="text/css" href="css/index.css?<?php echo rand(0, 1000000)?>"/>
	
	<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
	<script>
	  (adsbygoogle = window.adsbygoogle || []).push({
		google_ad_client: "ca-pub-6667756349937564",
		enable_page_level_ads: true
	  });
	</script>
</head>

<body>
	<div id="homepanel">
		<h3 id='header'>LIVE. DIE. RESPAWN.</h3>
		<div id="startsingle" class="uibutton">Single Player</div>
		<div id="starthost" class="uibutton">Host Game</div>
		<p id="userid" style="display: none;"></p>
		<div id="startjoin" class="uibutton">Join Game</div>
		<input id="connectid" type="text" class="form-control" placeholder="Friends Id: " style="display: none;">
		<button id="connect" type="submit" class="btn btn-primary" style="display: none;">Connect</button>
		<p id="reportbug">Found a bug? Contact <a href="mailto:matekdesign@gmail.com">matekdesign@gmail.com</a>
	</p>
	</div>
	<div id="gamepanel" style="display: none">
		<canvas id="canvas"></canvas>
		<p class="org"> Use the left, right and up arrow keys to move. K to start again.</p>
		<p class="org info">
			<!-- Info stuff -->
		</p>
		<div id="maps">
			<h3>Maps</h3>
			<div class="mapbutton" data-map="1"><b>New World:</b> Joke</div>
			<div class="mapbutton" data-map="4"><b>Pleb:</b> Easy</div>
			<div class="mapbutton" data-map="0"><b>Arena:</b> Normal</div>
			<div class="mapbutton" data-map="5"><b>Pit:</b> Normal</div>
			<div class="mapbutton" data-map="2"><b>Korea:</b> Hard</div>
			<div class="mapbutton" data-map="6"><b>Sewers:</b> Hard</div>
			<div class="mapbutton" data-map="3"><b>Naraka:</b> Impossible</div>
		</div>
	</div>
</body>

<script src="http://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src="http://cdn.peerjs.com/0.3/peer.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap3-dialog/1.34.7/js/bootstrap-dialog.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.0.4/howler.min.js"></script>
<script type="text/javascript" src="js/clarity.js?<?php echo rand(0, 1000000)?>"></script>

<!-- Include maps -->
<script type="text/javascript" src="js/maputils.js?<?php echo rand(0, 1000000)?>"></script>
<script type="text/javascript" src="js/maps/map_arena.js?<?php echo rand(0, 1000000)?>"></script>
<script type="text/javascript" src="js/maps/map_newworld.js?<?php echo rand(0, 1000000)?>"></script>
<script type="text/javascript" src="js/maps/map_korea.js?<?php echo rand(0, 1000000)?>"></script>
<script type="text/javascript" src="js/maps/map_nakara.js?<?php echo rand(0, 1000000)?>"></script>
<script type="text/javascript" src="js/maps/map_pleb.js?<?php echo rand(0, 1000000)?>"></script>
<script type="text/javascript" src="js/maps/map_pit.js?<?php echo rand(0, 1000000)?>"></script>
<script type="text/javascript" src="js/maps/map_sewers.js?<?php echo rand(0, 1000000)?>"></script>
<!-- Include maps -->

<script type="text/javascript" src="js/game.js?<?php echo rand(0, 1000000)?>"></script>
<script type="text/javascript" src="js/index.js?<?php echo rand(0, 1000000)?>"></script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-103678018-3', 'auto');
  ga('send', 'pageview');

</script>
</html>