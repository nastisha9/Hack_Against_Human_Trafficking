var activeTabUrl = window.location.href;

if (activeTabUrl.includes("999.md")) {
    var jobDescriptionHTML = document.querySelector('.adPage__content__description');
    var jobDescription = jobDescriptionHTML.innerText;

    var job = {
        description: jobDescription.trim()
    };

    fetch('http://localhost:5000/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(job)
    })
    .then(respose => respose.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
}