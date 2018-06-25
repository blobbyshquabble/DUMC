document.write('\
    <!-- navigation bar -->\
    <!--dropdown data-->\
    <ul id="dropdown1" class="dropdown-content">\
        <li><a href="meets.html">Meets</a></li>\
        <li><a href="exec.html">Exec</a></li>\
        <li><a href="bouldering.html">Bouldering Team</a></li>\
    </ul>\
    <ul id="dropdown2" class="dropdown-content">\
        <li><a href="meets.html">Meets</a></li>\
        <li><a href="exec.html">Exec</a></li>\
        <li><a href="bouldering.html">Bouldering Team</a></li>\
    </ul>\
    <!-- actual navbar-->\
    <nav>\
        <div class="nav-wrapper purple darken-2">\
            <a href="index.html" class="brand-logo"><img src="images/bwtight.png" height="55" ></a>\
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>\
            <ul class="right hide-on-med-and-down">\
                <li><a href="join.html">Join</a></li>\
                <!-- Dropdown Trigger -->\
                <li><a id=dropdown-trigger1 class="dropdown-trigger" href="#!" data-target="dropdown1">Club</a></li>\
                <li><a href="https://www.facebook.com/groups/DUMC.Forum/">Facebook</a></li>\
            </ul>\
            <!-- mobile navigation side bar -->\
            <ul class="sidenav" id="mobile-demo">\
                <li><a href="join.html">Join</a></li>\
                <!-- Dropdown Trigger -->\
                <li><a id=dropdown-trigger2 class="dropdown-trigger" href="#!" data-target="dropdown2">Club</a></li>\
                <li><a href="https://www.facebook.com/groups/DUMC.Forum/">Facebook</a></li>\
            </ul>\
        </div>\
    </nav>\
    <br></br>\
');
