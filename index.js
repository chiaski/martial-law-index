$("#filter").on("click", "a[filter]", function(){
  
  $("#filter a").removeAttr("selected");
  let what = $(this).attr("filter");
  $(this).attr("selected", "");  
  
  if (what == "all") {
    $("#_list .r").show();
  } else {
    $("#_list .r").show();
    $("#_list .r:not([type='" + what + "'])").hide();
  }

  
});

  // search

  jQuery.expr[':'].contains = function (a, i, m) {
    return jQuery(a).text().toUpperCase()
      .indexOf(m[3].toUpperCase()) >= 0;
  };

  $("#search input._search").keyup(function () {

    $("#_list .r").hide();

    $('#_list .r:contains("' + $("._search").val() + '")').show();



  });


const SPREADSHEET_ID = "1Dl-pIFxa-AXp8zC_acz5aITjXCbxJ7SkCXJ0r7pcypI";
const TAB_NAME = "INDEX";


  $(document).ready(function () {
    
    
      $.getJSON("https://opensheet.elk.sh/" + SPREADSHEET_ID + "/" + TAB_NAME, function (data) {
    
    console.log(data); 
    
     // go over everything in data and run the code below
    data.forEach(function (entry, index) {
      
      let _links = "";
      
      if(entry["mirror/0"] && entry["mirror/0"].length !== 0){   _links += `<a href='`+entry["mirror/0"]+`'> </a>`; }
      if(entry["mirror/1"] && entry["mirror/1"].length !== 0){   _links += `<a href='`+entry["mirror/1"]+`'> </a>`; }
      if(entry["mirror/2"] && entry["mirror/2"].length !== 0){  _links += `<a href='`+entry["mirror/2"]+`'> </a>`; }
      
      let d = $(`<div class='r' type='` + (entry.type).toLowerCase() + `'> 
          <a href="` + entry["mirror/0"] + `" target="_blank" class="_link">
            <div class="_title">
            <span class="_type">` + entry.type + `</span> <h2 title>`
            + entry.title +     
            `</h2></div>
            <div class="_desc"><p>` + entry.desc + `</p></div></a>
            <div class="_mirror">` + _links + `</div>
          </div>`)
        .appendTo("#_list");
      
      
//      let d = $(`
//<input type="checkbox" id="entry-`+index+`-toggle-first" class="entry-toggle first">
//<input type="checkbox" id="entry-`+index+`-toggle" class="entry-toggle after" checked="true"><section class="entry">
//<header>
//<label for="entry-`+index+`-toggle-first" class="before-first">
//<div class="_title">`+ entry.title +`</div>
//<div class="_type">`+ entry.type +`</div>
//</label>
//<label for="entry-`+index+`-toggle" class="after-first">
//<div class="_title">`+ entry.title +`</div>
//<div class="_type">`+ entry.type +`</div>
//</label>
//</header>
//<div class="entry-content">
//  <div class="description">
//  <p>`+ entry.desc +`</p>
//  </div>
//
//</div>
//</section>`)
//        .appendTo("#_list");
  
    });
        
    // update counters

    $("[counter]").text($(".r").length);
    $(".count_all").text($(".r").length);
    $(".count_gov").text($(".r[type*='gov']").length);
    $(".count_doc").text($(".r[type*='documentary']").length);
    $(".count_film").text($(".r[type*='film']").length);    $(".count_nonfiction").text($(".r[type*='nonfiction']").length);
    $(".count_literature").text($(".r[type*='literature']").length);
    $(".count_library").text($(".r[type*='library']").length);
    $(".count_news").text($(".r[type*='news']").length);
  });  



    
    // write
    

  })
