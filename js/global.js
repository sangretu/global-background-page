var version = '0.1.33.20190208';

console.log('global.js v' + version + ' loaded.');

$(document).ready(function()
{
  //loadjQuery();
  dispatch();
});

function log(message) {
  console.log("CUSTOM : " + message);
};

function dispatch()
{
  var hostname = window.location.hostname;
  
  if (/dominion.isotropic.org/.exec(hostname)) styleDominion();
  if (/reactoridle.com/.exec(hostname)) styleReactorIdle();
  if (/gamepedia.com/.exec(hostname)) styleGamepedia();
  if (/cnn.com/.exec(hostname)) styleCnn();
  if (/wikia.com/.exec(hostname)) styleWikia();
  if (/www.amazon.com/.exec(hostname)) styleAmazon();
  // work in progress
  if (/kongregate.com/.exec(hostname)) styleKongregate();
  
  // Because I forget everything
  remindMe();
}

function remindMe()
{
  var reminders = '';
  reminders += 'Submit receipt for chromebook' + '\n';
  //reminders += '' + '\n';
  alert(reminders);
}

function styleCnn()
{
  log("customizing for cnn.com.");
  
  // TODO : this is out of date and it removes the tech section
  // article recommendations
  $('.OUTBRAIN').remove();
  // social media links
  $('.m-share').remove();
  $('.ad--epic').remove();
  $('#partner-zone').remove();
}

function styleGamepedia()
{
  log("customizing for gamepedia.com.");
  
  $('.atflb').remove();
  $('.btflb').remove();
  $('.atfmrec').remove();
  $('iframe').remove();
  $('.cc_banner-wrapper').remove();
  $('#siderail').remove();
  $('footer').remove();
  $('#zergnet_container').remove();
  $('#p-sitePromos').remove();
  $('#bodyContent').css('width','100%');
  $('#siderail_minecraft_gamepedia').remove();
  $('[id*="siderail"]')[0].remove();
  $('#atflb').remove();
  
  setTimeout(function()
  {
    $('[id^=ad-wrapper]').remove();
  },
  3500
  );
}

function styleWikia()
{
  log("customizing for wikia.com.");
  
  $('script').remove();
  $('iframe').remove();
  $('#WikiaHeader').remove();
  $('#WikiaTopAds').remove();
  $('#TOP_LEADERBOARD_AB').remove();
  $('#WikiHeader').remove();
  $('.header-tally').remove();
  $('.WikiaRail').remove();
  $('#WikiaBar').remove();
  $('.wikia-ad').remove();
  $('.global-footer').remove();
  $('#WikiaArticleFooter').remove();
  $('#WikiaFooter').remove();
  $('#WikiaNotifications').remove();
}

function styleAmazon()
{
  log("customizing for amazon.com.");
  
  // create "hide" button
  var $hide = $('<a class="btnHide" style="position:absolute; right:0.5em; z-index:1; background-color:white; padding: 0 0.2em;">hide</a>');
  $hide.click(function(e){e.currentTarget.parentNode.parentNode.remove();});
  
  // add to results
  $('.s-item-container').prepend($hide);
}

function styleDominion()
{
  $('body').css('background-color' , 'black');
  $('body').css('color'            , 'green');
  
  // NOTE: not only is the delay visible (try a check/timeout loop), but
  // css rules are applied to individual elements, leaving newly created
  // elements to have their own settings (e.g. avatars).
  
  setTimeout(function()
  {
    $('table#player_table').hide();
    $('img').hide();
    $('.automatch').css('height','1em');
    $('.automatch').css('overflow','auto');
    $('select').css('background-color','black');
    $('input').css('background-color','black');
    $('#amveto>option:eq(2)').attr('selected', true);
    $('#autotracker>option:eq(2)').attr('selected', true);
    $('#seek_2p').prop('checked',true);
    $('#seek_3p').prop('checked',true);
  },
  500
  );
}

function styleReactorIdle()
{  
  log("customizing for reactoridle.com.");
  
  $('#topCommercial').remove();
  $('#rightCommercial').remove();
}

function styleKongregate()
{  
  log("customizing for kongregate.com.");
  
  $('.game_upper_horizontal_ad').remove();
  $('.game_lower_horizontal_ad').remove();
  /*  
  $('#gamespotlight').remove();
  
  setTimeout(function()
  {
    $('.ad').remove();
  },
  500
  );
  
  //$('#subwrap').remove();
  //$('.game_more_games').remove();
  */
}

// adapted from http://www.learningjquery.com/2009/04/better-stronger-safer-jquerify-bookmarklet
// NOTE: injecting this into the page apparently can cause issues, possibly by replacing a different jquery version?
function loadjQuery()
{
  // more or less stolen form jquery core and adapted by paul irish
  function getScript(url, success)
  {
    var script = document.createElement('script');
    script.src = url;
    var head   = document.getElementsByTagName('head')[0];
    var done   = false;
    
    // Attach handlers for all browsers
    script.onload = script.onreadystatechange = function()
    {
      if ( !done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') )
      {
        done=true;
        success();
        script.onload = script.onreadystatechange = null;
        head.removeChild(script);
      }
    };

    head.appendChild(script);
  }

  getScript('https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js',function()
  {
    console.log('jQuery v' + jQuery.fn.jquery + ' injected.');
  });

};