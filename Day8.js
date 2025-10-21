function generateCardNumber() {
  let card = [];
  for (let i = 1; i < 20; i++) {
    if (i % 5 == 0) {
      card.push(" ");
    } else {
      card.push(Math.floor(Math.random() * 10));
    }
  }
  return card;
}
function generateCardNumberWithDash() {
  let card = [];
  for (let i = 1; i < 20; i++) {
    if (i % 5 == 0) {
      card.push("-");
    } else {
      card.push(Math.floor(Math.random() * 10));
    }
  }
  return card;
}
function generateCardNumberWithUnderscore() {
  let card = [];
  for (let i = 1; i < 20; i++) {
    if (i % 5 == 0) {
      card.push("_");
    } else {
      card.push(Math.floor(Math.random() * 10));
    }
  }
  return card;
}
function printStar(card) {
  for (let i = 0; i < 19; i++) {
    if (i < 15) {
      card[i] = "*";
      if (i == 4 || i == 9 || i == 14) {
        card[i] = " ";
      }
    }
  }
  return card;
}
function printStarWithDash(card) {
  for (let i = 0; i < 19; i++) {
    if (i < 15) {
      card[i] = "*";
      if (i == 4 || i == 9 || i == 14) {
        card[i] = "-";
      }
    }
  }
  return card;
}
function printStarWithUnderscore(card) {
  for (let i = 0; i < 19; i++) {
    if (i < 15) {
      card[i] = "*";
      if (i == 4 || i == 9 || i == 14) {
        card[i] = "_";
      }
    }
  }
  return card;
}
function readCardNumber(card) {
  let sum = "";
  for (let i = 0; i < card.length; i++) {
    card[i].toString().split("");
    sum += card[i];
  }
  return sum;
}
function main() {
  let cardNum = generateCardNumber();
  let finalCard = readCardNumber(cardNum);
  console.log("This is the card number");
  console.log(finalCard+"\n");

  let hideCard = printStar(cardNum);
  let finalHideCard = readCardNumber(hideCard);
  console.log("This is the hide card number with stars");
  console.log(finalHideCard+"\n");

  let cardNumWithDash = generateCardNumberWithDash();
  let finalCardWithDash = readCardNumber(cardNumWithDash);
  console.log("This is the card number with dash");
  console.log(finalCardWithDash+"\n");

  let hideCardWithDash = printStarWithDash(cardNumWithDash);
  let finalHideCardWithDash = readCardNumber(hideCardWithDash);
  console.log("This is the hide card number with stars & dash");
  console.log(finalHideCardWithDash+"\n");

  let cardNumWithUnderscore = generateCardNumberWithUnderscore();
  let finalCardWithUnderscore = readCardNumber(cardNumWithUnderscore);
  console.log("This is the card number with underscore");
  console.log(finalCardWithUnderscore+"\n");

  let hideCardWithUnderscore = printStarWithUnderscore(cardNumWithUnderscore);
  let finalHideCardWithUnderscore = readCardNumber(hideCardWithUnderscore);
  console.log("This is the hide card number with stars & underscore");
  console.log(finalHideCardWithUnderscore+"\n");
}
main();