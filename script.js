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

  function changepage(id) {
    document.getElementById('projectText'+ id).style.display = "none";
    document.getElementById('projectText'+ (++id)).style.display = 'block';
  }
  function lastpage(id){
    document.getElementById('projectText'+ id).style.display = "none";
    document.getElementById('projectText'+ ('1')).style.display = 'block';
  }

  function beforepage(id) {
    document.getElementById('projectText'+ id).style.display = "none";
    document.getElementById('projectText'+ (--id)).style.display = 'block';
  }
  function firstpage(id){
    document.getElementById('projectText'+ ('1')).style.display = "none";
    document.getElementById('projectText'+ id).style.display = 'block';
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