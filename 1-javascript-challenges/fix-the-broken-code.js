const rollTheDice = () => {
    // Math.random() gives us a random number from 0 up to, but not including, 1
    // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
    // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
      let die1 = Math.random() * 6 + 1
      let die2 = Math.random() * 6 + 1
      return Math.floor(die1) + Math.floor(die2)
  
  }
  
  