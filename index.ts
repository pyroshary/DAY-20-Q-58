//making a program which will calculate average of given nmber in console

function averagescore(...score: number[]): number {
  let total = score.reduce((sum, score) => sum + score, 0);
  return total/score.length
};

console.log(averagescore(40,50,6,60,80,));
