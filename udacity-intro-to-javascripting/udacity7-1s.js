 // your code goes here
    // method definition within the object definition
    close: function() {
      if (umbrella.isOpen === true) {
          umbrella.isOpen = false;
          return "Julia closes the umbrella!";
      } else {
          return "The umbrella is already closed!";
      }
  }