let countries = prompt('Укажите страну доставки');
let normalizedCountries = countries.toLowerCase();
console.log(normalizedCountries);

let price;

switch (normalizedCountries) {
  case 'китай': {
    price = '100';
    normalizedCountries = 'китай';
    console.log(
      `Доставка в ${normalizedCountries} будет стоить ${price} кредитов`,
    );
    break;
  }

  case 'чили': {
    normalizedCountries = 'чили';
    price = '250';
    console.log(
      `Доставка в ${normalizedCountries} будет стоить ${price} кредитов`,
    );
    break;
  }

  case 'австралия': {
    normalizedCountries = 'австралия';
    price = '170';
    console.log(
      `Доставка в ${normalizedCountries} будет стоить ${price} кредитов`,
    );
    break;
  }

  case 'индия': {
    normalizedCountries = 'индия';
    price = '80';
    console.log(
      `Доставка в ${normalizedCountries} будет стоить ${price} кредитов`,
    );
    break;
  }

  case 'ямайка': {
    normalizedCountries = 'ямайка';
    price = '120';
    console.log(
      `Доставка в ${normalizedCountries} будет стоить ${price} кредитов`,
    );
    break;
  }

  default:
    alert('В вашей стране доставка не доступна');
}
