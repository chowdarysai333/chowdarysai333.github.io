function encodeInput(input) {
    const encoded = document.createElement('div');
    encoded.innerText = input;
    return encoded.innerHTML;
}

var shown = false;

function showhideEmail() {
    if (shown) {
        document.getElementById('email').innerHTML = "Show my email";
        shown = false;
    } else {
        var emailAddress = "uppuvi" + "@" + "mail.uc.edu";
        var encodedEmail = encodeInput(emailAddress);

        var emailLink = document.createElement('a');
        emailLink.href = 'mailto:' + encodedEmail;
        emailLink.appendChild(document.createTextNode(encodedEmail));

        document.getElementById('email').innerHTML = ''; // Clear existing content
        document.getElementById('email').appendChild(emailLink);

        shown = true;
    }
}
