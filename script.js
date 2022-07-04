const submitButton = document.getElementById('submitButton');
const radioButtons = document.querySelectorAll('input[type="radio"]');
const paragraph = document.getElementById('paragraph');
const rateingNumber = document.querySelector('.rateing-number');
const heading = document.getElementById('heading');
const imageContainer = document.querySelector('.icon-star');
const result = document.getElementById('result');

// console.log(submitButton);
// console.log(radioButtons);
// for (const radioButton of radioButtons) console.log(radioButton);

submitButton.addEventListener('click', () => {
    let rating;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            console.log('checked');
            rating = radioButton.value;
            break;
        }
    }
    if (rating === undefined) {
        alert("Please select a rateing");
    }
    else {
        rateingNumber.style.display = 'none';
        submitButton.style.display = 'none';

        imageContainer.innerHTML = '<img src="./images/illustration-thank-you.svg" alt="thank you">';
        imageContainer.style.backgroundColor = 'transparent';
        imageContainer.style.padding = 0;
        imageContainer.style.width = '100%';
        imageContainer.style.height = 'auto';

        result.innerText = `You selected ${rating} out of 5`;
        result.style.display = 'block';
        result.style.textAlign = 'center';
        result.style.color = 'var(--Orange)';
        result.style.padding = '.5rem';
        result.style.backgroundColor = 'var(--Very-Dark-Blue)';
        result.style.borderRadius = '1rem';
        result.style.marginBottom = '2rem';

        heading.style.textAlign = 'center';
        heading.innerText = 'Thank you!';
        heading.style.marginBottom = '.5rem';

        paragraph.style.textAlign = 'center';
        paragraph.innerText = `We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!`;

        console.log(rating);
    }
})