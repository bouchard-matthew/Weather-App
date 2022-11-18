export const capitalizeFirstLetter = (string: string): string => {
  let arr: string[] = string.split(" ");
  let capitalizedWords: string[] = [];

  arr.map((word: string) => {
    let first = word.charAt(0).toUpperCase();
    let last = word.substring(1);
    capitalizedWords.push(first + last);
  });

  let result: string = "";

  capitalizedWords.map((word, index) => {
    return index === capitalizedWords.length - 1 ? (result += word) : (result += word + " ");
  });

  return result;
};
