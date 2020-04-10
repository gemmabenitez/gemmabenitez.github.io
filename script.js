function apearProject(id) {
    var ancestor = document.getElementById('infoProjects');
    descendents = ancestor.getElementsByTagName('*');
    
    for (i = 0; i < descendents.length; ++i) {
        e = descendents[i];
        if (e.style.display === "block") {
            e.style.display = "none";
          }
    }
    document.getElementById('infoProject'+id).style.display = 'block';
  /*  
    var icons = document.getElementById('icons');
    icon = icons.getElementsByTagName('*');
    for (j = 0; j < descendents.length; ++j) {
        p = icon[j];
        p.style.width = "100%";
        p.style.height = "100%";
    }
    document.getElementById('icon'+id).style.width = "110%";
    document.getElementById('icon'+id).style.height = "110%";
*/
  }