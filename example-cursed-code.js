// Example cursed code to test Kiroweenscare

function fetchUserData() {
  const unusedVariable = "I'm a ghost!";
  const apiKey = "secret123";
  
  // This is some old code we don't use anymore
  // function oldFunction() {
  //   return "zombie code";
  // }
  
  fetch('https://api.example.com/users')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log("Processing...");
      console.log("Done!");
      
      // Using dangerous eval
      eval('alert("demon!")');
      
      // Magic numbers everywhere
      if (data.age > 18 && data.score > 100 && data.level > 50) {
        document.getElementById('result').innerHTML = data.name;
      }
    });
  
  // Event listener without cleanup
  document.addEventListener('click', () => {
    console.log('clicked');
  });
  
  setInterval(() => {
    console.log('tick');
  }, 1000);
}

function emptyFunction() {}

function anotherEmpty() {}
