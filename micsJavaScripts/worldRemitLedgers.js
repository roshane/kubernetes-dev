function logLedgers() {
    const allLinks = Array.from(document.getElementsByTagName('a'));
    const records = allLinks.filter(link => link.hasAttribute('data-track-name'))
        .map(link => {
            let dateDiv = link.getElementsByClassName('col date')[0];
            let amountDiv = link.getElementsByClassName('col amount')[0];
            let date = dateDiv.textContent.substr(0, dateDiv.textContent.lastIndexOf('/') + 5);
            let amount = Number(amountDiv.textContent.substr(0, amountDiv.textContent.indexOf('LKR')));
            return `${date}, ${amount}`
        }).reverse();

    let csvContent = "";
    records.forEach(record => {
        csvContent += record + "\r\n";
    });


    let downLink = document.createElement('a');
    let blob = new Blob(["\ufeff", csvContent]);
    let urlObject = URL.createObjectURL(blob);
    downLink.setAttribute('href', urlObject);
    downLink.setAttribute('download', 'worldremit_records.csv');
    document.body.appendChild(downLink);
    downLink.click();
}
