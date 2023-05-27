export const capitalizeFirstLetter = (string: string): string => {
  let arr: string[] = string.split(" ");
  let capitalizedWords: string[] = [];

  // eslint-disable-next-line array-callback-return
  arr.map((word: string) => {
    let first = word.charAt(0).toUpperCase();
    let last = word.substring(1);
    capitalizedWords.push(first + last);
  });

  let result: string = "";

  capitalizedWords.map((word, index) => (index === capitalizedWords.length - 1 ? (result += word) : (result += word + " ")));

  return result;
};
