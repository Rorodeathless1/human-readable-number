module.exports = function toReadable(number) {
  const ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];

  if (number === 0) {
    return 'zero';
  }

  function convertToWords(num) {
    if (num < 10) {
      return ones[num];
    }

    if (num < 20) {
      return teens[num - 10];
    }

    if (num < 100) {
      const remainder = num % 10;
      return `${tens[Math.floor(num / 10)]}${remainder !== 0 ? ` ${ones[remainder]}` : ''}`;
    }

    if (num < 1000) {
      const hundreds = Math.floor(num / 100);
      const remainder = num % 100;
      const hundredsWord = `${ones[hundreds]} hundred`;

      if (remainder === 0) {
        return hundredsWord;
      }
      return `${hundredsWord} ${convertToWords(remainder)}`;
    }

    return '';
  }

  return convertToWords(number);
};
