({
  plugins: ['jsdom-quokka-plugin'],
});

// Convert Bin to Dec
class Binary {
  static isBinary(bin) {
    if (bin === '') return false;

    for (let bit of bin) {
      if (bit < 0 && bit > 1) {
        return false;
      }
    }
    return true;
  }

  static convertBinToDec(bin) {
    let dec = 0;
    for (let i = bin.length - 1; i >= 0; i--) {
      let bit = bin[i];
      dec += bit * Math.pow(2, bin.length - i - 1);
    }
    return dec;
  }
}

class UI {
  static clearField() {
    document.getElementById('binary').value = '';
  }

  static displayMessage(message, modify) {
    // DOM Element
    const body = document.body;
    const fieldset = document.querySelector('fieldset');

    // Create Message
    let p = document.createElement('p');
    p.innerHTML = message;
    p.classList.add('message', `message--${modify}`);

    // Insert the message
    body.insertBefore(p, fieldset);

    // TimeOut for 3 second
    setTimeout(() => {
      p.remove();
    }, 3000);
  }
}
// DOM Element

const button = document.querySelector('button');
const result = document.getElementById('result');

// Event: Convert Bin to Dec
button.addEventListener('click', (e) => {
  // Take the value from the input
  const bin = document.getElementById('binary').value;
  // Main
  // Validate
  if (Binary.isBinary(bin)) {
    // Covert & Display
    let dec = Binary.convertBinToDec(bin);
    result.textContent = dec;
    // Display message
    UI.displayMessage('Convert Successful', 'success');
  } else {
    // Display message
    UI.displayMessage('Fail to Convert', 'fail');
  }

  // Clear Field
  UI.clearField();
});
