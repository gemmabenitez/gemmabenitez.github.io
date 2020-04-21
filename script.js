function apearProject(id) {
    var ancestor = document.getElementById('infoProjects');
    descendents = ancestor.getElementsByTagName('*');
    
    for (i = 0; i < descendents.length; ++i) {
        e = descendents[i];
        if (e.style.display === "flex") {
            e.style.display = "none";
          }
    }
    document.getElementById('infoProject'+id).style.display = 'flex';
  }

  function changepage(proj, id) {
    document.getElementById('projectText'+ proj + id).style.display = "none";
    document.getElementById('projectText'+ proj + (++id)).style.display = 'block';
  }
  function lastpage(proj, id){
    document.getElementById('projectText'+ proj + id).style.display = "none";
    document.getElementById('projectText'+ proj + ('1')).style.display = 'block';
  }

  function beforepage(proj, id) {
    document.getElementById('projectText'+ proj + id).style.display = "none";
    document.getElementById('projectText'+ proj + (--id)).style.display = 'block';
  }
  function firstpage(proj, id){
    document.getElementById('projectText'+ proj + ('1')).style.display = "none";
    document.getElementById('projectText'+ proj + id).style.display = 'block';
  }

  function nextProject(id) {
    document.getElementById('infoProject'+ id).style.display = "none";
    document.getElementById('infoProject'+ (++id)).style.display = 'block';
  }
  function lastProject(id){
    document.getElementById('infoProject'+ id).style.display = "none";
    document.getElementById('infoProject'+ ('1')).style.display = 'block';
  }

  function beforeProject(id) {
    document.getElementById('infoProject'+ id).style.display = "none";
    document.getElementById('infoProject'+ (--id)).style.display = 'block';
  }
  function firstProject(id){
    document.getElementById('infoProject'+ ('1')).style.display = "none";
    document.getElementById('infoProject'+ id).style.display = 'block';
  }