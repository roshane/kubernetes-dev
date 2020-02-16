function getLinks(titleString){
    const baseURL = window.location.href;
    const allLinks = Array.from(document.getElementsByTagName('a'));
    console.log(allLinks);
    const results = allLinks
    .filter(link => String(link.getAttribute('title')).indexOf(titleString)> 0)
    .map(link =>`${baseURL}/${link.getAttribute('href')}`);
    const downloadableString = results.reduce((prev,current)=>`${prev}\n${current}`, "data:text/plain;charset=utf-8,");
    
    let downLink = document.createElement('a');
    let blob = new Blob(["\ufeff", downloadableString]);
    let urlObject = URL.createObjectURL(blob);
    downLink.setAttribute('href', urlObject);
    downLink.setAttribute('download', 'links.text');
    document.body.appendChild(downLink);
    downLink.click();
}