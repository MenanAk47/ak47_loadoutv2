

function open(data) {

var myvar = '<div class="clearfix" id="page"><!-- group -->'+
'   <div class="clearfix grpelem" id="pu272"><!-- column -->'+
'    <div class="colelem" id="u272"><!-- simple frame --></div>'+
'    <div class="rgba-background clearfix colelem" id="u94"><!-- group -->'+
'     <div class="clearfix grpelem" id="pu251-4"><!-- column -->'+
'      <div class="clearfix colelem" id="u251-4"><!-- content -->'+
'       <p>CLIP</p>'+
'      </div>'+
'      <div class="museBGSize colelem" id="u223" style="opacity:1.0; background:rgba(255, 255, 255, 0.8) url(img/' + data.clip + '.png) no-repeat center; background-size:cover;"><!-- simple frame --></div>'+
'      <button class="clearfix colelem ripple" id="u227"><!-- group -->'+
'       <div class="clearfix grpelem" id="u230-4"><!-- content -->'+
'        <p>REMOVE</p>'+
'       </div>'+
'      </button>'+
'     </div>'+
'     <div class="clearfix grpelem" id="pu254-4"><!-- column -->'+
'      <div class="clearfix colelem" id="u254-4"><!-- content -->'+
'       <p>COMPENSATOR</p>'+
'      </div>'+
'      <div class="rgba-background colelem" id="u278" style="opacity:1.0; background:rgba(255, 255, 255, 0.8) url(img/' + data.comp + '.png) no-repeat center; background-size:cover;"><!-- simple frame --></div>'+
'      <button class="clearfix colelem ripple" id="u234"><!-- group -->'+
'       <div class="clearfix grpelem" id="u235-4"><!-- content -->'+
'        <p>REMOVE</p>'+
'       </div>'+
'      </button>'+
'     </div>'+
'     <div class="clearfix grpelem" id="pu257-4"><!-- column -->'+
'      <div class="clearfix colelem" id="u257-4"><!-- content -->'+
'       <p>SUPPRESSOR</p>'+
'      </div>'+
'      <div class="rgba-background colelem" id="u281" style="opacity:1.0; background:rgba(255, 255, 255, 0.8) url(img/' + data.supp + '.png) no-repeat center; background-size:cover;"><!-- simple frame --></div>'+
'      <button class="clearfix colelem ripple" id="u243"><!-- group -->'+
'       <div class="clearfix grpelem" id="u244-4"><!-- content -->'+
'        <p>REMOVE</p>'+
'       </div>'+
'      </button>'+
'     </div>'+
'     <div class="clearfix grpelem" id="pu263-4"><!-- column -->'+
'      <div class="clearfix colelem" id="u263-4"><!-- content -->'+
'       <p>SCOPE</p>'+
'      </div>'+
'      <div class="rgba-background colelem" id="u284" style="opacity:1.0; background:rgba(255, 255, 255, 0.8) url(img/' + data.scope + '.png) no-repeat center; background-size:cover;"><!-- simple frame --></div>'+
'      <button class="clearfix colelem ripple" id="u261"><!-- group -->'+
'       <div class="clearfix grpelem" id="u262-4"><!-- content -->'+
'        <p>REMOVE</p>'+
'       </div>'+
'      </button>'+
'     </div>'+
'     <div class="clearfix grpelem" id="pu357-4"><!-- column -->'+
'      <div class="clearfix colelem" id="u357-4"><!-- content -->'+
'       <p>GRIP</p>'+
'      </div>'+
'      <div class="rgba-background colelem" id="u381" style="opacity:1.0; background:rgba(255, 255, 255, 0.8) url(img/' + data.grip + '.png) no-repeat center; background-size:cover;"><!-- simple frame --></div>'+
'      <button class="clearfix colelem ripple" id="u343"><!-- group -->'+
'       <div class="clearfix grpelem" id="u344-4"><!-- content -->'+
'        <p>REMOVE</p>'+
'       </div>'+
'      </button>'+
'     </div>'+
'     <div class="clearfix grpelem" id="pu457-4"><!-- column -->'+
'      <div class="clearfix colelem" id="u457-4"><!-- content -->'+
'       <p>FLASHLIGHT</p>'+
'      </div>'+
'      <div class="rgba-background colelem" id="u481" style="opacity:1.0; background:rgba(255, 255, 255, 0.8) url(img/' + data.flsh + '.png) no-repeat center; background-size:cover;"><!-- simple frame --></div>'+
'      <button class="clearfix colelem ripple" id="u443"><!-- group -->'+
'       <div class="clearfix grpelem" id="u444-4"><!-- content -->'+
'        <p>REMOVE</p>'+
'       </div>'+
'      </button>'+
'     </div>'+
'     <div class="clearfix grpelem" id="pu557-4"><!-- column -->'+
'      <div class="clearfix colelem" id="u557-4"><!-- content -->'+
'       <p>BARREL</p>'+
'      </div>'+
'      <div class="rgba-background colelem" id="u581" style="opacity:1.0; background:rgba(255, 255, 255, 0.8) url(img/' + data.barrel + '.png) no-repeat center; background-size:cover;"><!-- simple frame --></div>'+
'      <button class="clearfix colelem ripple" id="u543"><!-- group -->'+
'       <div class="clearfix grpelem" id="u544-4"><!-- content -->'+
'        <p>REMOVE</p>'+
'       </div>'+
'      </button>'+
'     </div>'+
'     <div class="clearfix grpelem" id="pu657-4"><!-- column -->'+
'      <div class="clearfix colelem" id="u657-4"><!-- content -->'+
'       <p>SKIN</p>'+
'      </div>'+
'      <div class="rgba-background colelem" id="u681" style="opacity:1.0; background:rgba(255, 255, 255, 0.8) url(img/' + data.skin + '.png) no-repeat center; background-size:cover;"><!-- simple frame --></div>'+
'      <button class="clearfix colelem ripple" id="u643"><!-- group -->'+
'       <div class="clearfix grpelem" id="u644-4"><!-- content -->'+
'        <p>REMOVE</p>'+
'       </div>'+
'      </button>'+
'     </div>'+
'    </div>'+
'   </div>'+
'   <div class="clearfix grpelem" id="pu312"><!-- column -->'+
'    <div class="colelem" id="u312"><!-- simple frame --></div>'+
'    <div class="rgba-background clearfix colelem" id="u311"><!-- column -->'+
'     <div class="clearfix colelem" id="u319-4"><!-- content -->'+
'      <p>'+ data.name +'</p>'+
'     </div>'+
'     <div class="rgba-background colelem" id="u320" style="opacity:1.0; background:rgba(255, 255, 255, 0.8) url(img/' + data.weapon + '.png) no-repeat center center; background-size:cover;"><!-- simple frame --></div>'+
'     <button class="clearfix colelem rippleBlue" id="u317"><!-- group -->'+
'      <div class="clearfix grpelem" id="u318-4"><!-- content -->'+
'       <p>REMOVE</p>'+
'      </div>'+
'     </button>'+
'    </div>'+
'   </div>'+
'   <div class="verticalspacer" data-offset-top="0" data-content-above-spacer="1078" data-content-below-spacer="1078"></div>'+
'  </div>';
    



$("#main_container").html(myvar).fadeOut(0).fadeIn(1000);

}

$(document).keyup(function(e) {
    if (e.keyCode === 27) {
        $("#main_container").html("");
        $.post('https://ak47_loadoutv2/close', JSON.stringify({}));
    }
});

window.addEventListener('message', function(event) {
    var edata = event.data;
    if (edata.type == "open") {
        open(edata);
    } else if (edata.type == "close") {
        $("#main_container").html("");
        $("#main_container").css({
            display: 'none'
        });
    }
    $("#u227").click(function() {
        $("#u223").css('background', "rgba(255, 255, 255, 0.8)");
        $.post('https://ak47_loadoutv2/remove', JSON.stringify({
            command: 'r_clip'
        }));
    });

    $("#u234").click(function() {
        $("#u278").css('background', "rgba(255, 255, 255, 0.8)");
        $.post('https://ak47_loadoutv2/remove', JSON.stringify({
            command: 'r_comp'
        }));
    });

    $("#u243").click(function() {
        $("#u281").css('background', "rgba(255, 255, 255, 0.8)");
        $.post('https://ak47_loadoutv2/remove', JSON.stringify({
            command: 'r_supp'
        }));
    });

    $("#u261").click(function() {
        $("#u284").css('background', "rgba(255, 255, 255, 0.8)");
        $.post('https://ak47_loadoutv2/remove', JSON.stringify({
            command: 'r_scope'
        }));
    });

    $("#u343").click(function() {
        $("#u381").css('background', "rgba(255, 255, 255, 0.8)");
        $.post('https://ak47_loadoutv2/remove', JSON.stringify({
            command: 'r_grip'
        }));
    });

    $("#u317").click(function() {
        $("#u320").css('background', "rgba(255, 255, 255, 0.8)");
        $.post('https://ak47_loadoutv2/remove', JSON.stringify({
            command: 'r_remove'
        }));
    });

    $("#u443").click(function() {
        $("#u481").css('background', "rgba(255, 255, 255, 0.8)");
        $.post('https://ak47_loadoutv2/remove', JSON.stringify({
            command: 'r_flsh'
        }));
    });

    $("#u543").click(function() {
        $("#u581").css('background', "rgba(255, 255, 255, 0.8)");
        $.post('https://ak47_loadoutv2/remove', JSON.stringify({
            command: 'r_barrel'
        }));
    });

    $("#u643").click(function() {
        $("#u681").css('background', "rgba(255, 255, 255, 0.8)");
        $.post('https://ak47_loadoutv2/remove', JSON.stringify({
            command: 'r_skin'
        }));
    });
});