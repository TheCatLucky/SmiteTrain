let process = 1;
$(".start").on("click" , function count() {
  if (process == 1){
    let counter = 0;
    setInterval(() => {
    console.log(counter);
    counter++;
    console.log(process);
    }, 500); 
  }
  else return;
  })


$(".stop").on("click" , function () {
  process = 0;
  console.log(process);
  return process;
})